const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileNav = document.getElementById("mobileNav");
const mobileNavIcon = document.getElementById("mobileNavIcon");

mobileMenuIcon.addEventListener("click", (e) => {
  /** on menu click, open up mobile nav */
  // mobileNav.classList.remove("hidden");
  mobileNav.classList.add("view");
});

mobileNavIcon.addEventListener("click", (e) => {
  /** on click, hide the menu */
  mobileNav.classList.remove("view");
});
