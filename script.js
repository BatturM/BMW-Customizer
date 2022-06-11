$(function() {

  var num = 36; // the total number of images 
  base_image = "bmw_images\\pic_";
  white_image = "bmw_images\\pic_";
  black_image = "bmw_images_black\\pic_";
  orange_image = "bmw_images_orange\\pic_";

// Preload all the images into hidden div
  for (var i = 1; i <= num; i++) {
    var img = document.createElement('img');
    img.src = base_image + i + '.png';
    document.getElementById('preload-imgs').appendChild(img);
}

// Control swipes using jquery.touchSwipe.min.js
// http://labs.rampinteractive.co.uk/touchSwipe/
var swipeOptions=
{
    triggerOnTouchEnd : true,	
    swipeStatus : swipeStatus,
    allowPageScroll:"vertical",
    threshold:75			
}

$(function()
{				
    img = $(".img-container"); // the element that will be swipeable
    img.swipe( swipeOptions );
});

function swipeStatus(event, phase, direction, distance) {
    var duration = 0;
    if(direction == "right") {
    	changeImg(distance);
    }
    else if (direction == "left") {
    	changeImgR(-distance);
    }
}

function changeImg (imgNum) {

    // divide by 8 (or any number) to spread 
    // it out so it doesn't load new img 
    // every single px of swipe distance
    imgNum = Math.floor(imgNum/16); 

    if (imgNum < 1) {
    	imgNum += num;
    }
    if (imgNum > num) {
    	imgNum -= num;
    }

    // change the image src
    document.getElementById("myImg").src= base_image + imgNum + ".png";
}

function changeImgR (imgNum) {

    // divide by 8 (or any number) to spread 
    // it out so it doesn't load new img 
    // every single px of swipe distance
    imgNum = Math.floor(imgNum/16); 

    var num2 = -Math.abs(num); 
    if (imgNum > num2) {
    	imgNum += num;
    }
    if (imgNum <= num2) {
    	imgNum += num*2;
    }

    // change the image src
    document.getElementById("myImg").src= base_image + imgNum + ".png";
}
})

// Car colors

$("#white").click(function () {
  for (var i = 1; i <= 36; i++) {
    var img = document.createElement('img');
    img.src = white_image + i + '.png';
    document.getElementById('preload-imgs').appendChild(img);
  }
  base_image = white_image;
  var value = parseInt(document.getElementById('myImg').src.replace(/\D/g, "").slice(-2), 10);
  document.getElementById("myImg").src = base_image + value + ".png"
});


$("#black").click(function () {
  for (var i = 1; i <= 36; i++) {
    var img = document.createElement('img');
    img.src = black_image + i + '.png';
    document.getElementById('preload-imgs').appendChild(img);
  }
  base_image = black_image;
  var value = parseInt(document.getElementById('myImg').src.replace(/\D/g, "").slice(-2), 10);
  console.log(value);
  document.getElementById("myImg").src = base_image + value + ".png"
});

$("#orange").click(function () {
  for (var i = 1; i <= 36; i++) {
    var img = document.createElement('img');
    img.src = orange_image + i + '.png';
    document.getElementById('preload-imgs').appendChild(img);
  }
  base_image = orange_image;
  var value = parseInt(document.getElementById('myImg').src.replace(/\D/g, "").slice(-2), 10);
  document.getElementById("myImg").src = base_image + value + ".png"
});



