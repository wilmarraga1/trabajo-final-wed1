/*1 amimacion */

colors = ['#FFDA6A', '#FF6D6C', '#41BEFF', '#C54BFF', '#4BFFA6', '#333', '#FFB5C0'];
story = ['Aca.', 'Registra.', 'Tus Gastos.', 'Caja Menor.', 'Echo por ', 'Julian,Estefania,Santiago y Wilmar (:']
i = 1;
j = 0;
a = document.querySelector('.row1');
b = document.querySelector('.row2');
c = document.querySelector('.row3'); 
d = document.querySelector('#hamburger');
e = document.querySelector('.container');
f = document.querySelector('.riempi');
menu = document.querySelector('#menu');

function toggleAnimation() {
    a.classList.toggle('rotateRight');
    b.classList.toggle('trasparent');
    c.classList.toggle('rotateLeft');
    e.classList.toggle('darken');
    menu.classList.toggle('move'); 
};


// function removeAnimation() {
//     a.classList.remove('rotateRight');
//     b.classList.remove('trasparent');
//     c.classList.remove('rotateLeft');
//     e.classList.remove('darken');
//     menu.classList.remove('move');
// }



d.addEventListener('click', function() {
    toggleAnimation();
    
    i++;

    if (i % 2 == 1) {
        let num = -1;
        let colorNum = Math.floor(Math.random() * 6);
        let text = document.querySelector('.story');
        text.innerHTML = story[j];
        if (j > 4) {
          j = -1;
        }
        j++; 
        
        if (colorNum == 6) {
          num = 1;
        }
        document.documentElement.style.setProperty('--color1', colors[colorNum]);
        document.documentElement.style.setProperty('--color2', colors[colorNum - num]);
    }
});
    
/*cargando circulo*/
// Check the corresponding value of the two arrays for the combination of the ball animation and the rectangle/square animation.

var animationRect = [
    "rotationClockwise ease-in-out",
    "rotation360 ease-in-out",
    "rotation90 ease-in-out",
    "rectStill ease-in-out" 
  ];
  var animationBall = [
    "halfJump ease-in-out",
    "completeJump ease-in-out",
    "halfJump ease-in-out",
    "completeJumpTransformation ease-in-out"
  ];
  var loop = document.querySelector(".loop");
  var num = 1;
  
  function changeAnimation(n) {
    document.documentElement.style.setProperty(
      "--rect-animation",
      animationRect[n]
    );
    document.documentElement.style.setProperty(
      "--ball-animation",
      animationBall[n]
    );
  }
  
  loop.addEventListener("click", function() {
    changeAnimation(num);
    num++;
    if (num == 4) {
      num = 0;
    }
  });   