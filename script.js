document.addEventListener("DOMContentLoaded", function() {
    // Interactive glowing header effect
    const header = document.querySelector('header');
    function toggleGlow() {
        header.classList.toggle('glowing');
    }
    header.addEventListener('click', toggleGlow);

    // Scroll animation for elements with the 'scroll-fade' class
    const fadeElements = document.querySelectorAll('.scroll-fade');
    const revealOnScroll = () => {
        for (let i = 0; i < fadeElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = fadeElements[i].getBoundingClientRect().top;
            const elementVisible = 150; // Adjust as needed

            if (elementTop < windowHeight - elementVisible) {
                fadeElements[i].classList.add("visible");
            } else {
                fadeElements[i].classList.remove("visible");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Call on initial load

    // Back to Top Button functionality (if you have one)
    const backToTopButton = document.querySelector('#back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scrolling for anchor links (optional)
    const smoothScrollLinks = document.querySelectorAll('a[href*="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
