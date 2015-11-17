var hasOperatorBeenClicked = false;

var number = {first: "", second: "", operator: ""};

function checkId(event) {
    var target = event.target;

    if ($(target).attr('class') == "number" && hasOperatorBeenClicked == true) {
      number.second += target.value;
      document.getElementById("screen").innerHTML = number.first + number.operator + number.second;
    } else {
        if ($(target).attr('class') == "number") {
          // firstNumber.push(target.value);
          number.first += target.value;
          document.getElementById("screen").innerHTML = number.first;
        }
    }
    if ($(target).attr('class') == 'operator') {
      if (target.value == "=") {
        switch (number.operator) {
          case "+":
            document.getElementById("screen").innerHTML = parseInt(number.first) + parseInt(number.second);
            break;
          case "-":
            document.getElementById("screen").innerHTML = parseInt(number.first) - parseInt(number.second);
            break;
          case "*":
            document.getElementById("screen").innerHTML = parseInt(number.first) * parseInt(number.second);
            break;
          case "/":
            document.getElementById("screen").innerHTML = parseInt(number.first) / parseInt(number.second);
            break;
          default:
            alert("Does not compute");
            break;
        }
        hasOperatorBeenClicked = false;
      } else {
          number.operator = target.value;
          hasOperatorBeenClicked = true;
          document.getElementById("screen").innerHTML = number.first + number.operator;
        }
    }
}

$("input").click(function(event) {
    checkId(event);
});
