const navEl = document.getElementById("navMenu");
const openMenuEl = document.getElementById("openMenu");
const closeMenuEl = document.getElementById("closeMenu");

openMenuEl.addEventListener("click", () => {
  navEl.style.right = 0;

  openMenuEl.style.display = "none";

  closeMenuEl.style.display = "block";
});

closeMenuEl.addEventListener("click", () => {
  navEl.style.right = "-100%";

  openMenuEl.style.display = "block";

  closeMenuEl.style.display = "none";
});
