const grid = document.querySelector("#grid");

let gridLength =prompt("Please enter the grid length");


gridSize(gridLength);

function gridSize(gridLength){

    let gridArea = (gridLength*gridLength);

    for(i=0;i<gridArea;i++){
        const newSqaure =document.createElement("div")
        
        newSqaure.classList.add("box");
        newSqaure.addEventListener("mouseover",function (e){
            console.log(e);
            console.log(e.target);
            e.target.classList.add("black");
        });

        newSqaure.style.width =`${(512/gridLength)}px`;
        grid.appendChild(newSqaure);
    }
    
    const boxes=document.querySelectorAll(".box");
    
    return;
}

function colorChange(){
    newSquare.classList.add("black");
    return;
}