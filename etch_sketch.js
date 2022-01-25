const grid = document.querySelector("#grid");

let gridLength =prompt("Please enter the grid length");


setGridSize(gridLength);

function setGridSize(gridLength){

    let gridArea = (gridLength*gridLength);

    for(i=0;i<gridArea;i++){
        const newSqaure =document.createElement("div")
        
        newSqaure.classList.add("box");
        newSqaure.addEventListener("mouseover",function (e){
            //console.log(e);
            //console.log(e.target);
            e.target.classList.add("black");
        });

        newSqaure.style.width =`${(512/gridLength)}px`;
        grid.appendChild(newSqaure);
    }
    return;
}

function resetGrid(){
    let oldGrid= document.querySelectorAll(".box");
    console.log(oldGrid);
    for (const oldBox of oldGrid){
        grid.removeChild(oldBox);
        
    }
    let gridLength =prompt("Please enter the grid length");
    setGridSize(gridLength);
}