var numBtns = document.querySelectorAll(".numButton");
var numDisplay = document.querySelector("#numDisplay")
var ansDisplay = document.querySelector("#ansDisplay")
var equalsBtn = document.querySelector("#equals")
var resetBtn = document.querySelector("#reset")
var deleteBtn = document.querySelector("#delete")

var mySum = "";

var equalsPressed = false;

for(var i=0;i<numBtns.length;i++){
    if(numBtns[i].textContent==="x"){
        numBtns[i].addEventListener("click", function(){
            ansDisplay.textContent="";
            numDisplay.textContent = numDisplay.textContent + "x";
            mySum = mySum + "*";
            console.log(mySum);
        });
    }
    else if(numBtns[i].textContent==="÷"){
        numBtns[i].addEventListener("click", function(){
            ansDisplay.textContent = "";
            numDisplay.textContent = numDisplay.textContent + "÷";
            mySum = mySum + "/";

            console.log(mySum);
            })
    }    
    else{
        numBtns[i].addEventListener("click", function(){
            ansDisplay.style.display="none";
            numDisplay.style.display="block"
            ansDisplay.textContent = "";
            numDisplay.textContent = numDisplay.textContent + this.textContent;
            mySum = mySum + this.textContent;

            console.log(mySum);
        })
    }   
}

equalsBtn.addEventListener("click", function(){
    numDisplay.textContent = "";
    numDisplay.style.display="none";
    ansDisplay.style.display="block"
    ansDisplay.textContent = eval(mySum);
    mySum = eval(mySum);
    equalsPressed = true;
    console.log('this is mySum');
    console.log(mySum);
    console.log('this is ansDisplay');
    console.log(ansDisplay.textContent);
});

resetBtn.addEventListener("click", function(){
    numDisplay.textContent="0";
    ansDisplay.textContent="";
    mySum="0+";
    console.log(mySum);
});

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


