// Selecteer elementen
let audioDing = document.querySelector('audio');
let videoDing = document.querySelector('video');
let pauseButton = document.querySelector('.pausebutton');
let playButton = document.querySelector('.playbutton');
let volumeButton = document.querySelector('.volumebutton');
let volumeSlider = document.querySelector('.volumeslider');
let timeSlider = document.querySelector('.timeslider');

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

        // event listener voor volume
        volumeButton.addEventListener('click', function () {
            volumeSlider.hidden = !volumeSlider.hidden; // Show or hide the slider
        });

        // verander de audio
        volumeSlider.addEventListener('input', function () {
            audioDing.volume = volumeSlider.value; // kies het volume
        });

            // Update the slider's max value when metadata is loaded (audio duration available)
            audioDing.addEventListener('loadedmetadata', () => {
                timeSlider.max = audioDing.duration; // Set slider max to the audio duration
            });

            // Update the slider's value as the audio plays
            audioDing.addEventListener('timeupdate', () => {
                timeSlider.value = audioDing.currentTime; // Sync slider position with current audio time
            });

            // Seek audio when the slider is moved
            timeSlider.addEventListener('input', () => {
                audioDing.currentTime = timeSlider.value; // Update audio time based on slider
            });

// story.js is gedaan met chatgpt tbf
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('myVideo');
    const audioDing = document.querySelector('audio');
    const subtitleContainer = document.getElementById('subtitleContainer');
    const timeSlider = document.querySelector('.timeslider'); // Updated to use class selector
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

    // Sync slider and subtitles
    function syncPlayback() {
        const currentTime = audioDing.currentTime;

        // Sync slider position
        timeSlider.value = currentTime;

        // Sync subtitles
        const currentSub = subtitles.find(
            sub => currentTime >= sub.start && currentTime <= sub.end
        );

        if (currentSub) {
            updateSubtitle(currentSub.text, currentTime - currentSub.start, currentSub.end - currentSub.start);
        } else {
            subtitleContainer.innerHTML = ''; // Clear when no subtitles
        }
    }

    // Update subtitle display
    function updateSubtitle(text, elapsedTime, totalTime) {
        const words = text.split(' ');

        // Determine the current and next word
        const currentWordIndex = Math.floor((elapsedTime / totalTime) * words.length);
        const nextWordIndex = currentWordIndex + 1;

        // Create styled HTML
        const subtitleHTML = words.map((word, index) => {
            if (index === currentWordIndex) {
                return `<span class="highlight">${word}</span>`;
            } else if (index === nextWordIndex) {
                return `<span class="gray">${word}</span>`;
            }
            return `<span class="dim">${word}</span>`; // Gray out the rest
        }).join(' ');

        // Update the subtitle container
        subtitleContainer.innerHTML = subtitleHTML;
    }

    // Event listeners for audio
    audioDing.addEventListener('loadedmetadata', () => {
        timeSlider.max = audioDing.duration; // Set slider max to audio duration
    });

    audioDing.addEventListener('timeupdate', syncPlayback); // Sync slider and subtitles

    timeSlider.addEventListener('input', () => {
        audioDing.currentTime = timeSlider.value; // Set audio time to slider value
    });
});
