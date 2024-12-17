// Selecteer elementen
let audioDing = document.querySelector('audio');
let videoDing = document.querySelector('video');
let pauseButton = document.querySelector('.pausebutton');
let playButton = document.querySelector('.playbutton');

// Event listener voor de pauseknop click
pauseButton.addEventListener('click', function () {
    // Verberg de pauseknop en toon de playknop
    pauseButton.hidden = true; // Verberg de pauseknop
    playButton.hidden = false; // Toon de playknop

    // Zet audio en video op pauze
    audioDing.pause();
    videoDing.pause();
});

// Event listener voor de playknop click
playButton.addEventListener('click', function () {
    // Verberg de playknop en toon de pauseknop
    playButton.hidden = true; // Verberg de playknop
    pauseButton.hidden = false; // Toon de pauseknop

    // Start audio en video
    audioDing.play();
    videoDing.play();
});

// story.js
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('myVideo');
    const subtitleContainer = document.getElementById('subtitleContainer');
    const track = document.getElementById('subtitleTrack');
    let subtitles = [];

    // Fetch and parse the VTT file
    fetch(track.src)
        .then(response => response.text())
        .then(text => parseVTT(text));

    function parseVTT(data) {
        const lines = data.split('\n');
        let currentSub = {};
        subtitles = lines.reduce((acc, line) => {
            if (line.includes('-->')) {
                const [start, end] = line.split(' --> ').map(time => timeToSeconds(time));
                currentSub = { start, end };
            } else if (line.trim() && !line.includes('-->')) {
                currentSub.text = line.trim();
                acc.push(currentSub);
                currentSub = {};
            }
            return acc;
        }, []);
    }

    function timeToSeconds(time) {
        const [hours, minutes, seconds] = time.split(':').map(parseFloat);
        return hours * 3600 + minutes * 60 + seconds;
    }

    // Sync subtitles with video playback
    video.addEventListener('timeupdate', () => {
        const currentTime = video.currentTime;
        const currentSub = subtitles.find(sub => currentTime >= sub.start && currentTime <= sub.end);

        if (currentSub) {
            subtitleContainer.textContent = currentSub.text;
        } else {
            subtitleContainer.textContent = '';
        }
    });
});