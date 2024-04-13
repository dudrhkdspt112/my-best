
$(document).ready(function(){

    $(document).on('click', '.btn-open', function() {
        $('.modal-login').fadeIn();
        $('body').addClass('active');
    });

    $(document).on('click', '.btn-close', function() {
        $('.modal-login').fadeOut();
        $('body').removeClass('active');
    });
});