"use strict";
const tracks = [
    {
        name: "Art Museum",
        year: "2022",
        source: "artmuseum.mp3",
        playtime: "02:34"
    },
    {
        name: "Battle 1",
        year: "2022",
        source: "battle1.mp3",
        playtime: "01:52"
    },
    {
        name: "Battle 3",
        year: "2023",
        source: "battle3.mp3",
        playtime: "01:51"
    },
    {
        name: "Boss 1",
        year: "2021",
        source: "boss1.mp3",
        playtime: "02:11"
    },
    {
        name: "Boss 3",
        year: "2022",
        source: "boss3.mp3",
        playtime: "01:45"
    },
    {
        name: "Cadence",
        year: "2023",
        source: "cadence.mp3",
        playtime: "00:48"
    },
    {
        name: "Cedars Beneath the Lake",
        year: "2022",
        source: "cedarsbeneaththelake.mp3",
        playtime: "03:04"
    },
    {
        name: "Ciel",
        year: "2022",
        source: "ciel.mp3",
        playtime: "00:53"
    },
    {
        name: "Clouds",
        year: "2022",
        source: "clouds.mp3",
        playtime: "01:58"
    },
    {
        name: "Corridors",
        year: "2021",
        source: "corridors.mp3",
        playtime: "01:16"
    },
    {
        name: "Crust of the Earth (Overworld 2)",
        year: "2021",
        source: "crustoftheearth.mp3",
        playtime: "01:15"
    },
    {
        name: "Forests of Stone",
        year: "2021",
        source: "forestsofstone.mp3",
        playtime: "01:12"
    },
    {
        name: "Grudge",
        year: "2022",
        source: "grudge.mp3",
        playtime: "02:28"
    },
    {
        name: "Haze (Overworld 1)",
        year: "2021",
        source: "haze.mp3",
        playtime: "00:35"
    },
    {
        name: "Hiraeth",
        year: "2021",
        source: "hiraeth.mp3",
        playtime: "01:38"
    },
    {
        name: "Industry",
        year: "2021",
        source: "industry.mp3",
        playtime: "01:28"
    },
    {
        name: "My Chrysalis Vertibird",
        year: "2023",
        source: "mychrysalisvertibird.mp3",
        playtime: "02:03"
    },
    {
        name: "Phase 1",
        year: "2021",
        source: "phase1.mp3",
        playtime: "01:31"
    },
    {
        name: "Post-Boss",
        year: "2022",
        source: "postboss.mp3",
        playtime: "01:12"
    },
    {
        name: "Ruined Zoo",
        year: "2022",
        source: "ruinedzoo.mp3",
        playtime: "02:28"
    },
    {
        name: "Seeing Light (Overworld 3)",
        year: "2022",
        source: "seeinglight.mp3",
        playtime: "01:43"
    },
];
const audioElement = document.getElementById('audio-element');
function playTrack(trackSrc) {
    audioElement.src = trackSrc;
    audioElement.play();
}
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
            playButton.setAttribute('data-src', `/snd/music/${track.source}`);
            playButton.addEventListener('click', () => {
                const trackSrc = playButton.getAttribute('data-src');
                if (audioElement.src !== trackSrc) {
                    playTrack(trackSrc);
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
            trackLength.textContent = `(${track.year}) ${track.playtime}`;
            trackListing.appendChild(trackLength);
            trackList.appendChild(trackListing);
        });
    }
}
window.onload = generateTracks;
