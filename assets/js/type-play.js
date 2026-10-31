"use strict";

// A soft typographic lens: transforms preserve the text's original layout.
(() => {
  const targets = [...document.querySelectorAll("[data-proximity]")];
  if (!targets.length) return;
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const allowed = () =>
    fine.matches &&
    !reduced.matches &&
    document.documentElement.classList.contains("motion-active");
  const resets = [];
  targets.forEach((node) => {
    // Keep one natural phrase in the accessibility tree, including the name.
    node.setAttribute("aria-label", node.textContent.trim());
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((text, index) => {
      const fragment = document.createDocumentFragment();
      let content = text.textContent.replace(/\s+/g, " ");
      if (index === 0) content = content.trimStart();
      if (index === textNodes.length - 1) content = content.trimEnd();
      Array.from(content).forEach((letter) => {
        const span = document.createElement("span");
        span.className = "proximity-letter";
        span.setAttribute("aria-hidden", "true");
        span.textContent = letter === " " ? "\u00a0" : letter;
        fragment.append(span);
      });
      text.replaceWith(fragment);
    });
    const letters = [...node.querySelectorAll(".proximity-letter")];
    const isName = node.id === "hero-title";
    const radius = isName ? 115 : 50;
    let centers = [],
      frame = 0,
      x = 0,
      y = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      letters.forEach((letter) => letter.style.removeProperty("transform"));
      centers = [];
    };
    const measure = () => {
      centers = letters.map((letter) => {
        const rect = letter.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
    };
    node.addEventListener("pointerenter", () => {
      if (allowed()) measure();
    });
    node.addEventListener("pointermove", (event) => {
      if (!allowed() || event.pointerType === "touch") return;
      x = event.clientX;
      y = event.clientY;
      if (!centers.length) measure();
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!allowed()) return reset();
        letters.forEach((letter, i) => {
          const distance = Math.hypot(x - centers[i].x, y - centers[i].y);
          const influence = Math.pow(Math.max(0, 1 - distance / radius), 2);
          const scale = 1 + influence * (isName ? 0.28 : 0.2);
          letter.style.transform = `translateY(${-influence * (isName ? 7 : 2)}px) scale(${scale})`;
        });
      });
    });
    node.addEventListener("pointerleave", reset);
    node.addEventListener("pointercancel", reset);
    resets.push(reset);
  });
  const resetAll = () => resets.forEach((reset) => reset());
  window.addEventListener("scroll", resetAll, { passive: true });
  window.addEventListener("resize", resetAll, { passive: true });
  window.addEventListener("inha:motion", resetAll);
  window.addEventListener("blur", resetAll);
  reduced.addEventListener("change", resetAll);
  fine.addEventListener("change", resetAll);
})();
