// Global variables & buttons
let container = document.querySelector(".container");
let div = document.createElement("div");
let gridCount = document.querySelector(".grid-count");
let clear = document.querySelector(".clear");
let slider = document.querySelector("#slider");
let colorPick = document.querySelector(".colorPick");
let colorSlider = document.querySelector("#color");
let eraser = document.querySelector(".eraser");

//Handling the event when the user uses the input slider, the correct grid-size is attributed to the slider value
slider.addEventListener("change", (e) => {
  let sliderText = document.querySelector(".value");
  console.log(sliderText);
  sliderText.textContent = slider.value;
  console.log(slider.value);
  makeRows(slider.value, slider.value);
});

//Main function handling the current grid-size dynamically
function makeRows(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-columns", columns);

  for (let i = 0; i < rows * columns; i++) {
    let square = document.createElement("div");
    container.appendChild(square).className = "grid-item";
  }
  color();
}

makeRows(16, 16);

//function for the default color of when hovering the mouse over the grid
function color(color = "red") {
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = color;
    });
  });
}
// Erasing the entire content of the grid when the "clear" button is clicked
clear.addEventListener("click", (e) => {
  let gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.style.backgroundColor = "white";
  });

});

// Picking a specific color when choosing from the color wheel
colorPick.addEventListener("click", (e) => {
  colorPick.disabled = true;
  let hidden = document.querySelector(".hidden");
  hidden.classList.remove("hidden"); //the input color button is added when the class is not hidden anymore
  colorSlider.addEventListener("input", (e) => {
    let currentColor = colorSlider.value;
    color(currentColor);
  });
});

//Eraser button that changes the color to white
eraser.addEventListener("click", (e) => {
  color('white');
});
