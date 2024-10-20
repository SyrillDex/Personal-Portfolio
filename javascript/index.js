
var prevScrollpos = window.scrollY;
let mybutton = document.getElementById("top-button");
let section = document. querySelectorAll('section');

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-div").style.top = "0px";
    document.getElementById('img1').style.filter = "none";
    document.getElementById('img1').style.transform = "none";
  } else {
    document.getElementById("nav-div").style.top = "-60px";
    document.getElementById('img1').style.filter = "grayscale(50%)";
    document.getElementById('img1').style.transform = "scaleX(-1)";
  }
  // if (currentScrollPos === 0) {
  //   document.getElementById('nav-div').style.backgroundColor = 'transparent';
  // }
  prevScrollpos = currentScrollPos;

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,             // Scroll to the top of the page
    behavior: 'smooth'  // Smooth scroll animation
  });
}

// Attach the topFunction to the button click
mybutton.onclick = topFunction;

changeValue = document.querySelector('.js-change-value');
changeValue.addEventListener('mouseover', () => {
  setInterval(() => {
    changeValue.innerHTML = "Software";
  }, 2000);
});
changeValue.addEventListener('mouseout', () => {
  setInterval(() => {
    changeValue.innerHTML = "Web";
  }, 2000);
});
