"use strict";

// A hand-cut paper portrait: drag, keyboard placement, page turn, and scenery.
(() => {
  const world = document.querySelector(".curiosity-world");
  if (!world) return;
  const photo = world.querySelector(".world-photo");
  const front = photo.querySelector(".photo-front");
  const back = photo.querySelector(".photo-back");
  const controls = world.querySelector(".world-switch");
  const anchor = world.querySelector(".world-photo-anchor");
  const resetButton = world.querySelector(".paper-reset");
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  let active =
    document.documentElement.classList.contains("motion-active") &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame = 0,
    x = 0,
    y = 0;
  let paperX = 0,
    paperY = 0,
    drag = null,
    suppressClick = false;
  photo.disabled = false;
  controls.hidden = false;
  const flip = (flipped) => {
    photo.setAttribute("aria-pressed", String(flipped));
    photo.setAttribute(
      "aria-label",
      flipped ? "Show Inha’s photograph" : "Flip Inha’s photo",
    );
    front.setAttribute("aria-hidden", String(flipped));
    back.setAttribute("aria-hidden", String(!flipped));
    if (active) {
      photo
        .getAnimations()
        .filter((animation) => animation.id === "paper-turn")
        .forEach((animation) => animation.cancel());
      const turn = photo.animate(
        [
          { scale: "1 1" },
          { scale: ".94 1.03", offset: 0.35 },
          { scale: "1.025 .99", offset: 0.72 },
          { scale: "1 1" },
        ],
        { duration: 1000, easing: "cubic-bezier(.2,.8,.25,1)" },
      );
      turn.id = "paper-turn";
    }
  };
  photo.addEventListener("click", (event) => {
    if (suppressClick && event.detail !== 0) {
      suppressClick = false;
      return;
    }
    flip(photo.getAttribute("aria-pressed") !== "true");
  });
  controls.querySelectorAll("[data-setting]").forEach((button) => {
    button.addEventListener("click", () => {
      world.dataset.world = button.dataset.setting;
      controls
        .querySelectorAll("[data-setting]")
        .forEach((item) =>
          item.setAttribute("aria-pressed", String(item === button)),
        );
    });
  });
  const place = (nextX, nextY) => {
    const narrow = world.clientWidth < 600;
    const limitX = narrow
      ? Math.max(10, (world.clientWidth - anchor.offsetWidth) / 2 - 15)
      : Math.min(160, world.clientWidth * 0.2);
    const rightLimit = narrow
      ? limitX
      : Math.min(
          limitX,
          Math.max(0, parseFloat(getComputedStyle(anchor).right) - 25),
        );
    paperX = Math.max(-limitX, Math.min(rightLimit, nextX));
    paperY = Math.max(narrow ? -35 : -65, Math.min(narrow ? 45 : 80, nextY));
    world.style.setProperty("--paper-x", paperX.toFixed(2));
    world.style.setProperty("--paper-y", paperY.toFixed(2));
    const heroStage = world.closest(".showcase-stage");
    if (heroStage) {
      heroStage.style.setProperty("--paper-x", paperX.toFixed(2));
      heroStage.style.setProperty("--paper-y", paperY.toFixed(2));
    }
    world.dataset.paperMoved = String(Math.abs(paperX) + Math.abs(paperY) > 1);
  };
  const settle = () => {
    world.classList.remove("is-dragging");
    world.style.setProperty("--paper-tilt", "0");
    if (active) {
      anchor.getAnimations().forEach((animation) => animation.cancel());
      anchor.animate(
        [
          { rotate: "-3deg" },
          { rotate: "2deg", offset: 0.4 },
          { rotate: "-1deg", offset: 0.7 },
          { rotate: "0deg" },
        ],
        { duration: 850, easing: "ease-out" },
      );
    }
  };
  const resetPaper = () => {
    place(0, 0);
    flip(false);
    settle();
  };
  resetButton.addEventListener("click", resetPaper);
  photo.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    suppressClick = false;
    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      initialX: paperX,
      initialY: paperY,
      moved: false,
    };
    photo.setPointerCapture(event.pointerId);
  });
  photo.addEventListener("pointermove", (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x,
      dy = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 7) return;
    drag.moved = true;
    world.classList.add("is-dragging");
    place(drag.initialX + dx, drag.initialY + dy);
    if (active)
      world.style.setProperty(
        "--paper-tilt",
        String(Math.max(-7, Math.min(7, dx * 0.045))),
      );
  });
  const endDrag = (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    const moved = drag.moved;
    suppressClick = moved;
    drag = null;
    if (photo.hasPointerCapture(event.pointerId))
      photo.releasePointerCapture(event.pointerId);
    if (moved) settle();
  };
  photo.addEventListener("pointerup", endDrag);
  photo.addEventListener("pointercancel", endDrag);
  photo.addEventListener("lostpointercapture", (event) => {
    if (drag?.id === event.pointerId) {
      drag = null;
      settle();
    }
  });
  photo.addEventListener("keydown", (event) => {
    const step = event.shiftKey ? 24 : 12;
    const moves = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    if (moves[event.key]) {
      event.preventDefault();
      place(paperX + moves[event.key][0], paperY + moves[event.key][1]);
    } else if (event.key === "Home" || event.key === "Escape") {
      event.preventDefault();
      resetPaper();
    }
  });
  window.addEventListener("resize", () => place(paperX, paperY), {
    passive: true,
  });
  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    world.style.setProperty("--look-x", "0");
    world.style.setProperty("--look-y", "0");
  };
  world.addEventListener("pointermove", (event) => {
    if (!active || !fine.matches) return;
    const rect = world.getBoundingClientRect();
    x = (event.clientX - rect.left) / rect.width - 0.5;
    y = (event.clientY - rect.top) / rect.height - 0.5;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (!active) return;
      world.style.setProperty("--look-x", x.toFixed(3));
      world.style.setProperty("--look-y", y.toFixed(3));
    });
  });
  world.addEventListener("pointerleave", reset);
  window.addEventListener("inha:motion", (event) => {
    active = event.detail.active;
    if (!active) {
      reset();
      anchor.getAnimations().forEach((animation) => animation.cancel());
      photo.getAnimations().forEach((animation) => animation.cancel());
    }
  });
  // Pause CSS ambient animations when their section is not visible.
  const animatedSections = document.querySelectorAll(
    ".curiosity-world, .hero-showcase, .thinking-sculpture, .plume-art",
  );
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("is-in-view", entry.isIntersecting),
        );
      },
      { rootMargin: "80px" },
    );
    animatedSections.forEach((section) => observer.observe(section));
  }
  document.addEventListener("visibilitychange", () => {
    document.documentElement.classList.toggle("page-hidden", document.hidden);
  });
})();
