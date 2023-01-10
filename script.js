const container = document.querySelector('.container');

//trying to make randomcolor generator
function randColor () {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let rand = "(rgb(" + red + "," + green + "," + blue +"))";
    return rand
  }
 
//create 16*16 squares
for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}
let containerSize = 700
container.style.cssText = `display: grid; grid-template-columns: repeat(16, 1fr); width: ${containerSize}px; height: ${containerSize}px;`
let squareSize = (containerSize / 16) - 2;
let allSquares = document.querySelectorAll('.square');
allSquares.forEach(function (square) {
  square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`
});

for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener("mouseover", function() {
      allSquares[i].style.background = "blue";
    });
  }

  const button = document.querySelector("#changeNumOfSquares");
  button.addEventListener("click", function () {
    let numOfSquares = prompt("How many squares per side would you like the grid to have?");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.style.cssText = `display: grid; grid-template-columns: repeat(${numOfSquares}, 1fr); width: ${containerSize}px; height: ${containerSize}px;`
  var squareSize = (containerSize / numOfSquares) - 2;

  
  for (let i = 0; i < (numOfSquares * numOfSquares); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`
    square.addEventListener("mouseover", function() {
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
      square.style.background = randColor;
    });
  }
});


