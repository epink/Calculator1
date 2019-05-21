var calculatorDisplay = document.querySelector(".calculatorDisplay");
var numberZero = document.getElementById("zero");
var numberOne = document.getElementById("one");
var numberTwo = document.getElementById("two");
var numberThree = document.getElementById("three");
var numberFour = document.getElementById("four");
var numberFive = document.getElementById("five");
var numberSix = document.getElementById("six");
var numberSeven = document.getElementById("seven").value;
var numberEight = document.getElementById("eight");
var numberNine = document.getElementById("nine");
var calculatorKeys = document.querySelector(".calculatorKeys");
var num1;  
var num2;
var keyOperator = document.querySelector("keyOperator");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var keyEqual = document.getElementById("keyEqual");
var finalEquation;
var operator = "-"  ;
var clear = document.querySelector("#clear")



calculatorKeys.addEventListener("click", function calculate(){
    
if(event.target === numberZero){
    calculatorDisplay.innerHTML = 0;
    if(isNaN(num1))
    { num1 = 0;}
        else{num2 = 0;}
}else if(event.target === numberOne){
        calculatorDisplay.innerHTML = 1;
if(isNaN(num1)){ num1 = 1
                }
        else{num2 = 1;
             }
}else if(event.target === numberTwo){
        calculatorDisplay.innerHTML = 2;
if(isNaN(num1)){ num1 = 2;
                }
        else{num2 = 2;
             }
}else if(event.target === numberThree){
        calculatorDisplay.innerHTML = 3;
if(isNaN(num1)){ num1 = 3;
                }
        else{num2 = 3;
             }
}else if(event.target === numberFour){
        calculatorDisplay.innerHTML = 4;
if(isNaN(num1)){ num1 = 4;
                }
        else{num2 = 4;
             }
}else if(event.target === numberFive){
        calculatorDisplay.innerHTML = 5;
if(isNaN(num1)){ num1 = 5;
                }
        else{num2 = 5;
             }
}else if(event.target === numberSix){
        calculatorDisplay.innerHTML = 6;
if(isNaN(num1)){ num1 = 6;
                }
        else{num2 = 6;
             }
}else if(event.target === numberSeven){
        calculatorDisplay.innerHTML = 7;
if(isNaN(num1)){ num1 = 7;
                }
        else{num2 = 7;
             }
}else if(event.target === numberEight){
        calculatorDisplay.innerHTML = 8;
if(isNaN(num1)){ num1 = 8;
               }
        else{num2 = 8;
            }
}else if(event.target === numberNine){
        calculatorDisplay.innerHTML = 9;
if(isNaN(num1)){ num1 = 9;
               }
        else{num2 = 9;
            } 
    

}
    if(event.target == add){
    finalEquation = parseInt(num1) + parseInt(num2) ;
}else if(event.target == subtract){
finalEquation = num1   - num2 ;
}else if(event.target == divide){
    finalEquation = num1 / num2 ;
}else if(event.target == multiply){
    finalEquation = num1 * num2 ;
}else if(event.target === clear){
    window.location.reload()
    num1 = undefined;
    num2 = undefined;
    finalEquation = undefined;
        calculatorDisplay.innerHTML = finalEquation;

    
            }else if(event.target === keyEqual){calculatorDisplay.innerHTML = (finalEquation);
                                                console.log(finalEquation)
}})
    


   
//    calculatorKeys.addEventListener("click", function calculate(){})