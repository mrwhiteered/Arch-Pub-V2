let items = document.getElementsByClassName('filterItem');
for (let i=0; i<items.length; i++) {
  let id = items[i].getAttribute("id");
  items[i].addEventListener("click", function() {
    window.location.href = "maket.html?id=" + id;
  });
}

