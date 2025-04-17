document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-hidden');

    const handleScroll = () => {
        scrollElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            console.log('Element:', element, 'Position:', elementPosition, 'Window Height:', windowHeight);

            if (elementPosition < windowHeight - 100 && !element.classList.contains('scroll-visible')) {
                element.classList.add('scroll-visible');
                element.classList.remove('scroll-hidden');
                console.log('Class applied: scroll-visible');
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll handler on page load
    handleScroll();
});