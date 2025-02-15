
//We will add a UI element so the user can enter the gridSize 
gridSize = 16;

const container = document.querySelector(".container");

function createRows(){
    for(let i = 1; i<= gridSize; i++){
        const newRow = document.createElement("div");
        newRow.setAttribute("class",`row`);
        newRow.setAttribute("id",`row-${i}`);
        newRow.setAttribute("style",`
            display: flex;
            border: 1px solid grey;
            flex: auto;`);        
        container.appendChild(newRow);    
        createColumns(newRow,i);
    }
}

function createColumns(newRow,i){
    for (let j = 1; j<=gridSize; j++){
        const newCol = document.createElement("div");
        newCol.setAttribute("class","col");
        newCol.setAttribute("id",`col-${i}-${j}`);
        newCol.setAttribute("style",`
            border: 1px solid grey;
            flex: auto;`);
        newRow.appendChild(newCol);
    }
}

createRows();

// logic for changing color when mouse hovers over an element

// const col11 = document.querySelector("#col-1-1")
container.addEventListener("mouseover",(e)=> {
    if(e.target.className != "col") return;
    e.target.style.backgroundColor = "red";
})
