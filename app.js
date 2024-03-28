document.addEventListener("DOMContentLoaded", function () {
  var navToggler = document.querySelector(".navbar-toggler");
  var navCollapse = document.querySelector(".navbar-collapse");

  navToggler.addEventListener("click", function () {
    navCollapse.classList.toggle("show");
  });

  // Dropdown linklerine tıklanınca menüyü kapat
  var dropdownLinks = document.querySelectorAll(".navbar-nav .nav-link");
  dropdownLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navCollapse.classList.remove("show");
    });
  });
});
