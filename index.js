function displayGrid() {
    const pixelSize = 100/gridSize;
    const content = document.querySelector("#grid");
    content.textContent = "";

    for(let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < gridSize; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.cssText = `width: ${pixelSize}%; height: 100%;`
            row.appendChild(pixel);
        }
        row.style.cssText= `display: flex; width: 100%; height: ${pixelSize}%`;
        content.appendChild(row);
    }

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            let color = document.getElementById("favcolor").value;
            pixel.style.background = `${color}`;
        });
    });

    const reset = document.querySelector(".reset button");
    reset.addEventListener("click", () => {
        pixels.forEach((pixel) => {
            pixel.style.background = "white";
        });
    });
}

const newGrid = document.querySelector("#newGrid");
let gridSize = 32;
displayGrid();


newGrid.addEventListener("click", () => {
    gridSize = prompt("Enter a grid size between 1-64");
    while(gridSize < 1 || gridSize > 64) {
        gridSize = prompt("Please keep the size between 1 and 64");
    }

    displayGrid();
});

