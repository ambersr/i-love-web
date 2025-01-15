
//    const menuButton = document.querySelector("#menuButton");

//    const hetMenu = document.querySelector("#menu");

//    menuButton.addEventListener("click", toggleMenu)

//    function toggleMenu() {
//    hetMenu.classList.toggle("open");
//    }







// // Select all tab links and tab content elements
// const tabLinks = document.querySelectorAll('.tab-link');
// const tabContents = document.querySelectorAll('.tab-content');

// // Loop through each tab link and add a click event listener
// tabLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         // Remove 'active' class from all tab links and tab contents
//         tabLinks.forEach(tab => tab.classList.remove('active'));
//         tabContents.forEach(content => content.classList.remove('active'));

//         // Add 'active' class to the clicked tab and its corresponding content
//         link.classList.add('active');
//         document.getElementById(link.getAttribute('data-tab')).classList.add('active');
//     });
// });












// const slides = document.querySelector('.slides');
// const slideItems = document.querySelectorAll('.slide');

// // Bereken de totale breedte van alle slides
// const slideWidth = slideItems[0].offsetWidth + 20; // 20px is de gap
// const totalSlides = slideItems.length;

// // Scroll naar de tweede slide bij laden (waar de echte content begint)
// slides.scrollLeft = slideWidth;

// // Voer de loop uit bij scrollen
// slides.addEventListener('scroll', () => {
//     // Spring naar het begin als je bij het einde bent
//     if (slides.scrollLeft >= (totalSlides - 1) * slideWidth) {
//         slides.scrollLeft = slideWidth;
//     }

//     // Spring naar het einde als je bij het begin bent
//     if (slides.scrollLeft <= 0) {
//         slides.scrollLeft = (totalSlides - 2) * slideWidth;
//     }
// });
















let deKnop = document.querySelector("button");
let deStip = document.querySelector(".stip")

deKnop.addEventListener("click", functiePulsing)

function functiePulsing() {
   deStip.classList.toggle("pulse");
}


