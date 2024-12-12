// Selecteer de play knop (zal een img zijn, dus dan class "playknop" in dit geval)
    //let pauseButton = document.querySelector('.pausebutton');//
//Maak het clickable, dus dat je erop kan klikken
    //pauseButton.addEventListener('click', function() {//
//Na het klikken veranderd die van play naar pauze
        //    alert('Het werkt!');
        //});//
//Omdat die nu op play staat, stopt het audio bestand.

function togglePlayPause() {
    const pauseButton = document.querySelector('.pausebutton');
    const playButton = document.querySelector('img:not(.pausebutton)');

    if (pauseButton.style.display === 'none') {
        pauseButton.style.display = 'inline';
        playButton.style.display = 'none';
        console.log('Switched to Pause');
    } else {
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline';
        console.log('Switched to Play');
    }
}