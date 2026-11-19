document.documentElement.classList.add("js");

const newsList = document.querySelector("#news-list");
const newsToggle = document.querySelector("#news-toggle");
const researchList = document.querySelector("#research-list");
const researchButtons = document.querySelectorAll("[data-research-filter]");

newsToggle?.addEventListener("click", () => {
  const expanded = newsList.classList.toggle("is-expanded");
  newsToggle.setAttribute("aria-expanded", String(expanded));
  newsToggle.textContent = expanded ? "show less" : "show more";
});

researchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const showAll = button.dataset.researchFilter === "all";
    researchList.classList.toggle("show-all", showAll);

    researchButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });
  });
});
