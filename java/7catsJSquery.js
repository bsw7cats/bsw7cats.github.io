/** Code to display an image in a modal window Begin */

$(document).ready(function(){

/* var img = document.getElementById("myImg"); */

let headerheight = document.getElementById("pagHeader").offsetHeight + "px";

let contvertpos = document.getElementById("pagHeader").offsetHeight + 10 + "px"

const contentheight = document.getElementById("pagContent").offsetHeight;

var modal = document.getElementById("popImgModal");

var modalImg = document.getElementById("modal-Image");

var captionText = document.getElementById("modal-Caption");

var scrXpos = window.pageXOffset;

var scrYpos = window.pageYOffset;
	
$(".popImg").click(function(){
  var paintingsize = this.classList[1] || false;	
  scrXpos = window.pageXOffset;
  scrYpos = window.pageYOffset;		
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera  	
  modal.style.display = "block";
  modal.style.marginTop = headerheight;
  modalImg.src = this.src;
  switch (paintingsize) {
  case "60x48":
    modalImg.style.width = "960px";
    modalImg.style.height = "768px";
    break;
  case "48x60":
    modalImg.style.width = "768px";
    modalImg.style.height = "960px";
    break;
  case "48x48":
    modalImg.style.width = "960px";
    modalImg.style.height = "960px";
    break;
  case "48x36":
    modalImg.style.width = "960px";
    modalImg.style.height = "720px";
    break;
  case "36x48":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px";
    break;
  case "36x36":
    modalImg.style.width = "960px";
    modalImg.style.height = "960px";
    break;
  case "30x40":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px"
    break;
  case "24x48":
    modalImg.style.width = "480px";
    modalImg.style.height = "960px";
    break;
  case "24x36":
    modalImg.style.width = "640px";
    modalImg.style.height = "960px";
    break;
  case "30x24":
    modalImg.style.width = "960px";
    modalImg.style.height = "768px";
    break;
  case "24x30":
    modalImg.style.width = "768px";
    modalImg.style.height = "960px";
    break; 
  case "16x40":
    modalImg.style.width = "394px";
    modalImg.style.height = "960px";
    break;  
  case "24x24":
    modalImg.style.width = "960px";
    modalImg.style.height = "960px";
    break;     
  case "24x20":
    modalImg.style.width = "960px";
    modalImg.style.height = "800px";
    break;  
  case "15x30":
    modalImg.style.width = "480px";
    modalImg.style.height = "960px";
    break;   
  case "12x36":
    modalImg.style.width = "320px";
    modalImg.style.height = "960px";
    break;
  case "18x24":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px";
    break;
  case "24x18":
    modalImg.style.width = "960px";
    modalImg.style.height = "720px";
    break;
  case "20x20":
    modalImg.style.width = "960px";
    modalImg.style.height = "960px";
    break;
  case "16x20":
    modalImg.style.width = "768px";
    modalImg.style.height = "960px";
    break;
  case "20x16":
    modalImg.style.width = "960px";
    modalImg.style.height = "768px";
    break;
  case "12x24":
    modalImg.style.width = "480px";
    modalImg.style.height = "960px";
    break;
  case "16x20":
    modalImg.style.width = "768px";
    modalImg.style.height = "960px";
    break;
  case "7x14":
    modalImg.style.width = "480px";
    modalImg.style.height = "960px";
    break;
  case "9x12":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px";
    break;
  case "12x12":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px";
    break;
  case "11x14":
    modalImg.style.width = "754px";
    modalImg.style.height = "960px";
    break;
  case "10x20":
    modalImg.style.width = "480px";
    modalImg.style.height = "960px";
    break;                                                                                                                                                                              
  case "10x10x40":
    modalImg.style.width = "344px";
    modalImg.style.height = "960px";
    break;
  case "8x8x24":
    modalImg.style.width = "458px";
    modalImg.style.height = "960px";
    break;
  case "8x8x36":
    modalImg.style.width = "306px";
    modalImg.style.height = "960px";
    break; 
  case "MicrobeKrumi":
    modalImg.style.width = "960px";
    modalImg.style.height = "720px"; 
    break; 
  case "Pebble":
    modalImg.style.width = "750px";
    modalImg.style.height = "960px";
    break; 
  case "Figaro":
    modalImg.style.width = "733px";
    modalImg.style.height = "960px";
    break; 
  case "Dartagnan":
    modalImg.style.width = "960px";
    modalImg.style.height = "807px";
    break; 
  case "Aramis":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px";
    break; 
  case "Portos":
    modalImg.style.width = "960px";
    modalImg.style.height = "702px";
    break; 
  case "Leon":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px";
    break; 
  case "Houston":
    modalImg.style.width = "825px";
    modalImg.style.height = "960px";
    break; 
  case "Caesar":
    modalImg.style.width = "933px";
    modalImg.style.height = "960px";
    break; 
  case "Struppi":
    modalImg.style.width = "816px";
    modalImg.style.height = "960px";
    break; 
  case "Rollo":
    modalImg.style.width = "960px";
    modalImg.style.height = "923px";
    break;    
  case "MiniMundus":
    modalImg.style.width = "720px";
    modalImg.style.height = "960px";                                                                                                                                                                                                                                      
  }   
  var currentcontentheight = modalImg.offsetHeight + 100;
  modal.style.height = currentcontentheight + "px"; 
  $(".content").height(currentcontentheight + 100);
  $(".content").css("visibility","hidden");
  captionText.innerHTML = this.alt;  
}); 

$(".close").click(function(){
  modal.style.display = "none";
  $(".content").height(contentheight);
  $(".content").css("visibility","visible");
  window.scrollTo(scrXpos, scrYpos);
});

$(".content").css("margin-top", contvertpos);

/**
$(".content").click(function(){
 alert(contvertpos);
});
*/

/** document.getElementById("pagContent").style.marginTop = headerheight; */

}); 

/** Code to display an image in a modal window End */
