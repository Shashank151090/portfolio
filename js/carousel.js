var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  var slides3 = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot");
  if (n > slides3.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides3[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  var slides4 = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot");
  if (n > slides4.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides4[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  var slides5 = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("dot");
  if (n > slides5.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides5[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  var slides6 = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("dot");
  if (n > slides6.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides6.length}
  for (i = 0; i < slides6.length; i++) {
      slides6[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides6[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}
