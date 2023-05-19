// ----------Открытие фильтра-------------------------------------------
let opnMenu = document.getElementById('menuOpn');
let MenuLogo = document.querySelector('.menu__logo')
let MenuList = document.getElementById('menuList');

let MenuTitle = document.getElementById('menuTitle')
let menu__item = document.querySelectorAll('.menu__item');

// При нажатии на кнопку ,ему присваивается событие и выполняется функция 
opnMenu.addEventListener('click', function(){
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