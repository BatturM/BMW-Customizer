$(function() {

  var num = 36; // the total number of images 
  base_image = "bmw_images\\pic_";
  white_image = "bmw_images\\pic_";
  black_image = "bmw_images_black\\pic_";
  orange_image = "bmw_images_orange\\pic_";
  blue_image = "bmw_images_blue\\pic_";
  green_image = "bmw_images_green\\pic_";
  metal_image = "bmw_images_metal\\pic_";

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


// Turn animation

const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}

const turn = async () => {
  thing = false;
  speed = 75
  for (i = 1; i <= 36; i++) {
    await sleep(speed)
    document.getElementById('myImg').src = base_image + i + ".png";  
    if (i == 36) {
      i = 0;
    }
    if (thing == true) {
      return;
    }
  }
}

turn()

const turn_again = async () => {
  thing = false;
  speed = speed;
  for (let i = i; i <= 36; i++) {
    await sleep(speed)
    document.getElementById('myImg').src = base_image + i + ".png";  
    if (i == 36) {
      i = 0;
    }
    if (thing == true) {
      return;
    }
  }
}

// Turn speeds

$("#slow").click(function () {
  speed = 100;
})

$("#normal").click(function () {
  speed = 75;
})

$("#fast").click(function () {
  speed = 40;
})

$("#fastest").click(function () {
  speed = 20;
})

// Terminate turn on click

    


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
  document.getElementById("white").style.transform = "scale(1.1)";
  document.getElementById("black").style.transform = "scale(1.0)";
  document.getElementById("orange").style.transform = "scale(1.0)";
  document.getElementById("blue").style.transform = "scale(1.0)";
  document.getElementById("green").style.transform = "scale(1.0)";
  document.getElementById("metal").style.transform = "scale(1.0)";
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
  document.getElementById("black").style.transform = "scale(1.1)";
  document.getElementById("white").style.transform = "scale(1.0)";
  document.getElementById("orange").style.transform = "scale(1.0)";
  document.getElementById("blue").style.transform = "scale(1.0)";
  document.getElementById("green").style.transform = "scale(1.0)";
  document.getElementById("metal").style.transform = "scale(1.0)";
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
  document.getElementById("orange").style.transform = "scale(1.1)";
  document.getElementById("black").style.transform = "scale(1.0)";
  document.getElementById("white").style.transform = "scale(1.0)";
  document.getElementById("blue").style.transform = "scale(1.0)";
  document.getElementById("green").style.transform = "scale(1.0)";
  document.getElementById("metal").style.transform = "scale(1.0)";
});

$("#blue").click(function () {
  for (var i = 1; i <= 36; i++) {
    var img = document.createElement('img');
    img.src = blue_image + i + '.png';
    document.getElementById('preload-imgs').appendChild(img);
  }
  base_image = blue_image;
  var value = parseInt(document.getElementById('myImg').src.replace(/\D/g, "").slice(-2), 10);
  document.getElementById("myImg").src = base_image + value + ".png"
  document.getElementById("blue").style.transform = "scale(1.1)";
  document.getElementById("black").style.transform = "scale(1.0)";
  document.getElementById("orange").style.transform = "scale(1.0)";
  document.getElementById("white").style.transform = "scale(1.0)";
  document.getElementById("green").style.transform = "scale(1.0)";
  document.getElementById("metal").style.transform = "scale(1.0)";
});

$("#green").click(function () {
  for (var i = 1; i <= 36; i++) {
    var img = document.createElement('img');
    img.src = green_image + i + '.png';
    document.getElementById('preload-imgs').appendChild(img);
  }
  base_image = green_image;
  var value = parseInt(document.getElementById('myImg').src.replace(/\D/g, "").slice(-2), 10);
  document.getElementById("myImg").src = base_image + value + ".png"
  document.getElementById("green").style.transform = "scale(1.1)";
  document.getElementById("black").style.transform = "scale(1.0)";
  document.getElementById("orange").style.transform = "scale(1.0)";
  document.getElementById("white").style.transform = "scale(1.0)";
  document.getElementById("metal").style.transform = "scale(1.0)";
  document.getElementById("blue").style.transform = "scale(1.0)";
});

$("#metal").click(function () {
  for (var i = 1; i <= 36; i++) {
    var img = document.createElement('img');
    img.src = metal_image + i + '.png';
    document.getElementById('preload-imgs').appendChild(img);
  }
  base_image = metal_image;
  var value = parseInt(document.getElementById('myImg').src.replace(/\D/g, "").slice(-2), 10);
  document.getElementById("myImg").src = base_image + value + ".png"
  document.getElementById("metal").style.transform = "scale(1.0)";
  document.getElementById("black").style.transform = "scale(1.0)";
  document.getElementById("orange").style.transform = "scale(1.0)";
  document.getElementById("white").style.transform = "scale(1.0)";
  document.getElementById("green").style.transform = "scale(1.0)";
  document.getElementById("blue").style.transform = "scale(1.0)";
});


