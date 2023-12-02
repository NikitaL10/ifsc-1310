var prevScrollpos = window.scrollY;
var navbar = document.getElementById("navbar");
var scrollHeightThreshold = 440; 

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  else {
    if (currentScrollPos > scrollHeightThreshold) {
      document.getElementById("navbar").style.top = "-60px";
    }
  }
  
  prevScrollpos = currentScrollPos;
}



function toggleMenu() {
  var navigation = document.querySelector(".navigation");
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } 
  else {
    navigation.style.display = "block";
  }
}


function showUpdateModal(title, description, images) {
  const modal = document.getElementById('update-modal');
  const titleElement = document.getElementById('update-title');
  const descriptionElement = document.getElementById('update-description');
  const carouselElement = document.getElementById('image-carousel');

  titleElement.textContent = title;
  descriptionElement.textContent = description;

  carouselElement.innerHTML = '';

  images.forEach((imageUrl) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = title;
    imgElement.style.width = '20%'; 
    imgElement.style.height = '20%'; 
    carouselElement.appendChild(imgElement);
  });

  modal.style.display = 'block';
}

function hideUpdateModal() {
  const modal = document.getElementById('update-modal');
  modal.style.display = 'none';

  const carouselElement = document.getElementById('image-carousel');
  carouselElement.innerHTML = ''; // Clear the content

  // Reset image sizes here if needed
}




