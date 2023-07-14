let filterLogo = document.querySelector('.filter__logo');
let filterList = document.getElementById('filterList');
let filterBtn = document.getElementById('filterBtn');
let filterTitle = document.getElementById('filterTitle');
let filterItem = document.querySelectorAll('.filter__item');
let toBottom = document.getElementsByClassName('toBottom');

let checkFilter = document.getElementById('menuList');
let CheckMenuTitle = document.getElementById('menuTitle');

// ----------Открытие фильтра-----
// При нажатии на кнопку ,ему присваивается событие и выполняется функция 
filterBtn.addEventListener('click', function(){

    if (checkFilter.classList.contains('activMenu')){
        checkFilter.classList.remove('activMenu');
        CheckMenuTitle.classList.remove('enableTitle');
        MenuLogo.src="image/icons/menuWhite2.png";
    }

    FilterOn();

// проверяем если добавлен класс для активных списков, то тогда меняется иконка фильтра 
if (filterList.classList.contains('activFilter')) {
    filterLogo.src="image/filterLogoSvgBlack.svg";
} else {
    filterLogo.src="image/stats.png";
}

});
//---------------------------------------------------

function FilterOn(){
    filterList.classList.toggle('activFilter'); // добавляем новый класс списку фильтров, дисплэй блок 
filterTitle.classList.toggle('enableTitle'); // добавляем новый класс титлу, прозрачность ему бахаем

}


window.onload = addAll(); 
// Фильтр
function filter(prop) {
 if (prop == 'All'){
    addAll();
 } else {
    removeClass();
    addToScreen(prop);
    
}   
}

// Добавить элемент на страницу 
function addToScreen(prop){
    let addShow = document.getElementsByClassName(prop);
    for (let i =0; addShow.length > i; i++){
        addShow[i].classList.add('show');
    }
}

// Добавить ВСЕ элемент на страницу 
function addAll(){
    let all = document.getElementsByClassName('filterItem');
    for (let i =0; all.length > i; i++){
        all[i].classList.add('show');
    }
}

// Удалить классы с невыбранных
function removeClass () {
    let allFilterItem = document.getElementsByClassName('filterItem');
    for (let i =0; allFilterItem.length > i; i++){
        allFilterItem[i].classList.remove('show');
    }
}

let filterLocation = document.getElementById('filterLocation');


    document.addEventListener('mousedown', function(event) {
        if (filterList.classList.contains('activFilter')) {
      console.log('на экран ')
      // Проверяем, был ли клик вне области фильтра
      if (!filterLocation.contains(event.target) ) {
        // Закрываем фильтр
        filterList.classList.remove('activFilter');
        filterTitle.classList.remove('enableTitle');
        filterLogo.src = "image/icons/FilterLogo2.png";
        // Отключите другие действия, которые вы хотите выполнить при закрытии фильтра
      }
    }
    });
  
  
