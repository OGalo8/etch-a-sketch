
//We will add a UI element so the user can enter the gridSize 
let gridSize = 16;
const container = document.querySelector(".grid-container");


//functions to create the grid
function createGrid(rowsToCreate){
    for(let i = 1; i<= rowsToCreate; i++){
        const newRow = document.createElement("div");
        newRow.setAttribute("class",`row`);
        newRow.setAttribute("style",`
            display: flex;
            border: 1px solid #B399D4;
            flex: auto;`);        
        container.appendChild(newRow);    
        createColumns(newRow,i,rowsToCreate);
    }
}

function createColumns(newRow,i,rowsToCreate){
    for (let j = 1; j<=rowsToCreate; j++){
        const newCol = document.createElement("div");
        newCol.setAttribute("class","col");
        newCol.setAttribute("style",`
            border: 1px solid #B399D4;
            flex: auto;`);
        newRow.appendChild(newCol);
    }
}

// creating an initial grid
createGrid(gridSize);


// remove grid when the slider moves, so it can create a new one
function removeGrid(){
    const allRows = document.querySelectorAll(".row");
    for (currentRow of allRows){
        currentRow.remove();
    }
}

// showing the grid size on top of the slider
let slider = document.querySelector("#grid-size-slider");
let output = document.querySelector("#grid-size-number");

//updates the value of the grid based on the slider's value
output.textContent = slider.value;
slider.addEventListener("input",(e) => { 
    output.textContent = e.target.value;
    removeGrid();
    gridSize = e.target.value;
    createGrid(gridSize);
})


// changing color when mouse hovers over an element
container.addEventListener("mouseover",(e)=> {
    if(e.target.className != "col") return;
    e.target.style.backgroundColor = "#CE9DD9";
});

// Restart button will eliminate the color of the grid.
const removeColorBtn = document.querySelector("#remove-color-button");

removeColorBtn.addEventListener("click",function decolor(e) {
    if(!e.target.closest ("button")) return; //if we do not click exactly on the restart button, nothing will happen
    const allCols = document.querySelectorAll(".col");
    for (const currentCol of allCols){ //this is how we iterate through a nodeList
        currentCol.style.backgroundColor = "#F5E1FD";
    }
});



