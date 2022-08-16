"use strict";

const tabsContainer = document.querySelector(".calculation-tab-container");
const tabs = document.querySelectorAll(".calculation-content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations-tab");

  //    GUARD CLAUSE
  if (!clicked) return;

  //   ACTIVE TAB

  //   CONTENT AREA
  //   Hides the inactive tabs
  tabs.forEach((t) => t.classList.add("calculation--active"));

  //   Shows the selected tab
  document
    .querySelector(`.calculation--active--${clicked.dataset.tab}`)
    .classList.remove("calculation--active");
});

// API CALL
const response = async function () {
  try {
    const res = await fetch("../data/jsonactual.json");

    const data = await res.json();
  } catch (err) {
    console.error(`${err}☹`);
  }
};
response();
