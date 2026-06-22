const container = document.querySelector(".container");

const createNewBtn = document.querySelector(".create-new");
createNewBtn.addEventListener("click", () => {
  const dimensions = Number(prompt("What dimensions would you like the new sketch to be?", 16));
  if (dimensions === "NaN") {
    alert("Please input a number!");
  } else if (dimensions > 100) {
    alert("This number is too large! Please enter an integer between 1-100.");
  } else if (Math.floor(dimensions) !== dimensions) {
    alert("Please enter an integer.");
  } else {
    initializeGrid(dimensions);
  }
})

function initializeGrid(dims) {
  container.innerHTML = '';

  for (let i = 0; i < dims; i++) {
    const row = document.createElement("div");
    row.classList.add("row-container");
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