startButton = document.getElementById('start-button');

console.log(startButton.textContent)
startButton.addEventListener('click', () => {
    window.location.href = "./campus.html"
});