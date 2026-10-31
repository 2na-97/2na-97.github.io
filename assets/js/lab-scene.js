/* Original research toys, modeled in code. No remote runtime, model, texture or tracking requests. */
import * as THREE from "../vendor/three/three.module.js";
import { RoundedBoxGeometry } from "../vendor/three/RoundedBoxGeometry.js";
import { RoomEnvironment } from "../vendor/three/RoomEnvironment.js";

const host = document.querySelector(".hero-showcase");
if (host) {
  try {
    createUniverse(host);
  } catch (error) {
    // The static artwork and all research content stay available without WebGL.
    host.classList.remove("scene-ready");
    console.warn(
      "The research universe is using its static artwork.",
      error.message,
    );
  }
}

function createUniverse(host) {
  const stage = host.querySelector(".showcase-stage");
  const canvas = host.querySelector("canvas");
  const copy = host.querySelector(".showcase-copy");
  const rainButton = host.querySelector(".rain-button");
  const orbitButton = host.querySelector(".orbit-button");
  const snapButton = host.querySelector(".snap-button");
  const caption = host.querySelector(".scene-caption");
  const clearButton = host.querySelector(".bubble-clear");
  const playDock = host.querySelector(".play-dock");
  const playNudge = host.querySelector(".play-nudge");
  const cameraInvite = host.querySelector(".camera-invite");
  const cameraScreen = new THREE.Vector3();
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const fine = matchMedia("(hover:hover) and (pointer:fine)");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.02;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-8, 8, 4.3, -4.3, 0.1, 80);
  camera.position.set(0, 0, 20);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0.04);
  scene.environment = environment.texture;
  room.dispose();
  pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xb5a3dc, 0.85));
  const key = new THREE.DirectionalLight(0xfff4ea, 2.8);
  key.position.set(-4, 7, 9);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xa4c8ff, 1.8);
  rim.position.set(7, 2, 4);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffb7da, 1.1);
  fill.position.set(-6, -3, 2);
  scene.add(fill);
  const mat = (color, extra = {}) =>
    new THREE.MeshPhysicalMaterial({
      color,
      metalness: 0.22,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.13,
      envMapIntensity: 1,
      ...extra,
    });
  const materials = {
    pink: mat("#f15ca7"),
    lavender: mat("#a06aef"),
    blue: mat("#3868ee", { metalness: 0.5 }),
    cyan: mat("#5bd9e7", { metalness: 0.45, roughness: 0.17 }),
    gold: mat("#ffb829", { metalness: 0.45 }),
    cream: mat("#fff1d1"),
    white: mat("#fffaff", { metalness: 0.1, roughness: 0.25 }),
    ink: mat("#293251", { metalness: 0.1, roughness: 0.2 }),
    mint: mat("#bde99a"),
    blush: mat("#ff90b4"),
    visor: mat("#2d3165", { metalness: 0.55, roughness: 0.16 }),
    silver: mat("#dbe4ff", { metalness: 0.85, roughness: 0.16 }),
    coral: mat("#ff927b"),
    glass: mat("#adbcff", {
      metalness: 0.5,
      roughness: 0.1,
      transparent: true,
      opacity: 0.72,
    }),
  };
  const sphere = new THREE.SphereGeometry(1, 40, 28);
  const mesh = (geo, material, parent, pos = [0, 0, 0], scale = [1, 1, 1]) => {
    const object = new THREE.Mesh(geo, material);
    object.position.set(...pos);
    object.scale.set(...scale);
    parent.add(object);
    return object;
  };
  const ball = (parent, material, pos, scale) =>
    mesh(sphere, material, parent, pos, scale);
  const box = (parent, material, size, pos = [0, 0, 0], radius = 0.18) =>
    mesh(new RoundedBoxGeometry(...size, 4, radius), material, parent, pos);
  const torus = (parent, material, radius, tube, pos = [0, 0, 0]) =>
    mesh(new THREE.TorusGeometry(radius, tube, 14, 72), material, parent, pos);
  const eyeDots = (parent, y, z, width = 0.24) => {
    [-width, width].forEach((x) =>
      ball(parent, materials.ink, [x, y, z], [0.045, 0.075, 0.035]),
    );
  };
  function robot() {
    const g = new THREE.Group();
    box(g, materials.pink, [1.36, 1.08, 0.82], [0, 0.12, 0], 0.25);
    box(g, materials.visor, [1.08, 0.54, 0.13], [0, 0.15, 0.44], 0.16);
    [-0.24, 0.24].forEach((x) =>
      box(g, materials.cyan, [0.12, 0.22, 0.06], [x, 0.16, 0.53], 0.05),
    );
    ball(g, materials.pink, [-0.76, 0.12, 0], [0.14, 0.26, 0.23]);
    ball(g, materials.pink, [0.76, 0.12, 0], [0.14, 0.26, 0.23]);
    mesh(
      new THREE.CylinderGeometry(0.035, 0.035, 0.26, 12),
      materials.silver,
      g,
      [0, 0.78, 0],
    );
    ball(g, materials.gold, [0, 0.96, 0], [0.13, 0.13, 0.13]);
    box(g, materials.lavender, [0.76, 0.35, 0.55], [0, -0.59, 0], 0.15);
    [-0.25, 0.25].forEach((x) =>
      ball(g, materials.cream, [x, -0.82, 0.1], [0.21, 0.13, 0.26]),
    );
    return g;
  }
  function eye() {
    const g = new THREE.Group();
    ball(g, materials.white, [0, 0, 0], [0.92, 0.64, 0.5]);
    ball(g, materials.blue, [0.09, 0, 0.43], [0.44, 0.44, 0.17]);
    ball(g, materials.ink, [0.1, 0, 0.58], [0.23, 0.25, 0.08]);
    ball(g, materials.white, [-0.02, 0.16, 0.65], [0.1, 0.1, 0.025]);
    ball(g, materials.white, [0.22, -0.1, 0.65], [0.04, 0.04, 0.02]);
    return g;
  }
  function globe() {
    const g = new THREE.Group();
    ball(g, materials.blue, [0, 0, 0], [0.71, 0.71, 0.71]);
    const meridian = torus(g, materials.cyan, 0.72, 0.018);
    meridian.rotation.y = Math.PI / 2;
    const second = torus(g, materials.cyan, 0.72, 0.018);
    second.rotation.y = 0.5;
    [-0.34, 0.34].forEach((y) => {
      const r = torus(g, materials.cyan, 0.63, 0.016, [0, y, 0]);
      r.rotation.x = Math.PI / 2;
    });
    const orbit = torus(g, materials.silver, 1.02, 0.045);
    orbit.rotation.set(1.1, 0.25, -0.4);
    ball(g, materials.pink, [0.91, 0.22, 0.4], [0.12, 0.12, 0.12]);
    return g;
  }
  function cloud() {
    const g = new THREE.Group();
    box(g, materials.white, [1.5, 0.55, 0.65], [0, -0.12, 0], 0.25);
    ball(g, materials.white, [-0.43, 0.12, 0], [0.43, 0.42, 0.38]);
    ball(g, materials.white, [0.08, 0.3, 0], [0.5, 0.55, 0.42]);
    ball(g, materials.white, [0.5, 0.05, 0], [0.37, 0.35, 0.34]);
    eyeDots(g, -0.09, 0.35, 0.2);
    [-0.38, 0.38].forEach((x) =>
      ball(g, materials.blush, [x, -0.19, 0.33], [0.095, 0.04, 0.02]),
    );
    return g;
  }
  function bubble() {
    const g = new THREE.Group();
    box(g, materials.lavender, [1.4, 1.02, 0.55], [0, 0, 0], 0.22);
    const tail = mesh(
      new THREE.ConeGeometry(0.2, 0.42, 3),
      materials.lavender,
      g,
      [-0.35, -0.58, 0],
    );
    tail.rotation.z = Math.PI;
    [-0.36, 0, 0.36].forEach((x) =>
      ball(g, materials.white, [x, 0.02, 0.3], [0.09, 0.09, 0.035]),
    );
    return g;
  }
  function star() {
    const g = new THREE.Group(),
      shape = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI) / 5 + Math.PI / 2,
        r = i % 2 ? 0.35 : 0.67,
        x = Math.cos(a) * r,
        y = Math.sin(a) * r;
      i ? shape.lineTo(x, y) : shape.moveTo(x, y);
    }
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.25,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.11,
      bevelThickness: 0.12,
      curveSegments: 12,
    });
    geo.center();
    mesh(geo, materials.gold, g);
    eyeDots(g, 0, 0.265, 0.16);
    return g;
  }
  function tokens() {
    const g = new THREE.Group();
    [materials.cyan, materials.lavender, materials.pink].forEach((m, i) => {
      const d = mesh(new THREE.CylinderGeometry(0.57, 0.57, 0.2, 48), m, g, [
        i * 0.06,
        (i - 1) * 0.25,
        0,
      ]);
      const edge = torus(g, materials.white, 0.48, 0.012, [
        i * 0.06,
        (i - 1) * 0.25 + 0.105,
        0,
      ]);
      edge.rotation.x = Math.PI / 2;
    });
    return g;
  }
  function orbit() {
    const g = new THREE.Group();
    const t = torus(g, materials.mint, 0.57, 0.17);
    t.rotation.x = 0.35;
    ball(g, materials.gold, [0.53, 0.36, 0], [0.15, 0.15, 0.15]);
    return g;
  }
  function photoCamera() {
    const g = new THREE.Group();
    box(g, materials.mint, [1.65, 1.08, 0.72], [0, 0, 0], 0.24);
    box(g, materials.coral, [0.33, 0.92, 0.78], [-0.62, -0.03, 0.02], 0.12);
    box(g, materials.mint, [0.68, 0.26, 0.57], [0.12, 0.62, -0.06], 0.09);
    const lens = new THREE.Group();
    lens.name = "lens";
    lens.position.set(0.15, -0.06, 0.42);
    g.add(lens);
    torus(lens, materials.silver, 0.43, 0.075);
    ball(lens, materials.visor, [0, 0, 0], [0.4, 0.4, 0.13]);
    torus(lens, materials.cyan, 0.28, 0.026, [0, 0, 0.13]);
    ball(lens, materials.blue, [0, 0, 0.13], [0.25, 0.25, 0.09]);
    ball(lens, materials.white, [-0.09, 0.12, 0.22], [0.065, 0.09, 0.02]);
    box(g, materials.gold, [0.29, 0.12, 0.26], [-0.48, 0.6, 0.03], 0.05);
    box(g, materials.white, [0.27, 0.15, 0.04], [0.57, 0.29, 0.38], 0.04);
    const strap = torus(g, materials.lavender, 0.58, 0.035, [0, -0.2, -0.4]);
    strap.scale.set(1.65, 1, 1);
    strap.rotation.x = 0.3;
    return g;
  }
  function neuralNetwork() {
    const g = new THREE.Group();
    const points = [
      [-0.65, 0.4, 0],
      [-0.65, -0.4, 0],
      [0, 0.65, 0.08],
      [0, 0, 0.2],
      [0, -0.65, 0.08],
      [0.65, 0.36, 0],
      [0.65, -0.36, 0],
    ].map((p) => new THREE.Vector3(...p));
    const edges = [
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [3, 5],
      [3, 6],
      [4, 6],
    ];
    edges.forEach(([a, b]) => {
      const delta = new THREE.Vector3().subVectors(points[b], points[a]);
      const line = mesh(
        new THREE.CylinderGeometry(0.022, 0.022, delta.length(), 8),
        materials.silver,
        g,
      );
      line.position.copy(points[a]).add(points[b]).multiplyScalar(0.5);
      line.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        delta.normalize(),
      );
    });
    points.forEach((p, i) =>
      ball(
        g,
        [materials.pink, materials.cyan, materials.lavender][i % 3],
        p.toArray(),
        [0.16, 0.16, 0.16],
      ),
    );
    const signal = ball(g, materials.gold, [0, 0, 0], [0.07, 0.07, 0.07]);
    signal.name = "signal";
    return g;
  }
  function prism() {
    const g = new THREE.Group();
    const geometry = new THREE.OctahedronGeometry(0.7);
    mesh(geometry, materials.glass, g);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xcbd9ff }),
    );
    g.add(edges);
    ball(g, materials.pink, [0, 0, 0], [0.24, 0.24, 0.24]);
    const ring = torus(g, materials.gold, 0.48, 0.023);
    ring.rotation.set(0.8, 0.4, 0);
    return g;
  }
  const factories = [
    robot,
    eye,
    globe,
    cloud,
    bubble,
    star,
    tokens,
    orbit,
    photoCamera,
    neuralNetwork,
    prism,
  ];
  const descriptions = [
    "A little agent. Big possibilities.",
    "A fresh way of seeing.",
    "Models of a world in motion.",
    "Forecasting a little further.",
    "Language meets imagination.",
    "Stay a little starry-eyed.",
    "Good ideas start with good data.",
    "Follow your curiosity.",
    "A different lens on the world.",
    "Everything is connected.",
    "A new dimension of understanding.",
  ];
  const toys = [];
  // Frame the introduction on the left and the paper portrait on the right.
  const layouts = [
    [-0.28, -2.55, 0.68, -0.2, 0.34, -0.19],
    [-0.47, 0.7, 0.36, 0.12, -0.28, 0.12],
    [0.38, 2.85, 0.65, 0.25, -0.25, 0.15],
    [0.43, -2.5, 0.68, -0.14, -0.25, -0.12],
    [0.45, 0.1, 0.55, 0.1, -0.32, 0.2],
    [-0.2, 3.2, 0.43, 0.15, 0.3, -0.2],
    [-0.12, -3.35, 0.5, 0.25, 0.2, -0.18],
    [0.03, 3.1, 0.4, 0.2, -0.25, 0.18],
    [0.2, 2.65, 0.78, -0.12, 0.28, -0.16],
    [0.12, -3.3, 0.48, 0.15, -0.3, 0.12],
    [-0.46, -1.3, 0.4, 0.2, 0.3, 0.15],
  ];
  factories.forEach((factory, i) => {
    const object = factory();
    scene.add(object);
    object.userData.toyIndex = i;
    toys.push({
      object,
      layout: layouts[i],
      phase: i * 1.7,
      kick: 0,
      turn: 0,
      turnTarget: 0,
      push: new THREE.Vector2(),
    });
  });
  const raycaster = new THREE.Raycaster();
  const hitPoint = new THREE.Vector2();
  // Lightweight orbital ribbons and traveling beads give the stage depth.
  const ribbons = [];
  for (let i = 0; i < 3; i++) {
    const path = new THREE.EllipseCurve(0, 0, 1, 1, 0, Math.PI * 2);
    const geometry = new THREE.BufferGeometry().setFromPoints(
      path.getPoints(120),
    );
    const line = new THREE.LineLoop(
      geometry,
      new THREE.LineBasicMaterial({
        color: [0xc2b5f4, 0xa4d6eb, 0xf0b5ce][i],
        transparent: true,
        opacity: 0.34,
      }),
    );
    line.position.z = -1.7;
    scene.add(line);
    ribbons.push(line);
  }
  const sparks = [];
  for (let i = 0; i < 18; i++) {
    const object = ball(
      scene,
      [materials.pink, materials.cyan, materials.gold][i % 3],
      [0, 0, 0],
      [
        0.055 + (i % 3) * 0.018,
        0.055 + (i % 3) * 0.018,
        0.055 + (i % 3) * 0.018,
      ],
    );
    sparks.push(object);
  }
  // Particle toys reuse the originals' geometries/materials and a fixed pool.
  const drops = Array.from({ length: 26 }, (_, i) => {
    const object = toys[i % toys.length].object.clone(true);
    object.visible = false;
    scene.add(object);
    return {
      object,
      delay: 0,
      velocity: new THREE.Vector3(),
      spin: new THREE.Vector3(),
      age: 0,
      bounces: 0,
    };
  });
  // A bounded pool of iridescent bubbles: repeated shots reuse old slots.
  const soapGeometry = new THREE.SphereGeometry(1, 24, 16);
  const bubbleRimGeometry = new THREE.BufferGeometry().setFromPoints(
    new THREE.EllipseCurve(0, 0, 1, 1, 0, Math.PI * 2).getPoints(48),
  );
  const bubbles = Array.from({ length: 64 }, (_, index) => {
    const object = new THREE.Group();
    const material = mat("#f9a7d6", {
      metalness: 0.02,
      roughness: 0.08,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      envMapIntensity: 0.55,
      iridescence: 0.8,
      iridescenceIOR: 1.3,
      iridescenceThicknessRange: [200, 500],
    });
    mesh(soapGeometry, material, object);
    const rimMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.65,
    });
    const edge = new THREE.LineLoop(bubbleRimGeometry, rimMaterial);
    object.add(edge);
    ball(object, materials.white, [-0.35, 0.46, 0.72], [0.13, 0.2, 0.025]);
    object.visible = false;
    object.userData.bubbleIndex = index;
    scene.add(object);
    return {
      object,
      material,
      rimMaterial,
      velocity: new THREE.Vector2(),
      radius: 0.25,
      age: 0,
      popping: 0,
      live: false,
    };
  });
  let bubbleCursor = 0,
    bubbleShot = 0,
    lensKick = 0,
    playRemaining = 0;
  let active =
    document.documentElement.classList.contains("motion-active") &&
    !reduced.matches;
  let visible = true,
    frame = 0,
    previous = 0,
    time = 0,
    burst = -1,
    scrollTarget = 0,
    scrollValue = 0,
    halfWidth = 8,
    mobile = false,
    lost = false,
    orbiting = false,
    orbitMix = 0,
    orbitTime = 0,
    hovered = -1,
    pointerInside = false;
  const pointer = new THREE.Vector2(),
    smoothPointer = new THREE.Vector2();
  const clamp = THREE.MathUtils.clamp;
  function resize() {
    const w = stage.clientWidth,
      h = stage.clientHeight;
    mobile = w < 600;
    if (mobile && bubbles.slice(32).some((bubble) => bubble.live)) {
      bubbles.slice(32).forEach((bubble) => {
        bubble.live = false;
        bubble.object.visible = false;
      });
      bubbleStatus();
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.5 : 1.8));
    renderer.setSize(w, h, false);
    halfWidth = (4.3 * w) / h;
    camera.left = -halfWidth;
    camera.right = halfWidth;
    camera.updateProjectionMatrix();
    measure();
    request();
  }
  function measure() {
    const rect = host.getBoundingClientRect();
    const runway = Math.max(1, host.offsetHeight - stage.offsetHeight);
    scrollTarget = clamp((70 - rect.top) / runway, 0, 1);
    visible = rect.bottom > 0 && rect.top < innerHeight;
    request();
  }
  function request() {
    if (!frame && !lost && !document.hidden && visible)
      frame = requestAnimationFrame(tick);
  }
  function setPreference(event) {
    active =
      event?.detail?.active ??
      (document.documentElement.classList.contains("motion-active") &&
        !reduced.matches);
    // Automatic motion and visitor-requested play are independent preferences.
    rainButton.disabled = false;
    orbitButton.disabled = false;
    snapButton.disabled = false;
    clearButton.disabled = false;
    canvas.dataset.motion = active ? "active" : "static";
    playDock.dataset.ambient = active ? "on" : "off";
    playNudge.textContent = active ? "Try a button ↙" : "Tap to play ↙";
    if (!active) {
      playRemaining = 0;
      burst = -1;
      canvas.dataset.rainPhase = "idle";
      drops.forEach((d) => (d.object.visible = false));
      orbiting = false;
      orbitMix = 0;
      orbitButton.setAttribute("aria-pressed", "false");
      canvas.dataset.orbit = "idle";
      host.classList.remove("is-over-toy");
      toys.forEach((toy) => {
        toy.kick = 0;
        toy.turn = toy.turnTarget = 0;
      });
      caption.textContent = "A small universe of things I’m curious about.";
    }
    previous = 0;
    request();
  }
  function startPlay(seconds = 8) {
    playRemaining = Math.max(playRemaining, seconds);
    host.classList.add("has-played");
    playNudge.textContent = "Go again ↻";
    request();
  }
  function hitTest() {
    raycaster.setFromCamera(hitPoint, camera);
    const hit = raycaster.intersectObjects(
      toys.map((toy) => toy.object),
      true,
    )[0];
    if (!hit) return -1;
    let object = hit.object;
    while (object && object.userData.toyIndex === undefined)
      object = object.parent;
    return object?.userData.toyIndex ?? -1;
  }
  function poke(index) {
    if (index < 0) return;
    startPlay(3);
    const toy = toys[index];
    toy.kick = 1;
    toy.turnTarget += Math.PI * 2;
    caption.textContent = descriptions[index];
    canvas.dataset.lastToy = String(index);
  }
  function bubbleStatus() {
    const count = bubbles.filter(
      (bubble) => bubble.live && !bubble.popping,
    ).length;
    canvas.dataset.bubbles = String(count);
    canvas.dataset.bubbleShot = String(bubbleShot);
    clearButton.hidden = count === 0;
  }
  function shootBubbles() {
    host.classList.add("camera-played");
    cameraInvite.querySelector("span").textContent = "again?";
    startPlay(10);
    bubbleShot++;
    lensKick = 1;
    toys[8].kick = 0.7;
    const source = toys[8].object.position;
    const limit = mobile ? 32 : bubbles.length;
    for (let i = 0; i < (mobile ? 8 : 12); i++) {
      const bubble = bubbles[bubbleCursor++ % limit];
      bubble.live = true;
      bubble.popping = 0;
      bubble.age = -i * 0.055;
      bubble.radius =
        (mobile ? 0.13 : 0.21) + Math.random() * (mobile ? 0.11 : 0.18);
      const hue = (bubbleShot * 0.23 + i * 0.025) % 1;
      bubble.material.color.setHSL(hue, 0.9, 0.52);
      bubble.rimMaterial.color.setHSL(hue, 0.9, 0.65);
      bubble.rimMaterial.opacity = 0.65;
      bubble.material.opacity = 0.55;
      bubble.object.visible = false;
      bubble.object.scale.setScalar(bubble.radius * 0.1);
      bubble.object.position.set(source.x + 0.25, source.y, 3);
      bubble.velocity.set(1.4 + Math.random() * 3.7, 0.3 + Math.random() * 1.5);
    }
    caption.textContent =
      "A little color, a little wonder. Tap a bubble to pop it.";
    bubbleStatus();
    request();
  }
  function popBubble(index) {
    const bubble = bubbles[index];
    if (!bubble.live || bubble.popping) return;
    startPlay(0.5);
    bubble.popping = 0.001;
    canvas.dataset.lastPopped = String(index);
    bubbleStatus();
  }
  function bubbleHitTest() {
    raycaster.setFromCamera(hitPoint, camera);
    const hit = raycaster.intersectObjects(
      bubbles
        .filter((b) => b.live && !b.popping && b.object.visible)
        .map((b) => b.object),
      true,
    )[0];
    if (!hit) return -1;
    let object = hit.object;
    while (object && object.userData.bubbleIndex === undefined)
      object = object.parent;
    return object?.userData.bubbleIndex ?? -1;
  }
  function animateBubbles(dt) {
    const floor = -3.55;
    bubbles.forEach((b, i) => {
      if (!b.live) return;
      b.age += dt;
      if (b.age < 0) return;
      b.object.visible = true;
      if (b.popping) {
        b.popping += dt;
        b.object.scale.setScalar(b.radius * (1 + b.popping * 2.2));
        b.material.opacity = Math.max(0, 0.55 * (1 - b.popping / 0.22));
        b.rimMaterial.opacity = Math.max(0, 0.65 * (1 - b.popping / 0.22));
        if (b.popping > 0.22) {
          b.live = false;
          b.object.visible = false;
        }
        return;
      }
      b.velocity.y -= dt * 1.75;
      b.velocity.x *= Math.exp(-dt * 0.45);
      b.object.position.x += b.velocity.x * dt;
      b.object.position.y += b.velocity.y * dt;
      const wall = halfWidth - b.radius - 0.08;
      if (Math.abs(b.object.position.x) > wall) {
        b.object.position.x = clamp(b.object.position.x, -wall, wall);
        b.velocity.x *= -0.55;
      }
      if (b.object.position.y < floor + b.radius) {
        b.object.position.y = floor + b.radius;
        b.velocity.y = Math.abs(b.velocity.y) * 0.32;
        if (b.velocity.y < 0.12) b.velocity.y = 0;
      }
      const swell = Math.min(1, b.age * 6);
      b.object.scale.setScalar(
        b.radius * swell * (1 + Math.sin(time * 2 + i) * 0.02),
      );
    });
    // Two inexpensive sphere-contact passes keep the bottom pile soft and stable.
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < bubbles.length; i++) {
        const a = bubbles[i];
        if (!a.live || a.popping || a.age < 0.2) continue;
        for (let j = i + 1; j < bubbles.length; j++) {
          const b = bubbles[j];
          if (!b.live || b.popping || b.age < 0.2) continue;
          const dx = b.object.position.x - a.object.position.x,
            dy = b.object.position.y - a.object.position.y;
          const distance = Math.hypot(dx, dy),
            separation = a.radius + b.radius;
          if (distance >= separation) continue;
          const nx = distance ? dx / distance : 1,
            ny = distance ? dy / distance : 0;
          const shift = (separation - distance) * 0.5;
          a.object.position.x -= nx * shift;
          a.object.position.y -= ny * shift;
          b.object.position.x += nx * shift;
          b.object.position.y += ny * shift;
          const speed =
            (b.velocity.x - a.velocity.x) * nx +
            (b.velocity.y - a.velocity.y) * ny;
          if (speed < 0) {
            const impulse = -speed * 0.58;
            a.velocity.x -= impulse * nx;
            a.velocity.y -= impulse * ny;
            b.velocity.x += impulse * nx;
            b.velocity.y += impulse * ny;
          }
          a.object.position.y = Math.max(floor + a.radius, a.object.position.y);
          b.object.position.y = Math.max(floor + b.radius, b.object.position.y);
        }
      }
    }
  }
  function makeRain() {
    if (burst >= 0) return;
    startPlay(8);
    burst = 0;
    rainButton.disabled = true;
    canvas.dataset.rainPhase = "falling";
    drops.forEach((drop, i) => {
      drop.delay = i < (mobile ? 16 : 26) ? i * 0.055 : Infinity;
      drop.age = 0;
      drop.bounces = 0;
      drop.object.visible = false;
      const x = (Math.random() - 0.5) * halfWidth * 1.65;
      drop.object.position.set(x, 5.7 + Math.random() * 2, 1.5 + Math.random());
      drop.object.rotation.set(Math.random(), Math.random(), Math.random());
      drop.object.scale.setScalar(
        (mobile ? 0.25 : 0.37) + Math.random() * 0.16,
      );
      drop.velocity.set((Math.random() - 0.5) * 1.2, -1 - Math.random(), 0);
      drop.spin.set(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      );
    });
    request();
  }
  function tick(now) {
    frame = 0;
    if (lost || document.hidden || !visible) {
      previous = 0;
      return;
    }
    const dt = previous ? Math.min((now - previous) / 1000, 0.045) : 0.016;
    previous = now;
    const simulating = active || playRemaining > 0 || orbiting;
    playRemaining = Math.max(0, playRemaining - dt);

    if (active) time += dt;
    scrollValue = active
      ? THREE.MathUtils.damp(scrollValue, scrollTarget, 8, dt)
      : 0;
    smoothPointer.lerp(active ? pointer : new THREE.Vector2(), 0.04);
    const progress = scrollValue,
      fall = progress * progress;
    orbitMix = THREE.MathUtils.damp(orbitMix, orbiting ? 1 : 0, 3, dt);
    if (orbiting) orbitTime += dt * 0.24;
    toys.forEach((toy, i) => {
      const { object, layout: l, phase } = toy;
      let x = l[0] * halfWidth * 2,
        y = l[1],
        scale = l[2];
      if (mobile) {
        // Small objects frame the lower portrait; the camera remains easy to tap.
        const placements = [
          [-0.35, -2.35, 0.36],
          [-0.4, 0.3, 0.23],
          [0.4, 3.92, 0.23],
          [0.36, -2.5, 0.36],
          [0.4, -1.5, 0.23],
          [0.02, 3.98, 0.21],
          [-0.12, -3.6, 0.23],
          [0.03, -3.2, 0.22],
          [-0.32, -0.5, 0.43],
          [0.35, -3.45, 0.24],
          [-0.4, -1.3, 0.23],
        ];
        x = placements[i][0] * halfWidth * 2;
        y = placements[i][1];
        scale = placements[i][2];
      }
      const orbitAngle =
        Math.atan2(y / 3.5, x / (halfWidth * 0.86)) + orbitTime;
      const cos = Math.cos(orbitAngle),
        sin = Math.sin(orbitAngle);
      x = THREE.MathUtils.lerp(
        x,
        Math.sign(cos) * Math.pow(Math.abs(cos), 0.55) * halfWidth * 0.86,
        orbitMix,
      );
      y = THREE.MathUtils.lerp(
        y,
        Math.sign(sin) * Math.pow(Math.abs(sin), 0.55) * 3.5,
        orbitMix,
      );
      scale *= 1 - orbitMix * 0.22;
      const float = active ? Math.sin(time * 1.05 + phase) * 0.17 : 0;
      const entry = active
        ? Math.exp(-time * 2.2) * Math.cos(time * 3.8 + i * 0.35) * 0.8
        : 0;
      toy.kick = simulating ? Math.max(0, toy.kick - dt * 0.65) : 0;
      toy.turn = THREE.MathUtils.damp(toy.turn, toy.turnTarget, 3.2, dt);
      const kick = Math.sin(toy.kick * Math.PI * 3) * toy.kick;
      const dx = x - pointer.x * halfWidth * 2;
      const dy = y + pointer.y * 8.6;
      const distance = Math.hypot(dx, dy);
      const force =
        active && pointerInside && fine.matches
          ? Math.max(0, 1 - distance / 1.7) * 0.23
          : 0;
      toy.push.x = THREE.MathUtils.damp(
        toy.push.x,
        distance ? (dx / distance) * force : 0,
        6,
        dt,
      );
      toy.push.y = THREE.MathUtils.damp(
        toy.push.y,
        distance ? (dy / distance) * force : 0,
        6,
        dt,
      );
      object.position.set(
        x +
          smoothPointer.x * (i % 2 ? 0.16 : -0.2) +
          toy.push.x +
          (active ? Math.cos(time * 0.65 + phase) * 0.09 : 0) +
          Math.sin(progress * Math.PI) * 0.2,
        y +
          float +
          entry +
          kick * 0.3 +
          toy.push.y -
          fall * (1 - orbitMix) * (6 + (i % 3) * 1.4),
        -0.1 + (i % 3) * 0.25,
      );
      object.rotation.set(
        l[3] +
          (active ? Math.sin(time * 0.6 + phase) * 0.16 : 0) +
          fall * 0.7 +
          kick * 0.15,
        l[4] +
          smoothPointer.x * 0.3 +
          progress * 0.5 +
          toy.turn +
          (active ? Math.cos(time * 0.42 + phase) * 0.16 : 0),
        l[5] +
          (active ? Math.sin(time * 0.5 + phase) * 0.12 : 0) +
          fall * (i % 2 ? 1 : -1),
      );
      object.scale.setScalar(scale * (1 + Math.max(0, kick) * 0.12));
    });
    const lens = toys[8].object.getObjectByName("lens");
    lensKick = simulating ? Math.max(0, lensKick - dt * 2.5) : 0;
    lens.position.z =
      0.42 + (active ? Math.sin(time * 1.3) * 0.045 : 0) + lensKick * 0.16;
    const signal = toys[9].object.getObjectByName("signal");
    signal.position.set(
      active ? Math.sin(time * 1.8) * 0.65 : 0,
      active ? Math.cos(time * 2.8) * 0.4 : 0,
      0.18,
    );
    ribbons.forEach((line, i) => {
      line.scale.set(halfWidth * (0.83 + i * 0.04), 3.15 - i * 0.25, 1);
      line.rotation.set(
        0,
        0,
        (i - 1) * 0.11 + (active ? Math.sin(time * 0.18 + i) * 0.055 : 0),
      );
      line.position.y = -fall * 8;
      line.visible = !mobile;
    });
    sparks.forEach((spark, i) => {
      const a = i * 2.4 + (active ? time * (i % 2 ? 0.11 : -0.08) : 0);
      spark.position.set(
        Math.cos(a) * halfWidth * (0.84 + (i % 3) * 0.035),
        Math.sin(a) * 3.15 +
          (active ? Math.sin(time * 0.6 + i) * 0.2 : 0) -
          fall * 9,
        -0.5,
      );
      spark.visible = !mobile || i % 3 === 0;
    });
    if (burst >= 0 && simulating) {
      burst += dt;
      if (burst > 1.8 && canvas.dataset.rainPhase !== "bouncing")
        canvas.dataset.rainPhase = "bouncing";
      drops.forEach((drop) => {
        if (burst < drop.delay) return;
        drop.object.visible = true;
        drop.age += dt;
        drop.velocity.y -= 8.5 * dt;
        drop.object.position.addScaledVector(drop.velocity, dt);
        drop.object.rotation.x += drop.spin.x * dt;
        drop.object.rotation.y += drop.spin.y * dt;
        drop.object.rotation.z += drop.spin.z * dt;
        const floor = -3.15 + (drop.object.position.z - 2) * 0.25;
        if (drop.object.position.y < floor && drop.velocity.y < 0) {
          drop.object.position.y = floor;
          drop.velocity.y *= -0.47;
          drop.velocity.x *= 0.78;
          drop.spin.multiplyScalar(0.65);
          drop.bounces++;
        }
        if (Math.abs(drop.object.position.x) > halfWidth - 0.25)
          drop.velocity.x *= -0.8;
        if (drop.age > 4.5) {
          drop.object.scale.multiplyScalar(Math.exp(-dt * 5));
          if (drop.age > 5.5) drop.object.visible = false;
        }
      });
      if (burst > 7) {
        canvas.dataset.rainPhase = "idle";
        burst = -1;
        rainButton.disabled = false;
        drops.forEach((d) => (d.object.visible = false));
      }
    }
    if (simulating) animateBubbles(dt);
    copy.style.transform = `translate(-50%, calc(-50% - ${progress * 18}px))`;
    // Keep the reading and play controls opaque throughout the scroll sequence.
    copy.style.opacity = "1";
    cameraScreen.copy(toys[8].object.position).project(camera);
    const hintX = clamp(
      ((cameraScreen.x + 1) * stage.clientWidth) / 2 + (mobile ? 15 : 30),
      8,
      stage.clientWidth - 76,
    );
    const hintY = Math.max(
      38,
      ((1 - cameraScreen.y) * stage.clientHeight) / 2 - (mobile ? 65 : 72),
    );
    cameraInvite.style.transform = `translate3d(${hintX}px, ${hintY}px, 0)`;
    renderer.render(scene, camera);
    if (pointerInside && fine.matches) {
      const nextHover = hitTest();
      if (hovered !== nextHover) {
        hovered = nextHover;
        host.classList.toggle("is-over-toy", hovered >= 0);
        caption.textContent =
          hovered >= 0
            ? `${descriptions[hovered]} Tap to play.`
            : "Tap a little object. Follow a little curiosity.";
      }
    }
    const keepPlaying =
      active || playRemaining > 0 || orbiting || orbitMix > 0.001;
    canvas.dataset.playback = keepPlaying ? "playing" : "idle";
    if (keepPlaying) request();
  }
  // Pause when offscreen/backgrounded. No scroll interception or continuous work in static mode.
  const observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      previous = 0;
      request();
    },
    { rootMargin: "50px" },
  );
  observer.observe(host);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);
  window.addEventListener("scroll", measure, { passive: true });
  window.addEventListener("inha:motion", setPreference);
  document.addEventListener("visibilitychange", () => {
    previous = 0;
    request();
  });
  stage.addEventListener("pointermove", (event) => {
    if (!fine.matches) return;
    const r = stage.getBoundingClientRect();
    pointer.set(
      (event.clientX - r.left) / r.width - 0.5,
      (event.clientY - r.top) / r.height - 0.5,
    );
    hitPoint.set(pointer.x * 2, -pointer.y * 2);
    pointerInside = !event.target.closest("a, button");
    if (!active) request();
  });
  stage.addEventListener("pointerleave", () => {
    pointer.set(0, 0);
    pointerInside = false;
    hovered = -1;
    host.classList.remove("is-over-toy");
  });
  let pressStart = null;
  stage.addEventListener(
    "pointerdown",
    (event) => {
      pressStart = [event.clientX, event.clientY];
    },
    { passive: true },
  );
  stage.addEventListener(
    "pointerup",
    (event) => {
      if (
        !pressStart ||
        event.target.closest("a,button") ||
        Math.hypot(
          event.clientX - pressStart[0],
          event.clientY - pressStart[1],
        ) > 8
      )
        return;
      const rect = stage.getBoundingClientRect();
      hitPoint.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        1 - ((event.clientY - rect.top) / rect.height) * 2,
      );
      const bubbleIndex = bubbleHitTest();
      if (bubbleIndex >= 0) {
        popBubble(bubbleIndex);
        pressStart = null;
        return;
      }
      const index = hitTest();
      if (index === 8) shootBubbles();
      else poke(index);
      pressStart = null;
    },
    { passive: true },
  );
  stage.addEventListener("pointercancel", () => {
    pressStart = null;
  });
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(frame);
    host.classList.remove("scene-ready");
    playDock.hidden = true;
    cameraInvite.hidden = true;
    rainButton.hidden = true;
    orbitButton.hidden = true;
    snapButton.hidden = true;
    clearButton.hidden = true;
  });
  rainButton.addEventListener("click", makeRain);
  orbitButton.addEventListener("click", () => {
    startPlay(2);
    orbiting = !orbiting;
    orbitButton.setAttribute("aria-pressed", String(orbiting));
    canvas.dataset.orbit = orbiting ? "active" : "idle";
    caption.textContent = orbiting
      ? "A new perspective, every turn."
      : "Tap a little object. Follow a little curiosity.";
    request();
  });
  snapButton.addEventListener("click", shootBubbles);
  cameraInvite.addEventListener("click", shootBubbles);
  clearButton.addEventListener("click", () => {
    bubbles.forEach((b, i) => {
      if (b.live) popBubble(i);
    });
    caption.textContent = "Pop! A fresh start for a new idea.";
  });
  rainButton.hidden = false;
  orbitButton.hidden = false;
  snapButton.hidden = false;
  playDock.hidden = false;
  cameraInvite.hidden = false;
  caption.textContent = "Tap a little object. Follow a little curiosity.";
  resize();
  setPreference();
  host.classList.add("scene-ready");
  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(frame);
    frame = 0;
    previous = 0;
  });
  window.addEventListener("pageshow", () => {
    previous = 0;
    request();
  });
}
