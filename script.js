console.log("Start");

//let cells = document.querySelectorAll(".cell");
let cells = document.querySelectorAll(".square");

for (let cell of cells) {
cell.addEventListener("click", function () {
 // for (let i = 1; i <= 9; i++) {
  let symbol = document.createElement("div");
  let i = 0;
  let x;
  symbol.textContent = i;
  if(i !== 0) {
    i === x;
} else {
  i === 0;
}
  cell.append(symbol);
  //}
});
}
