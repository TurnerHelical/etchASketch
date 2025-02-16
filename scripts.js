// Define a variable for the main content container
const mainContainer = document.querySelector('#mainContainer');


// Write javascript that will put a 16 x 16 grid of box divs on the webpage
// Make the grids with flexbox
// set a hover effect on the grids so that when your mouse goes over the grid it changes colors
// the effect should stay after the mouse moves off
// add a button on the top of the screen that will send the user a popup asking how many grids they want (max 100)
// using the new value the old grid should be removed and replaced with a new grid with the specified squares


function createGrid(number) {
    for (let i = 0; i < number;i++) {
     const grid = document.createElement('div');
     grid.className = 'grids';
     mainContainer.appendChild(grid)
    }
}
function gridNumber(){
    let number = prompt('How many grids would you like');
    if (number > 100 || number <= 0) {
       alert('Please choose a number between 1 and 100');
       gridNumber()
    } else {
        mainContainer.innerHTML('');
        createGrid(number);
    }
}

