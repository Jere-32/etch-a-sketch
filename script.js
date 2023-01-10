const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}
var containerSize = 512
container.style.cssText = `display: grid; grid-template-columns: repeat(16, 1fr); width: ${containerSize}px; height: ${containerSize}px;`
var squareSize = (containerSize / 16) - 2;
var allSquares = document.querySelectorAll('.square');
allSquares.forEach(function (square) {
  square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`
});