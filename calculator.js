//Query Selectors//
var numBtns = document.querySelectorAll(".numButton");
var numDisplay = document.querySelector("#numDisplay");
var ansDisplay = document.querySelector("#ansDisplay");
var equalsBtn = document.querySelector("#equals");
var resetBtn = document.querySelector("#reset");
var deleteBtn = document.querySelector("#delete");
var operatorBtns = document.querySelectorAll(".operatorBtn");

//Variables//
var mySum = "";
var equalsPressed = false;

//Add click listeners to numbers//
for(var i=0;i<numBtns.length;i++){
        numBtns[i].addEventListener("click", function(){
            ansDisplay.style.display="none";
            numDisplay.style.display="block"
            ansDisplay.textContent = "";

            if(numDisplay.textContent==="0"){
                numDisplay.textContent =this.textContent;
            }
            else{
            numDisplay.textContent = numDisplay.textContent + this.textContent;
            }
            mySum = mySum + this.textContent;
            
            console.log(mySum);
        })  
}

//Add click listeners to operators (excluding equals)//
for(var i=0;i<operatorBtns.length;i++){
    if(operatorBtns[i].textContent==="x"){
        operatorBtns[i].addEventListener("click", function(){
            ansDisplay.textContent="";
            numDisplay.textContent = numDisplay.textContent + "x";
            mySum = mySum + "*";
            console.log(mySum);
        });
    }
    else if(operatorBtns[i].textContent==="÷"){
        operatorBtns[i].addEventListener("click", function(){
            ansDisplay.textContent = "";
            numDisplay.textContent = numDisplay.textContent + "÷";
            mySum = mySum + "/";

            console.log(mySum);
            })
    }  
    else {operatorBtns[i].addEventListener("click", function(){
        ansDisplay.style.display="none";
        numDisplay.style.display="block"
        ansDisplay.textContent = "";
        numDisplay.textContent = numDisplay.textContent + this.textContent;
        mySum = mySum + this.textContent;

        console.log(mySum);
        }) 
    }      
}

//Add click listener to equals//
equalsBtn.addEventListener("click", function(){
    numDisplay.textContent = "";
    numDisplay.style.display="none";
    ansDisplay.style.display="block"
    ansDisplay.textContent = eval(mySum).toString();
    mySum = eval(mySum).toString();
    equalsPressed = true;
    console.log('this is mySum');
    console.log(mySum);
    console.log('this is ansDisplay');
    console.log(ansDisplay.textContent);
});

//Add click listener to reset ('C')//
resetBtn.addEventListener("click", function(){
    numDisplay.style.display="block";
    ansDisplay.style.display="none";
    numDisplay.textContent="0";
    ansDisplay.textContent="";
    mySum="";
    console.log(mySum);
});

//Add click listener to delete//
deleteBtn.addEventListener("click", function(){
    var splitDisplay = numDisplay.textContent.split("");
    console.log(splitDisplay);
    splitDisplay.pop();
    var deletedDisplay = splitDisplay.join("");
    console.log(deletedDisplay);
    numDisplay.textContent = deletedDisplay;

    var splitSum = mySum.split("");
    console.log(splitSum);
    splitSum.pop();
    var deletedSum = splitSum.join("");
    console.log(deletedSum);
    mySum = deletedSum;
    //still need to fix this if used immediately after 'C' reset
});


