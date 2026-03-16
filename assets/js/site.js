document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll("#current-year").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const searchInput = document.querySelector("[data-publication-search]");
  const filterButtons = Array.from(document.querySelectorAll("[data-filter-button]"));
  const yearGroups = Array.from(document.querySelectorAll("[data-year-group]"));
  const cards = Array.from(document.querySelectorAll(".paper-card"));
  const countNode = document.querySelector("[data-publication-count]");
  const emptyState = document.querySelector("[data-publication-empty]");

  if (!searchInput || cards.length === 0) {
    return;
  }

  let activeFilter = "all";

  const matchesFilter = (card, filter) => {
    const topics = (card.dataset.topics || "").split(/\s+/).filter(Boolean);
    const isFeatured = card.dataset.featured === "true";
    const isFirstAuthor = card.dataset.firstAuthor === "true";

    if (filter === "all") return true;
    if (filter === "featured") return isFeatured;
    if (filter === "first-author") return isFirstAuthor;
    return topics.includes(filter);
  };

  const applyFilter = () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const haystack = (card.dataset.search || "").toLowerCase();
      const passSearch = haystack.includes(query);
      const passFilter = matchesFilter(card, activeFilter);
      const visible = passSearch && passFilter;

      card.classList.toggle("is-hidden", !visible);
      if (visible) visibleCount += 1;
    });

    yearGroups.forEach((group) => {
      const hasVisibleCard = Array.from(group.querySelectorAll(".paper-card")).some(
        (card) => !card.classList.contains("is-hidden")
      );
      group.classList.toggle("is-hidden", !hasVisibleCard);
    });

    if (countNode) {
      countNode.textContent = `${visibleCount} result${visibleCount === 1 ? "" : "s"}`;
    }

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filterButton || "all";

      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      applyFilter();
    });
  });

  searchInput.addEventListener("input", applyFilter);
  applyFilter();
});