:root {
  --paper: #fbf7ef;
  --ink: #111;
  --gold: #8b7130;
  --purple: #a77ab9;
  --purple-dark: #875d9f;
  --max: 760px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  color: var(--ink);
  background: var(--paper);
  overflow-x: hidden;
}

.invitation {
  min-height: 100vh;
  text-align: center;
  background:
    repeating-linear-gradient(0deg, rgba(80,70,55,.045) 0 1px, transparent 1px 6px),
    repeating-linear-gradient(90deg, rgba(80,70,55,.035) 0 1px, transparent 1px 7px),
    linear-gradient(#fffdf8, #f8f2e9);
}

section {
  width: min(var(--max), 92%);
  margin: 0 auto;
  padding: 34px 0;
}

/* PORTADA */

.cover {
  padding-top: 20px;
}

.cover h2 {
  margin: 0;
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 500;
  line-height: .9;
  letter-spacing: -3px;
}

.cover h1 {
  margin: 8px 0 46px;
  font-family: 'Parisienne', cursive;
  font-size: clamp(3.8rem, 7vw, 6.3rem);
  font-weight: 400;
  line-height: .9;
  color: var(--purple);
}

.hero-photo {
  width: min(620px, 86%);
  aspect-ratio: 1.55 / 1;
  margin: 0 auto;
  border-radius: 50% 50% 0 0;
  overflow: hidden;
}

.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

.flower-bar {
  width: min(680px, 90%);
  display: block;
  margin: -42px auto 6px;
  position: relative;
  z-index: 5;
}

/* FECHA */

.date-line {
  position: relative;
  width: min(620px, 82%);
  margin: 34px auto 0;
  padding: 18px 0 42px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 26px;
  color: var(--gold);
}

.date-line::before,
.date-line::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(139,113,48,.55);
}

.date-line::before {
  top: 0;
}

.date-line::after {
  bottom: 8px;
}

.date-line span {
  font-family: 'Parisienne', cursive;
  font-size: clamp(2.2rem, 4.6vw, 3.7rem);
  line-height: 1;
  display: block;
}

.date-line strong {
  font-size: clamp(4.6rem, 8vw, 7rem);
  line-height: .75;
  font-weight: 500;
  display: block;
}

/* MÚSICA */

.music-player {
  width: min(650px, 90%);
  margin: 10px auto 40px;
  text-align: center;
}

#progress {
  width: 100%;
  appearance: none;
  height: 8px;
  border-radius: 10px;
  outline: none;
  background: linear-gradient(
    to right,
    #8e5ea2 0%,
    #8e5ea2 var(--progress, 0%),
    #e0d6e6 var(--progress, 0%),
    #e0d6e6 100%
  );
}

#progress::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  background: #8e5ea2;
  border-radius: 50%;
  cursor: pointer;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin-top: 35px;
}

.controls button {
  background: none;
  border: none;
  font-size: 36px;
  color: #8e5ea2;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: none;
}

.controls button:hover {
  transform: scale(1.3);
  opacity: 0.85;
}

#playBtn {
  font-size: 56px;
}

.playing {
  animation: pulse 1.1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.18); }
  100% { transform: scale(1); }
}

/* FLORES */

.small-flower {
  width: 68px;
  display: block;
  margin: 0 auto 14px;
}

/* PADRES / PADRINOS */

.parents,
.godparents {
  text-align: center;
  padding-top: 28px;
  padding-bottom: 34px;
}

.gold-title {
  margin: 0 0 2px;
  color: var(--gold);
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
  line-height: 1.05;
}

.parents h2,
.godparents h2,
.dress h2,
.gifts h2,
.confirm-section h2 {
  margin: 0 0 18px;
  font-family: 'Parisienne', cursive;
  color: var(--gold);
  font-size: clamp(3.4rem, 5.8vw, 5rem);
  font-weight: 400;
  line-height: .9;
}

.names-row {
  width: min(980px, 96%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.names-group {
  font-size: clamp(1.75rem, 4vw, 2.2rem);
  line-height: 1.35;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  color: #000;
}

.names-row .amp {
  font-family: 'Parisienne', cursive;
  font-size: clamp(3rem, 8vw, 4.4rem);
  line-height: .8;
  margin: 6px 0;
  color: #b4975a;
}

.godparents {
  padding-bottom: 70px;
}

/* FOTO EVENTO */

.event-photo-wrap {
  width: min(760px, 86%);
  max-width: 760px;
  padding: 0;
  margin: 46px auto 0;
  position: relative;
  z-index: 2;
}

.event-photo-img {
  width: 100%;
  height: 420px;
  display: block;
  object-fit: cover;
  object-position: center 35%;
  margin: 0 auto -1px;
}

.event-flower-overlay {
  position: absolute;
  left: 50%;
  top: -85px;
  transform: translateX(-50%);
  width: 108%;
  max-width: 820px;
  z-index: 5;
  pointer-events: none;
}

/* EVENTO */

.event-block {
  width: min(760px, 86%);
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 52px 70px;
  color: white;
  background: url("./assets/purple-texture.png") center/cover no-repeat;
  border-radius: 0 0 135px 135px;
  overflow: hidden;
}

.event-intro {
  font-family: 'Parisienne', cursive;
  font-size: clamp(2.7rem, 5vw, 4.1rem);
  line-height: 1.12;
  margin: 0 0 50px;
  text-align: center;
  font-weight: 400;
  letter-spacing: .5px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.25);
}

.event-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 48px;
  align-items: stretch;
}

.event-item {
  min-width: 0;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-img {
  width: 85%;
  max-width: 240px;
  margin: 0 auto 18px;
  display: block;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

.event-block h2 {
  margin: 0 0 14px;
  font-family: 'Parisienne', cursive;
  font-size: clamp(2.6rem, 4vw, 3.8rem);
  font-weight: 400;
  line-height: .9;
  text-shadow: 3px 3px 2px rgba(0,0,0,.35);
}

.event-block h3 {
  min-height: 72px;
  margin: 0 0 22px;
  text-transform: uppercase;
  font-size: clamp(1.2rem, 1.8vw, 1.55rem);
  line-height: 1.12;
  font-weight: 700;
}

.event-block p {
  min-height: 78px;
  margin: 0;
  font-size: clamp(1rem, 1.45vw, 1.25rem);
  line-height: 1.28;
}

.event-block strong {
  display: block;
  margin: auto 0 18px;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
}

.event-divider {
  width: 1px;
  height: 245px;
  border-left: 2px dashed rgba(255,255,255,.85);
  margin-top: 70px;
  position: relative;
}

.event-divider::before,
.event-divider::after {
  content: "♡";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.1rem;
}

.event-divider::before {
  top: 45%;
}

.event-divider::after {
  top: 54%;
}

/* BOTONES */

.white-btn,
.gold-btn,
button {
  display: inline-block;
  border: none;
  text-decoration: none;
  border-radius: 18px;
  padding: 12px 26px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 14px rgba(0,0,0,.18);
}

.white-btn {
  background: white;
  color: var(--gold);
}

.gold-btn,
button {
  background: var(--gold);
  color: white;
}

/* CÓDIGO DE VESTIMENTA */

.dress {
  padding-top: 30px;
  padding-bottom: 28px;
}

.dress h2 {
  font-size: clamp(3rem, 5vw, 4.6rem);
  margin-bottom: 2px;
}

.dress h3 {
  margin: 0;
  color: var(--gold);
  text-transform: uppercase;
  font-size: 2.6rem;
  letter-spacing: 1px;
}

.dress-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.dress-icons img {
  width: 500px;
  max-width: 80%;
  display: block;
}

/* DIVISORES FLORALES */

.floral-divider {
  text-align: center;
  margin: 40px 0 20px;
}

.floral-divider img {
  width: 260px;
  max-width: 70%;
  display: block;
  margin: 0 auto;
  opacity: .95;
}

.floral-top {
  width: min(760px, 86%);
  margin: 48px auto -90px;
  text-align: center;
  position: relative;
  z-index: 10;
  pointer-events: none;
}

.floral-top img {
  width: 108%;
  max-width: 820px;
  display: block;
  margin: 0 auto;
  transform: translateX(-4%);
}

/* REGALOS */

.gifts {
  width: min(1480px, 98%);
  max-width: 1480px;
  padding-top: 35px;
  padding-bottom: 90px;
  transform: none !important;
}

.gifts h2 {
  color: var(--purple);
  margin-bottom: 22px;
}

.gift-card-message {
  width: min(760px, 88%);
  margin: 24px auto 58px;
  padding: 46px 34px 42px;
  text-align: center;
  background: rgba(255, 253, 248, .72);
  border: 1px solid rgba(139,113,48,.18);
  border-radius: 28px;
  color: #111;
  box-shadow: 0 12px 30px rgba(0,0,0,.06);
}

.gift-card-message::before {
  content: "❀";
  display: block;
  color: var(--purple);
  font-size: 2.2rem;
  opacity: .55;
  margin-bottom: 12px;
}

.gift-date {
  margin: 0 0 28px;
  font-size: 1.05rem;
  letter-spacing: 8px;
}

.gift-card-message h3 {
  margin: 0 0 24px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 10px;
  text-transform: uppercase;
  font-weight: 500;
  color: #111;
}

.gift-card-message p {
  margin: 0 0 14px;
  font-size: clamp(1.25rem, 2.2vw, 1.65rem);
  line-height: 1.45;
  font-style: italic;
}

.gift-card-message span {
  display: block;
  margin-top: 38px;
  font-size: 1.8rem;
  letter-spacing: 12px;
}

.gift-links {
  width: min(620px, 86%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 44px;
}

.gift-links h3 {
  margin: 0;
  color: var(--gold);
  text-transform: uppercase;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
}

.gift-links p {
  margin: 0 0 10px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.gift-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  font-size: 1.05rem;
}

.gift-btn .icon {
  font-size: 1.2rem;
}

.gift-btn.liverpool {
  background: linear-gradient(135deg, #b4975a, #d6b97a);
}

.gift-btn.amazon {
  background: linear-gradient(135deg, #b4975a, #e0c07c);
}

/* CONTADOR */

.countdown-section {
  width: min(820px, 92%);
  padding-top: 32px;
}

.countdown-photo-img {
  width: 100%;
  max-width: 820px;
  height: 420px;
  display: block;
  object-fit: cover;
  object-position: center 60%;
  margin: 0 auto;
}

.countdown-card {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 28px 38px 44px;
  color: white;
  background: url("./assets/purple-texture.png") center/cover no-repeat;
  border-radius: 0 0 120px 120px;
}

.countdown-card .script-white {
  margin: 0 0 18px;
  font-family: 'Parisienne', cursive;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1;
  text-shadow: 2px 2px 2px rgba(0,0,0,.35);
}

.timer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

#days,
#hours,
#minutes,
#seconds {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(4.2rem, 7.5vw, 6.2rem);
  line-height: 1;
  font-weight: 300;
  letter-spacing: 2px;
}

.timer small {
  display: block;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-top: 2px;
}

.script-small {
  margin: 18px 0 12px;
  transform: translateY(1.2em);
  font-family: 'Parisienne', cursive;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1;
  text-shadow: 2px 2px 2px rgba(0,0,0,.35);
}

.countdown-card::after {
  content: "A & G";
  display: block;
  font-size: clamp(4rem, 8vw, 7rem);
  color: rgba(255,255,255,.22);
  margin-top: 52px;
  line-height: 1;
}

/* CONFIRMACIÓN */

.confirm-section {
  padding-top: 26px;
  padding-bottom: 42px;
}

.confirm-section h2 {
  color: var(--purple);
  font-size: clamp(3.5rem, 6vw, 5.5rem);
  font-weight: 400;
  margin: 0 0 18px;
}

.confirm-options {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

form {
  width: min(760px, 86%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.hidden-form {
  display: none;
}

.hidden-form.show {
  display: grid;
}

input,
select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid rgba(139,113,48,.35);
  border-radius: 14px;
  background: white;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
}

form button {
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 1rem;
}

/* COMPARTIR FOTO */

.photo-share {
  width: min(760px, 86%);
  max-width: 760px;
  margin: 50px auto 0;
  padding: 0;
  position: relative;
  overflow: hidden;
}

.photo-share-img {
  width: 100%;
  height: 680px;
  overflow: hidden;
  background: #f8f2e9;
}

.photo-share-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 70%;
  display: block;
}

.photo-share-overlay {
  position: relative;
  margin-top: -230px;
  min-height: 380px;
  background: url("./assets/purple-texture.png") center/cover no-repeat;
  border-radius: 50% 50% 0 0 / 32% 32% 0 0;
  padding: 100px 24px 52px;
  text-align: center;
  z-index: 2;
}

.photo-share-content {
  padding: 0;
}

.photo-share-content h2 {
  margin: 0 0 28px;
  font-family: 'Parisienne', cursive;
  color: white;
  font-size: clamp(2.7rem, 5vw, 4.1rem);
  line-height: 1.05;
  font-weight: 400;
  text-shadow: 2px 2px 4px rgba(0,0,0,.35);
}

.photo-share-content h2 span {
  display: block;
  font-size: clamp(3.2rem, 6vw, 4.8rem);
}

.photo-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: white;
  color: var(--gold);
  padding: 14px 46px;
  border-radius: 22px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.7rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 18px rgba(0,0,0,.22);
}

/* ANIMACIÓN */

.fade {
  opacity: 0;
  transform: translateY(24px);
  transition: all .8s ease;
}

.fade.show {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVE */

@media (max-width: 700px) {
  :root {
    --max: 100%;
  }

  section {
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
  }

  .cover h2 {
    font-size: 3.2rem;
  }

  .cover h1 {
    font-size: 3.6rem;
  }

  .hero-photo {
    width: 86%;
  }

  .flower-bar {
    width: 88%;
    margin-top: -32px;
  }

  .gold-title {
    font-size: 1.75rem;
  }

  .names-row {
    width: 98%;
    gap: 6px;
  }

  .names-group {
    font-size: clamp(1.45rem, 5.2vw, 1.85rem);
    line-height: 1.38;
    white-space: nowrap;
  }

  .names-row .amp {
    font-size: 3.3rem;
  }

  .event-photo-wrap {
    width: 86%;
    margin-top: 42px;
  }

  .event-photo-img {
    height: 560px;
    object-position: center 35%;
  }

  .event-flower-overlay {
    top: -55px;
    width: 118%;
  }

  .event-block {
    padding: 34px 24px 58px;
    border-radius: 0 0 90px 90px;
  }

  .event-intro {
    font-size: 2.2rem;
    line-height: 1.2;
    margin-bottom: 36px;
    padding: 0 6px;
  }

  .event-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .event-divider {
    height: 70px;
    margin: 20px auto;
  }

  .dress h3 {
    font-size: 2.2rem;
  }

  .gift-card-message {
    width: 90%;
    margin: 18px auto 48px;
    padding: 38px 22px 34px;
    border-radius: 24px;
  }

  .gift-date {
    font-size: .92rem;
    letter-spacing: 5px;
    margin-bottom: 22px;
  }

  .gift-card-message h3 {
    font-size: 1.75rem;
    letter-spacing: 5px;
  }

  .gift-card-message p {
    font-size: 1.05rem;
    line-height: 1.45;
  }

  .gift-card-message span {
    font-size: 1.35rem;
    letter-spacing: 8px;
    margin-top: 30px;
  }

  .gift-links {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .countdown-photo-img {
    height: 560px;
    object-position: center 60%;
  }

  .countdown-card {
    border-radius: 0 0 90px 90px;
    padding: 28px 20px 40px;
  }

  .timer {
    grid-template-columns: repeat(2, 1fr);
  }

  form {
    grid-template-columns: 1fr;
  }

  .floral-top {
    width: 86%;
    margin: 38px auto -70px;
  }

  .floral-top img {
    width: 118%;
    transform: translateX(-7%);
  }

  .photo-share {
    width: 86%;
  }

  .photo-share-img {
    height: 620px;
  }

  .photo-share-img img {
    object-position: center 70%;
  }

  .photo-share-overlay {
    margin-top: -210px;
    min-height: 340px;
    border-radius: 50% 50% 0 0 / 28% 28% 0 0;
    padding: 90px 18px 46px;
  }

  .photo-share-content h2 {
    font-size: 2.45rem;
  }

  .photo-share-content h2 span {
    font-size: 3rem;
  }

  .photo-btn {
    font-size: 1.45rem;
    padding: 12px 34px;
  }
}

@media (max-width: 390px) {
  .names-group {
    font-size: 1.32rem;
  }

  .event-intro {
    font-size: 2rem;
  }

  .gift-card-message p {
    font-size: 1rem;
  }
}
/* AJUSTE REAL FINAL - TEXTOS SCRIPT PRINCIPALES */

.event-block .event-intro,
.countdown-card .script-white,
.photo-share-content h2 {
  font-family: 'Parisienne', cursive !important;
  font-size: clamp(2.8rem, 5vw, 4.1rem) !important;
  line-height: 1.12 !important;
  font-weight: 400 !important;
  text-align: center !important;
  color: white !important;
  text-shadow: 2px 2px 3px rgba(0,0,0,.32) !important;
}

/* Quita el min-height que estaba afectando el texto de evento */
.event-block .event-intro {
  min-height: auto !important;
  margin: 0 0 46px !important;
}

/* Para que “Nuestra Boda” no se dispare más grande */
.photo-share-content h2 span {
  font-size: inherit !important;
  line-height: inherit !important;
}

/* CELULAR */
@media (max-width: 700px) {
  .event-block .event-intro,
  .countdown-card .script-white,
  .photo-share-content h2 {
    font-size: 2.75rem !important;
    line-height: 1.12 !important;
  }

  .event-block .event-intro {
    margin-bottom: 40px !important;
    padding: 0 6px !important;
  }
}

/* CELULAR CHICO */
@media (max-width: 390px) {
  .event-block .event-intro,
  .countdown-card .script-white,
  .photo-share-content h2 {
    font-size: 2.45rem !important;
  }
}
/* FIX DEFINITIVO - TEXTO "VEN A COMPARTIR" */

.event-block p.event-intro {
  min-height: auto !important;
  font-family: 'Parisienne', cursive !important;
  font-size: clamp(3.1rem, 5.5vw, 4.3rem) !important;
  line-height: 1.12 !important;
  margin: 0 0 50px !important;
  padding: 0 10px !important;
  text-align: center !important;
  font-weight: 400 !important;
  letter-spacing: .5px !important;
  color: white !important;
  text-shadow: 2px 2px 3px rgba(0,0,0,.35) !important;
}

/* CELULAR */
@media (max-width: 700px) {
  .event-block p.event-intro {
    font-size: 3.05rem !important;
    line-height: 1.12 !important;
    margin-bottom: 42px !important;
    padding: 0 12px !important;
  }
}

/* CELULAR PEQUEÑO */
@media (max-width: 390px) {
  .event-block p.event-intro {
    font-size: 2.75rem !important;
  }
}
