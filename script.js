document.addEventListener("DOMContentLoaded", () => {
    // Menu toggle functionality
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Get the elements for scrolling
    const leftArrow = document.querySelector('.nav-arrow.left');
    const rightArrow = document.querySelector('.nav-arrow.right');
    const dealsContainer = document.querySelector('.deals');

    // Function to scroll left
    leftArrow.addEventListener('click', () => {
        dealsContainer.scrollBy({
            left: -250,  // Move left by 250px
            behavior: 'smooth'  // Smooth scrolling
        });
    });

    // Function to scroll right
    rightArrow.addEventListener('click', () => {
        dealsContainer.scrollBy({
            left: 250,  // Move right by 250px
            behavior: 'smooth'  // Smooth scrolling
        });
    });
});
