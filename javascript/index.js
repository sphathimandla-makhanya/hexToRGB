
// Declaring the input variables
let hex = document.querySelector('[data-hex]');
let red = document.querySelector('[data-red]');
let green = document.querySelector('[data-green]');
let blue = document.querySelector('[data-blue]');

function hexToRgb() {
    // Get the hex color code from the input field
    let hexColor = hex.value;
    // replaces the # with nothing/ clears it out
    hexColor = hexColor.replace('#', '');

    // parseInt to take in 
  
    let r = parseInt(hexColor.substring(0, 2), 16);
    let g = parseInt(hexColor.substring(2, 4), 16);
    let b = parseInt(hexColor.substring(4, 6), 16);

    // Update the RGB input fields
    red.value = r;
    green.value = g;
    blue.value = b;
}

// Adding event listener for hex to RGB conversion
btn1 = document.querySelector('[data-btn1]')
btn1.addEventListener('click', hexToRgb);

// Adding event listener to clear values
btn2 = document.querySelector('[data-btn2]')
btn2.addEventListener('click', function () {
    hex.value = "";
    red.value = "";
    green.value = "";
    blue.value = "";
});
