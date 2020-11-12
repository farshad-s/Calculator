let calcBottom = document.getElementsByClassName("calc-display-bottom")[0];
let calcTop = document.getElementsByClassName("calc-display-top")[0];
let number = document.getElementsByClassName("number");
let calcOp = document.getElementsByClassName("operation");
let clear = document.getElementsByClassName("clear")[0];
let deleteLast = document.getElementsByClassName("delete")[0];

let numSeven = document.getElementById(".num7");

calcBottom.innerText = "";
calcTop.innerText = "";

// Clears all of the calculator
function clearCalc() {
  clear.addEventListener("click", function () {
    calcBottom.innerText = "";
    calcTop.innerText = "";
  });
}

// Removes the last entry in the calculator
function removeLast() {
  deleteLast.addEventListener("click", function () {
    calcBottom.innerText = calcBottom.innerText
      .toString()
      .split("")
      .slice(0, -1)
      .join("");
  });
}

// Numbers display in the Calculator when clicked
// Cannot click on Zero more than once if at the beginning
// Clicking on any number after Zero turns Zero into that number at the beginning
// Clicking on the decimal point will only show if it isn't already in the bottom results area
// Maximum number of characters that can be input into the calculator is 25

function numberTest(num) {
  number[num].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
}

numberTest(0);

function clickButton() {
  number[0].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[1].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[2].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[3].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[4].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[5].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[6].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[7].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[8].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[9].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = Number(this.innerText);
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else calcBottom.innerText += Number(this.innerText);
  });
  number[10].addEventListener("click", function () {
    if (calcBottom.innerText.includes(this.innerText)) {
      calcBottom.innerText = calcBottom.innerText;
    } else if (calcBottom.innerText.length == 25) {
      alert("Error, cannot return more than 25 characters");
    } else {
      calcBottom.innerText += this.innerText;
    }
  });
}

// Displays number with multiply sign at the top of the calculator
// Empties the bottom of the calculator
// Multiples the number without having to use the equals sign if used whilst already in use
function multiplyOp() {
  calcOp[0].addEventListener("click", function () {
    if (calcTop.innerText.includes("*") == true) {
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
  calcOp[1].addEventListener("click", function () {
    if (calcTop.innerText.includes("*") == true) {
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
  calcOp[2].addEventListener("click", function () {
    if (calcTop.innerText.includes("*") == true) {
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
  calcOp[4].addEventListener("click", function () {
    if (calcTop.innerText.includes("*") == true) {
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
      calcBottom.innerText += calcOp[4].innerText;
      calcTop.innerText = calcBottom.innerText;
      calcBottom.innerText = "";
    }
  });
}

// Does the Mathematical Equation and returns it in bottom half of the calculator display
// Empties the top half of the Calculator Display
function equalsOp() {
  calcOp[3].addEventListener("click", function () {
    if (calcTop.innerText.includes("*") == true) {
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

clearCalc();
removeLast();
// clickButton();
multiplyOp();
additionOp();
subtractionOp();
divisionOp();
equalsOp();

// Tasks to do
// Refactor clickButton code
// Fix bug when clicking on two operations in a row
// Split the code into different files - then import into one file
