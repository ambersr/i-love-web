
   const menuButton = document.querySelector("#menuButton");

   const hetMenu = document.querySelector("#menu");

   menuButton.addEventListener("click", toggleMenu)

   function toggleMenu() {
   hetMenu.classList.toggle("open");
   }







document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Functie om een tab actief te maken
    function activateTab(tabId) {
        tabLinks.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        const activeTab = document.querySelector(`.tab-link[data-tab="${tabId}"]`);
        const activeContent = document.getElementById(tabId);

        if (activeTab && activeContent) {
            activeTab.classList.add('active');
            activeContent.classList.add('active');
        }
    }

    // Check of er een hash in de URL staat en activeer de juiste tab
    if (window.location.hash) {
        const tabId = window.location.hash.substring(1); // Verwijder de #
        activateTab(tabId);
    }

    // Voeg click event listeners toe aan de tabs
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');
            activateTab(tabId);

            // Update de URL zonder de pagina te herladen
            history.pushState(null, null, `#${tabId}`);
        });
    });
});




let searchBar = document.getElementById('searchbar');

searchBar.addEventListener('input', function() {
    console.log("Input event triggered!");  // Debugging log
    let searchValue = searchBar.value.toLowerCase();
    let items = document.querySelectorAll('.experiment');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent.toLowerCase();
        if (text.includes(searchValue)) {
            items[i].classList.remove('hidden');
        } else {
            items[i].classList.add('hidden');
        }
    }
});








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


