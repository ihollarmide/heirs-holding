const iconNodes = Array.from(document.querySelectorAll(".control__icon"));
const headerNodes = Array.from(document.querySelectorAll(".heir__visual-card-top-section"));
const bodyNodes = Array.from(document.querySelectorAll(".heir__visual-card-body-text"));

const iconNodesContainer = document.querySelector(".control__slide-icons");
const circleSvg = document.querySelector(".cir_svg");

const rightBtn = document.querySelector(".control__icon-next");
const leftBtn = document.querySelector(".control__icon-prev");

const circProgress = document.getElementById("vectorProgress");

let sliderCounter = 0;//icon counter

let imagecounter = 0; //image/content counter

let reverseCounter = 0;


const cloningIconArray = iconNodes.slice();

//move icon bar.
//update circular progress bar.

const shiftValue = iconNodes[1].offsetWidth;

// Total stroke-dasharray for the progress bar
const totalLength = 269;

// To get a step shift for animation.
const circShift = totalLength / iconNodes.length - 1;





function moveRight() {
  let newIcons = Array.from(document.querySelectorAll(".control__icon"));

  // Reset imageAnimation wilth counter so that it starts the animation again when it reaches the end.
  if(imagecounter === iconNodes.length){
    imagecounter = 0;
  }


  if (sliderCounter < newIcons.length - 1) {
    moveSlider();
    sliderCounter++;
    imagecounter++;
  }
}

rightBtn.addEventListener('click', moveRight);

leftBtn.addEventListener('click', () => {
  return;
})

let interval = setInterval(moveRight, 5000);


function moveSlider(right = true) {
  //update image and content.

  //clear all images/contents to opacity of 0.
  headerNodes.forEach((headerNode) => (headerNode.style.opacity = 0));
  bodyNodes.forEach((bodyNode) => (bodyNode.style.opacity = 0));

  //activate next image/contents to opacity of 1
  headerNodes[imagecounter].style.opacity = 1;
  bodyNodes[imagecounter].style.opacity = 1;

  

  moveValue = shiftValue * sliderCounter;

  //move icon bar.
  if(right) {

    // Clone icons and append to iconNodesContainer to give a never ending effect
    cloningIconArray.forEach((icon) => {
      let toclone = icon.cloneNode(true);
      iconNodesContainer.appendChild(toclone);
    });

    iconNodesContainer.style.transform = `translateX(-${moveValue}px)`;

    let allIcons = Array.from(iconNodesContainer.querySelectorAll(".control__icon"));
    allIcons.forEach( allIcon => (allIcon.classList.remove("active")));
    allIcons[sliderCounter + 2].classList.add("active");
    circProgress.classList.remove("active");
    setTimeout(function(){
      circProgress.classList.add("active");
    }, 500)
    

  } 
 
  
}