import * as THREE from "../vendor/three/three.module.js";
import { keywordOutlines } from "./keyword-outlines.js";

// Real, beveled letter geometry. HTML links provide focus, names and a fallback.
export function createGlassWords({ scene, camera, stage, host, request }) {
  const links = [...host.querySelectorAll(".interest-token")];
  const colors = [
    ["#80b9f5", "#3b609f"],
    ["#94a9ef", "#4c579c"],
    ["#79d2c4", "#307c89"],
    ["#d79be8", "#8e509f"],
  ];
  const screen = new THREE.Vector3();
  let width = 1,
    height = 1,
    mobile = false;
  const words = keywordOutlines.map((outline, i) => {
    const shapes = outline.paths.flatMap((commands) => {
      const path = new THREE.ShapePath();
      commands.forEach(([command, ...p]) => {
        if (command === "M") path.moveTo(...p);
        else if (command === "L") path.lineTo(...p);
        else if (command === "Q") path.quadraticCurveTo(...p);
        else if (command === "C") path.bezierCurveTo(...p);
        else path.currentPath.closePath();
      });
      return path.toShapes();
    });
    const geometry = new THREE.ExtrudeGeometry(shapes, {
      depth: 0.26,
      bevelEnabled: true,
      bevelSize: 0.024,
      bevelThickness: 0.022,
      bevelSegments: 3,
      curveSegments: 8,
      steps: 1,
    });
    geometry.center();
    geometry.computeBoundingBox();
    const size = new THREE.Vector3();
    geometry.boundingBox.getSize(size);
    const face = new THREE.MeshPhysicalMaterial({
      color: colors[i][0],
      metalness: 0.08,
      roughness: 0.12,
      transmission: 0.24,
      thickness: 0.22,
      ior: 1.46,
      transparent: true,
      opacity: 0.86,
      depthWrite: false,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      iridescence: 0.35,
      iridescenceIOR: 1.3,
      envMapIntensity: 0.95,
    });
    const edge = new THREE.MeshPhysicalMaterial({
      color: colors[i][1],
      metalness: 0.28,
      roughness: 0.17,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      clearcoat: 1,
      envMapIntensity: 1.5,
    });
    const mesh = new THREE.Mesh(geometry, [face, edge]);
    mesh.name = outline.label;
    scene.add(mesh);
    const word = {
      mesh,
      face,
      edge,
      size,
      link: links[i],
      x: 0,
      y: 0,
      scale: 1,
      baseTilt: [-0.12, 0.1, 0.06, -0.08][i],
      hover: 0,
      hovered: false,
      focused: false,
      phase: i * 1.7,
      heldPosition: null,
    };
    const change = (key, value) => {
      const wasHeld = word.hovered || word.focused;
      word[key] = value;
      if (!wasHeld && (word.hovered || word.focused))
        word.heldPosition = word.mesh.position.clone();
      if (!word.hovered && !word.focused) word.heldPosition = null;
      request();
    };
    word.link.addEventListener("pointerenter", () => change("hovered", true));
    word.link.addEventListener("pointerleave", () => change("hovered", false));
    word.link.addEventListener("focus", () => change("focused", true));
    word.link.addEventListener("blur", () => change("focused", false));
    return word;
  });
  host.classList.add("glass-words-ready");
  host.dataset.glassKeywords = String(words.length);

  function resize() {
    width = stage.clientWidth;
    height = stage.clientHeight;
    mobile = width < 600;
    words.forEach((word) => {
      const style = getComputedStyle(word.link);
      word.x = parseFloat(style.getPropertyValue("--word-x"));
      word.y = parseFloat(style.getPropertyValue("--word-y"));
      const fontHeight = mobile ? 18 : width < 1000 ? 23 : 28;
      const maxWidth = width * (mobile ? 0.43 : width < 1000 ? 0.23 : 0.18);
      word.scale =
        (Math.min(fontHeight / word.size.y, maxWidth / word.size.x) * 8.6) /
        height;
    });
  }

  function update({ time, dt, active, orbitMix, orbitTime, pointer }) {
    host.dataset.keywordMotion =
      orbitMix > 0.05 ? "orbit" : active ? "float" : "static";
    const halfWidth = camera.right;
    words.forEach((word) => {
      const phase = word.phase;
      const target = word.hovered || word.focused ? 1 : 0;
      word.hover = active
        ? THREE.MathUtils.damp(word.hover, target, 9, dt)
        : target;
      const scale = word.scale * (1 + word.hover * 0.12);
      let x = (word.x - 0.5) * halfWidth * 2;
      let y = (0.5 - word.y) * 8.6;
      // Separate elliptical lanes share the toys' clock, leaving the copy clear.
      const angle = orbitTime + phase;
      x += Math.cos(angle) * (mobile ? 0.055 : 0.28) * orbitMix;
      y += Math.sin(angle) * (mobile ? 0.08 : 0.3) * orbitMix;
      // Small elliptical paths also play automatically in the resting composition.
      if (active && !word.heldPosition) {
        x += Math.cos(time * 0.48 + phase) * (mobile ? 0.025 : 0.14);
        y += Math.sin(time * 0.48 + phase) * (mobile ? 0.045 : 0.12);
      }
      if (word.heldPosition) {
        x = word.heldPosition.x;
        y = word.heldPosition.y;
      }
      word.mesh.position.set(x, y, 0.6 + Math.sin(time * 0.4 + phase) * 0.25);
      word.mesh.rotation.set(
        0.12 + (active ? Math.sin(time * 0.4 + phase) * 0.12 : 0),
        -0.28 +
          (active
            ? Math.cos(time * 0.35 + phase) * 0.18 + pointer.x * 0.12
            : 0),
        word.baseTilt + (active ? Math.sin(time * 0.3 + phase) * 0.035 : 0),
      );
      word.mesh.scale.setScalar(scale);
      word.face.emissive.setRGB(
        0.1 * word.hover,
        0.12 * word.hover,
        0.2 * word.hover,
      );
      screen.copy(word.mesh.position).project(camera);
      const px = ((screen.x + 1) * width) / 2;
      const py = ((1 - screen.y) * height) / 2;
      const hitWidth = (word.size.x * scale * height) / 8.6;
      const hitHeight = Math.max(
        mobile ? 38 : 34,
        (word.size.y * scale * height) / 8.6,
      );
      word.link.style.width = `${hitWidth}px`;
      word.link.style.height = `${hitHeight}px`;
      word.link.style.transform = `translate3d(${px - hitWidth / 2}px,${py - hitHeight / 2}px,0) rotate(${-word.mesh.rotation.z}rad)`;
    });
  }

  function hide() {
    host.classList.remove("glass-words-ready");
    host.dataset.keywordMotion = "fallback";
    links.forEach((link) => {
      link.style.transform = "";
      link.style.width = "";
      link.style.height = "";
    });
  }
  return { resize, update, hide };
}
