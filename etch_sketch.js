const grid = document.querySelector("#grid");

let gridLength =prompt("Please enter the grid length");

gridSize(gridLength);

function gridSize(gridLength){

    let gridArea = (gridLength*gridLength);


    for(i=0;i<gridArea;i++){
        const newSqaure =document.createElement("div")
        newSqaure.style.width =`${(512/gridLength)}px`;
        newSqaure.classList.add("box");
        grid.appendChild(newSqaure);
    }
    
    
    return;
}