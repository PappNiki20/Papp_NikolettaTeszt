$(function () {});
function fizbuz(n) {
  if (n === 0) {
    return "";
  } else {
    let txt = "";
    for (let index = 1; index < n; index++) {
      txt += fizbuzErtek(index) + ", ";
    }
  }
  txt += fizbuzErtek(n);
  return txt;
}
function fizbuzErtek(x) {
  let ertek = "";

  if ((x % 3 === 0) && (x % 5 === 0)) {
    ertek += "fizz-buzz";
  } else if (x % 3 === 0) {
    ertek += "fizz";
  } else if (x % 5 === 0) {
    ertek += "buzz";
  } else {
    ertek += x;
  }
  return ertek;
}
