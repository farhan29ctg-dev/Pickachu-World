
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Pacifico&display=swap');

:root {
  --yellow: #ffdf63;
  --yellow-light: #fff7cf;
  --pink: #ffd8e6;
  --purple: #e9ddff;
  --ink: #3b3045;
  --muted: #75687d;
  --white: #fffdf9;
  --shadow: 0 12px 32px rgba(91, 64, 87, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 78px;
}

body {
  margin: 0;
  color: var(--ink);
  font-family: "Nunito", sans-serif;
  background: linear-gradient(
    180deg,
    #fff9df 0%,
    #fff1f6 38%,
    #f8f1ff 72%,
    #fff9df 100%
  );
  overflow-x: hidden;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px clamp(18px, 5vw, 70px);
  background: rgba(255, 253, 249, 0.88);
  border-bottom: 1px solid rgba(100, 70, 90, 0.08);
  backdrop-filter: blur(14px);
}

.logo {
  font-weight: 900;
  font-size: 1.05rem;
}

.music-button {
  border: 1px solid #f0d46c;
  border-radius: 999px;
  padding: 10px 16px;
  background: #fff2b8;
  color: var(--ink);
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.music-button:hover {
  transform: translateY(-2px);
  background: var(--yellow);
}

.section {
  padding: 90px clamp(18px, 6vw, 90px);
}

.hero {
  min-height: 88vh;
  min-height: 88svh;
  position: relative;
  display: grid;
  place-items: center;
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, #fff 0 3%, transparent 3.5%),
    radial-gradient(circle at 82% 75%, #fff 0 4%, transparent 4.5%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 760px;
}

.eyebrow,
.chapter-label,
.poem-number {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #947125;
}

.pikachu {
  margin: 22px 0 12px;
  font-size: clamp(3.3rem, 9vw, 5.8rem);
  animation: bounce 2.2s ease-in-out infinite;
  filter: drop-shadow(0 10px 8px rgba(185, 135, 16, 0.12));
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 20px;
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -0.045em;
}

h1 span {
  color: #bd8a0b;
}

.hero-text {
  max-width: 600px;
  margin: 0 auto 16px;
  color: var(--muted);
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.8;
}

.hero-note {
  display: inline-block;
  padding: 9px 14px;
  margin-bottom: 24px;
  border-radius: 999px;
  background: rgba(255, 216, 230, 0.7);
  font-size: 0.9rem;
  font-weight: 800;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 12px 20px;
  border: 0;
  border-radius: 999px;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(91, 64, 87, 0.13);
}

.button:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 3px solid #8d66d8;
  outline-offset: 4px;
}

.primary {
  background: var(--yellow);
  color: #473815;
  box-shadow: 0 6px 0 #eac64d;
}

.secondary {
  background: #fff;
  color: var(--ink);
  border: 1px solid #eee1ef;
}

.floating {
  position: absolute;
  font-size: clamp(1.8rem, 5vw, 3rem);
  animation: float 4s ease-in-out infinite;
  user-select: none;
}

.heart-one {
  left: 10%;
  top: 22%;
}

.heart-two {
  right: 12%;
  top: 29%;
  animation-delay: -1s;
}

.heart-three {
  right: 16%;
  bottom: 14%;
  animation-delay: -2s;
}

.chapter {
  max-width: 1400px;
  margin: 0 auto;
}

.section-heading {
  max-width: 760px;
  margin: 0 auto 42px;
  text-align: center;
}

.section-heading h2,
.ending-card h2 {
  margin: 12px 0;
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.section-heading p {
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.8;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.photo-card,
.fun-card,
.rating-card,
.poem-card,
.memory-card,
.ending-card {
  background: rgba(255, 253, 249, 0.92);
  border: 1px solid rgba(112, 79, 112, 0.1);
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.photo-card {
  padding: 12px;
  margin: 0;
  transform: rotate(-1deg);
  transition: transform 0.25s;
}

.photo-card:nth-child(2) {
  transform: rotate(1.5deg);
}

.photo-card:nth-child(3) {
  transform: rotate(-0.5deg);
}

.photo-card:hover {
  transform: translateY(-7px) rotate(0);
}

.photo-card img {
  display: block;
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 17px;
  background: var(--yellow-light);
}

.photo-card figcaption,
.memory-card figcaption {
  padding: 15px 8px 8px;
  text-align: center;
  font-weight: 800;
  line-height: 1.5;
}

.small-note {
  margin: 35px 0 0;
  text-align: center;
  color: var(--muted);
  font-weight: 800;
}

#singing {
  max-width: 1050px;
}

.fun-card {
  padding: clamp(24px, 5vw, 42px);
  margin: 0 auto 28px;
  text-align: center;
}

.card-icon {
  margin-bottom: 10px;
  font-size: 2.6rem;
}

.fun-card h3,
.rating-card h3,
.poem-card h3 {
  margin-bottom: 12px;
  font-size: clamp(1.35rem, 3vw, 1.8rem);
}

.fun-card > p,
.rating-card > p {
  color: var(--muted);
  line-height: 1.75;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 22px 0 10px;
}

.response {
  min-height: 1.4em;
  margin: 15px 0 0;
  color: #8a5c0b;
  font-weight: 900;
}

.video-area {
  max-width: 700px;
  margin: 24px auto 0;
  padding-top: 20px;
  border-top: 1px dashed #e7d6ac;
}

.video-area p {
  font-weight: 900;
}

.video-area video {
  display: block;
  width: 100%;
  max-height: 480px;
  margin: 0 auto;
  border-radius: 18px;
  background: #211b29;
}

.rating-card {
  padding: 30px 20px;
  text-align: center;
  background: linear-gradient(135deg, #fff5bf, #ffe4ef);
}

.rating-buttons {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.rating-buttons button {
  border: 0;
  padding: 4px;
  background: transparent;
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  filter: grayscale(1);
  cursor: pointer;
  transition: transform 0.15s, filter 0.15s;
}

.rating-buttons button:hover,
.rating-buttons button.selected {
  filter: grayscale(0);
  transform: scale(1.15);
}

#poetry {
  max-width: 1200px;
}

.poetry-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.poem-card {
  padding: clamp(22px, 3vw, 32px);
  background: linear-gradient(160deg, #fffdf9, #fff4f8);
  transition: transform 0.25s;
}

.poem-card:nth-child(2) {
  background: linear-gradient(160deg, #fffdf9, #fff7d9);
}

.poem-card:nth-child(3) {
  background: linear-gradient(160deg, #fffdf9, #f1eaff);
}

.poem-card:hover {
  transform: translateY(-5px);
}

.poem-number {
  font-size: 0.68rem;
  letter-spacing: 0.08em;
}

.poem-card h3 {
  margin-top: 15px;
}

.poem-card p {
  margin-bottom: 0;
  color: #5e5065;
  line-height: 2;
  font-size: 0.98rem;
}

.memories-section {
  max-width: 1050px;
}

.memory-card {
  max-width: 800px;
  padding: 12px;
  margin: 0 auto 50px;
}

.memory-card img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 850px;
  object-fit: contain;
  border-radius: 16px;
  background: #fffdf9;
}

.ending-card {
  padding: clamp(28px, 6vw, 60px);
  text-align: center;
  background: linear-gradient(135deg, #fff1ad, #ffe1ef 55%, #eee4ff);
}

.ending-icon {
  margin-bottom: 18px;
  font-size: 3rem;
  animation: bounce 2s infinite;
}

.ending-card p {
  max-width: 620px;
  margin: 18px auto;
  color: #65566c;
  line-height: 1.9;
}

.ending-card .ending-joke {
  color: #7f5a15;
  font-weight: 900;
}

.ending-card .button {
  margin-top: 12px;
}

footer {
  padding: 30px 18px;
  text-align: center;
  background: rgba(255, 253, 249, 0.7);
  color: var(--muted);
}

footer p {
  margin-bottom: 7px;
  font-weight: 800;
}

.footer-small {
  font-size: 0.85rem;
  font-weight: 500;
}

.sparkles {
  position: fixed;
  inset: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  opacity: 0.12;
  font-size: 2rem;
  pointer-events: none;
}

.reveal {
  animation: appear 0.8s both;
}

[hidden] {
  display: none !important;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-12px) rotate(3deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(10deg); }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 850px) {
  .photo-grid,
  .poetry-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }

  .photo-card img {
    height: auto;
    max-height: 520px;
    aspect-ratio: 4 / 5;
  }

  .photo-card,
  .photo-card:nth-child(2),
  .photo-card:nth-child(3) {
    transform: none;
  }

  .poem-card {
    padding: 28px;
  }
}

@media (max-width: 520px) {
  .topbar {
    padding: 12px 14px;
  }

  .logo {
    font-size: 0.9rem;
  }

  .music-button {
    padding: 9px 12px;
    font-size: 0.82rem;
  }

  .section {
    padding: 65px 18px;
  }

  .hero {
    min-height: 80vh;
    min-height: 80svh;
  }

  .heart-one {
    left: 4%;
    top: 13%;
  }

  .heart-two {
    right: 4%;
    top: 19%;
  }

  .heart-three {
    right: 7%;
    bottom: 7%;
  }

  .button-row {
    flex-direction: column;
  }

  .button-row .button {
    width: 100%;
  }

  .rating-buttons {
    gap: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
