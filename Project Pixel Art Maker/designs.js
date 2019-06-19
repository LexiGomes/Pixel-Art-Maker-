// Select color input
// Select size input
var size = document.getElementById('sizePicker')
var color = document.getElementById('colourPicker').value;

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function (event){
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});


function makeGrid(x, y) {
    $('tr').remove();
    for (var n = 1; n <= x; n++) {
        $('#pixelCanvas').append('<tr id=table' + n + '></tr>');
        for (var t = 1; t <= y; t++) {
            $('#table' + n).append('<td></td>');
        }
    }

    // Adding colour to cell
    
    $('td').click(function addColour() {
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
};

