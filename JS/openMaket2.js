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
                                 <img class="slideImg" src="${idelement.imgGal1}" alt="Image 1">
                                  <img class="slideImg" src="${idelement.imgGal2}" alt="Image 2">
                                  <img class="slideImg" src="${idelement.imgGal3}" alt="Image 3">
                                 <img class="slideImg" src="${idelement.imgGal4}" alt="Image 1">
                                 <img class="slideImg" src="${idelement.imgGal5}" alt="Image 2">
                                 <img class="slideImg" src="${idelement.imgGal6}" alt="Image 3">
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
        }
        getData();


}

// слайдер НЕ РАБОТАЕТ 
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
let slideIndex = 0;

function showSlide() {
   const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${slideIndex * slides[0].offsetWidth}px)`;
}

function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

function showNextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}


