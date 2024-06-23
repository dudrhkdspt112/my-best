// section4
var swiper1 = new Swiper(".containerswiper", {
  // spaceBetween: 30,
  centeredSlides: true,
  loop : true, 
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", 
  },
  breakpoints: {
    392: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
  },
});
// section4
// section5
var swiper2 = new Swiper(".practice-sp", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
  },

});
//section5