var prevScrollpos = window.scrollY;
var navbar = document.getElementById("navbar");
var scrollHeightThreshold = 440; // Set the desired scroll height (in pixels) before the navbar disappears

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollpos > currentScrollPos) {
    // When the user scrolls up, the navbar appears
    document.getElementById("navbar").style.top = "0";
  } else {
    if (currentScrollPos > scrollHeightThreshold) {
      // When the user scrolls down after 440 pixels, the navbar disappears
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


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});