import {Music} from "./interfaces";
import {get} from "node:http";


const audioElement = document.getElementById('audio-element') as HTMLAudioElement;
const nowPlayingLabel = document.getElementById('now-playing')

function playTrack(trackSrc: string, trackName: string) {
  nowPlayingLabel!.innerText = `Now Playing: ${trackName}`
  audioElement.src = trackSrc;
  audioElement.play();
}

let tracks: Music[];
fetchTracks().then((data: Music[]) => {
  tracks = data;
}).then(generateTracks).then(() => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen!.style.opacity = '0';
  setTimeout(() => {
    loadingScreen!.style.display = 'none';
}, 500);});

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
        if (audioElement!.src !== trackSrc) {
          playTrack(trackSrc!, track.name);
        } else {
          if (audioElement!.getAttribute('paused')) {
            audioElement.play();
          } else {
            audioElement.pause();
          }
        }
      })
      playButton.appendChild(playIcon);
      trackListing.appendChild(playButton);

      const trackTitle = document.createElement('h3');
      trackTitle.textContent = track.name;
      trackListing.appendChild(trackTitle);

      const trackLength = document.createElement('p');
      trackLength.textContent = `(${track.year}) ${track.playtime.substring(3)}`;
      trackListing.appendChild(trackLength);

      trackList!.appendChild(trackListing);
    });
  }
}

async function fetchTracks() {
  // const response = await fetch(`http://localhost:5066/api/Music`);
  const response = await fetch(`https://tangentbackend.fly.dev/api/Music`);
  if (!response.ok) {
    throw new Error(`Error fetching data from Music`);
  }
  return response.json();
}

// window.onload = fetchTracks;
