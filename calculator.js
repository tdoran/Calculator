//Query Selectors//
var numBtns = document.querySelectorAll(".numButton");
var numDisplay = document.querySelector("#numDisplay");
var ansDisplay = document.querySelector("#ansDisplay");
var equalsBtn = document.querySelector("#equals");
var resetBtn = document.querySelector("#reset");
var deleteBtn = document.querySelector("#delete");
var operatorBtns = document.querySelectorAll(".operatorBtn");
var decimalBtn = document.querySelector("#decimal")

//Variables//
var mySum = "";
var equalsPressed = false;
var operatorPressed = false;
var decimalPressed = false;

//convert "*" and "/" to "x" and "÷"//
function replaceMultDivide(sumString){
    splitSum = sumString.split("");
    for(var i=0;i<splitSum.length;i++){
        if(splitSum[i]==="*"){
            splitSum.splice(i, 1, 'x');
        }
        if(splitSum[i]==="/"){
            splitSum.splice(i, 1, '÷');
        }
        if(splitSum[i]==="."&&splitSum[i-1]!==/([1-9])/){
            splitSum.splice(i, 1, '0.')
        }
    }
        return splitSum.join("");
    }

//Add click listeners to numbers//
for(var i=0;i<numBtns.length;i++){
        numBtns[i].addEventListener("click", function(){
/*             ansDisplay.style.display="none";
            numDisplay.style.display="block" */
            ansDisplay.textContent = "";
            if(equalsPressed===false){
                if(numDisplay.textContent==="0"){
                    numDisplay.textContent =this.textContent;
                }
                else{
                numDisplay.textContent = numDisplay.textContent + this.textContent;
                }
                mySum = mySum + this.textContent;
            }
            if(equalsPressed===true){
                if(numDisplay.textContent==="0"){
                    numDisplay.textContent =this.textContent;
                    equalsPressed=false;
                }
                else{
                numDisplay.textContent = this.textContent;
                }
                mySum = this.textContent;
                equalsPressed=false;
            }
            operatorPressed=false;
            console.log(mySum);
        })  
}

//Add click listner to decimal//
decimalBtn.addEventListener("click", function(){
    ansDisplay.textContent = "";
    var splitDisplay = numDisplay.textContent.split("");
    
    if(equalsPressed===false){
        if(numDisplay.textContent==="0"){
            numDisplay.textContent = "0" + this.textContent;
            mySum = mySum + this.textContent;
        }
        else if(decimalPressed===false){
            if(splitDisplay[splitDisplay.length-1]!==/([1-9])/){
                numDisplay.textContent = numDisplay.textContent + "0" + this.textContent;
                mySum = mySum + this.textContent;
            }
            else{numDisplay.textContent = numDisplay.textContent + this.textContent;
            mySum = mySum + this.textContent;
            }

        }
    }
    
    if(equalsPressed===true||numDisplay.textContent==="0"){
            numDisplay.textContent = "0" + this.textContent;
            equalsPressed=false;
            decimalPressed=true;
            operatorPressed=false;
            console.log(mySum);
    }
});

//Add click listeners to operators (excluding equals)//
for(var i=0;i<operatorBtns.length;i++){

    //multiply button//
    if(operatorBtns[i].textContent==="x"){
            operatorBtns[i].addEventListener("click", function(){
                if(operatorPressed===false){
                    ansDisplay.textContent="";
                    numDisplay.textContent = numDisplay.textContent + "x";
                    mySum = mySum + "*";
                    equalsPressed=false;
                    operatorPressed=true;
                    decimalPressed=false;
                    console.log(mySum);
                    }
                });
    }

    //divide button//
    else if(operatorBtns[i].textContent==="÷"){
        operatorBtns[i].addEventListener("click", function(){
                if(operatorPressed===false){
                ansDisplay.textContent = "";
                numDisplay.textContent = numDisplay.textContent + "÷";
                mySum = mySum + "/";
                equalsPressed=false;
                operatorPressed=true;
                decimalPressed=false;
                console.log(mySum);
                }
            });
    }  

    //addittion and subtraction buttons//
    else {operatorBtns[i].addEventListener("click", function(){
        if(operatorPressed===false){
    /*         ansDisplay.style.display="none";
            numDisplay.style.display="block" */
            ansDisplay.textContent = "";
            numDisplay.textContent = numDisplay.textContent + this.textContent;
            mySum = mySum + this.textContent;
            equalsPressed=false;
            operatorPressed=true;
            decimalPressed=false;
            console.log(mySum);
        }
        });
    }      
}

//Add click listener to equals//
equalsBtn.addEventListener("click", function(){
    numDisplay.textContent = eval(mySum).toString();;
    numDisplay.style.display="block";
    ansDisplay.style.display="block"
    ansDisplay.textContent = replaceMultDivide(mySum) + "=";
    mySum = eval(mySum).toString();
    equalsPressed = true;
    decimalPressed=false;
    operatorPressed=false;
    console.log('this is mySum');
    console.log(mySum);
    console.log('this is ansDisplay');
    console.log(ansDisplay.textContent);
});

//Add click listener to reset ('C')//
resetBtn.addEventListener("click", function(){
/*     numDisplay.style.display="block";
    ansDisplay.style.display="none"; */
    numDisplay.textContent="0";
    ansDisplay.textContent="";
    mySum="";
    decimalPressed=false;
    operatorPressed=false;
    console.log(mySum);
});

//Add click listener to delete//
deleteBtn.addEventListener("click", function(){
    if(equalsPressed===false){   
        var splitDisplay = numDisplay.textContent.split("");
        if(splitDisplay[splitDisplay.length-1]==="."){
            decimalPressed=false;
        }
        if(splitDisplay[splitDisplay.length-1]==="+"
            ||splitDisplay[splitDisplay.length-1]==="-"
            ||splitDisplay[splitDisplay.length-1]==="x"
            ||splitDisplay[splitDisplay.length-1]==="÷"){
                decimalPressed=false;
            }
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
    }
});
