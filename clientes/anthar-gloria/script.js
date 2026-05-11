const weddingDate = new Date("2026-07-25T19:00:00").getTime();
const whatsappNumber = "5215529134341";

const audio = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

let isPlaying = false;

/* MÚSICA */
if (audio && playBtn && progress) {
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playBtn.textContent = "❤";
      playBtn.classList.remove("playing");
    } else {
      audio.play();
      playBtn.textContent = "❚❚";
      playBtn.classList.add("playing");
    }

    isPlaying = !isPlaying;
  });

  audio.addEventListener("timeupdate", () => {
    const percent = audio.duration
      ? (audio.currentTime / audio.duration) * 100
      : 0;

    progress.value = percent || 0;
    progress.style.setProperty("--progress", percent + "%");
  });

  progress.addEventListener("input", () => {
    if (!audio.duration) return;

    const time = (progress.value / 100) * audio.duration;
    audio.currentTime = time;
  });
}

/* NEXT / PREV */
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn && audio) {
  nextBtn.addEventListener("click", () => {
    audio.currentTime += 10;
  });
}

if (prevBtn && audio) {
  prevBtn.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  });
}

/* CONTADOR */
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  if (!days || !hours || !minutes || !seconds) return;

  if (distance <= 0) {
    days.textContent = "0";
    hours.textContent = "0";
    minutes.textContent = "0";
    seconds.textContent = "0";
    return;
  }

  days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor((distance / (1000 * 60 * 60)) % 24);
  minutes.textContent = Math.floor((distance / (1000 * 60)) % 60);
  seconds.textContent = Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ANIMACIÓN SCROLL */
const fadeElements = document.querySelectorAll(".fade");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach((element) => {
    if (element.getBoundingClientRect().top < triggerBottom) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

/* FORMULARIO */
const showForm = document.getElementById("showForm");
const rsvpForm = document.getElementById("rsvpForm");

if (showForm && rsvpForm) {
  showForm.addEventListener("click", () => {
    rsvpForm.classList.toggle("show");
  });
}

if (rsvpForm) {
  rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();
    const attendance = document.getElementById("attendance").value;

    const message = `Hola, confirmo mi asistencia a la boda de Anthar y Gloria.%0A%0ANombre: ${name}%0ARespuesta: ${attendance}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  });
}
