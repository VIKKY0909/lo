document.addEventListener('DOMContentLoaded', function () {
    var closebtn = document.getElementsByClassName("closebtn");
    var cons = document.getElementsByClassName("con");
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const slider = document.querySelectorAll(".about-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slider.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slider.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slider.length - 1;
        }
        showSlide(currentSlide);
    }

    // Show the initial slide
    showSlide(currentSlide);

    // Event listeners for arrow navigation
    document.getElementById('arrow-left').addEventListener("click", prevSlide);
    document.getElementById('arrow-right').addEventListener('click', nextSlide);

    // Event listener for the menu toggle button
    menuToggle.addEventListener('click', function () {
        toggleMenu();
    });

    // Function to toggle menu visibility
    function toggleMenu() {
        const isMenuVisible = navLinks.classList.toggle('show');
        navLinks.style.pointerEvents = isMenuVisible ? 'auto' : 'none';
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
});
