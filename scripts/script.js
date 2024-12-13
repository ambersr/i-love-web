
   const menuButton = document.querySelector("#menuButton");

   const hetMenu = document.querySelector("#menu");

   menuButton.addEventListener("click", toggleMenu)

   function toggleMenu() {
   hetMenu.classList.toggle("open");
   }