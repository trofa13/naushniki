$(document).ready(function() {
  
  //Делаем колонки текста
  $('.full-features').columnize({
    columns: 2
  });
  $('.advantages').columnize({
    columns: 2
  });

  //Добавляем отзыв на страницу(никакой отправки формы ибо некуда)
  $('.add-review__button').on('click', function(e) {
    e.preventDefault();
    //Запишем в переменные значения полей формы
    var starsAmount = $('input[name="stars"]:checked').val(),
      name = $('.name-input').val(),
      text = $('.review-text').val();

    //Создадим разметку звездочек
    var starsMarkup = '<i class="fa fa-star" aria-hidden="true"></i>';
    for (var i = 1; i < starsAmount; i++) {
      starsMarkup += '<i class="fa fa-star" aria-hidden="true"></i>';
    }
    //Создадим дату
    var date = Date.now();
    date = new Date(date).toLocaleDateString();

    //Создадим разметку для нового отзыва
    var newReview = '<li class="reviews__item">' +
      '<span class="review__name">' + name + ',</span>' +
      '<span class="review__date">' + date + '</span>' +
      '<span class="review__stars">' + starsMarkup + '</span>' +
      '<p class="review__text">' + text + '</p>' +
      '</li>';

    //проверим все ли заполнено?
    if (starsAmount && name && text) {
      $('.reviews__list').prepend(newReview);
      alert('Спасибо! Ваш отзыв добавлен!');

    } else {
      alert('Вы не заполнили форму!');
    }
  });

  //Меняем поля формы в зависимости от того какой способ доставки выбран
  $('input[name="delivery"]').on('change', function(e) {
    var val = e.target.id;
    if (val === 'self') {
      $('.delivery-type__courier').css("display", "none");
      $('.delivery-type__self').css("display", "block");

    } else {
      if (val === 'courier') {
        $('.delivery-type__courier').css("display", "block");
        $('.delivery-type__self').css("display", "none");
      }
    }
  });


  //Переключаем доступные цвета
  $('.switcher-wrapper').on('click', function(e) {
    if (!($(e.target).hasClass('active'))) {
      $(e.target).siblings().removeClass('active');
      $(e.target).addClass('active');
    }
  });
});