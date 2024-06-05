
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards');

    const colors = [
        '#ffb53e',  // Color 1
        '#a1d200',  // Color 2
        '#FFBF78',  // Color 3
        '#FF7D29',
        '#F2F4F6',
        '#1EE3CF',
        '#6B48FF',
        '#0D3F67',
    ];

    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Change color based on the scroll position
                const colorIndex = Math.floor(Math.random() * colors.length);
                entry.target.style.backgroundColor = colors[colorIndex];
            } else {
                entry.target.classList.remove('reveal');
                // Reset color when out of view (optional)
                entry.target.style.backgroundColor = '';
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
