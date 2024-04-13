// s1 스와이프
var swiper = new Swiper(".swinner", {
  spaceBetween: 30,
  centeredSlides: true,
  loop : true, 
  // autoplay: {
  //   delay: 5500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", 
  },
});
// s1 스와이프
// s2 스와이프
var swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: 5,
  loop: true,
  loopAdditionalSlides : 2,
  loopFillGroupWithBlank : true,
  observer: true,
  observeParents: true,
});
// s2 스와이프
// s4 스와이프
var swiper2 = new Swiper(".swiper-container-2", {
  centeredSlides: true,
  slidesPerView: 1,
        spaceBetween: 12,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },      
});
// s4 스와이프
