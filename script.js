console.log("Start");

let cells = document.querySelectorAll(".square");
step = 0;
for (let cell of cells) {
cell.addEventListener("click", function () {
// for (let i = 1; i <= 9; i++) {
  let symbol = document.createElement("div");
  let i = 0;
  symbol.textContent = i;
  if(step % 2 === "0") {
  symbol.textContent = "0";
} else {
  symbol.textContent = "x";
}
  cell.append(symbol);
//}
});
}

// let game = document.querySelector(".container");
// for (let i = 0; i < 9; i++) {
// game.innerHTML = '<span class="cell"></span>';
// game.classList.add("cell");
// game.addEventListener("click", function (event) {
//   let step = 0;
//   symbol.textContent = i;
//  // if(step.classList =="cell") {
//     if (step%2 ==0){
//     symbol.textContent = "x";
// } else {
//   symbol.textContent = "0";
// }
//   cell.append(symbol);
//   }
// });

