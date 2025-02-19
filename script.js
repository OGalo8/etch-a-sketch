//We will add a UI element so the user can enter the gridSize
let gridSize = 16;
const container = document.querySelector(".grid-container");

//functions to create the grid
function createGrid(rowsToCreate) {
  for (let i = 1; i <= rowsToCreate; i++) {
    const newRow = document.createElement("div");
    newRow.setAttribute("class", `row`);
    newRow.setAttribute(
      "style",
      `
            display: flex;
            border: 1px solid #B399D4;
            flex: auto;`
    );
    container.appendChild(newRow);
    createColumns(newRow, i, rowsToCreate);
  }
}

function createColumns(newRow, i, rowsToCreate) {
  for (let j = 1; j <= rowsToCreate; j++) {
    const newCol = document.createElement("div");
    newCol.setAttribute("class", "col");
    newCol.setAttribute(
      "style",
      `
            border: 1px solid #B399D4;
            flex: auto;`
    );
    newRow.appendChild(newCol);
  }
}

// creating an initial grid
createGrid(gridSize);

// remove grid when the slider moves, so it can create a new one
function removeGrid() {
  const allRows = document.querySelectorAll(".row");
  for (currentRow of allRows) {
    currentRow.remove();
  }
}

// showing the grid size on top of the slider
let slider = document.querySelector("#grid-size-slider");
let output = document.querySelector("#grid-size-number");

//updates the value of the grid based on the slider's value
output.textContent = `${slider.value}x${slider.value}`;
slider.addEventListener("input", (e) => {
  output.textContent = `${e.target.value}x${e.target.value}`;
  removeGrid();
  gridSize = e.target.value;
  createGrid(gridSize);
});

// changing color when mouse hovers over an element
function changeGridColor(color) {
  container.addEventListener("mouseover", (e) => {
    if (e.target.className != "col") return;
    e.target.style.backgroundColor = color;
  });
}

changeGridColor("#3E2A47");

// color picker changes the color of the grid based on selection
const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("input", (e) => {
  changeGridColor(e.target.value);
});

// Remove draw button will eliminate the color of the grid.
const resetBtn = document.querySelector("#reset-button");

resetBtn.addEventListener("click", function decolor(e) {
  if (!e.target.closest("button")) return; //if we do not click exactly on the restart button, nothing will happen
  const allCols = document.querySelectorAll(".col");
  for (const currentCol of allCols) {
    //this is how we iterate through a nodeList
    currentCol.style.backgroundColor = "#F5E1FD";
  }
  colorPicker.value = "#3E2A47";
  changeGridColor("#3E2A47");
});

// Adding an "erase" button that will change the colored squares in the grid back to their initial color
const eraserBtn = document.querySelector("#erase-button");
eraserBtn.addEventListener("click", (e) => {
  changeGridColor("#F5E1FD");
});

const paintBtn = document.querySelector("#paint-button");
paintBtn.addEventListener("click", (e) => {
  changeGridColor("#3E2A47");
});

// we will now add a button that will randomize colors as we paint in our grid
function getRandomInt(min = 0, max = 256) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function generateRandomColor(a) {
  //will return a random color in rgb format
  let selectedColor = `rgba(${getRandomInt()},${getRandomInt()},${getRandomInt()},${a})`;
  return selectedColor;
}

const randomBtn = document.querySelector("#random-button");
randomBtn.addEventListener("click", (e) => {
  container.addEventListener("mouseover", (e) => {
    if (e.target.className != "col") return;
    let opacity = Number(Math.random().toFixed(2));
    e.target.style.backgroundColor = generateRandomColor(opacity); //we generate the color just when the event of entering a new "col" happens
  });
});

//we will now add an effect to increase opacity so that, in a max of 10 interactions, we have a fully black color
const opacityBtn = document.querySelector("#opacity-button");

opacityBtn.addEventListener("click", (e) => {
  let squaresEntered = 0;
  container.addEventListener("mouseover", (e) => {
    if (e.target.className != "col") return;
    opacity = Math.abs(Math.sin((Math.PI * squaresEntered) / 20));
    e.target.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    squaresEntered += 1;
  });
});
