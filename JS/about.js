const nav = document.querySelector('.list__about');
const burger = document.querySelector('.about__burger');
const navLinks = document.querySelectorAll('.item__about');

function burgerClick() {
  nav.classList.toggle('list__about_active');
  burger.classList.toggle('active');

  if (nav.classList.contains('list__about_active')) {
    // Если класс 'list__about_active' добавлен, запускаем анимацию
    nav.style.animation = 'fadeInFromTop .5s ease forwards';
  } else {
    // Если класс 'list__about_active' удален, удаляем анимацию
    nav.style.animation = '';
  }

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinks 1.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
}
