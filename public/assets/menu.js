window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("newry-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const btnToggle = document.querySelector('.btn--toggle');
    const submenuTrigger = document.querySelectorAll('.submenu--trigger');
    const thirdSubmenuTrigger = document.querySelectorAll('.third-submenu--trigger');

    btnToggle.addEventListener('click', function(e) {
        e.preventDefault(); // You can uncomment this line if you need to prevent default behavior
        const targetSelector = this.getAttribute('data-target');
        const target = document.querySelector(targetSelector);
        target.classList.toggle('showing');
    });

    submenuTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
        });
    });

    thirdSubmenuTrigger.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
        });
    });
}); 