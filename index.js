let mqList = window.matchMedia("(max-width: 600px)");
let humburgerElem = document.getElementById("humburger");

// Afficher/Cacher Navbar Mobile
function displayNavbar() {
  let navElem = document.querySelector(".header__nav");
  let icon__arrow = document.querySelectorAll(".icon__arrow");
  let iconHumburgerElem = document.querySelector(".icon__humburger");

  // Si l'écran est plus petit que 600 pixels alors c'est True
  if (mqList.matches) {
    if (navElem.style.display === "grid") {
      navElem.style.display = "none";
      iconHumburgerElem.src = "./images/icon-hamburger.svg";
      icon__arrow.forEach(
        (elem) => (elem.src = "./images/icon-arrow-light.svg")
      );
    } else {
      navElem.style.display = "grid";
      iconHumburgerElem.src = "./images/icon-close.svg";
      icon__arrow.forEach(
        (elem) => (elem.src = "./images/icon-arrow-dark.svg")
      );
    }
  } else {
    navElem.style.display = "grid";
  }
}

humburgerElem.addEventListener("click", displayNavbar); // Toggle la function DisplayNavbar
mqList.addEventListener("change", displayNavbar); // Mettre en écoute mediaQueryListe Object
