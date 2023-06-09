// Generate two random numbers to determine which boxes contain the bombs
var bombBoxes = [
  Math.floor(Math.random() * 9) + 1,
  Math.floor(Math.random() * 9) + 1,
];

// Initialize count variable to keep track of how many boxes have been clicked
var count = 0;

// Function to handle box clicks
function handleBoxClick(boxNumber) {
  // Get the box element that was clicked
  var box = document.getElementById("box" + boxNumber);

  // If the clicked box contains a bomb, show the lose modal and highlight the box in red
  if (bombBoxes.includes(boxNumber)) {
    box.classList.add("red");
    showModal();
  }
  // If the clicked box does not contain a bomb, highlight the box in green and disable clicking on it
  else {
    box.classList.add("green");
    box.onclick = null; // disable further clicking
    count++;
    // If all boxes except the bombs have been clicked, show the win modal
    var modal_s = document.getElementById("myModal_s");
    if (count == 7) {
      modal_s.style.display = "block";
    }
  }
}

// Function to show the lose modal
function showModal() {
  // Get the lose modal element
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Show the lose modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal and disable clicking on boxes
  span.onclick = function () {
    modal.style.display = "none";
    disableBoxClicking();
  };

  // When the user clicks anywhere outside of the modal, close it and disable clicking on boxes
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      disableBoxClicking();
    }
  };
}

// Function to disable clicking on boxes
function disableBoxClicking() {
  // Loop through all boxes and disable clicking on them
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = null;
  }
}
