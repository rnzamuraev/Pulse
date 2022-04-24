window.addEventListener("DOMContentLoaded", function () {
  let slider = require("./parts/slider"),
    tabs = require("./parts/tabs"),
    modal = require("./parts/modal"),
    valideForm = require("./parts/valideform"),
    smoothScroll = require("./parts/smooth-scroll"),
    arrowUpAnimate = require("./parts/arrowUpAnimate");

  slider();
  tabs();
  modal();
  valideForm();
  smoothScroll();
  arrowUpAnimate();
});
