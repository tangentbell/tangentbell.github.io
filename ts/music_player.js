var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const audioElement = document.getElementById('audio-element');
const nowPlayingLabel = document.getElementById('now-playing');
function playTrack(trackSrc, trackName) {
    nowPlayingLabel.innerText = `Now Playing: ${trackName}`;
    audioElement.src = trackSrc;
    audioElement.play();
}
let tracks;
fetchTracks().then((data) => {
    tracks = data;
}).then(generateTracks).then(() => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});
function generateTracks() {
    let trackList = document.getElementById('track-list');
    if (trackList) {
        tracks.forEach(track => {
            const trackListing = document.createElement('li');
            trackListing.classList.add('track');
            const playButton = document.createElement('button');
            const playIcon = document.createElement('i');
            playIcon.classList.add('fa');
            playIcon.classList.add('fa-play');
            playButton.classList.add('play-btn');
            playButton.setAttribute('data-src', `${track.s3_Key}`);
            playButton.addEventListener('click', () => {
                const trackSrc = playButton.getAttribute('data-src');
                if (audioElement.src !== trackSrc) {
                    playTrack(trackSrc, track.name);
                }
                else {
                    if (audioElement.getAttribute('paused')) {
                        audioElement.play();
                    }
                    else {
                        audioElement.pause();
                    }
                }
            });
            playButton.appendChild(playIcon);
            trackListing.appendChild(playButton);
            const trackTitle = document.createElement('h3');
            trackTitle.textContent = track.name;
            trackListing.appendChild(trackTitle);
            const trackLength = document.createElement('p');
            trackLength.textContent = `(${track.year}) ${track.playtime.substring(3)}`;
            trackListing.appendChild(trackLength);
            trackList.appendChild(trackListing);
        });
    }
}
function fetchTracks() {
    return __awaiter(this, void 0, void 0, function* () {
        // const response = await fetch(`http://localhost:5066/api/Music`);
        const response = yield fetch(`https://tangentbackend.fly.dev/api/Music`);
        if (!response.ok) {
            throw new Error(`Error fetching data from Music`);
        }
        return response.json();
    });
}
export {};
// window.onload = fetchTracks;
