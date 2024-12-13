// Selecteer knop
let audioDing = document.querySelector('audio');
let videoDing = document.querySelector('video');
let pauseButton = document.querySelector('.pausebutton');
let playButton = document.querySelector('.playbutton');

// Event listener voor de pauseknop click
pauseButton.addEventListener('click', function() {
    // Verberg de pauseknop en toon de playknop
    pauseButton.hidden = false; // Verbergt de pauseknop
    pauseButton.hidden = true; // Toont de playknop

    // zet audio aan
    audioDing.pause();
    videoDing.pause();
});

// Event listener voor de playknop click
playButton.addEventListener('click', function() {
    // Verberg de playknop en toon de pauseknop
    playButton.hidden = false; // Verbergt de playknop
    playButton.hidden = true; // Toont de pauseknop 

    // zet audio aan
    audioDing.play();
    videoDing.play();
});
