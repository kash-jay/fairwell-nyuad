startButton = document.getElementById('start-button');

console.log(startButton.textContent)
startButton.addEventListener('click', () => {
    window.location.href = "./c2.html"
});

const audio = new Audio('./audio/See You Again - Wiz Khalifa - Violin & Piano Cover.mp3');
window.addEventListener('mousemove', () => {
    audio.play();
});