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
  const factories = [robot, eye, globe, cloud, bubble, star, tokens, orbit];
  const toys = [];
  // Relative x coordinates keep a quiet reading area in the center.
  const layouts = [
    [-0.35, -1.75, 0.95, -0.2, 0.34, -0.19],
    [-0.36, 0.95, 0.8, 0.12, -0.28, 0.12],
    [0.35, 1.9, 1.08, 0.25, -0.25, 0.15],
    [0.34, -2.05, 0.95, -0.14, -0.25, -0.12],
    [0.4, -0.05, 0.82, 0.1, -0.32, 0.2],
    [-0.24, 2.55, 0.8, 0.15, 0.3, -0.2],
    [-0.12, -2.95, 0.68, 0.25, 0.2, -0.18],
    [0.16, 2.9, 0.65, 0.2, -0.25, 0.18],
  ];
  factories.forEach((factory, i) => {
    const object = factory();
    scene.add(object);
    toys.push({ object, layout: layouts[i], phase: i * 1.7 });
  });
  const sparks = [];
  for (let i = 0; i < 9; i++) {
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
  const drops = Array.from({ length: 22 }, (_, i) => {
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
    lost = false;
  const pointer = new THREE.Vector2(),
    smoothPointer = new THREE.Vector2();
  const clamp = THREE.MathUtils.clamp;
  function resize() {
    const w = stage.clientWidth,
      h = stage.clientHeight;
    mobile = w < 600;
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
    rainButton.disabled = !active;
    canvas.dataset.motion = active ? "active" : "static";
    if (!active) {
      burst = -1;
      canvas.dataset.rainPhase = "idle";
      drops.forEach((d) => (d.object.visible = false));
    }
    previous = 0;
    request();
  }
  function makeRain() {
    if (!active || burst >= 0) return;
    burst = 0;
    rainButton.disabled = true;
    canvas.dataset.rainPhase = "falling";
    drops.forEach((drop, i) => {
      drop.delay = i * 0.055;
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
    if (active) time += dt;
    scrollValue = active
      ? THREE.MathUtils.damp(scrollValue, scrollTarget, 8, dt)
      : 0;
    smoothPointer.lerp(active ? pointer : new THREE.Vector2(), 0.04);
    const progress = scrollValue,
      fall = progress * progress;
    toys.forEach(({ object, layout: l, phase }, i) => {
      let x = l[0] * halfWidth * 2,
        y = l[1],
        scale = l[2];
      if (mobile) {
        // On phones, toys sit above and below the copy instead of behind it.
        const placements = [
          [-0.28, -2.45, 0.55],
          [-0.32, 2.5, 0.44],
          [0.29, 2.75, 0.5],
          [0.3, -2.48, 0.55],
          [0.37, -1.5, 0.33],
          [-0.05, 3.15, 0.42],
          [-0.08, -3.25, 0.34],
          [0.17, 3.3, 0.34],
        ];
        x = placements[i][0] * halfWidth * 2;
        y = placements[i][1];
        scale = placements[i][2];
      }
      const float = active ? Math.sin(time * 0.62 + phase) * 0.1 : 0;
      const entry = active
        ? Math.exp(-time * 2.2) * Math.cos(time * 3.8 + i * 0.35) * 0.8
        : 0;
      object.position.set(
        x +
          smoothPointer.x * (i % 2 ? 0.1 : -0.12) +
          Math.sin(progress * Math.PI) * 0.2,
        y + float + entry - fall * (6 + (i % 3) * 1.4),
        -0.1 + (i % 3) * 0.25,
      );
      object.rotation.set(
        l[3] + (active ? Math.sin(time * 0.3 + phase) * 0.08 : 0) + fall * 0.7,
        l[4] + smoothPointer.x * 0.09 + progress * 0.5,
        l[5] +
          (active ? Math.sin(time * 0.24 + phase) * 0.07 : 0) +
          fall * (i % 2 ? 1 : -1),
      );
      object.scale.setScalar(scale);
    });
    sparks.forEach((spark, i) => {
      const a = i * 2.4;
      spark.position.set(
        Math.cos(a) * halfWidth * 0.82,
        Math.sin(a) * 3.15 +
          (active ? Math.sin(time * 0.6 + i) * 0.12 : 0) -
          fall * 9,
        -0.5,
      );
      spark.visible = !mobile || i % 2 === 0;
    });
    if (burst >= 0 && active) {
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
    copy.style.transform = `translate(-50%, calc(-50% - ${progress * 65}px)) scale(${1 - progress * 0.08})`;
    copy.style.opacity = String(
      1 - clamp((progress - 0.35) / 0.65, 0, 1) * 0.85,
    );
    renderer.render(scene, camera);
    if (active) request();
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
    if (!active || !fine.matches) return;
    const r = stage.getBoundingClientRect();
    pointer.set(
      (event.clientX - r.left) / r.width - 0.5,
      (event.clientY - r.top) / r.height - 0.5,
    );
  });
  stage.addEventListener("pointerleave", () => pointer.set(0, 0));
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(frame);
    host.classList.remove("scene-ready");
    rainButton.hidden = true;
  });
  rainButton.addEventListener("click", makeRain);
  rainButton.hidden = false;
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
