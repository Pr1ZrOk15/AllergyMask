// header_menu JS
$(function () {
  $(".bars").click(function () {
    $(".header_menu").toggleClass("header-show");
    $("body").addClass("scroll");
  });
  $(".close").click(function () {
    closeModal();
  });
  function closeModal() {
    $(".header_menu").removeClass("header-show");
    $("body").removeClass("scroll");
  }

  const modal = document.querySelector(".header_menu");

  modal.addEventListener("click", (e) => {
    if (modal === e.target) {
      closeModal();
    }
  });
});

// ========= home slider ===============
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ========= reviews-slider ===============
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
    },
    940: {
      slidesPerView: 3,
    },
    939: {
      slidesPerView: 2,
    },
    621: {
      slidesPerView: 2,
    },
    620: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
