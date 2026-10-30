# Inha Kang — research portfolio

A static personal website hosted at https://2na-97.github.io.
HTML, CSS and JavaScript are served directly by GitHub Pages. No build step is required. The optional homepage 3D scene uses a pinned, self-hosted copy of Three.js.

## Pages and maintenance

- `index.html`: introduction, latest news, selected research, experience and recognition.
- `publications.html`: the complete 10-publication archive, searchable by keyword and topic.
  Add new papers as `.publication` articles inside the relevant `[data-year-group]`.
  Update their `data-search` and `data-topics` attributes and the static counts in both pages.
- `projects.html`: five earlier research and engineering projects.
- `assets/css/style.css`: shared styles, responsive layouts and reduced-motion/print support.
- `assets/js/site.js`: progressively enhanced mobile navigation and archive filtering.
- `assets/css/motion.css` and `assets/js/motion.js`: soft sculptural surfaces, scroll-linked
  parallax, one-time reveals, pointer tilt, and the optional curiosity burst. The fixed motion
  control remembers a visitor's choice; the device's reduced-motion preference always wins.
- `assets/files/Inha_Kang_CV_20261030.pdf`: redesigned four-page October 30 CV, linked from every page.
  `InhaKang_CV.pdf` is kept as an identical current alias for existing external links.
- `assets/files/Inha_Kang_Research_Resume_20261030.pdf`: matching two-page research resume, linked from About.

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

## October 30 motion and PLUME update

The second design pass references [Dennis Snellenberg](https://dennissnellenberg.com/)
for scroll-led typography and [Lusion](https://lusion.co/) for sculptural, interactive composition.
It uses original code and artwork, with native scrolling and no animation-library dependency.
Scroll updates are requested only when needed. Content and links remain available without JavaScript;
keyboard focus reveals any offscreen entrance content, and print/reduced-motion modes stay static.

PLUME links to the owner's [public Hugging Face dataset](https://huggingface.co/datasets/2na-97/PLUME)
from the homepage feature and the separate manuscript entry in the research archive.
The manuscript title follows the supplied October draft: *Direct multiday particulate forecasting
with physically conditioned correction and ordered uncertainty over East Asia*.
The dataset is released; the paper archive is forthcoming and is not counted among the 10 publications.
The supplied draft PDF is reference material only and is not published by this repository.

`assets/img/puff-flower.svg` is an original vector relief. `assets/img/plume-atmosphere.webp`
is original conceptual artwork generated with the built-in imagegen tool, optimized to WebP;
it is decorative, not scientific output or an actual forecast. Generation prompt:

> Use case: stylized-concept. Asset type: atmospheric editorial artwork for a personal AI research portfolio's PLUME air-quality dataset feature. Create a sophisticated dreamy wide 3D still life, landscape 3:2. A large floating luminous translucent pearlescent glass sphere, subtle fine longitude-latitude etched lines on it, nested in voluminous soft white cumulus clouds. A small glossy pale peach orb and one small butter yellow sphere float nearby. Powder blue sky fading gently to lavender with soft sunlight, a slightly surreal fashion-editorial sensibility, tactile puffiness, smooth glossy materials and carefully crafted volumetric light. Sphere placed centrally in the upper middle, white clouds cluster along the lower third and sides, ample blue sky around it. Elegant and playful with strong visual hierarchy, not childish. A tiny electric blue glint for contrast. Not a data visualization, purely conceptual atmospheric artwork. No text, lettering, logos, borders, watermark, map labels or UI.

## October 31 · A research universe in motion

The visual direction takes cues from [Apple’s product storytelling](https://www.apple.com/airpods-pro/)
and [Lusion’s sculptural web work](https://lusion.co/): clear type, generous spacing, soft studio light
and a deliberate scroll sequence. All scene models and animation code are original.

- `assets/css/experience.css`: refined typography, glass navigation, colorful surfaces, responsive hero
  and shared page styling.
- `assets/js/lab-scene.js`: original WebGL research toys: a robot, vision eye, orbital globe, cloud,
  language bubble, star, data-token stack and ring. These are decorative metaphors, not research outputs.
- Scrolling gently lowers and rotates the toys; **Make it rain** releases a capped pool of 22 objects
  with gravity, floor bounces and a timed cleanup. Existing scientific content stays in HTML.
- The scene honors the existing Motion control and device reduced-motion setting. It stops rendering
  while offscreen or in a background tab, caps pixel density on mobile, and reuses particle geometry.
- If WebGL is unavailable, original CSS/SVG artwork remains visible. No external textures or models,
  runtime CDN requests, analytics, or new backend are used. The rest of the website works without JS.
- `assets/vendor/three/`: Three.js **0.181.2** from the official npm package, including its MIT license.
  Only the two production modules, RoundedBoxGeometry and RoomEnvironment are included. The two
  add-on imports point to the local module; the production modules are otherwise unmodified.

QA for this revision includes desktop/mobile rendering, menu and archive search, animation pause,
scene fallback, local links, and browser error inspection.


## October 31 · Bubble camera and a paper playground

- The original 3D set now includes a mint camera, a neural network and a glass prism (11 models total).
  Toys respond to taps with a spring and turn; the camera instead emits soap bubbles. Orbit mode,
  moving orbital beads, breathing atmosphere and pointer response add motion around the reading area.
- Every camera click advances the bubble color palette. Bubbles collide, settle into a pile, and can
  be popped individually or all at once. The pool is capped at 64 on desktop / 32 on mobile and reuses
  materials and geometry. Toy rain is capped at 26 / 16. No visitor camera or microphone is accessed.
- `assets/js/wonder.js` drives the paper collage: drag and drop, spring settling, responsive typography,
  a two-sided paper turn, and Daydream / Studio settings. Keyboard users can move the focused paper
  with arrow keys, turn it with Enter/Space, and reset with Home/Escape or the visible Reset button.
- `assets/img/curiosity-landscape.webp` is original generated conceptual artwork: a lavender-rock
  waterfall, turquoise reflective water, a peach sky and iridescent orbs. It is imagined scenery,
  not a photograph of an actual place. The image was generated with the built-in imagegen tool.
- `assets/img/inha-cutout.webp` is an alpha cutout derived from the owner's supplied photograph using
  imagegen background extraction. The requested edit preserves the person's pose, clothes, croissant
  and identity while removing the outdoor background. The original photograph remains in the repo.
  Torn paper, fiber grain, translucent tape, fold shading and shadows are authored in CSS; they are
  separate from the portrait asset. Both generated assets are optimized locally to WebP with alpha
  preserved on the cutout. No stock-photo license or hotlinked third-party image is required.
- New motion follows the existing device preference and Motion control; the collage remains usable
  with instantaneous state changes when motion is off. Ambient CSS animations pause offscreen,
  and the 3D scene pauses offscreen or in a background tab.

The current full CV and two-page resume are the verified October 30 exports; their content includes
QIFK 2026 Finalist, NeurIPS 2026 Top Reviewer and PLUME's dataset link. All site CV links use the dated
filename to avoid retaining a stale September PDF in a browser cache.

Validation for this pass: desktop plus 390px / 320px layouts; direct camera clicks, changing bubble
palettes, stacking, individual/all popping and pool caps; orbit and rain; pointer dragging, responsive
lettering, keyboard movement, paper flipping and reset; reduced-motion and WebGL-unavailable paths;
local assets/fragments; current PDF page counts and byte-for-byte export comparison. JavaScript syntax,
CSS parsing and Git whitespace checks pass. Original scientific content and archive behavior are retained.
