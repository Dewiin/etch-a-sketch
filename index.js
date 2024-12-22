let gridSize = 16;
const pixelSize = 100/gridSize;
const content = document.querySelector("#content");

for(let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j = 0; j < gridSize; j++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.cssText = `width: ${pixelSize}%; height: 100%; border: solid 1px lightgray;`
        row.appendChild(pixel);
    }
    row.style.cssText= `display: flex; width: 100%; height: ${pixelSize}%`;
    content.appendChild(row);
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.background = "blue";
    });
});

const reset = document.querySelector(".reset button");
reset.addEventListener("click", () => {
    pixels.forEach((pixel) => {
        pixel.style.background = "white";
    });
});


