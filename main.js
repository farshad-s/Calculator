let calcBottom = document.getElementsByClassName("calc-display-bottom")[0];
let calcTop = document.getElementsByClassName("calc-display-top")[0];
let number = document.getElementsByClassName("number");
let calcOp = document.getElementsByClassName("operation");
let clear = document.getElementsByClassName("clear")[0];
let deleteLast = document.getElementsByClassName("delete")[0];

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
function clickButton() {
  number[0].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 7;
    } else return (calcBottom.innerText += Number(number[0].innerText));
  });
  number[1].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 8;
    } else return (calcBottom.innerText += Number(number[1].innerText));
  });
  number[2].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 9;
    } else return (calcBottom.innerText += Number(number[2].innerText));
  });
  number[3].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 4;
    } else return (calcBottom.innerText += Number(number[3].innerText));
  });
  number[4].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 5;
    } else return (calcBottom.innerText += Number(number[4].innerText));
  });
  number[5].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 6;
    } else return (calcBottom.innerText += number[5].innerText);
  });
  number[6].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 1;
    } else return (calcBottom.innerText += Number(number[6].innerText));
  });
  number[7].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 2;
    } else return (calcBottom.innerText += Number(number[7].innerText));
  });
  number[8].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 3;
    } else return (calcBottom.innerText += Number(number[8].innerText));
  });
  number[9].addEventListener("click", function () {
    if (calcBottom.innerText == number[9].innerText) {
      calcBottom.innerText = 0;
    } else return (calcBottom.innerText += Number(number[9].innerText));
  });
  number[10].addEventListener("click", function () {
    if (calcBottom.innerText.includes(".")) {
      calcBottom.innerText = calcBottom.innerText;
    } else {
      calcBottom.innerText += ".";
    }
  });
}

clearCalc();
removeLast();
clickButton();
