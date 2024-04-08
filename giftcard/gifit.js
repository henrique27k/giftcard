let index = 0;

document.querySelector('.carousel-next').addEventListener('click', () => {
  showSlide(index += 1);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  showSlide(index -= 1);
});

function showSlide(n) {
  let i;
  let slides = document.querySelectorAll('.carousel-item');
  if (n >= slides.length) { index = 0 }
  if (n < 0) { index = slides.length - 1 }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[index].style.display = "block"; 
}

showSlide(index); // Inicializa o primeiro slide