const homeSectionSwiper = new Swiper(".swiper-home", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".home-swiper-next",
    prevEl: ".home-swiper-prev",
  },
});
