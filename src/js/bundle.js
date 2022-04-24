/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/arrowUpAnimate.js":
/*!****************************************!*\
  !*** ./src/js/parts/arrowUpAnimate.js ***!
  \****************************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ ((module) => {

function slider() {
  const prev = document.querySelector(".carousel__nav-left"),
    next = document.querySelector(".carousel__nav-right"),
    dots = document.querySelectorAll(".carousel__dot"),
    wrapDots = document.querySelector(".carousel__dots"),
    slides = document.querySelectorAll(".carousel__images");

  let slideIndex = 1;

  function showSlide(ind) {
    if (ind > slides.length) {
      slideIndex = 1;
    } else if (ind < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    dots[slideIndex - 1].classList.add("active");
  }
  showSlide(slideIndex);

  function nextSlide(ind) {
    showSlide((slideIndex += ind));
  }

  prev.addEventListener("click", function () {
    nextSlide(-1);
  });

  next.addEventListener("click", function () {
    nextSlide(1);
  });

  function currentSlide(ind) {
    showSlide((slideIndex = ind));
  }

  wrapDots.addEventListener("click", function (event) {
    let target = event.target;

    for (i = 0; i < dots.length + 1; i++) {
      if (target.classList.contains("carousel__dot") && target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
  //   const img = document.querySelector(".carousel__image");

  //   const imgArray = [
  //     "img/slider/slide-1.png",
  //     "img/slider/slide-2.png",
  //     "img/slider/slide-3.png",
  //   ];

  //   const dots = document.querySelectorAll(".carousel__dot");

  //   let currentIndex = 0;

  //   function changeIndex(ind) {
  //     currentIndex = ind;
  //     slide(currentIndex);
  //   }

  //   function nextIndex(direction) {
  //     currentIndex += direction;

  //     if (currentIndex >= imgArray.length) {
  //       currentIndex = 0;
  //     } else if (currentIndex < 0) {
  //       currentIndex = imgArray.length - 1;
  //     }

  //     slide(currentIndex);
  //   }

  //   function updatesDots(index) {
  //     for (let dot of dots) {
  //       dot.classList.remove("active");
  //     }

  //     dots[index].classList.add("active");
  //   }

  //   function slide(index) {
  //     img.src = imgArray[index];

  //     updatesDots(index);
  //   }
}

module.exports = slider;


/***/ }),

/***/ "./src/js/parts/smooth-scroll.js":
/*!***************************************!*\
  !*** ./src/js/parts/smooth-scroll.js ***!
  \***************************************/
/***/ ((module) => {

function smoothScroll() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

module.exports = smoothScroll;


/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/***/ ((module) => {

function tabs() {
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
}

module.exports = tabs;


/***/ }),

/***/ "./src/js/parts/valideform.js":
/*!************************************!*\
  !*** ./src/js/parts/valideform.js ***!
  \************************************/
/***/ ((module) => {

function valideForm() {
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
}

module.exports = valideForm;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener("DOMContentLoaded", function () {
  let slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
    tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
    modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
    valideForm = __webpack_require__(/*! ./parts/valideform */ "./src/js/parts/valideform.js"),
    smoothScroll = __webpack_require__(/*! ./parts/smooth-scroll */ "./src/js/parts/smooth-scroll.js"),
    arrowUpAnimate = __webpack_require__(/*! ./parts/arrowUpAnimate */ "./src/js/parts/arrowUpAnimate.js");

  slider();
  tabs();
  modal();
  valideForm();
  smoothScroll();
  arrowUpAnimate();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map