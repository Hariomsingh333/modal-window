"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close");
const btnOpen = document.querySelectorAll(".button");

btnOpen.forEach((text) => {
  text.addEventListener("click", () => {
    // console.log(`btn is clicked`);
    modal.classList.remove("lock");
    modal.classList.remove("overlay");
  });
});
btnClose.addEventListener("click", () => {
  modal.classList.add("lock");
});
overlay.addEventListener("click", () => {
  modal.classList.add("lock");
  overlay.classList.add("lock");
});
