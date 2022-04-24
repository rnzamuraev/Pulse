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
