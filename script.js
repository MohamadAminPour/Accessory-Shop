let navMenuIcon = document.querySelector(".nav-menuIcon");
let mobileMenu = document.querySelector(".mobile-menu");

var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

navMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

let validation = document.querySelector(".validation");
let navalidation = document.querySelector(".nav-validation");
let validationCloseBtn = document.querySelector(".validation-closeBtn");
let validationImg = document.querySelector(".signUp-left img");

let validationImgs = [
  "./image/gallery/1.jpg",
  "./image/gallery/2.jpg",
  "./image/gallery/3.jpg",
];
console.log(validationImg);
let pic = 1;

navalidation.addEventListener("click", () => {
  validation.classList.add("active");
  document.body.classList.add("active");
  validationImg.src = validationImgs[pic - 1];

  if (pic < validationImgs.length) {
    pic++;
  } else {
    pic = 1;
  }
  console.log(pic);
});
validationCloseBtn.addEventListener("click", () => {
  validation.classList.remove("active");
  document.body.classList.remove("active");
});

//basket
let basketContainer = document.querySelector(".basketContainer");
let navBasket = document.querySelector(".nav-basket");
let basketContainerImg = document.querySelector(".basketContainer img");
let basketContainerFooter = document.querySelector(".basketContainer-footer");

let basket = [
  { id: 1, name: "", price: 0, quantity: 1, src: "" }
];

if (basket.length < 1) {
  basketContainerImg.style.display = "block";
  basketContainerFooter.style.display = "none";
} else {
  basketContainerImg.style.display = "none";
  basketContainerFooter.style.display = "flex";
}

navBasket.addEventListener("click", () => {
  basketContainer.classList.toggle("active");
});
