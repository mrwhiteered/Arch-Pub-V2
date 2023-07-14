// ----------Открытие фильтра------
let opnMenu = document.getElementById('menuOpn');
let MenuLogo = document.querySelector('.menu__logo');
let MenuList = document.getElementById('menuList');

let MenuTitle = document.getElementById('menuTitle');
let menu__item = document.querySelectorAll('.menu__item');

let checkMenu = document.getElementById('filterList');
let ChekfilterTitle = document.getElementById('filterTitle');


// При нажатии на кнопку ,ему присваивается событие и выполняется функция 
opnMenu.addEventListener('click', function(){

    if(checkMenu){
    if (checkMenu.classList.contains('activFilter')){
        checkMenu.classList.remove('activFilter');
        ChekfilterTitle.classList.remove('enableTitle');
        filterLogo.src="image/filterLogoSvg.svg";
    }
}
    MenuList.classList.toggle('activMenu'); // добавляем новый класс списку фильтров, дисплэй блок 
    MenuTitle.classList.toggle('enableTitle'); // добавляем новый класс титлу, прозрачность ему бахаем
    
    // проверяем если добавлен класс для активных списков, то тогда меняется иконка фильтра 
    if (MenuList.classList.contains('activMenu')) {
            
        MenuLogo.src="image/menuBlack.svg";
       
    } else {
        MenuLogo.src="image/menuWhite.svg";
      
    }
    });
    //---------------------------------------------------


let menuLocation =document.getElementById('menuLocation')
    document.addEventListener('mousedown', function(event) {
        if (MenuList.classList.contains('activMenu')) {
      console.log('на экран ')
      // Проверяем, был ли клик вне области фильтра
      if (!menuLocation.contains(event.target)) {
        // Закрываем фильтр
        MenuList.classList.remove('activMenu');
        MenuTitle.classList.remove('enableTitle');
        MenuLogo.src = "image/menuWhite.svg";
        
      }
    }
    });