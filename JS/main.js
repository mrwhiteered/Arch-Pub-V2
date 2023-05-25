document.addEventListener('copy', function(event) {
    event.preventDefault();
  });

  
  window.onload = function() {
    // Delay for 5 seconds
    setTimeout(function() {
      // Remove the preload animation
      document.getElementById("preload-animation").style.display = "none";
    }, 500);
  };

  setTimeout(function(){
    document.body.classList.add('body_visible');
  }, 200);