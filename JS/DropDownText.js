
function DDTOpen() {
  let buttonDDT = document.getElementById("DDTBtn");
  let DDTText = document.getElementById("textDDT");
  let imgDDT = document.getElementById("imgDDT");

    if (DDTText.classList.contains("showDDT")) {
      DDTText.style.maxHeight = null;
      DDTText.classList.remove("showDDT");
      imgDDT.classList.remove("rotate");
    } else {
      DDTText.style.maxHeight = DDTText.scrollHeight + "px";
      DDTText.classList.add("showDDT");
      imgDDT.classList.add("rotate");
    }
  
}