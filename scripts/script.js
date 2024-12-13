
   const menuButton = document.querySelector("#menuButton");

   const hetMenu = document.querySelector("#menu");

   menuButton.addEventListener("click", toggleMenu)

   function toggleMenu() {
   hetMenu.classList.toggle("open");
   }







   document.querySelector('.card:nth-child(3)').classList.add('hidden');







   const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');

// Bereken de totale breedte van alle slides
const slideWidth = slideItems[0].offsetWidth + 20; // 20px is de gap
const totalSlides = slideItems.length;

// Scroll naar de tweede slide bij laden (waar de echte content begint)
slides.scrollLeft = slideWidth;

// Voer de loop uit bij scrollen
slides.addEventListener('scroll', () => {
    // Spring naar het begin als je bij het einde bent
    if (slides.scrollLeft >= (totalSlides - 1) * slideWidth) {
        slides.scrollLeft = slideWidth;
    }

    // Spring naar het einde als je bij het begin bent
    if (slides.scrollLeft <= 0) {
        slides.scrollLeft = (totalSlides - 2) * slideWidth;
    }
});
