window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    if (top >= offset) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
      const songs = [
  "songs/dhess-ravi-jay-samith-gomes",
  "songs/man-maarai-remake-kelwiz",
  "songs/Abalan - Chubby FT Breezy , D rulz"
];

let currentSong = 0;
const audio = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

audio.src = songs[currentSong];
audio.volume = 0.6;

// Play next song automatically
audio.addEventListener("ended", () => {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }
  audio.src = songs[currentSong];
  audio.play();
});

// Button click (required for autoplay on most browsers)
btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸ Pause Music";
  } else {
    audio.pause();
    btn.textContent = "🔊 Play Music";
  }
});

    }
  });
});
