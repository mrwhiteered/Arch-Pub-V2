let itemOfFilter = document.querySelectorAll('.filter__item');

for (let i =0; i<itemOfFilter.length;i++){ 
  itemOfFilter[i].addEventListener('click', checgColorF);
}

function checgColorF() {
  for (let i =0; i<itemOfFilter.length;i++){
  
    itemOfFilter[i].classList.remove('choosenFilter');
  }
  this.classList.add('choosenFilter');
}
