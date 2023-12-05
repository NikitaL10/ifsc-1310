// hidding of navbar after a certain height
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


// hamburbur
function toggleMenu() {
  var navigation = document.querySelector(".navigation");
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } 
  else {
    navigation.style.display = "block";
  }
}

// what's new button script
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
  carouselElement.innerHTML = ''; 

}

// countdown to next launch changing manualy
const launchDate = new Date('2023-12-12T00:00:00Z').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timerElement = document.getElementById('timer');

  timerElement.innerHTML = `
    <div>${days}d</div>
    <div>${hours}h</div>
    <div>${minutes}m</div>
    <div>${seconds}s</div>
  `;

  if (distance < 0) {
    timerElement.innerHTML = 'Launch has occurred!';
  }
}

setInterval(updateCountdown, 1000);

//light/dark theme toggle button

function toggleLightMode() {
  const body = document.body;
  const currentMode = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';

  if (currentMode === 'light-mode') {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }

  updateLightModeButtonText(); 
  saveLightModePreference();
}

// preffered theme sets for next session
document.addEventListener('DOMContentLoaded', () => {
  const prefersLightMode = localStorage.getItem('prefersLightMode');

  if (prefersLightMode === null) {
    document.body.classList.add('dark-mode');
    saveLightModePreference();
  } else if (prefersLightMode === 'true') {
    document.body.classList.add('light-mode');
  }

  updateLightModeButtonText(); 
});

function saveLightModePreference() {
  const body = document.body;
  const prefersLightMode = body.classList.contains('light-mode');

  localStorage.setItem('prefersLightMode', prefersLightMode);
}

function updateLightModeButtonText() {
  const lightModeToggle = document.getElementById('lightModeToggle');
  const body = document.body;

  if (body.classList.contains('light-mode')) {
    lightModeToggle.textContent = 'Dark Mode';
  } else {
    lightModeToggle.textContent = 'Light Mode';
  }
}
