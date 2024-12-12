// Selecteer de play knop (zal een img zijn, dus dan class "playknop" in dit geval)
    let pauseButton = document.querySelector('.pausebutton');
//Maak het clickable, dus dat je erop kan klikken
    pauseButton.addEventListener('click', function() {
//Na het klikken veranderd die van play naar pauze
           alert('Het werkt!');
        });
//Omdat die nu op play staat, stopt het audio bestand.
