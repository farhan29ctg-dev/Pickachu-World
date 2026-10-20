
const sections = ["home", "gallery", "voice", "poetry", "memories"];

function showSection(id) {
  sections.forEach(sectionId => {
    document.getElementById(sectionId)
      .classList.toggle("hidden", sectionId !== id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.go);
  });
});

// Background music: start only after the visitor clicks.
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.textContent = "♫ Music: On";
    } catch {
      musicToggle.textContent = "Tap to try music again";
    }
  } else {
    music.pause();
    musicToggle.textContent = "♫ Music: Off";
  }
});

// Her singing: playful, but not a dead-end.
const herQuestion = document.getElementById("herQuestion");
const herMessage = document.getElementById("herMessage");
const herChoices = document.getElementById("herChoices");
const herVideoArea = document.getElementById("herVideoArea");

function herStep(step) {
  if (step === "start") {
    herQuestion.textContent = "Wanna hear my favourite vocal?";
    herMessage.textContent = "A very important musical mission awaits.";
    herChoices.innerHTML = `
      <button class="primary" data-her="yes">YESSS 🎶</button>
      <button class="secondary" data-her="no">Nope 🙃</button>`;
  }

  if (step === "sure") {
    herQuestion.textContent = "Are you sureeee? 👀";
    herMessage.textContent = "Think carefully, Pikachu.";
    herChoices.innerHTML = `
      <button class="primary" data-her="play">YES, I'M SURE</button>
      <button class="secondary" data-her="again">WAIT, NO</button>`;
  }

  if (step === "force") {
    herQuestion.textContent = "Jidd cholbe na, shuntei hobeeeeee 😂";
    herMessage.textContent = "There is only one correct answer.";
    herChoices.innerHTML = `
      <button class="primary" data-her="play">YES, FINEEE 😭</button>`;
  }

  if (step === "play") {
    herChoices.classList.add("hidden");
    herVideoArea.classList.remove("hidden");
    herQuestion.textContent = "Presenting: the favourite vocal 🎶";
    herMessage.textContent = "Official listening session begins now.";
    const video = herVideoArea.querySelector("video");
    video.load();
    video.play().catch(() => {});
  }
}

herChoices.addEventListener("click", event => {
  const button = event.target.closest("[data-her]");
  if (!button) return;

  const action = button.dataset.her;

  if (action === "yes") herStep("sure");
  if (action === "no") herStep("force");
  if (action === "again") herStep("force");
  if (action === "play") herStep("play");
});

// Move to the second performance.
document.querySelector("[data-next-voice]").addEventListener("click", () => {
  document.getElementById("voice").scrollIntoView({ behavior: "smooth" });
  document.getElementById("myQuestion")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

// Your singing.
const myQuestion = document.getElementById("myQuestion");
const myMessage = document.getElementById("myMessage");
const myChoices = document.getElementById("myChoices");
const myVideoArea = document.getElementById("myVideoArea");

function myStep(step) {
  if (step === "start") {
    myQuestion.textContent = "Now let me sing for you. Wanna hear?";
    myMessage.textContent =
      "Warning: the singer accepts absolutely no responsibility.";
    myChoices.innerHTML = `
      <button class="primary" data-mine="yes">YES 🎤</button>
      <button class="secondary" data-mine="no">NO 😭</button>`;
  }

  if (step === "sure") {
    myQuestion.textContent = "You might go deaf. Are you sure? 💀";
    myMessage.textContent = "Last chance to save your ears.";
    myChoices.innerHTML = `
      <button class="primary" data-mine="play">BRING IT ON</button>
      <button class="secondary" data-mine="force">SAVE MY EARS</button>`;
  }

  if (step === "force") {
    myQuestion.textContent =
      "Huhha! You have to listen no matter what. Now listen 😂";
    myMessage.textContent = "The concert has been approved.";
    myChoices.innerHTML = `
      <button class="primary" data-mine="play">OKAY, PLAY IT!</button>`;
  }

  if (step === "play") {
    myChoices.classList.add("hidden");
    myVideoArea.classList.remove("hidden");
    myQuestion.textContent = "The performance begins 🎤";
    myMessage.textContent = "Wish me luck. I'll probably need it.";
    const video = myVideoArea.querySelector("video");
    video.load();
    video.play().catch(() => {});
  }
}

myChoices.addEventListener("click", event => {
  const button = event.target.closest("[data-mine]");
  if (!button) return;

  const action = button.dataset.mine;

  if (action === "yes") myStep("sure");
  if (action === "no") myStep("force");
  if (action === "force") myStep("force");
  if (action === "play") myStep("play");
});

// Rating card.
const score = document.getElementById("score");
const scoreLabel = document.getElementById("scoreLabel");
const ratingCard = document.getElementById("ratingCard");
const ratingForm = document.getElementById("ratingForm");
const ratingResult = document.getElementById("ratingResult");

score.addEventListener("input", () => {
  scoreLabel.textContent = `${score.value}/10`;
});

document.querySelector("[data-show-rating]").addEventListener("click", () => {
  ratingCard.classList.remove("hidden");
  ratingCard.scrollIntoView({ behavior: "smooth", block: "center" });
});

ratingForm.addEventListener("submit", event => {
  event.preventDefault();
  const selectedScore = score.value;
  const review = document.getElementById("review").value;
  ratingResult.textContent =
    `Official verdict: ${selectedScore}/10 — ${review}`;
});

// Reset the performance questions when returning to the website.
function resetPerformances() {
  herVideoArea.classList.add("hidden");
  herChoices.classList.remove("hidden");
  herStep("start");

  myVideoArea.classList.add("hidden");
  myChoices.classList.remove("hidden");
  myStep("start");

  ratingCard.classList.add("hidden");

  document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
}

document.querySelectorAll('[data-go="home"]').forEach(button => {
  button.addEventListener("click", resetPerformances);
});

// Helpful media error messages during testing.
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.alt = "Image not found. Check the filename and folder.";
    img.style.minHeight = "160px";
  });
});
