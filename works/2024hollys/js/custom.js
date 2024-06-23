var swiper = new Swiper(".mainslider", {
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
  });