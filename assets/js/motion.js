"use strict";

(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".motion-toggle");
  if (!toggle) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const scenes = [...document.querySelectorAll("[data-scroll-scene]")];
  const band = document.querySelector(".keyword-band");
  const directions = [...document.querySelectorAll(".direction")];
  const sculptureLabel = document.querySelector("[data-sculpture-label]");
  const stepLabels = [
    "01 / SEE & UNDERSTAND",
    "02 / PREDICT THE PHYSICAL WORLD",
    "03 / TURN REASONING INTO ACTION",
  ];
  const revealNodes = [
    ...document.querySelectorAll(
      ".section-heading, .work-card, .news-item, .plume-section, .recognition-card, .about-heading, .project",
    ),
  ];
  const pop = document.querySelector(".curiosity-pop");
  const particles = document.querySelector(".joy-particles");
  let paused = false;
  try {
    paused = localStorage.getItem("inha-motion") === "off";
  } catch {
    /* Private browsing may block storage. */
  }
  let active = false;
  let frame = 0;
  let currentStep = -1;
  let observer;
  let popTimer;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  // Scroll work is coalesced into one frame; no scroll interception or idle RAF loop.
  const renderScroll = () => {
    frame = 0;
    const height = innerHeight;
    const scrollable = Math.max(1, document.documentElement.scrollHeight - height);
    root.style.setProperty("--scroll-progress", String(clamp(scrollY / scrollable, 0, 1)));
    if (!active || document.hidden) return;
    const measurements = scenes.map((node) => ({ node, rect: node.getBoundingClientRect() }));
    const bandRect = band?.getBoundingClientRect();
    const directionRects = directions.map((node) => node.getBoundingClientRect());
    measurements.forEach(({ node, rect }) => {
      if (rect.bottom < -100 || rect.top > height + 100) return;
      const progress = clamp((height - rect.top) / (height + rect.height), 0, 1);
      node.style.setProperty("--scene", progress.toFixed(4));
    });
    if (bandRect && bandRect.bottom > 0 && bandRect.top < height) {
      const shift = innerWidth > 800 ? clamp((height * 0.55 - bandRect.top) * 0.08, -25, 25) : 0;
      band.style.setProperty("--band-shift", shift.toFixed(2));
    }
    if (directionRects.length) {
      let nearest = 0;
      directionRects.forEach((rect, i) => {
        if (
          Math.abs(rect.top + rect.height / 2 - height * 0.55) <
          Math.abs(directionRects[nearest].top + directionRects[nearest].height / 2 - height * 0.55)
        )
          nearest = i;
      });
      if (nearest !== currentStep) {
        currentStep = nearest;
        directions.forEach((node, i) => node.classList.toggle("is-current", i === nearest));
        if (sculptureLabel) sculptureLabel.textContent = stepLabels[nearest];
      }
    }
  };
  const scheduleScroll = () => {
    if (!frame) frame = requestAnimationFrame(renderScroll);
  };
  const showAll = () => {
    observer?.disconnect();
    revealNodes.forEach((node) => node.classList.add("is-revealed"));
  };
  const applyPreference = () => {
    active = !paused && !reduced.matches;
    root.classList.toggle("motion-active", active);
    root.classList.toggle("motion-off", !active);
    toggle.setAttribute("aria-pressed", String(active));
    toggle.setAttribute("aria-label", active ? "Pause animations" : "Enable animations");
    toggle.querySelector("[data-motion-label]").textContent = active ? "Motion on" : "Motion off";
    toggle.disabled = reduced.matches;
    toggle.title = reduced.matches
      ? "Following your device’s reduced-motion setting"
      : active
        ? "Pause decorative motion"
        : "Enable decorative motion";
    if (pop) pop.disabled = !active;
    if (!active) {
      showAll();
      pop?.getAnimations().forEach((animation) => animation.cancel());
      scenes.forEach((node) => node.style.setProperty("--scene", "0"));
      document.querySelectorAll("[data-tilt]").forEach((node) => {
        node.style.setProperty("--tilt-x", "0deg");
        node.style.setProperty("--tilt-y", "0deg");
      });
      particles?.replaceChildren();
    }
    window.dispatchEvent(new CustomEvent("inha:motion", { detail: { active } }));
    scheduleScroll();
  };
  toggle.addEventListener("click", () => {
    paused = !paused;
    try {
      localStorage.setItem("inha-motion", paused ? "off" : "on");
    } catch {
      /* Session preference still applies. */
    }
    applyPreference();
  });
  reduced.addEventListener("change", applyPreference);
  toggle.hidden = false;
  applyPreference();

  if (active && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }),
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" },
    );
    revealNodes.forEach((node, i) => {
      // Already visible content stays readable, including restored deep scroll positions.
      if (node.getBoundingClientRect().top < innerHeight) return;
      node.classList.add("will-reveal");
      node.style.setProperty("--reveal-delay", `${(i % 2) * 65}ms`);
      observer.observe(node);
    });
  }
  document.addEventListener("focusin", (event) => {
    const target = event.target.closest(".will-reveal");
    if (target) {
      target.classList.add("is-revealed");
      observer?.unobserve(target);
    }
  });
  window.addEventListener("beforeprint", showAll);
  window.addEventListener("scroll", scheduleScroll, { passive: true });
  window.addEventListener("resize", scheduleScroll, { passive: true });
  window.addEventListener("pageshow", scheduleScroll);
  window.addEventListener("load", scheduleScroll, { once: true });
  document.addEventListener("visibilitychange", scheduleScroll);

  document.querySelectorAll(".work-art, .portrait").forEach((node) => {
    node.setAttribute("data-tilt", "");
    let pointerFrame = 0;
    let x = 0,
      y = 0;
    node.addEventListener("pointermove", (event) => {
      if (!active || !finePointer.matches) return;
      const rect = node.getBoundingClientRect();
      x = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
      y = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        if (!active) return;
        node.style.setProperty("--tilt-x", `${-y * 7}deg`);
        node.style.setProperty("--tilt-y", `${x * 7}deg`);
      });
    });
    node.addEventListener("pointerleave", () => {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      node.style.setProperty("--tilt-x", "0deg");
      node.style.setProperty("--tilt-y", "0deg");
    });
  });

  if (pop && particles && typeof pop.animate === "function") {
    pop.addEventListener("click", () => {
      if (!active) return;
      clearTimeout(popTimer);
      particles.replaceChildren();
      pop.getAnimations().forEach((animation) => animation.cancel());
      pop.animate(
        [
          { transform: "rotate(12deg) scale(1)" },
          { transform: "rotate(-12deg) scale(.8,1.12)", offset: 0.2 },
          { transform: "rotate(25deg) scale(1.18,.93)", offset: 0.55 },
          { transform: "rotate(12deg) scale(1)" },
        ],
        { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" },
      );
      const colors = ["#f596c9", "#b9cdff", "#e6f495", "#ffbb8e", "#a69aeb"];
      for (let i = 0; i < 14; i++) {
        const particle = document.createElement("span");
        particle.className = "joy-particle";
        particle.style.setProperty("--particle-color", colors[i % colors.length]);
        particles.append(particle);
        const angle = (Math.PI * 2 * i) / 14;
        const radius = 65 + (i % 4) * 20;
        const animation = particle.animate(
          [
            { transform: "translate(0,0) scale(.2)", opacity: 0 },
            {
              transform: `translate(${Math.cos(angle) * radius * 0.5}px,${Math.sin(angle) * radius * 0.5}px) scale(1) rotate(90deg)`,
              opacity: 1,
              offset: 0.3,
            },
            {
              transform: `translate(${Math.cos(angle) * radius}px,${Math.sin(angle) * radius + 40}px) scale(.3) rotate(220deg)`,
              opacity: 0,
            },
          ],
          { duration: 850 + (i % 3) * 90, easing: "cubic-bezier(.15,.65,.4,1)" },
        );
        animation.onfinish = () => particle.remove();
      }
      popTimer = setTimeout(() => particles.replaceChildren(), 1200);
    });
  }
})();
