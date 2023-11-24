const myNavbar = document.getElementById('myNavbar');
const scrollToTop = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        myNavbar.classList.add('shadow');
        scrollToTop.classList.add('active');
    } else {
        myNavbar.classList.remove('shadow');
        scrollToTop.classList.remove('active');
    }
});