// var tag = document.getElementsByTagName("p");
// let baba = tag;
// for (let i = 0; i < baba.length; i++) {
//   baba[i].innerHTML = "poonka";
// }
// console.log(document);
var table1 = document.getElementById("table1");
var cell = table1.getElementsByTagName("td");
console.log(cell);
for (i = 0; i < cell.length; i++) {
  cell[i].style.color = "yellow";
  table1.style.backgroundColor = "pink";
}
