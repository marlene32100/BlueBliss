function menu() {
  document.getElementById("menu-overlay").style.display = "block";
  document.getElementById("home-container").style.display = "none";
  document.getElementById("contact-overlay").style.display = "none";

  let links = document.getElementsByClassName("link-item");

  let closeMenu = function () {
    document.getElementById("menu-overlay").style.display = "none";
    document.getElementById("contact-overlay").style.display = "block";
    document.getElementById("home-container").style.display = "block";
  };

  document.getElementById("closing-icon").addEventListener("click", closeMenu);

  Array.from(links).forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
}
