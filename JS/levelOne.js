var bombBox = Math.floor(Math.random() * 9) + 1;

function handleBoxClick(boxNumber) {
  var box = document.getElementById("box" + boxNumber);

  if (boxNumber === bombBox) {
    box.classList.add("red");
    console.log("BOOM! Box " + boxNumber + " had a bomb!");
    showModal();
  } else {
    box.classList.add("green");
    console.log("Box " + boxNumber + " was safe.");
    box.onclick = null; // disable further clicking

    if (boxNumber === 8) {
      window.location.href = "otherpage.html";
    }
  }
}
function showModal() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    disableBoxClicking();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      disableBoxClicking();
    }
  };

  // Show the modal  modal.style.display = 'block';
}

function disableBoxClicking() {
  // Loop through all boxes and disable clicking on them
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = null;
  }
}
