function scrollUp() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1200) {
        $(".arrow-up").fadeIn();
      } else {
        $(".arrow-up").fadeOut("slow");
      }
    });

    $("a[href=#up]").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
    });
}

module.exports = scrollUp;