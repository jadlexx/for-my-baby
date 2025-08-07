const envelope = document.getElementById("envelope");
const audio = document.getElementById("bg-music");

let isOpen = false;

envelope.addEventListener("click", () => {
  isOpen = !isOpen;
  envelope.classList.toggle("open");

  if (isOpen) {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.log("Audio play failed:", error);
    });
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});
