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
        operatorType.toString();
        firstNumber = firstNumber.join("");
        secondNumber = secondNumber.join("");
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        if (operatorType == "+") {
          document.getElementById("screen").innerHTML = firstNumber + secondNumber;
        } else if (operatorType == "-") {
          document.getElementById("screen").innerHTML = firstNumber - secondNumber;
        } else if (operatorType == "*") {
          document.getElementById("screen").innerHTML = firstNumber * secondNumber;
        } else if (operatorType == "/") {
          document.getElementById("screen").innerHTML = firstNumber / secondNumber;
        } else {
          alert("does not compute");
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
