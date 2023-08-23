
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel();
// });
// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     }
//   },
// });


const loading = document.getElementById("loading");
setTimeout(() => {
  loading.classList.add("loading-none");
}, 2000);

// window.addEventListener("scroll", function () {
//   shrink();
// });

// let navbar = document.getElementById("navbar");

// function shrink() {
//   if (scrollY > 100) {
//     navbar.classList.add("navbar-shrink");
//   } else {
//     navbar.classList.remove("navbar-shrink");
//   }
// }
