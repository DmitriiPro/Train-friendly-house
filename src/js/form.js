const form = () => {
    const formSubtitle = $('.form__subtitle'); // нашли заголовок в форме

    $('.form-field__input-num').focus( () => { // при фокусе на поле меняем текст
        formSubtitle
        .text(`Введите ваш телефон`)
    })

    $('.form-field__input-mail').focus( () => { // при фокусе на поле меняем текст
        formSubtitle
        .text(`Введите ваш e-mail`)
    })

    $('.form__inp').blur( () => { // отводим от инпута после фокуса и меняется текст чтобы заполнил форму
        formSubtitle.text('Заполните форму');
    })

    // работа с формой
    
    $('.form__form-input').submit(function (event) {
        event.preventDefault();
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            type: 'POST',
            data: $(this).serialize(),
            success(data) {
                formSubtitle.text('Спасибо ваша заявка принята, номер заявки ' + data.id)
            }, 
            error() {
                formSubtitle.text('Что то пошло не так, попробуйте позже!')
            } 
        })
        
    });


};

export  {form}