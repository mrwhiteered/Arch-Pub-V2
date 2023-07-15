document.addEventListener("DOMContentLoaded", function() {
    let data = null;
  
    // Функция для получения данных из JSON-файла
    function getData() {
      return fetch("JS/statsStore.json")
        .then(response => response.json())
        .then(jsonData => {
          // Преобразуем объект JSON в массив, чтобы сохранить порядок ключей и перевернуть его
          data = Object.entries(jsonData).reverse();
        })
        .catch(error => console.error("Ошибка загрузки данных из JSON: ", error));
    }
  
    // Функция для добавления динамических элементов после элемента <ul> с id "listStats"
    function addDynamicElements() {
      if (data === null) {
        // Загружаем данные из JSON-файла, если они еще не загружены
        getData().then(() => {
          const listStats = document.getElementById("listStats");
          if (data) {
            // Очищаем <ul> перед добавлением элементов
            listStats.innerHTML = "";
  
            // Добавляем динамические элементы из массива data
            data.forEach(([key, value]) => {
              const dynamicElement = createDynamicElement(value);
              listStats.appendChild(dynamicElement);
            });
          }
        });
      }
    }
  
    // Функция для создания динамического элемента на основе данных из JSON
    function createDynamicElement(dataObj) {
      const li = document.createElement("li");
      li.classList.add("item__stats");
      li.innerHTML = `
        <div class="left__stats">
          <img src="${dataObj.image}" alt="" class="stats__img">
          <h3 class="text__stats">${dataObj.text}</h3>
        </div>
        <div class="right__stats">
          <h4 class="name__stats">${dataObj.Avtor}</h4>
          <p class="date__stats">${dataObj.time}</p>
        </div>
      `;
      return li;
    }
  
    // Вызываем функцию добавления динамических элементов при клике на элемент с id "item__stat"
    document.getElementById("item__stat").addEventListener("click", addDynamicElements);
  });
  