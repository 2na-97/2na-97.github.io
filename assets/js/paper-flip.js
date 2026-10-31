"use strict";

document.querySelectorAll(".paper-flip").forEach((card) => {
  const button = card.querySelector(".paper-flip-toggle");
  const front = card.querySelector(".paper-front");
  const back = card.querySelector(".paper-back");
  const venue = front.querySelector(".venue-badge").textContent;
  const setFlipped = (flipped) => {
    card.classList.toggle("is-flipped", flipped);
    card.classList.add("has-flipped");
    button.setAttribute("aria-expanded", String(flipped));
    button.setAttribute(
      "aria-label",
      flipped
        ? `Show ${venue} research figure`
        : `Flip ${venue} card to read contributions`,
    );
    front.setAttribute("aria-hidden", String(flipped));
    back.setAttribute("aria-hidden", String(!flipped));
  };
  card.classList.add("is-flippable");
  button.hidden = false;
  button.addEventListener("click", () =>
    setFlipped(!card.classList.contains("is-flipped")),
  );
  button.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setFlipped(false);
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("is-in-view", entry.isIntersecting),
      );
    },
    { threshold: 0.2 },
  );
  document
    .querySelectorAll(".paper-flip")
    .forEach((card) => observer.observe(card));
}
