function modal() {
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
  });

  $(".button_catalog-item").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__subtitle").text(
        $(".catalog-item__subtitle").eq(i).text()
      );
      $(".overlay, #order").fadeIn("slow");
    });
  });
}

module.exports = modal;
