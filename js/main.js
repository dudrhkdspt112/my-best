
$(function() {
    new WOW().init();
    $('#fullpage').fullpage({
      scrollBar:true
    });
  });
  
  (function(){
  
      menu_action();
  
      function menu_action(){
  
          const $menuBtn = $('.btn_menu');
          const $menuContainer = $('#menu_area');
          const $menuItem = $('#menu_area > ul > li > a');
  
          $menuBtn.on('click', ( e ) => {
              e.preventDefault();
  
              $menuContainer.fadeToggle(); 
              $menuBtn.toggleClass('active'); 
           });
  
           $menuItem.on('click', ( e ) => {
              e.preventDefault();
  
              const $anchor = $(e.currentTarget.getAttribute('href'));
  
              $.fn.fullpage.moveTo($anchor.index() + 1); 
  
              $menuContainer.fadeOut(); 
              $menuBtn.removeClass('active'); 
           });
  
      }
  
  })();
