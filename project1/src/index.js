import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css

// Decalre an array of colors
const colors = [
  "#0d6efd",
  "#6610f2",
  "#6f42c1",
  "#d63384",
  "#dc3545",
  "#fd7e14",
  "#ffc107",
  "#198754",
  "#20c997",
  "#0dcaf0",
];

// Get the button from the DOM
const button = document.getElementById("#button");

// Function to change color
function changeColor() {
  // Select the background
  let background = document.getElementById("#page-background");
  // Select a random color from th array
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  //Change the background
  background.style.backgroundColor = randomColor;
  console.log(randomColor);
}

// Fire change color whenever the button is clicked
button.addEventListener("click", changeColor);
