let count = 0;

let plus = (document.querySelector(".btn-plus").onclick = plusFunc);
let minus = (document.querySelector(".btn-minus").onclick = minusFunc);
let umn = (document.querySelector(".btn-umn").onclick = Umn);
let del = (document.querySelector(".btn-del").onclick = Del);
let ravno = (document.querySelector(".btn-ravno").onclick = ravnoF);
let on = (document.querySelector(".btn-on").onclick = onFunk);

function plusFunc() {
  let a = Number(document.querySelector(".inp1").value);
  count = a;
  q = (b) => a + b;
  document.querySelector(".number").innerHTML = count;

  document.querySelector(".inp1").value = null;
}

function minusFunc() {
  let a = Number(document.querySelector(".inp1").value);
  count = a;
  q = (b) => a - b;
  document.querySelector(".number").innerHTML = count;

  document.querySelector(".inp1").value = null;
}

function Umn() {
  let a = Number(document.querySelector(".inp1").value);
  count = a;
  q = (b) => a * b;
  document.querySelector(".number").innerHTML = count;

  document.querySelector(".inp1").value = null;
}
function Del() {
  let a = Number(document.querySelector(".inp1").value);
  count = a;
  q = (b) => a / b;
  document.querySelector(".number").innerHTML = count;
  document.querySelector(".inp1").value = null;
}

function ravnoF() {
  let b = Number(document.querySelector(".inp1").value);

  console.log(b);
  let z = q(b);
  count = z;
  document.querySelector(".number").innerHTML = count;

  document.querySelector(".inp1").value = count;

}
function onFunk() {
    document.querySelector(".number").innerHTML = 0;
    document.querySelector(".inp1").value = null;
  }

