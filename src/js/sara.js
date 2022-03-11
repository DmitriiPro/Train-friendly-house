const sara = () => {

    const modalBtn = $('.sara__button');
    const modalClose = $('.sara__modal-knopa');
    const modalOrder = $('.modal-order');
    const modalTitle = $('.sara__subtitle'); // нашел заголовок в форме
    const modalBtnHelp = $('.help__btn-modal'); // кнопка из блока help
    
    modalBtn.on('click', function() {  // открывает окно
        modalOrder.show(500);
    });

    modalBtnHelp.on('click', function() {  // открывает окно
        modalOrder.show(500);
    });

    modalOrder.click(function(e) {
        if ($(e.target).closest('.form-modal').length == 0) { // кликаем мимо окна за формой и окно закрывается
            $(this).fadeOut();					
        }
    });

    modalClose.on('click', function() {  // при клике на кнопку закрывает окно
        modalOrder.hide(500);
    });

    $('.form-field__input-number').focus( function() { // при фокусе на поле меняем текст
        modalTitle
        .text(`Введите ваш телефон`)
    })

    $('.form-field__input-email').focus( function() { // при фокусе на поле меняем текст
        modalTitle
        .text(`Введите ваш e-mail`)
    })

    $('.form-field__input').blur( function() { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        modalTitle.text('Заполните форму');
    })

    // работа с формой
    
    $('.sara__form-input').submit(function (event) {
        event.preventDefault();
    
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            type: 'POST',
            data: $(this).serialize(),
            success(data) {
                modalTitle.text('Спасибо ваша заявка принята, номер заявки ' + data.id)
            }, 
            error() {
                modalTitle.text('Что то пошло не так, попробуйте позже!')
            } 
        })
        
    });


}

export  {sara}