// button //
const imgLeft = document.querySelector("#img-left");
const imgRight = document.querySelector("#img-right");
const cardsLeft = document.querySelector("#cards-left");
const cardsRight = document.querySelector("#cards-right");
const cardLeft = document.querySelector("#card-left");
const cardRight = document.querySelector("#card-right");

// карточки  телефона //
const slider = document.querySelector(".image__list");
const image = document.querySelectorAll(".image__list img");
// cards one //
const cardSlider = document.querySelector(".card__slider");
const cardText = document.querySelectorAll(".card__slider .card__cell");
// card two //
const cardCarusel = document.querySelector(".card__carusel");

// image
window.addEventListener("load", () => {
  let counter = 0;
  const stepSize = image[0].clientWidth;
  slider.style.transform = `translateX(` + `${-stepSize * counter}px)`;

  imgRight.addEventListener("click", () => {
    if (counter >= image.length - 1) counter = -1;
    slider.classList.add("image__animation");
    counter++;
    slider.style.transform = `translateX(` + `${-stepSize * counter}px)`;
  });

  imgLeft.addEventListener("click", () => {
    if (counter <= 0) counter = image.length;
    slider.classList.add("image__animation");
    counter--;
    slider.style.transform = `translateX(` + `${-stepSize * counter}px)`;
  });
});
// card one
window.addEventListener("load", () => {
  let counter = 0;
  const stepSize = cardText[0].clientWidth;
  cardSlider.style.transform = `translateX(` + `${-stepSize * counter}px)`;

  cardsLeft.addEventListener("click", () => {
    if (counter >= cardText.length - 1) counter = -1;
    cardSlider.classList.add("card__animations");
    counter++;
    cardSlider.style.transform = `translateX(` + `${-stepSize * counter}px)`;
  });

  cardsRight.addEventListener("click", () => {
    if (counter <= 0) counter = cardText.length;
    cardSlider.classList.add("card__animations");
    counter--;
    cardSlider.style.transform = `translateX(` + `${-stepSize * counter}px)`;
  });
});

// card two
window.addEventListener("load", () => {
  let counter = 0;
  const stepSize = cardText[0].clientWidth;
  cardCarusel.style.transform = `translateX(` + `${-stepSize * counter}px)`;

  cardLeft.addEventListener("click", () => {
    if (counter >= cardText.length - 1) counter = -1;
    cardCarusel.classList.add("card__animations");
    counter++;
    cardCarusel.style.transform = `translateX(` + `${-stepSize * counter}px)`;
  });
  cardRight.addEventListener("click", () => {
    if (counter <= 0) counter = cardText.length;
    cardCarusel.classList.add("card__animations");
    counter--;
    cardCarusel.style.transform = `translateX(` + `${-stepSize * counter}px)`;
  });
});
