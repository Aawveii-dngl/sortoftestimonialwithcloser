let buttons = document.querySelectorAll(".button");
console.log(buttons);
let buttonContainer = document.querySelector(".button-container");
console.log(buttonContainer);
let contents = document.querySelectorAll(".content");
// buttons.forEach((button) => button.addEventListener("click", buttontoggle()));

// Instead we use event delegation because the event listenerin parent goes to its children also so we dont neeed to put on each individually
buttonContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".button");
  console.log(clicked);
  if (!clicked) return;
  buttons.forEach((button) => button.classList.remove("selectedButton"));
  clicked.classList.add("selectedButton");
  console.log(clicked.dataset.tab);
  //We can assign a foreign value and get it to help in code
  //Similar as above we remove all and add on the required part
  contents.forEach((content) => content.classList.remove("selectedContent"));
  document
    .querySelector(`.content-${clicked.dataset.tab}`)
    .classList.add("selectedContent");
});

// function buttontoggle() {
//   buttons.forEach(function callback(button) {
//     button.classList.remove("selectedButton");
//   });
// }
