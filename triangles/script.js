const svgContainer = document.getElementById("svgContainer");
const circles = document.querySelectorAll("circle");
const smallDot = document.getElementById("dotWillBecomeBig");

svgContainer.addEventListener("mouseenter", () => {
  recursiveFunctionForAdd(0);
});

svgContainer.addEventListener("mouseleave", () => {
  recursiveFunctionForRemove(0);
});

svgContainer.addEventListener("click", () => {
  recursiveFunctionForTransition(0);
});

function recursiveFunctionForAdd(index) {
  let iteration = index;

  if (iteration === circles.length) {
    return true;
  } else {
    setTimeout(() => {
      circles[iteration].classList.add("bigger");
      recursiveFunctionForAdd(iteration + 1);
    }, 40);
  }
}

function recursiveFunctionForRemove(index) {
  let iteration = index;

  if (iteration === circles.length) {
    return true;
  } else {
    setTimeout(() => {
      circles[iteration].classList.remove("bigger");
      recursiveFunctionForRemove(iteration + 1);
    }, 40);
  }
}

function recursiveFunctionForTransition(index) {
  let iteration = index;
  let transitionIsFinished = false;

  if (iteration === circles.length) {
    smallDot.classList.add("full-page");
    svgContainer.classList.add('dissapear');

    return true;
  } else {
    setTimeout(() => {
      circles[iteration].classList.add("transitionned");
      recursiveFunctionForTransition(iteration + 1);
    }, 50);
  }
}

