window.addEventListener("DOMContentLoaded", function () {
  let slider = require("./parts/slider"),
    tabs = require("./parts/tabs"),
    modal = require("./parts/modal"),
    valideForm = require("./parts/valideform"),
    scrollUp = require("./parts/scroll-ap");

  slider();
  tabs();
  modal();
  valideForm();
  scrollUp();
});
