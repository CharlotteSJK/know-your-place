// let contactUs = document.getElementById('contact-form');

// function showForm() {
//   if (contactUs.style.display === "none") {
//     contactUs.style.display = "block";
//   } else {
//     contactUs.style.display = "none";
//   }
// }

// ContactUs.addEventListener("click", showForm)

// Modal

// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("eat-btn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// Results display

const eatResults = document.getElementsByClassName('eat-results');                        // Targets the search input from user
const eatResultImages = document.getElementsByClassName('eat-result-images');                        // Targets the photo captions

eatResults.addEventListener('keyup', function() {
  eatResultImages.style.display = "block";  
  drinkResultImages.style.display = "none";
    });

  const drinkResults = document.getElementsByClassName('drink-results');                        // Targets the search input from user
  const drinkResultImages = document.getElementsByClassName('drink-result-images');  

  drinkResults.addEventListener('keyup', function() {
    eatResultImages.style.display = "none"; 
    drinkResultImages.style.display = "block";  
    });

   

