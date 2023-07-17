let btnCopy = document.getElementById('copyText');
let textToCopy = btnCopy.innerHTML;

let info = document.querySelector('.info');
let infoTimer = null; // Добавляем переменную для хранения идентификатора таймера

function copy() {
  try {
    navigator.clipboard.writeText(textToCopy);

    info.classList.add('activeInfo');

    console.log('текст скопирован');

    // Если уже есть таймер, сбрасываем его
    if (infoTimer) {
      clearInterval(infoTimer);
    }

    // Устанавливаем новый таймер и сохраняем его идентификатор
    infoTimer = setInterval(hide, 3000);
  } catch (err) {
    console.error('Не удалось скопировать: ', err);
  }
}

function hide() {
  info.classList.remove('activeInfo');
}
