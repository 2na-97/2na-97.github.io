"""Build the four glass word outlines from the site's OFL-licensed font.

Development only: pip install fonttools==4.60.1, then run this file.
The browser needs only the small generated JS module, not a font parser.
"""
import json
from pathlib import Path

from fontTools.pens.basePen import BasePen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
font = TTFont(ROOT / "assets/fonts/space-grotesk-700.ttf")
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()
upm = font["head"].unitsPerEm


class OutlinePen(BasePen):
    def __init__(self, offset):
        super().__init__(glyphs)
        self.offset = offset
        self.commands = []

    def add(self, command, *points):
        self.commands.append([command, *[
            round(value, 5)
            for x, y in points
            for value in ((x + self.offset) / upm, y / upm)
        ]])

    def _moveTo(self, p): self.add("M", p)
    def _lineTo(self, p): self.add("L", p)
    def _qCurveToOne(self, a, b): self.add("Q", a, b)
    def _curveToOne(self, a, b, c): self.add("C", a, b, c)
    def _closePath(self): self.commands.append(["Z"])
    def _endPath(self): self.commands.append(["Z"])


labels = ["Vision–Language", "World Models", "Agentic Systems", "Explainable AI"]
outlines = []
for label in labels:
    offset = 0
    paths = []
    for letter in label:
        glyph = glyphs[cmap[ord(letter)]]
        pen = OutlinePen(offset)
        glyph.draw(pen)
        if pen.commands:
            paths.append(pen.commands)
        offset += glyph.width - 0.02 * upm
    outlines.append({"label": label, "paths": paths})

(ROOT / "assets/js/keyword-outlines.js").write_text(
    "// Generated from Space Grotesk Bold; see assets/fonts/spacegrotesk-OFL.txt.\n"
    "// Rebuild with tools/build_keyword_outlines.py.\nexport const keywordOutlines = "
    + json.dumps(outlines, ensure_ascii=False, separators=(",", ":")) + ";\n"
)
print(f"Generated {len(outlines)} keyword outlines.")
