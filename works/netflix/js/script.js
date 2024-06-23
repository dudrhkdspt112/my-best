
(function(){

    const faqItem = document.querySelectorAll('input[name="faq-item"]');

    faqItem.forEach(( item ) => {

        item.addEventListener('change', () => {

            const content = item.nextElementSibling.nextElementSibling;
            const height  = content.scrollHeight;

            if( item.checked ){

                content.classList.add('active');
                content.style.height = `${ height + 30 }px`;

            } else {

                content.classList.remove('active');
                content.style.height = 0;

            }

        });

    });

})();