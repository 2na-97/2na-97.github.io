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
- `assets/img/curiosity-ocean-orbit.webp` is original generated conceptual artwork: a cobalt ocean,
  a lilac sky and a pearl-chrome planet with a thin orbit ring. It replaces the earlier waterfall
  background with a more spacious editorial composition. It is imagined scenery, not a photograph
  of an actual place. The image was generated with the built-in imagegen tool (`stylized-concept`),
  then encoded locally as a 1536 × 1024 WebP (approximately 160 KB). Desktop and mobile have separate
  focal points and light scrims to keep the headline legible while preserving the water's color.
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

### Ocean / Orbit · generation prompt

Mode: built-in imagegen, new opaque image; no reference image. Final asset:
`assets/img/curiosity-ocean-orbit.webp`. The original generated PNG is kept outside the repository.

```text
Create a stunning art-directed editorial background for an experimental designer/researcher portfolio. Landscape 3:2 composition, 1536 by 1024. Theme: OCEAN / ORBIT — a serene surreal alien ocean rendered like a luxury contemporary 3D design campaign, playful yet impeccably restrained. The bottom 44 percent is an endless deep electric-cobalt ocean with smooth liquid-metal ripples and glimmering cyan, ultramarine and rose reflections. A razor-clean horizon. Above is a luminous spacious periwinkle-to-pale-lilac sky, slightly rosy near the horizon. In the UPPER RIGHT, a single large pearl-chrome sphere with a very thin tilted metallic orbit ring, like a sculptural Saturn, partly cropped by the top/right edge. Its surface is polished iridescent silver, lavender and icy blue, physically believable studio lighting. One much smaller clear glass orb close to the water in the LOWER LEFT, with a pink caustic, for asymmetrical balance. A subtle crescent moon in the far distance. Beautiful refined smooth gradients and hyperreal crisp water reflections, delicate subtle film grain. Restrained gallery-poster composition, surreal photoreal CGI, distinctive sophisticated art direction, strong bold cobalt color field against the airy sky, premium materiality. CRITICAL composition: leave the entire upper-left 52 percent clean, bright and almost empty for dark headline text to be added later; put all large sculptural details toward the upper-right. Keep the lower-right fairly simple, since a separate paper portrait will be placed over it. No mountains, no rocks, no waterfalls, no trees, no islands, no people, no typography, no letters, no logos, no landscape fantasy illustration, no dense stars, no nebula, no visual clutter. This is a designer's abstract ocean-and-space art print, not a generic science-fiction wallpaper.
```

### Blue sapphire · wordmark asset

The star beside `ik` is now an original sapphire render with transparent alpha on all three pages.
`assets/img/brand-sapphire.webp` is the 192px source for the 30–34px header icon (approximately 19 KB).
`assets/img/favicon-sapphire.png` is its 64px browser-tab counterpart. Hover and keyboard focus add a
small lift and turn, with transitions disabled by the site's Motion control and reduced-motion preference.
Both exports are resized from the same generated image; no stock artwork or external image requests.

Mode: built-in imagegen, new transparent image. Final prompt:

```text
Use case: stylized-concept. Asset type: transparent 3D gemstone icon for a designer's personal portfolio wordmark. Create ONE exquisite electric-blue sapphire gemstone, isolated and centered on a completely transparent background. A bold softly elongated cushion/emerald cut with a clipped-corner octagonal silhouette, seen at a three-quarter front angle and tilted clockwise about 15 degrees. Large clean geometric facets, substantial dimensional depth, vividly saturated royal-blue and cobalt glass, cyan internal refractions, a few restrained icy-white edge highlights and darker deep ultramarine facet planes. The gem itself should be elegant, sculptural and immediately readable at only 32 pixels tall, so use a small number of broad clear facets rather than many tiny busy facets. High-end photoreal product CGI with crisp polished edges, balanced studio lighting and beautiful refractive depth. Fill about 84 percent of the square canvas with the one gem. No pedestal, no ground plane, no jewelry setting, no gold, no ring, no other objects, no text, no star shape, no floating sparkle symbols, no cartoon outline, no background, no cast shadow outside the object. Output genuine transparent alpha.
```

### One opening scene

The Ocean / Orbit image and interactive paper portrait now open the homepage together with the 3D
research toys. The original About collage was moved rather than duplicated. The hero image and
portrait load eagerly; the left introduction stays readable over a local light scrim. On phones the
portrait follows the introduction in the same scene, with the camera beside it. Toy placement leaves
room for the face and headline, including a matching lightweight fallback when WebGL is unavailable.
The existing keyboard, drag, page-turn, scene-switch and motion controls remain available, and dragging
the paper gives the hero title a small response. The About anchor now leads directly to the research bio.

### Readable play, typographic curiosity, and paper insights

The opening scene is capped at 1320px and centered on wide displays. Introduction text is larger,
controls remain opaque during scrolling, and the portrait stays close to the introduction. A fixed,
non-interactive atmosphere interpolates through five light palettes as native scrolling progresses.

- Automatic motion starts on in a new tab session. An explicit pause lasts for that session; old
  persistent pause values no longer silently disable new visits. Device reduced-motion preferences
  still stop ambient motion. Manual camera/bubble, rain and orbit actions remain available independently.
  In static mode their simulation renders only for a bounded play interval (or while Orbit is on).
- A high-contrast play dock, a clickable camera tag, a paper-drag cue and distinct icon invitations
  expose the available actions. Invitations repeat only a few times and stop after interaction where
  applicable. Four accessible research links now use the glass letterforms described below.
- `type-play.js` adds a cursor-proximity lens to the name. Nearby glyphs grow and
  lift through transforms, preserving line layout. Full phrases remain accessible names. It uses
  coalesced pointer frames, resets on leave/scroll, and disables on coarse pointers, paused motion
  and reduced-motion devices.
- The four selected research figures now turn over to a short insight/method/contribution summary.
  Conference badges are larger on the homepage and in the full archive. Important phrases use bold
  Space Grotesk; the reverse-side headlines pair DM Sans with an editorial serif. Read-paper links
  remain outside the flipping surfaces. Enter/Space flips and Escape returns to the figure; the
  inactive face is hidden from assistive technology. Without JS, figures and paper links remain usable.
- The research planet responds to clicks with a new palette, a spring, an orbit turn and ten bounded
  particles. Repeated clicks cancel previous effects. Reduced motion uses an instantaneous palette
  change. No camera access, external runtime, backend or tracking is involved.

Contribution summaries were checked against the authors' primary abstracts:
[spatial grounding](https://arxiv.org/abs/2509.23098),
[negation](https://arxiv.org/abs/2510.13232),
[air-quality GRPO](https://arxiv.org/abs/2511.22169), and
[geometric distillation](https://arxiv.org/abs/2506.09883).
Existing CV-confirmed conference labels are preserved. Quantitative callouts retain the reported
benchmark and baseline, and the forecasting paper remains distinct from the separate PLUME feature.

Validation covers 1920px, 1280px, 768px, 390px and 320px layouts; cursor scaling; direct camera and
button actions with automatic motion on/off; reduced-motion JS and no-WebGL fixtures; finite rain
cleanup; paper flip and keyboard behavior; planet palette changes and particle cleanup; archive search;
local references, JavaScript syntax, browser errors and Git whitespace.


### Glass letterforms and default Orbit

- `glass-words.js` creates actual beveled, extruded Space Grotesk letter geometry for
  Vision–Language, World Models, Agentic Systems and Explainable AI. Transparent physical
  materials, tinted edges, reflections and slight rotation reveal depth without card backgrounds.
- The four words share the camera/toys' orbit clock. Separate elliptical paths keep the main
  introduction clear; phones use smaller paths and two rows below the portrait. Hover or keyboard
  focus holds a word's position and enlarges it, with an aligned HTML link to the research directions.
- Orbit is on at first load when automatic motion is allowed. Its pressed state is visible in the
  play dock. Visitors can turn Orbit off independently; Motion off and reduced-motion preferences
  stop ambient animation, and resuming Motion restores Orbit. Manual play remains available.
- `keyword-outlines.js` contains only the four required phrases, generated from the existing local
  OFL-licensed `space-grotesk-700.ttf` (see `assets/fonts/spacegrotesk-OFL.txt`). To regenerate,
  install `fonttools==4.60.1` in a development environment and run
  `python tools/build_keyword_outlines.py`. No runtime font parser or external asset request is added.
- Native HTML text links remain visible if WebGL is unavailable or its context is lost. All animated
  geometry shares the existing scene loop, viewport limits and offscreen/background pause behavior.

This update was checked at 1920px, 1280px, 768px, 390px and 320px: default Orbit state,
independent toggle, Motion pause/resume, camera bubbles, keyboard link activation, and overflow.
The reduced-motion JavaScript fixture stops ambient rendering; manually toggling Orbit off returns
it to idle. The no-WebGL fixture retains visible text links. Application JS syntax, local references,
formatting and Git whitespace checks pass; normal browser runs report no console errors.
