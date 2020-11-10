let calcBottom = document.getElementsByClassName("calc-display-bottom")[0];
let calcTop = document.getElementsByClassName("calc-display-top")[0];
let number = document.getElementsByClassName("number");
let calcOp = document.getElementsByClassName("operation");
let clear = document.getElementsByClassName("clear")[0];
let deleteLast = document.getElementsByClassName("delete")[0];

calcBottom.innerText = "3942";
calcTop.innerText = "20";

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

function clickButton() {
  number[0].addEventListener("click", function () {
    calcBottom.innerText = 7;
  });
  number[1].addEventListener("click", function () {
    calcBottom.innerText = 8;
  });
  number[2].addEventListener("click", function () {
    calcBottom.innerText = 9;
  });
  number[3].addEventListener("click", function () {
    calcBottom.innerText = 4;
  });
  number[4].addEventListener("click", function () {
    calcBottom.innerText = 5;
  });
  number[5].addEventListener("click", function () {
    calcBottom.innerText = 6;
  });
  number[6].addEventListener("click", function () {
    calcBottom.innerText = 1;
  });
  number[7].addEventListener("click", function () {
    calcBottom.innerText = 2;
  });
  number[8].addEventListener("click", function () {
    calcBottom.innerText = 3;
  });
  number[9].addEventListener("click", function () {
    calcBottom.innerText = 0;
  });
  number[10].addEventListener("click", function () {
    calcBottom.innerText = ".";
  });
}

clearCalc();
removeLast();
clickButton();
