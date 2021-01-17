let colorInput = document.getElementById("colorPicker");
let selectTable = document.getElementById("pixelCanvas");
let formInput = document.getElementById("sizePicker");
let heightInput = document.getElementById("inputHeight");
let widthInput = document.getElementById("inputWidth");


formInput.addEventListener("submit", function (e) {
    selectTable.innerHTML = "";
    e.preventDefault();
    let heightInput = document.getElementById("inputHeight");
    let widthInput = document.getElementById("inputWeight");
    makeGrid(heightInput, widthInput);
    addColor(colorInput);
});


function makeGrid(height, width) {
    for (let i = 0; i < heightInput.value; i++) {
        let row = selectTable.insertRow();
        for (let n = 0; n < widthInput.value; n++) {
            let cell = row.insertCell();
        }
    }
}

function addColor(color) {
    let allCells = document.querySelectorAll("td");
    let isDrawing = false;
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].addEventListener("mousedown", function (e) {
            isDrawing = true;
            e.target.style.backgroundColor = colorInput.value;
        });

        allCells[i].addEventListener("mousemove", function (e) {
            if (isDrawing === true) {
                e.target.style.backgroundColor = colorInput.value;
            }
        });

        allCells[i].addEventListener("mouseup", function (e) {
            if (isDrawing === true) {
                isDrawing = false;
            }
        })
    }
};