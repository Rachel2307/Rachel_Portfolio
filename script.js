document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Restart animation on scroll
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});
