// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketida hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//menu scroll horizontal
const productList = document.querySelector(".menu .ro .row");

function scrollProdukKiri() {
  productList.scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollProdukKanan() {
  productList.scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

let isDown = false;
let startX;
let scrollLeftPos;

productList.addEventListener("mousedown", (e) => {
  isDown = true;
  productList.classList.add("active");
  startX = e.pageX - productList.offsetLeft;
  scrollLeftPos = productList.scrollLeft;
});

productList.addEventListener("mouseleave", () => {
  isDown = false;
});

productList.addEventListener("mouseup", () => {
  isDown = false;
});

productList.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - productList.offsetLeft;
  const walk = (x - startX) * 2; // kecepatan drag
  productList.scrollLeft = scrollLeftPos - walk;
});

// klik diuar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
