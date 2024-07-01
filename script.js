document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navRight = document.querySelector('.nav-right');

    menuToggle.addEventListener('click', function() {
        navRight.classList.toggle('active');
    });
});
