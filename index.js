let slideCount = 1;
slideDisplay(slideCount);


function slideAll(num) {
  slideDisplay(slideCount += num);
}

function recentSlide(num) {
  slideDisplay(slideCount = num);
}

function slideDisplay(num) {
  let i;
  let slideEl =  document.getElementsByClassName("slide-content");
  let boxEl =  document.getElementsByClassName("box");
  if (num > slideEl.length) { slideCount = 1 }
  if (num < 1) { slideCount = slideEl.length }
  for (i = 0; i < slideEl.length; i++) {
    slideEl[i].style.display = "none";
  }
  for (i = 0; i < boxEl.length; i++) {
    boxEl[i].className = boxEl[i].className.replace("active", "");
  }
  slideEl[slideCount - 1].style.display = "block";
  boxEl[slideCount - 1].className += " active";
}

