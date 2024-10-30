// add a working dog to up & down through of arrow keys.

 cross = true;
 score = 0;

 audio = new Audio('background.mp3');
 audiogo = new Audio('discard.mp3');
 setTimeout(() => {
     audio.play();
 }, 1000);
 
document.onkeydown = function(e) {
      console.log("key code is:", e.keyCode)
      if(e.keyCode == 38) {
          dog = document.querySelector('.dog');
           dog.classlist.add('animateDog');
          setTimeout(() => {
              dog.classlist.remove('animateDog');
            }, 700);
      }
      
    if(e.keyCode == 39) {
       dog = document.querySelector('.dog');
       dogX = parseInt(window.getComputedStyle(dog, null).getPropertyValue('left'));
      dog.style.left = dogX + 112 + 'px';
   }
   if(e.keyCode == 37) {
      dog = document.querySelector('.dog');
      dogX = parseInt(window.getComputedStyle(dog, null).getPropertyValue('left'));
     dog.style.left = (dogX - 112) + 'px';
  }
}

// set a dog & obs to jump a body window in a game to compare of X & Y. 

setInterval(() => {
   dog = document.querySelector('.dog');
   gameOver = document.querySelector('.gameOver');
   obstacle = document.querySelector('.obstacle');

   dx = parseInt(window.getComputedStyle(dog, null).getPropertyValue('left'));
   dy = parseInt(window.getComputedStyle(dog, null).getPropertyValue('top'));

   ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
   oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

  // Calculate the value of dx,dy & ox,oy which is inform the destination of dog & obs 
    // and dog & obs was nearest the fixed value of a game to this situation was game over.

   offsetX = Math.abs(dx-ox);
   offsetY = Math.abs(dy-oy);
   if(offsetX < 73 && offsetY < 52) {
       gameOver.innerHTML = ".Game Over = Reload To Play Again:"
       obstacle.classlist.remove('obstacleAni');
       audiogo.play();
       setTimeout(() => {
          audiogo.pause();
          audio.pause();
       }, 1000);
   }
   else if (offsetX < 145 && cross) {
      score += 1;
      updateScore(score);
      cross = false;
      setTimeout(() => {
         cross = true;
      }, 1000);
      setTimeout(() => {
         anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation duration'));
         newdur = anidur - 0.8;
         obstacle.style.animationduration = newdur + 's';
      }, 500);

   }

}, 100);

function  updateScore(score) {
   scoreCont.innerHTML = "your score: " + score;
}
