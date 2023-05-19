let disirtationBtn = document.getElementById('item__diser');
let statBtn = document.getElementById('item__stat');

let listStats = document.getElementById('listStats');
let listDiser = document.getElementById('diserContainer');

const imgDis = document.getElementById('diser');
const imgStat = document.getElementById('stat');

function addLine() {
    imgDis.classList.remove('under');
     imgStat.classList.add('under');
 listStats.classList.add('showStats');
 listDiser.classList.remove('showDiser');
}

function addLine2() {
       
          imgStat.classList.remove('under');
    imgDis.classList.add('under');
     listStats.classList.remove('showStats');
     listDiser.classList.add('showDiser');
       }




// Мой вариант с переключение по любой кнопке 
// function addLine() {
//     if (!imgDis.classList.contains('under')) {
// imgDis.classList.add('under');
// imgStat.classList.remove('under');
// listStats.classList.remove('showStats');
// listDiser.classList.add('showDiser');
//     } else {
//     imgDis.classList.remove('under');
// imgStat.classList.add('under');
// listStats.classList.add('showStats');
// listDiser.classList.remove('showDiser');
//     }
// }

// function addLine2() {
//     if (!imgStat.classList.contains('under')) {
//         imgStat.classList.add('under');
// imgDis.classList.remove('under');
// listStats.classList.add('showStats');
// listDiser.classList.remove('showDiser');
//     } else {
//     imgStat.classList.remove('under');
//     imgDis.classList.add('under');
//     listStats.classList.remove('showStats');
//     listDiser.classList.add('showDiser');
//     }
// }


// добавление статей

