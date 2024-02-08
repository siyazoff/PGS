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

const experienceSectionSwiper = new Swiper(".swiper-experience", {
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 800,

  // Navigation arrows
  navigation: {
    nextEl: ".experience-swiper-next",
    prevEl: ".experience-swiper-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {},
  },
});

const partnersSectionSwiper = new Swiper(".swiper-partners", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 24,
  speed: 3000,
  freeMode: true,
  freeModeMomentum: false,

  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {},
  },
});

const goalsSectionSwiper = new Swiper(".swiper-goals", {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 800,
  grabCursor: true,

  pagination: {
    el: ".swiper-goals-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-goals-next",
    prevEl: ".swiper-goals-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {},
  },
});
