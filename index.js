
// // audio to play as soon as html loads
// window.onload = function() {
//     document.getElementById("my_audio").play();
// }

// function myFunction() { 
//  document.getElementById("my_audio").play();
//   document.getElementById("my_audio").load();
// } 



startButton = document.getElementById('start-button');

console.log(startButton.textContent)
startButton.addEventListener('click', () => {
    window.location.href = "./campus.html"
});

audioElement.play();