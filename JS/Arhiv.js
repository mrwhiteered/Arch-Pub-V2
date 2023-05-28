
/* 
// ДРУГОЙ ВАРИАНТ НАПИСАНИЯ ФУНКЦИИ
fetch('JS/stor.json')                        // обращаемся к json
.then(response => response.json())       // обрабатываем полученнный json в объект 
.then(data => {                         // обрабатываем объект в массив 
  const dataArray = Object.values(data); 
  
  //ТУТ вся функция
  
})
.catch(error => console.error(error));
*/

async function getData() {
  let url = 'JS/stor.json'; // храним url 
  let response = await fetch(url); // запрос к файлу 
  let data = await response.json(); // декодируем формат json в объект 
  let dataArr = Object.values(data); // объект в массив (Object.values - возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте )
  // console.log("Array: ", dataArr);
  
  const dataContainer = document.getElementById("containerForFilter"); // id контейнера куда все будет помещать
  
  for(let i = 0; i < dataArr.length; i++) { // перебор массива 
    const item = dataArr[i];
    
    const newItem = document.createElement('div'); // создаем новый элемент newItem 
    // меняем содержимое элмента newItem (дописываем туда все нужные теги классы и успеваем вставлять значения )
    // обратные кавычки для возможности вписывания JS кода 
    // ${} - для добавления JS (внутри обращаюсь  к нужным элементам массива)
    newItem.innerHTML = ` 
    <div>
    <div class="toBottom">
    <img src="${item.img}" alt="${item.name}">
    </div>
    <div class="dateCreater">
    <div>${item.date}</div>
    <div>${item.creater}</div>
    </div>
    <p class="correctTextDes">${item.name}</p>
    </div>
    `;
    // Не забываем newItem тоже добавить пару классов 
    newItem.classList.add("filterItem");
    newItem.classList.add(item.category);
    newItem.classList.add("show");
    //   и айдишник добавляем
    newItem.id=[i];
    // Ну и в итоге вставляем это все в контейнер 
    try{
      dataContainer.appendChild(newItem);
      console.log('Там где надо все норм');
    }
    catch(e){
      console.log('Ты на другой страничке и блока не существует, ничего страшного ' +  e);
      return
    };
  };
  //вторая страница открытие 
  const FItem = document.getElementsByClassName('filterItem');
  for (let j = 0; j < FItem.length; j++) {
    const oneItem = FItem[j];
    oneItem.addEventListener('click', function() {
      window.location.href = 'maket.html?id=' + j;
    });
  }
}

getData();


// ----------------




