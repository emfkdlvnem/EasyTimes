//slider
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

//Mobile Menu Button
const menuBtn = document.querySelector('.gnbarea .btnMenu');
const gnbarea = document.querySelector('.gnbarea');
// menuBtn.addEventListener('click', function() {});
// menuBtn.onclick = function() {} 위아래 같음

menuBtn.addEventListener('click', function() {
    if(!(gnbarea.classList.contains('active'))) {
        gnbarea.classList.add('active');
        this.classList.add('active');    
    }else {
        gnbarea.classList.remove('active');
        this.classList.remove('active');    
    }
});

// menu
const menuItem = document.querySelectorAll('.menu .menuItem dt');
const menuItemBtn = document.querySelectorAll('.menu .menuItem dt .btn');
menuItemBtn.forEach(function(mbtn) {
    mbtn.addEventListener('click', function() {
        menuItem.forEach(function(item) {
            item.classList.remove('active');
        });
        this.parentNode.classList.add('active');
    });
});