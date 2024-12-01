
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


var typingEffect = new Typed(".typedText",{
  strings : ["Student","Athlete","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.title',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.details-container',{delay: 100})


const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



const navLinks = document.querySelectorAll('.nav-link');

function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        removeActiveClass(); 
        this.classList.add('active-link'); 
    });
});



document.getElementById('get-started-btn').addEventListener('click', () => {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('container').style.display = 'block';
}); 


function hideCSS() {
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(sheet => sheet.disabled = true);
}

function showCSS() {
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(sheet => sheet.disabled = false);
}

function toggleDesign() {
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    const isDisabled = Array.from(styleSheets).every(sheet => sheet.disabled);
    if (isDisabled) {
        showCSS();
        hideButton(); 
    } else {
        hideCSS();
    }
}

function hideButton() {
    const button = document.getElementById('get-design-btn');
    button.style.display = 'none';
}

document.getElementById('get-design-btn').addEventListener('click', toggleDesign);

hideCSS();

