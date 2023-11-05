var prevScrollpos = window.scrollY;
var navbar = document.getElementById("navbar");
var scrollHeightThreshold = 440; 

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
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
  } else {
    navigation.style.display = "block";
  }
}

