// --- Přepínání podstránek ---
function showPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + num).classList.add('active');
}

// --- Exploze srdíček z tlačítka ---
function explodeHearts(button) {
    const rect = button.getBoundingClientRect();
    const xCenter = rect.left + rect.width / 2;
    const yCenter = rect.top + rect.height / 2;

    for(let i=0; i<30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = xCenter + 'px';
        heart.style.top = yCenter + 'px';
        document.body.appendChild(heart);

        const angle = Math.random() * 2 * Math.PI;
        const distance = 100 + Math.random() * 150;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        heart.animate([
            { transform: 'translate(0,0) rotate(-45deg)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) rotate(-45deg)`, opacity: 0 }
        ], { duration: 1200, easing: 'ease-out' });

        setTimeout(() => heart.remove(), 1200);
    }
}

// --- Létající srdíčka na pozadí ---
function createRandomHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    document.body.appendChild(heart);

    const dx = (Math.random() - 0.5) * 100;
    const dy = - (300 + Math.random() * 300);

    heart.animate([
        { transform: 'translate(0,0) rotate(-45deg)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) rotate(-45deg)`, opacity: 0 }
    ], { duration: 4000 + Math.random() * 2000, easing: 'linear' });

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createRandomHeart, 500);

// --- Tlačítko překvapení ---
document.getElementById('surpriseBtn').addEventListener('click', () => {
    explodeHearts(document.getElementById('surpriseBtn'));
    setTimeout(() => showPage(2), 300);
});

// --- Hra: Tajná zpráva ---
document.querySelectorAll('.secretHeart').forEach(btn => {
    btn.addEventListener('click', () => {
        const message = btn.getAttribute('data-message');
        document.getElementById('messageArea').textContent = message;
    });
});
