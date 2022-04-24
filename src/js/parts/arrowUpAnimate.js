function arrowUpAnimate() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      $(".arrow-up").fadeIn();
    } else {
      $(".arrow-up").fadeOut("slow");
    }
  });
}

module.exports = arrowUpAnimate;
