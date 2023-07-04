document.addEventListener("DOMContentLoaded", function() {
    var caveImage = document.getElementById("caveImage");
    var moonImage = document.getElementById("moonImage");
    
    var caveImageSrc = "images/cave_01.jpg";
    var moonImageSrc = "images/moon_01.jpg";
    
    caveImage.addEventListener("mousedown", function() {
      caveImage.src = "images/cave_02.jpg";
    });
    
    caveImage.addEventListener("mouseup", function() {
      caveImage.src = caveImageSrc;
    });
    
    moonImage.addEventListener("mousedown", function() {
      moonImage.src = "images/moon_02.jpg";
    });
    
    moonImage.addEventListener("mouseup", function() {
      moonImage.src = moonImageSrc;
    });
    
    var infoText = document.getElementById("infoText");
    
    infoText.addEventListener("mousedown", function() {
      infoText.style.color = "red";
    });
    
    infoText.addEventListener("mouseup", function() {
      infoText.style.color = "black";
    });
    
    var caveCaption = document.getElementById("caveCaption");
    var moonCaption = document.getElementById("moonCaption");
    
    caveCaption.addEventListener("mousedown", function() {
      caveCaption.style.color = "red";
    });
    
    caveCaption.addEventListener("mouseup", function() {
      caveCaption.style.color = "black";
    });
    
    moonCaption.addEventListener("mousedown", function() {
      moonCaption.style.color = "red";
    });
    
    moonCaption.addEventListener("mouseup", function() {
      moonCaption.style.color = "black";
    });
  });
  