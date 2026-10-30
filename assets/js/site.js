"use strict";

// Progressive enhancement: every paper and navigation link remains available
// without JavaScript; controls appear only once their handlers are installed.
const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#site-nav");
if (menuButton && navigation) {
  const setMenu = (open, restoreFocus = false) => {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    if (restoreFocus) menuButton.focus();
  };
  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false, true);
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });
  const desktop = matchMedia("(min-width: 601px)");
  desktop.addEventListener("change", () => setMenu(false));
  document.documentElement.classList.add("js-nav");
  menuButton.hidden = false;
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const search = document.querySelector("#publication-search");
if (search) {
  const papers = [...document.querySelectorAll(".publication")];
  const groups = [...document.querySelectorAll("[data-year-group]")];
  const filters = [...document.querySelectorAll("[data-filter]")];
  const result = document.querySelector("[data-results]");
  const empty = document.querySelector(".empty-state");
  let active = "all";
  const normalize = (value) =>
    value
      .normalize("NFKD")
      .toLowerCase()
      .replace(/[“”‘’"']/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  const update = () => {
    const terms = normalize(search.value).split(/\s+/).filter(Boolean);
    let count = 0;
    papers.forEach((paper) => {
      const topics = paper.dataset.topics.split(" ");
      const text = normalize(paper.dataset.search);
      const visible =
        (active === "all" || topics.includes(active)) && terms.every((term) => text.includes(term));
      paper.hidden = !visible;
      if (visible) count++;
    });
    groups.forEach((group) => {
      group.hidden = ![...group.querySelectorAll(".publication")].some((paper) => !paper.hidden);
    });
    filters.forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.filter === active)),
    );
    result.textContent = `${count} publication${count === 1 ? "" : "s"}`;
    empty.hidden = count !== 0;
  };
  filters.forEach((button) =>
    button.addEventListener("click", () => {
      active = button.dataset.filter;
      update();
    }),
  );
  search.addEventListener("input", update);
  document.querySelectorAll("[data-reset]").forEach((button) =>
    button.addEventListener("click", () => {
      active = "all";
      search.value = "";
      update();
      search.focus();
    }),
  );
  update();
  document.querySelector(".publication-controls").hidden = false;
}
