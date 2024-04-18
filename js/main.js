(function(){

  // function init
  menu_action();

  // functions
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

          window.scrollTo(0, $anchor.offset().top);

          $menuContainer.fadeOut(); 
          $menuBtn.removeClass('active'); 
       });

  }

})();
