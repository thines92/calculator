function addition(x,y) {
  document.getElementById("screen").innerHTML = x + y;
}
function subtract(x,y) {
  document.getElementById("screen").innerHTML = x - y;
}
function multiply(x,y) {
  document.getElementById("screen").innerHTML = x * y;
}
function divide(x,y) {
  document.getElementById("screen").innerHTML = x / y;
}

var hasOperatorBeenClicked = false;

var firstNumber = [];
var operatorType = [];
var secondNumber = [];

function checkId(event) {
    var target = event.target;

    if ($(target).attr('class') == "number" && hasOperatorBeenClicked == true) {
      secondNumber.push(target.value);
      document.getElementById("screen").innerHTML = firstNumber + operatorType + secondNumber;
    } else {
        if ($(target).attr('class') == "number") {
          firstNumber.push(target.value);
          // firstNumber.join("");
          document.getElementById("screen").innerHTML = firstNumber;
        }
    }
    if ($(target).attr('class') == 'operator') {
      if (target.value == "=") {
        switch (operatorType) {
          case "+":
            addition(firstNumber, secondNumber);
            break;
          case "-":
            subtract(firstNumber, secondNumber);
            break;
          case "*":
            multiply(firstNumber, secondNumber);
            break;
          case "/":
            divide(firstNumber, secondNumber);
            break;
          default:
            alert("Does not compute");
            break;
        }
        hasOperatorBeenClicked = false;
      } else {
          operatorType.push(target.value);
          hasOperatorBeenClicked = true;
          document.getElementById("screen").innerHTML = firstNumber + operatorType;
        }
    }
}

$("input").click(function(event) {
    checkId(event);
});
