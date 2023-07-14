const nav = document.querySelector('.list__about');
const burger = document.querySelector('.about__burger');
const navLinks = document.querySelectorAll('.item__about');

function burgerClick() {
  nav.classList.toggle('list__about_active');
  burger.classList.toggle('active');

  // if (nav.classList.contains('list__about_active')) {
  //   // Если класс 'list__about_active' добавлен, запускаем анимацию
  //   nav.style.animation = 'fadeInFromTop .5s ease forwards';
  // } else {
  //   // Если класс 'list__about_active' удален, удаляем анимацию
  //   nav.style.animation = 'fadeOutFromTop .5s ease forwards';
  // }

  // navLinks.forEach((link, index) => {
  //   if (link.style.animation) {
  //     link.style.animation = '';
  //   } else {
  //     link.style.animation = `navLinks 1.5s ease forwards ${index / 7 + 0.3}s`;
  //   }
  // });
}


document.addEventListener('DOMContentLoaded', function() {
  var svg = document.querySelector('.container');
  var line = document.querySelector('.line');
  var pathData = '';

  var opacity = 1; // Изначальная прозрачность линии
  var maxOpacity = 1; // Максимальная прозрачность линии
  var fadeOutTimer; // Идентификатор таймера

  document.addEventListener('mousemove', function(event) {
    var xPos = event.clientX;
    var yPos = event.clientY;

    if (pathData === '') {
      pathData += 'M ' + xPos + ' ' + yPos; // Установка начальной точки пути
    } else {
      pathData += ' L ' + xPos + ' ' + yPos;
    }

    line.setAttribute('d', pathData);
    line.style.opacity = opacity;

    clearTimeout(fadeOutTimer); // Очищаем предыдущий таймер

    fadeOutTimer = setInterval(function() {
      opacity -= 0.05; // Уменьшаем прозрачность на каждом шаге
      line.style.opacity = opacity;

      if (opacity <= 0) {
        clearInterval(fadeOutTimer); // Очищаем интервал после полного исчезновения
        line.removeAttribute('d'); // Удаляем путь линии
        pathData = ''; // Сбрасываем pathData
        opacity = maxOpacity; // Сбрасываем прозрачность линии
      }
    }, 30); // Интервал обновления прозрачности (30 миллисекунд)
  });

  svg.addEventListener('mouseleave', function() {
    line.style.opacity = '0';
    line.removeAttribute('d');
    clearInterval(fadeOutTimer); // Очищаем интервал при выходе из области
    pathData = ''; // Сбрасываем pathData
    opacity = maxOpacity; // Сбрасываем прозрачность линии
  });
});
