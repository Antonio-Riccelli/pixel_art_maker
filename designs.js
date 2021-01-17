var colorInput = document.getElementById("colorPicker");
var selectTable = document.getElementById("pixelCanvas");
var formInput = document.getElementById("sizePicker");
var heightInput = document.getElementById("inputHeight");
var widthInput = document.getElementById("inputWidth");


formInput.addEventListener("submit", function (e) {
    selectTable.innerHTML = "";

    e.preventDefault();

    var heightInput = document.getElementById("inputHeight");
    var widthInput = document.getElementById("inputWeight");


    makeGrid(heightInput, widthInput);
    addColor(colorInput);
});


function makeGrid(height, width) {

    for (var i = 0; i < heightInput.value; i++) {
        var row = selectTable.insertRow();
        for (var n = 0; n < widthInput.value; n++) {
            var cell = row.insertCell();
        }
    }
}

function addColor(color) {
var allCells = document.querySelectorAll("td");
for (var i = 0; i < allCells; i++) {
    allCells[i].addEventListener("mousedown", function(e) {
        e.target.style.backgroundColor = colorInput;
    })
 }
}



