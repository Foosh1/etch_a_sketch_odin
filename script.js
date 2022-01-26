const grid = document.querySelector("#grid");
let colorInput =document.querySelector("#colorInput");
let color;
let gridLength =32;
let currentSize;
let selectedBrush;
let currentSelection ="black";
setGridSize(gridLength);

colorInput.addEventListener("input" ,getColor);

function setGridSize(gridLength){
    currentSize=gridLength;
    let gridArea = (gridLength*gridLength);

    for(i=0;i<gridArea;i++){
        const newSqaure =document.createElement("div")
        
        newSqaure.classList.add("box");
        newSqaure.addEventListener("mouseover",function (e){
           
            e.target.style.backgroundColor=`${selectBrush(currentSelection)}`;
        });

        newSqaure.style.width =`${(512/gridLength)}px`;
        grid.appendChild(newSqaure);
    }
    return;
}

function newGrid(num){
    if(num===currentSize)return;

    let oldGrid= document.querySelectorAll(".box");
    for (const oldBox of oldGrid){
        grid.removeChild(oldBox);
    }
    setGridSize(num);
}

function resetGrid(){
    let oldGrid= document.querySelectorAll(".box");
    for(const oldBox of oldGrid){
        oldBox.style.backgroundColor="white";
    }

}

function toggleLines(){
    let oldGrid=document.querySelectorAll(".box");
    for (const oldBox of oldGrid){
        oldBox.classList.toggle("lines");
    }
}

function selectBrush(selectedBrush){
   console.log(selectedBrush);
   currentSelection =selectedBrush;
 if(currentSelection===`rainbowBrush`) return rainbowBrush();
 else if(currentSelection===`black`) return currentSelection;
 else if(currentSelection===`white`) return currentSelection;
 else return currentSelection;
 
    
}

function getColor(){
     currentSelection =colorInput.value;
    return color;
}

function rainbowBrush(){
    let r= Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b= Math.floor(Math.random()*256)
    color= `rgb(${r},${g},${b})`
    console.log(color);
    return color;
    
}