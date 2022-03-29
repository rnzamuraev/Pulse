const img = document.querySelector(".carousel__image");

const imgArray = [
  "img/slider/slide-1.png",
  "img/slider/slide-2.png",
  "img/slider/slide-3.png",
];

const dots = document.querySelectorAll(".carousel__dot");

let currentIndex = 0;

function changeIndex(ind) {
  currentIndex = ind;
  slide(currentIndex);
}

function nextIndex(direction) {
  currentIndex += direction;

  if (currentIndex >= imgArray.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imgArray.length - 1;
  }

  slide(currentIndex);
}

function updatesDots(index) {
  for (let dot of dots) {
    dot.classList.remove("active");
  }

  dots[index].classList.add("active");
}

function slide(index) {
  img.src = imgArray[index];

  updatesDots(index);
}

// Tabs

$(document).ready(function () {
  $("ul.catalog__tabs").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("catalog__tab_active")
      .siblings()
      .removeClass("catalog__tab_active")
      .closest("div.container")
      .find("div.catalog__content")
      .removeClass("catalog__content_active")
      .eq($(this).index())
      .addClass("catalog__content_active");
  });

  // $(".catalog-item__link_more").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog-item__content").toggleClass("catalog-item__content_active");
  //     $(".catalog-item__list").toggleClass("catalog-item__list_active");
  //   });
  // });

  // $(".catalog-item__link_back").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog-item__content").toggleClass("catalog-item__content_active");
  //     $(".catalog-item__list").toggleClass("catalog-item__list_active");
  //   });
  // });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link_more");
  toggleSlide(".catalog-item__link_back");

  // modal

  // $("[data-modal=consultation]").fadeOut();
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

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!"),
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  $("input[name=phone]").mask("+7 (999) 999-99-99");

  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").fadeIn("slow");

      $("form").trigger("reset");
    });
    return false;
  });

  // up - scrol

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
});
