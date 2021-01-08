console.log("Start");

//let cells = document.querySelectorAll(".cell");
let cells = document.querySelectorAll(".square");

for (let cell of cells) {
cell.addEventListener("click", function () {
 // for (let i = 1; i <= 9; i++) {
  let symbol = document.createElement("div");
  let i = 0;
  new_click = "x";
  symbol.textContent = i;
  if(i !== 0) {
  symbol.textContent = new_click;
} else {
  i = 0;
}
  cell.append(symbol);
  //}
});
}
