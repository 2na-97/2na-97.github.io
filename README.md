# Inha Kang — research portfolio

A static, dependency-free personal website hosted at https://2na-97.github.io.
HTML, CSS and JavaScript are served directly by GitHub Pages. No build step is required.

## Pages and maintenance

- `index.html`: introduction, latest news, selected research, experience and recognition.
- `publications.html`: the complete 10-publication archive, searchable by keyword and topic.
  Add new papers as `.publication` articles inside the relevant `[data-year-group]`.
  Update their `data-search` and `data-topics` attributes and the static counts in both pages.
- `projects.html`: five earlier research and engineering projects.
- `assets/css/style.css`: shared styles, responsive layouts and reduced-motion/print support.
- `assets/js/site.js`: progressively enhanced mobile navigation and archive filtering.
- `assets/files/InhaKang_CV.pdf`: supplied September 2026 CV. The October news appears on the website;
  the PDF remains the supplied document.

To preview locally, run `python3 -m http.server 4173` in this directory and open
http://localhost:4173. Check the three pages on desktop and mobile before pushing.

## Content and design provenance

The October 2026 revision uses the supplied September 2026 CV and the owner's October updates:
QIFK 2026 Finalist (October 29) and NeurIPS 2026 Top Reviewer (October 11).
Private registration links and administrative email details are not site content.
A manuscript in preparation is explicitly separate from the publication count.

Paper results are linked to their sources:

- [Negation-aware VLMs, ICLR 2026](https://arxiv.org/abs/2510.13232): up to +10.8 NMS-AP on OVDEval negation.
- [Air-quality forecasting, CVPR 2026](https://arxiv.org/abs/2511.22169): 47.3% lower false-alarm rate versus SFT alone.
- [Mid-layer representation analysis](https://arxiv.org/abs/2509.23098): training-free spatial grounding.

Design research included [Rauno Freiberg](https://rauno.me/),
[Pentagram](https://www.pentagram.com/) and [Brittany Chiang](https://brittanychiang.com/).
The resulting art direction uses bright editorial color, oversized typography, a personal photograph,
research figures, and original conceptual SVG project illustrations. No reference-site code or artwork
was copied. Original JPEGs are retained; pages use optimized WebP versions.

Space Grotesk and DM Sans are self-hosted. Their SIL Open Font Licenses are in `assets/fonts/`.
