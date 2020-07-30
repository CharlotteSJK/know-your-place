
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// Modal

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("eat-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// let contactUs = document.getElementById('contact-form');

// function showForm() {
//   if (contactUs.style.display === "none") {
//     contactUs.style.display = "block";
//   } else {
//     contactUs.style.display = "none";
//   }
// }

// ContactUs.addEventListener("click", showForm)


   

