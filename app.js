"use strict";

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

const pre = document.querySelector(".loader");
window.addEventListener("load", () => {
  pre.style.display = "none";
});
