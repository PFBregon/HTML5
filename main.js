document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.contenedor__item');
    let index = 0;

    function animarEmojis() {
        items.forEach(item => item.style.opacity = '0');

        items[index].style.opacity = '1';

        index = (index + 1) % items.length;

        setTimeout(animarEmojis, 1000);
    }

    animarEmojis();
});

