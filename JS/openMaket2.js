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

   //  console.log(galleryArray[3]);

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
                             <img id="imgDDT" class="dropDown__img" src="image/icons/down2.png"/>
                              </button>
                             
                            </div>
                          </li>
                          <li class="diserButtons">
                          <a href="${idelement.pdf}" target="_blank"> <button class="buttonTextDiser btnDiser">Открыть текст работы </button></a>
                          <a href="${idelement.tablet}" target="_blank">  <button class="buttonTabletDiser btnDiser">Открыть планшет работы </button></a>
                          <a href="${idelement.presentaion}" target="_blank"> <button class="buttonPresentationDiser btnDiser">Открыть презентацию работы </button></a>
                          </li>
                      </ul>
                        
                      <div class="galleryDiser">
                           <div class="slider-nav">
                                 <button onclick="prevSlide()" class="slider-prev ">
                                    <img class="leftRow leftRow1" src="image/contentImg/diserGallery/leftRow.png" />
                                 </button>  
                           </div>
                           <div class="slider">
                               <div class="slider-container">
                               
                              </div>
                           </div>
                           <div class="slider-nav">
                              <button onclick="nextSlide()"  class="slider-next">
                                    <img class="leftRow leftRow2" src="image/contentImg/diserGallery/rightRow.png" />
                              </button>
                           </div>
                        </div>
                        
                    </div>
                
            </div>
                      `;




    // Не забываем newItem тоже добавить пару классов
    newItem.classList.add("diserContainer");
    newItem.classList.add(idelement.category);
    newItem.classList.add("show");

    // Ну и в итоге вставляем это все в контейнер
    textElement.appendChild(newItem);

   //  проверка есть ли элемент презентации 
    let trimmedStr = idelement.presentaion.trim();
    if (trimmedStr==""){
       document.querySelector('.buttonPresentationDiser').style.display = 'none';
       }
        //  проверка есть ли элемент pdf 
   let trimmedStr2 = idelement.pdf.trim();
    if (trimmedStr2==""){
          document.querySelector('.buttonTextDiser').style.display = 'none';
          }
 //  проверка есть ли элемент планшет 
   let trimmedStr3 = idelement.tablet.trim();
   if (trimmedStr3==""){
             document.querySelector('.buttonTabletDiser').style.display = 'none';
             }





    let galLength = galleryArray.length
await sliderWorkPlease(galLength,galleryArray);
  }
  getData();
};

function sliderWorkPlease (galLength,galleryArray){
   let sliderContainer = document.querySelector('.slider-container');
   
// Создаем элементы <img> на основе массива imgArray
for (var i = 0; i < galLength; i++) {
  var galElement = document.createElement("img");
  galElement.src = galleryArray[i];
  galElement.alt = "Image " + (i+1);
  galElement.classList.add("slide");
  sliderContainer.appendChild(galElement);
  
};
}


  
  
   


  





