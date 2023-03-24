var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
console.log(id);
// add the ID to the text element
var textElement = document.getElementById("myText");

if (id!=null){
async function getData() {
    let url = 'JS/stor.json'; // храним url 
    let response = await fetch(url); // запрос к файлу 
    let data = await response.json(); // декодируем формат json в объект 
    let dataArr = Object.values(data); // объект в массив (Object.values - возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте )
     console.log("Array: ", dataArr);
  
    var textElement = document.getElementById("myText");// id контейнера куда все будет помещать
          
    let idelement = dataArr[id];
    
                      const newItem = document.createElement('div'); // создаем новый элемент newItem 
            // меняем содержимое элмента newItem (дописываем туда все нужные теги классы и успеваем вставлять значения )
            // обратные кавычки для возможности вписывания JS кода 
            // ${} - для добавления JS (внутри обращаюсь  к нужным элементам массива)
                      newItem.innerHTML = ` 
            <div>
                <div class="toBottom">
                   <img src="${idelement.img}" alt="${idelement.name}">
               </div>
                <div class="dateCreater">
                  <div>${idelement.date}</div>
                  <div>${idelement.creater}</div>
                </div>
                <p class="correctTextDes">${idelement.name}</p>
            </div>
                      `;

            // Не забываем newItem тоже добавить пару классов 
                    newItem.classList.add("filterItem");
                    newItem.classList.add(idelement.category);
                    newItem.classList.add("show");

                  // Ну и в итоге вставляем это все в контейнер 
                  textElement.appendChild(newItem);         
        }
        getData();
}