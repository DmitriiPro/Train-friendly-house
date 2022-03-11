const burger = () => {
    const burgerBtn = $('.burg-btn');
    const modalBurger = $('.burger-menu');

    burgerBtn.on('click', function() {  // открывает окно и закрывает
        modalBurger.fadeToggle(500);
    });

    
    $(document).mouseup(function(e) {  // при нажатии не на кнопку закрывает бургер
        var $target = $(e.target);
        if ($target.closest(modalBurger).length == 0 && $target.closest(burgerBtn).length == 0) {
            modalBurger.hide();
        }
    });

};

export {burger}