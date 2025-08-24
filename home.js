// Example: Scroll to top when clicking logo
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
