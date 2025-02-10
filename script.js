function createRain() {
    const storm = document.querySelector('.storm');
    for (let i = 0; i < 100; i++) {
        let drop = document.createElement('div');
        drop.classList.add('raindrop');
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = (Math.random() * 2 + 2) + 's';
        storm.appendChild(drop);
    }
}

createRain();
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".icon").forEach(icon => {
        icon.addEventListener("click", function () {
            const url = this.parentElement.getAttribute("href");
            window.open(url, "_blank");
        });
    });
});
