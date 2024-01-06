$(function() {
  $('.click-map').maphilight();
});

function loadImage(pageId) {
  // The 'event' object needs to be passed for this function
  event.preventDefault();
  var imageToLoad = 'images/' + pageId + '.png';
  document.getElementById('image-load-target').src = imageToLoad;

  // Assuming all the images have their own map, set it here, otherwise remove this line
  document.getElementById('image-load-target').useMap = '#home-map';
}

function editProfile() {
  // Open the popup with the edit profile content
  document.getElementById('popup-image').src = 'images/edit-profile.png'; // Set the source to your edit-profile image
  document.getElementById('popup-overlay').style.display = 'flex'; // Show the popup
}

function uploadResource() {
  // Set the source for the popup image to upload-menu.png
  document.getElementById('popup-image').src = 'images/upload-menu.png';
  // Display the popup
  document.getElementById('popup-overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none'; // Hide the popup
}

// Close the popup if the overlay is clicked
document.getElementById('popup-overlay').addEventListener('click', function() {
  closePopup();
});

// Prevent the popup from closing when its content is clicked
document.querySelector('.popup-content').addEventListener('click', function(event) {
  event.stopPropagation();
});

$(document).ready(function() {
  $('.click-map').maphilight(); // Apply highlight effect on the image maps
});
