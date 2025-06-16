const grid = document.querySelector(".grid");
function createGrid(size) {
  if (size < 0) size = 1;
  else if (size > 100) size = 100;
  const grid = document.querySelector(".grid");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < size; j++) {
      const tempBox = document.createElement("div");
      tempBox.setAttribute("class", "box");
      row.appendChild(tempBox);
    }
    grid.appendChild(row);
  }
}
function addBoxHover() {
  const boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach((box) => {
    box.addEventListener("mousemove", () => {
      box.setAttribute("style", "background-color: darkblue");
    });
  });
}

function clearGrid() {
  const rows = Array.from(document.querySelectorAll(".row"));
  rows.forEach((row) => {
    grid.removeChild(row);
  });
}

function createNewGrid(size) {
  clearGrid();
  createGrid(size);
  addBoxHover();
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
  let size = prompt(
    "How big do you want your grid? Select a size between 0 and 100."
  );
  size = +size;
  createNewGrid(size);
});

createNewGrid(16);
