document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('header');
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑ Top';
    backToTopButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; display: none; z-index: 1000; padding: 10px;';

    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = '#555';
            backToTopButton.style.display = 'block';
        } else {
            navbar.style.backgroundColor = 'transparent';
            backToTopButton.style.display = 'none';
        }
    });

  
    const smoothScrollLinks = document.querySelectorAll('a[href*="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

  
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
