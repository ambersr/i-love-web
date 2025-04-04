// ----------------------- Hamburger menu -------------------------

const menuButton = document.querySelector("#menuButton"); // Selecteert de knop met het id 'menuButton'
const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'
const hamburgerIcon = document.querySelector(".img-hamburger"); // Selecteert het hamburgericoon

menuButton.addEventListener("click", toggleMenu); // Als je het menu openklikt, roept hij 'toggleMenu' aan

function toggleMenu() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
    hetMenu.classList.toggle("open"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik

    // Verandert de afbeelding afhankelijk van de 'open' class
    if (hetMenu.classList.contains("open")) {
        // Als het menu open is, verander de afbeelding naar de 'close' afbeelding
        hamburgerIcon.src = "./assets/icons/close-icon.svg"; // Zet hier het pad naar je sluit-icoon
    } else {
        // Als het menu gesloten is, verander de afbeelding terug naar de 'hamburger' afbeelding
        hamburgerIcon.src = "./assets/icons/hamburger-icon.svg"; // Zet hier het pad naar je hamburger-icoon
    }
}






document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

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

    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // Verwijder de #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const parentTab = targetElement.closest('.tab-content'); // Check in welke tab het staat
            if (parentTab) {
                activateTab(parentTab.id);
            }

            // Scroll naar het element met een smooth effect
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');
            activateTab(tabId);

            history.pushState(null, null, `#${tabId}`);
        });
    });

    // Interne links binnen tabs checken
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const parentTab = targetElement.closest('.tab-content');
                if (parentTab) {
                    activateTab(parentTab.id);
                }

                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }, 300);

                e.preventDefault();
                history.pushState(null, null, `#${targetId}`);
            }
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


