"use strict";

(() => {
  const sculpture = document.querySelector(".thinking-sculpture");
  const button = sculpture?.querySelector(".planet-play");
  if (!button) return;
  const stage = sculpture.querySelector(".sculpture-stage");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const orbit = sculpture.querySelector(".sculpture-orbit");
  const orb = sculpture.querySelector(".sculpture-orb");
  const flower = sculpture.querySelector(".sculpture-flower");
  let turn = 0;
  let animations = [];
  button.hidden = false;
  button.addEventListener("click", () => {
    turn += 1;
    sculpture.dataset.palette = String(turn % 3);
    sculpture.classList.add("has-spun");
    button.querySelector(".planet-invitation").textContent =
      "another little orbit? ↻";
    animations.forEach((animation) => animation.cancel());
    animations = [];
    stage.querySelectorAll(".planet-spark").forEach((spark) => spark.remove());
    if (reduced.matches) return;
    animations.push(
      orbit.animate([{ rotate: "0deg" }, { rotate: "360deg" }], {
        duration: 1500,
        easing: "cubic-bezier(.15,.7,.25,1)",
      }),
      orb.animate(
        [
          { scale: "1" },
          { scale: ".9 1.1", offset: 0.2 },
          { scale: "1.08 .96", offset: 0.5 },
          { scale: "1" },
        ],
        {
          duration: 1000,
          easing: "ease-out",
        },
      ),
      flower.animate([{ rotate: "0deg" }, { rotate: "-150deg" }], {
        duration: 1400,
        easing: "cubic-bezier(.15,.7,.25,1)",
      }),
    );
    const colors = ["#fca6cd", "#8598ff", "#f7d77e", "#91d9c4"];
    for (let i = 0; i < 10; i++) {
      const spark = document.createElement("span");
      spark.className = "planet-spark";
      spark.style.background = colors[(i + turn) % colors.length];
      stage.append(spark);
      const angle = (i * Math.PI * 2) / 10;
      const radius = stage.clientWidth * (0.35 + (i % 2) * 0.1);
      const animation = spark.animate(
        [
          { transform: "translate(-50%,-50%) scale(0)", opacity: 0 },
          { opacity: 1, offset: 0.15 },
          {
            transform: `translate(${Math.cos(angle) * radius}px,${Math.sin(angle) * radius}px) scale(.4)`,
            opacity: 0,
          },
        ],
        { duration: 900 + i * 35, easing: "cubic-bezier(.12,.7,.3,1)" },
      );
      animations.push(animation);
      animation.onfinish = () => spark.remove();
    }
  });
})();
