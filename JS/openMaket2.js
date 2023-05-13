var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get("id");
console.log(id);
// add the ID to the text element
var textElement = document.getElementById("myText");

if (id != null) {
  async function getData() {
    let url = "JS/stor.json"; // храним url
    let response = await fetch(url); // запрос к файлу
    let data = await response.json(); // декодируем формат json в объект
    let dataArr = Object.values(data); // объект в массив (Object.values - возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте )
    console.log("Array: ", dataArr);

    let idelement = dataArr[id];

    //   получаем объект для галлереи и превращаем его в массив
    let objGalery = data[id]["galery"];
    let galleryArray = Object.values(objGalery);

    console.log(galleryArray[3]);

    const newItem = document.createElement("div"); // создаем новый элемент newItem
    // меняем содержимое элмента newItem (дописываем туда все нужные теги классы и успеваем вставлять значения )
    // обратные кавычки для возможности вписывания JS кода
    // ${} - для добавления JS (внутри обращаюсь  к нужным элементам массива)
    newItem.innerHTML = ` 
            <div>
                    <div class="diseTopPart">
                        <h2 class="titleDiser">${idelement.name} </h2>
                         <img class="diserFullImg" src="${idelement.imgTitle}" alt="${idelement.name}"/>
                    </div>
                    <ul class="diserBottomPart">
                          <li class="diserSpravka">
                             <ul class="listSpravka">
                                <li class="itemSpravka">
                                   <span class="textSpravka">автор </span>
                                   <div class="diserCreator">${idelement.creater} </div>
                                </li>
                                <li class="itemSpravka">
                                   <span class="textSpravka">год </span>
                                   <div class="diserDate">${idelement.date} </div>
                                </li>
                                <li class="itemSpravka">
                                   <span class="textSpravka">Научный <br> руководитель </span>
                                   <div class="diserRukovoditel">${idelement.rukovoditel} </div>
                                </li>
                                <li class="itemSpravka">
                                   <span class="textSpravka">область </span>
                                   <div class="diserArea">${idelement.area} </div>
                                </li>
                                
                                
                                
                                
                              </ul>
                          </li>
                          <li class="someText">
                           <div class="DDT__container">
                             <div  id="textDDT" class="dropdown-text diserText">
                              ${idelement.textContent}
                             </div>
                             <button onclick="DDTOpen()" id="DDTBtn" class="DDTButton">
                             <img id="imgDDT" class="dropDown__img" src="image/contentImg/diserTitleImg/down.png"/>
                              </button>
                             
                            </div>
                          </li>
                          <li class="diserButtons">
                                <button class="buttonTextDiser btnDiser">Открыть текст работы </button>
                                <button class="buttonTabletDiser btnDiser">Открыть планшет работы </button>
                                <button class="buttonPresentationDiser btnDiser">Открыть презентацию работы </button>
                          </li>
                      </ul>
                        // слайдер НЕ РАБОАТЕТ 
                      <div class="galleryDiser">
                           <div class="slider-nav">
                                 <button onclick="showPrevSlide()" class="slider-prev">
                                    <img class="leftRow" src="image/contentImg/diserGallery/leftRow.png" />
                                 </button>  
                           </div>
                           <div class="slider">
                               <div class="slider-container">
                               
                              </div>
                           </div>
                           <div class="slider-nav">
                              <button onclick="showNextSlide()" class="slider-next">
                                    <img class="leftRow" src="image/contentImg/diserGallery/RightRow.png" />
                              </button>
                           </div>
                        </div>
                        // конец слайдер 
                    </div>
                
            </div>
                      `;

    // Не забываем newItem тоже добавить пару классов
    newItem.classList.add("diserContainer");
    newItem.classList.add(idelement.category);
    newItem.classList.add("show");

    // Ну и в итоге вставляем это все в контейнер
    textElement.appendChild(newItem);

    var sliderContainer = document.querySelector('.slider-container');

// Создаем элементы <img> на основе массива imgArray
for (var i = 0; i < galleryArray.length; i++) {
  var galElement = document.createElement("img");
  galElement.src = galleryArray[i];
  galElement.alt = "Image " + (i+1);
  galElement.classList.add("slideImg");
  sliderContainer.appendChild(galElement);
};
  }
  getData();
};



// // слайдер НЕ РАБОТАЕТ
// const slider = document.querySelector(".slider");
// const sliderContainer = document.querySelector(".slider-container");
// const slides = document.querySelectorAll("img");
// const prevButton = document.querySelector(".slider-prev");
// const nextButton = document.querySelector(".slider-next");
// let slideIndex = 0;

// function showSlide() {
//   const sliderContainer = document.querySelector(".slider-container");
//   sliderContainer.style.transform = `translateX(-${
//     slideIndex * slides[0].offsetWidth
//   }px)`;
// }

// function showPrevSlide() {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   showSlide();
// }

// function showNextSlide() {
//   slideIndex++;
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   showSlide();
// }
