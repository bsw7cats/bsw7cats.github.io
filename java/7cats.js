
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

function BMW_Works_1_Apple_Lnk() {
  
  var link = document.getElementById("bmw-works-1-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443171995?ls=1";
}

function BMW_Works_2_Apple_Lnk() {
  
  var link = document.getElementById("bmw-works-2-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172267?ls=1";
}

function BMW_Works_3_Apple_Lnk() {
  
  var link = document.getElementById("bmw-works-3-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172615?ls=1";
}

function BMW_Works_4_Apple_Lnk() {
  
  var link = document.getElementById("bmw-works-4-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/flowering-art-the-paintings-of-brigitte-m-wurm/id6443172264?ls=1";
}

function BMW_Works_1_Google_Lnk() {
  
  var link = document.getElementById("bmw-works-1-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=CPl7EAAAQBAJ&hl=en_US&gl=US";
}

function BMW_Works_2_Google_Lnk() {
  
  var link = document.getElementById("bmw-works-2-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=DPl7EAAAQBAJ&hl=en_US&gl=US";
}

function BMW_Works_3_Google_Lnk() {
  
  var link = document.getElementById("bmw-works-3-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=Dvl7EAAAQBAJ&hl=en_US&gl=US";
}

function BMW_Works_4_Google_Lnk() {
  
  var link = document.getElementById("bmw-works-4-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Brigitte_M_Wurm_FLOWERING_ART_The_Paintings_of_Bri?id=EPl7EAAAQBAJ&hl=en_US&gl=US";
}

function THC_Google_Lnk() {
  
  var link = document.getElementById("thc-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/The_Human_Condition_Our_Place_In_The_Cosmos_In_Lif?id=Y8fVDwAAQBAJ&hl=en_US&gl=US";
}

function THC_Apple_Lnk() {
  
  var link = document.getElementById("thc-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/the-human-condition/id1504740791";
}

function THC_Amazon_Lnk() {
  
  var link = document.getElementById("thc-amazon-lnk");
  
  link.href = "https://www.amazon.com/Human-Condition-Place-Cosmos-Life-ebook/dp/B0861G814X/ref=sr_1_5?qid=1658238819&refinements=p_27%3AStefan+Wurm&s=digital-text&sr=1-5&text=Stefan+Wurm";
}

function THC_Kobo_Lnk() {
  
  var link = document.getElementById("thc-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/the-human-condition-22";
}

function CR_Google_Lnk() {
  
  var link = document.getElementById("cr-google-lnk");
  
  link.href = "https://play.google.com/store/books/details/Stefan_Wurm_Consensus_Realities?id=7-JXEAAAQBAJ&hl=en_US&gl=US";
}

function CR_Apple_Lnk() {
  
  var link = document.getElementById("cr-apple-lnk");
  
  link.href = "https://books.apple.com/us/book/consensus-realities/id1603501446";
}

function CR_Amazon_Lnk() {
  
  var link = document.getElementById("cr-amazon-lnk");
  
  link.href = "https://www.amazon.com/Consensus-Realities-Importance-Being-Honest-ebook/dp/B09R28SPLG/ref=sr_1_1?qid=1658238852&refinements=p_27%3AStefan+Wurm&s=digital-text&sr=1-1&text=Stefan+Wurm";
}

function CR_Kobo_Lnk() {
  
  var link = document.getElementById("cr-kobo-lnk");
  
  link.href = "https://www.kobo.com/us/en/ebook/consensus-realities";
}