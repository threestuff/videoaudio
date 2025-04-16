let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.slideshow img');
  const totalSlides = slides.length;

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Update currentIndex with the step
  currentIndex += step;

  // Loop back to the start or end of the gallery
  if (currentIndex < 0) currentIndex = totalSlides - 1;
  if (currentIndex >= totalSlides) currentIndex = 0;

  // Show the current slide
  slides[currentIndex].style.display = 'block';
}

 setInterval(() => {
     moveSlide(1); // Automatically go to the next slide
  }, 1000); // Change slide every 5 seconds
  