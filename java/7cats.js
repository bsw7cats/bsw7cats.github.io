
document.addEventListener('contextmenu', event => event.preventDefault()); 

/** Sticky Page Header Begin */

/** Code for website links in Footer Begin */

function Lnk2FaceBook() {
  
  var link = document.getElementById("facebook-lnk");
  
  link.href = "https://www.facebook.com/Sevencatsgalerie";
}

function Lnk2YouTube() {
  
  var link = document.getElementById("youtube-lnk");
  
  link.href = "https://www.youtube.com/channel/UC5IF0pEWPpvRl4xFJx3af-Q";
}

/** Code for website links in Footer End */

/** Code for slideshow in Gallery tab Begin */

var slideIndex = 1;

function initDivs () {
var x = document.getElementsByClassName("mySlides");
if (x.length > 0) {
document.getElementById("totalslides").innerHTML = x.length;
showDivs(slideIndex);}
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  document.getElementById("slideindex").innerHTML = slideIndex;
}

/** Code for slideshow in Gallery tab End */

$( document ).ready( initDivs );

/**
$(document).ready(function(){
  initDivs ();
});	
*/