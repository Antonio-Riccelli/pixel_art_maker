// * Initial variables assignments, names are self-explanatory
let colorInput = document.getElementById("colorPicker");
let selectTable = document.getElementById("pixelCanvas");
let formInput = document.getElementById("sizePicker");
let heightInput = document.getElementById("inputHeight");
let widthInput = document.getElementById("inputWidth");

/*
* @description collects form input information, passes it to functions to create table and assign color
* @param {event} e 
*/
formInput.addEventListener("submit", function (e) {
    selectTable.innerHTML = "";
    e.preventDefault();
    // let heightInput = document.getElementById("inputHeight");
    // let widthInput = document.getElementById("inputWeight");
    makeGrid(heightInput, widthInput);
    addColor(colorInput);
});

/*
* @description creates table
* @param {number} height 
* @param {number} width
*/
function makeGrid(height, width) {
    for (let i = 0; i < heightInput.value; i++) {
        let row = selectTable.insertRow();
        for (let n = 0; n < widthInput.value; n++) {
            let cell = row.insertCell();
        }
    }
}

/*
* @description colours cells, adding event listeners for "mousedown", "mousemove" and "mouseup"
* @param {value} color
*/
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