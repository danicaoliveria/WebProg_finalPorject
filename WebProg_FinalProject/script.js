function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function enlargeImage(clickedImg) {
    var images = document.querySelectorAll('.small-image');

    images.forEach(function(img) {
      if (img !== clickedImg && img.classList.contains('large-image')) {
        img.classList.remove('large-image');
      }
    });
  
    if (clickedImg.classList.contains('large-image')) {
      clickedImg.classList.remove('large-image');
    } else {
      clickedImg.classList.add('large-image');
    }
  }
  
  
  