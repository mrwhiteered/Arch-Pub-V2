let slideIndex = 0;

function prevSlide() {
    const slider = document.querySelector('.slider-container');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    const slideCount = document.querySelectorAll('.slide').length;
    const containerWidth = slider.offsetWidth;
    const slidesPerPage = Math.floor(containerWidth / slideWidth);
    const totalSlideWidth = slideWidth * slideCount;
  
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = slideCount - slidesPerPage;
    }
    
    slider.style.transition = 'transform 0.3s ease';
    slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
  
  function nextSlide() {
    const slider = document.querySelector('.slider-container');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    const slideCount = document.querySelectorAll('.slide').length;
    const containerWidth = slider.offsetWidth;
    const slidesPerPage = Math.floor(containerWidth / slideWidth);
    const totalSlideWidth = slideWidth * slideCount;
  
    if (slideIndex < slideCount - slidesPerPage) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
  
    slider.style.transition = 'transform 0.3s ease';
    slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  }
  