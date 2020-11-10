let calcBottom = document.getElementsByClassName("calc-display-bottom")[0];
let calcTop = document.getElementsByClassName("calc-display-top")[0];
let number = document.getElementsByClassName("number");
let calcOp = document.getElementsByClassName("operation");
let clear = document.getElementsByClassName("clear")[0];
let deleteLast = document.getElementsByClassName("delete")[0];

calcBottom.innerText = "3942";
// calcTop.innerText = "";

function clearCalc() {
  clear.addEventListener("click", function () {
    calcBottom.innerText = "";
    calcTop.innerText = "";
  });
}

function removeLast() {
  deleteLast.addEventListener("click", function () {
    calcBottom.innerText = calcBottom.innerText
      .toString()
      .split("")
      .slice(0, -1)
      .join("");
  });
}

clearCalc();
removeLast();
