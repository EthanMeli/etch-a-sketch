// create a row container for every row
// create a square in col loop
// apply square class to each new element
// append square to row container
// append row container to container
function initializeGrid(dims) {
  const container = document.querySelector(".container");
  container.childNodes.forEach(element => element.remove());

  for (let i = 0; i < dims; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < dims; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseenter", updateBgColor);
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function updateBgColor() {
  event.target.style.backgroundColor = "red";
}

initializeGrid(16);