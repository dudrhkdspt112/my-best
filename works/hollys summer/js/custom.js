$(document).ready(function(){
  var i = 0;
  $('.slide-btn.right').click(function(){
    i++;
    if(i>3){
      i=0;
    }
    $('.inner-slide').animate({
      left: -100 * i + 'vw'
    })
    $('.inner-bar').animate({
      left: 50 * (i-3) + 'px'
    })
  })
  $('.slide-btn.left').click(function(){
    i--;
    if(i<0){
      i=3;
    }
    $('.inner-slide').animate({
      left: -100 * i + 'vw'
    })
    $('.inner-bar').animate({
      left: 50 * (i-3) + 'px'
    })
  })
  setInterval(function(){
      $('.slide-btn.right').trigger('click')
  },5000);

  $('.mall-wrap').slick({
    dots:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.top-btn').click(function(){
    $(this).toggleClass('active')
    $('.search-box').slideToggle('active')
    $('.overlay').fadeToggle('active')
  })

  $('.close-btn').click(function(){
    $('.search-box').slideUp()
    $('.overlay').fadeOut()
    $('.top-btn').removeClass('active')
  })
  // mobile
  $('.mo-main').click(function(){
    $(this).toggleClass('active')
    $(this).siblings().removeClass('active')
    $(this).next().slideToggle()
    $(this).siblings('.mo-main').next().slideUp()
  })
  $('.more-btn').click(function(){
    $('.mo-nav').fadeIn()
  })
  $('.xi-close').click(function(){
    $('.mo-nav').fadeOut()
  })
})
