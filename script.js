"use strict";

const shareBtn = document.querySelector(".share-btn");
const popupWindow = document.querySelector(".popup-box");
const clickAnywhere = document.querySelector("document");

// CLose and open popups functions
const showPopup = function () {
  popupWindow.classList.toggle("hidden");
};
const hidePopup = function () {
  popupWindow.classList.add("hidden");
};

shareBtn.addEventListener("click", showPopup);
