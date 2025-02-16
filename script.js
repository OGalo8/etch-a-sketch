
//We will add a UI element so the user can enter the gridSize 
let gridSize = 16;
const container = document.querySelector(".grid-container");



// showing the grid size on top of the slider
let slider = document.querySelector("#grid-size-slider");
let output = document.querySelector("#grid-size-number");

//functions to create the grid
function createRows(rowsToCreate){
    for(let i = 1; i<= rowsToCreate; i++){
        const newRow = document.createElement("div");
        newRow.setAttribute("class",`row`);
        newRow.setAttribute("id",`row-${i}`);
        newRow.setAttribute("style",`
            display: flex;
            border: 1px solid grey;
            flex: auto;`);        
        container.appendChild(newRow);    
        createColumns(newRow,i,rowsToCreate);
    }
}

function createColumns(newRow,i,rowsToCreate){
    for (let j = 1; j<=rowsToCreate; j++){
        const newCol = document.createElement("div");
        newCol.setAttribute("class","col");
        newCol.setAttribute("id",`col-${i}-${j}`);
        newCol.setAttribute("style",`
            border: 1px solid grey;
            flex: auto;`);
        newRow.appendChild(newCol);
    }
}

// creating an initial grid
createRows(gridSize);

// const allRows = document.querySelectorAll(".row");
// for (let i = 0; i <= 2*gridSize; i++){
//     allRows.item(i).remove();
// }



// remove grid when the slider moves, so it can create a new one
// function removeRows(rowsToRemove){
//     const allRows = document.querySelectorAll(".row");
//     for (let i = 0; i <= rowsToRemove; i++){
//         allRows.item(i).remove();
//     }
// }

//updates the value of gridSize based on the slider's value
// output.innerHTML = slider.value;
// slider.oninput = function newGridSize(){
//     //slider called the function, so 'this' knows that it must refer to slider.
//     // it doesn't work the same way with arrow functions.
//     output.innerHTML = this.value
    
//     let sliderGridSize = this.value;
//     let difference = sliderGridSize - gridSize;
//     if(difference > 0) createRows(difference);
//     if(difference <0) removeRows(difference);
// }


// logic for changing color when mouse hovers over an element
container.addEventListener("mouseover",(e)=> {
    if(e.target.className != "col") return;
    e.target.style.backgroundColor = "red";
});

// logic for the restart button. It will eliminate the color of the grid.
const restartBtn = document.querySelector("#restart-button");

restartBtn.addEventListener("click",function decolor(e) {
    if(!e.target.closest ("button")) return; //if we do not click exactly on the restart button, nothing will happen
    const allCols = document.querySelectorAll(".col");
    for (const currentCol of allCols){ //this is how we iterate through a nodeList
        currentCol.style.backgroundColor = "darkgrey";
    }
});



