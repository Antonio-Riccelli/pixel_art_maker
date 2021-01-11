
var colorInput = document.getElementById("colorPicker");
var selectTable = document.getElementById("pixelCanvas");
var formInput = document.getElementById("sizePicker");
var heightInput = document.getElementById("inputHeight");
var widthInput = document.getElementById("inputWidth");


function makeGrid(height, width) {

    for (var i = 0; i < heightInput; i++) {
        var row = selectTable.insertRow(i);
          for (var n = 0; n < widthInput; n++) {
            var cell = row.insertCell(n);
           
    }
    
}

}

makeGrid(heightInput, widthInput);
 cell.addEventListener("click", (e) => {
    cell.style.backgroundColor = color.value;
})




formInput.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    var heightInput = document.getElementById("inputHeight");
    var widthInput = document.getElementById("inputWeight");
    selectTable.firstElementChild.remove();
  
    makeGrid(heightInput, widthInput);
  
});



