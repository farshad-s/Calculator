const calcTop = document.getElementById("calc-display-top");
const calcBottom = document.getElementById("calc-display-bottom");
const number = document.getElementsByClassName("number");
const decimal = document.getElementById("decimal");
const calcOp = document.getElementsByClassName("operation");
const clear = document.getElementById("clear");
const deleteLast = document.getElementById("delete");
const equals = document.getElementById("equals");

calcBottom.innerText = "";
calcTop.innerText = "";

function calculator() {
  clearCalc();
  removeLast();
  eachNumber();
  decimalClicker();
  multiplicationOp();
  additionOp();
  subtractionOp();
  divisionOp();
  equalsOp();
  keyboardShortcuts();
}

// Clears all of the calculator
function clearCalc() {
  clear.addEventListener("click", () => {
    calcBottom.innerText = "";
    calcTop.innerText = "";
  });
}

// Removes the last entry in the calculator
function removeLast() {
  deleteLast.addEventListener("click", () => {
    calcBottom.innerText = calcBottom.innerText.slice(0, -1);
  });
}

function numberClicker(num) {
  number[num].addEventListener("click", function () {
    // if first number is 0, it will be replaced with the next number that is clicked
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
      // maximum number of characters that can be input is 25
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
}

function decimalClicker() {
  decimal.addEventListener("click", function () {
    // prevents adding more than 1 decimal
    if (calcBottom.innerText.includes(this.innerText)) {
      calcBottom.innerText = calcBottom.innerText;
      // maximum number of characters that can be input is 25
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else {
      calcBottom.innerText += this.innerText;
    }
  });
}

function eachNumber() {
  for (let i = 0; i < number.length; i++) {
    numberClicker(i);
  }
}

// Displays number with multiply sign at the top of the calculator
// Empties the bottom of the calculator
// Multiples the number without having to use the equals sign if used whilst already in use
function multiplicationOp() {
  calcOp[0].addEventListener("click", () => {
    if (
      calcTop.innerText == "*" ||
      calcTop.innerText == "+" ||
      calcTop.innerText == "-" ||
      calcTop.innerText == "/" ||
      calcBottom.innerText == ""
    ) {
      calcTop.innerText = calcTop.innerText;
    } else if (calcTop.innerText.includes("*") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("*")[0]) *
          parseFloat(calcBottom.innerText) +
        "*";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("+") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("+")[0]) +
        parseFloat(calcBottom.innerText) +
        "*";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("-") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("-")[0]) -
        parseFloat(calcBottom.innerText) +
        "*";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("/") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("/")[0]) /
          parseFloat(calcBottom.innerText) +
        "*";
      calcBottom.innerText = "";
    } else {
      calcBottom.innerText += calcOp[0].innerText;
      calcTop.innerText = calcBottom.innerText;
      calcBottom.innerText = "";
    }
  });
}

// Displays number with addition sign at the top of the calculator
// Empties the bottom of the calculator
// Adds the number without having to use the equals sign if used whilst already in use
function additionOp() {
  calcOp[1].addEventListener("click", () => {
    if (
      calcTop.innerText == "*" ||
      calcTop.innerText == "+" ||
      calcTop.innerText == "-" ||
      calcTop.innerText == "/" ||
      calcBottom.innerText == ""
    ) {
      calcTop.innerText = calcTop.innerText;
    } else if (calcTop.innerText.includes("*") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("*")[0]) *
          parseFloat(calcBottom.innerText) +
        "+";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("+") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("+")[0]) +
        parseFloat(calcBottom.innerText) +
        "+";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("-") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("-")[0]) -
        parseFloat(calcBottom.innerText) +
        "+";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("/") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("/")[0]) /
          parseFloat(calcBottom.innerText) +
        "+";
      calcBottom.innerText = "";
    } else {
      calcBottom.innerText += calcOp[1].innerText;
      calcTop.innerText = calcBottom.innerText;
      calcBottom.innerText = "";
    }
  });
}

// Displays number with subtraction sign at the top of the calculator
// Empties the bottom of the calculator
// Subtracts the number without having to use the equals sign if used whilst already in use
function subtractionOp() {
  calcOp[2].addEventListener("click", () => {
    if (
      calcTop.innerText == "*" ||
      calcTop.innerText == "+" ||
      calcTop.innerText == "-" ||
      calcTop.innerText == "/" ||
      calcBottom.innerText == ""
    ) {
      calcTop.innerText = calcTop.innerText;
    } else if (calcTop.innerText.includes("*") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("*")[0]) *
          parseFloat(calcBottom.innerText) +
        "-";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("+") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("+")[0]) +
        parseFloat(calcBottom.innerText) +
        "-";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("-") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("-")[0]) -
        parseFloat(calcBottom.innerText) +
        "-";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("/") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("/")[0]) /
          parseFloat(calcBottom.innerText) +
        "-";
      calcBottom.innerText = "";
    } else {
      calcBottom.innerText += calcOp[2].innerText;
      calcTop.innerText = calcBottom.innerText;
      calcBottom.innerText = "";
    }
  });
}

// Displays number with division sign at the top of the calculator
// Empties the bottom of the calculator
// Divides the number without having to use the equals sign if used whilst already in use
function divisionOp() {
  calcOp[3].addEventListener("click", () => {
    if (
      calcTop.innerText == "*" ||
      calcTop.innerText == "+" ||
      calcTop.innerText == "-" ||
      calcTop.innerText == "/" ||
      calcBottom.innerText == ""
    ) {
      calcTop.innerText = calcTop.innerText;
    } else if (calcTop.innerText.includes("*") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("*")[0]) *
          parseFloat(calcBottom.innerText) +
        "/";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("+") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("+")[0]) +
        parseFloat(calcBottom.innerText) +
        "/";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("-") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("-")[0]) -
        parseFloat(calcBottom.innerText) +
        "/";
      calcBottom.innerText = "";
    } else if (calcTop.innerText.includes("/") == true) {
      calcTop.innerText =
        parseFloat(calcTop.innerText.split("/")[0]) /
          parseFloat(calcBottom.innerText) +
        "/";
      calcBottom.innerText = "";
    } else {
      calcBottom.innerText += calcOp[3].innerText;
      calcTop.innerText = calcBottom.innerText;
      calcBottom.innerText = "";
    }
  });
}

// Does the Mathematical Equation and returns it in bottom half of the calculator display
// Empties the top half of the Calculator Display
function equalsOp() {
  equals.addEventListener("click", () => {
    if (
      calcTop.innerText == "*" ||
      calcTop.innerText == "+" ||
      calcTop.innerText == "-" ||
      calcTop.innerText == "/" ||
      calcBottom.innerText == ""
    ) {
      calcBottom.innerText == calcBottom.innerText;
    } else if (calcTop.innerText.includes("*") == true) {
      calcBottom.innerText =
        parseFloat(calcTop.innerText.split("*")[0]) *
        parseFloat(calcBottom.innerText);
      calcTop.innerText = "";
    } else if (calcTop.innerText.includes("+") == true) {
      calcBottom.innerText =
        parseFloat(calcTop.innerText.split("+")[0]) +
        parseFloat(calcBottom.innerText);
      calcTop.innerText = "";
    } else if (calcTop.innerText.includes("-") == true) {
      calcBottom.innerText =
        parseFloat(calcTop.innerText.split("-")[0]) -
        parseFloat(calcBottom.innerText);
      calcTop.innerText = "";
    } else if (calcTop.innerText.includes("/") == true) {
      calcBottom.innerText =
        parseFloat(calcTop.innerText.split("/")[0]) /
        parseFloat(calcBottom.innerText);
      calcTop.innerText = "";
    }
  });
}

// Adds accessibility by allowing you to use the keyboard without using tab
function keyboardShortcuts() {
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 48) {
      number[9].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 49) {
      number[6].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 50) {
      number[7].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 51) {
      number[8].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 52) {
      number[3].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 53) {
      number[4].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 54) {
      number[5].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 55) {
      number[0].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 56 && event.shiftKey != true) {
      number[1].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 57) {
      number[2].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 190) {
      decimal.click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 56 && event.shiftKey) {
      calcOp[0].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 187 && event.shiftKey) {
      calcOp[1].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 189) {
      calcOp[2].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 191) {
      calcOp[3].click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 187 && event.shiftKey != true) {
      equals.click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 27) {
      clear.click();
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 8) {
      deleteLast.click();
    }
  });
}

calculator();
