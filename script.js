
document.addEventListener("DOMContentLoaded", () => {
  // Background music
  const music = document.getElementById("backgroundMusic");
  const musicButton = document.getElementById("musicButton");

  if (music && musicButton) {
    musicButton.addEventListener("click", async () => {
      if (music.paused) {
        try {
          await music.play();
          musicButton.textContent = "♫ Pause our music";
        } catch (error) {
          alert("Music could not play. Check the audio filename.");
        }
      } else {
        music.pause();
        musicButton.textContent = "♫ Play our music";
      }
    });
  }

  // Singing buttons
  function setupSinging(yesId, noId, messageId, videoId, noMessage) {
    const yes = document.getElementById(yesId);
    const no = document.getElementById(noId);
    const message = document.getElementById(messageId);
    const area = document.getElementById(videoId);

    if (!yes || !no || !message || !area) {
      console.error("Missing HTML element:", yesId, noId, messageId, videoId);
      return;
    }

    yes.addEventListener("click", () => {
      message.textContent = "Let's go! The show is starting! 🎤";
      area.hidden = false;
      area.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    no.addEventListener("click", () => {
      message.textContent = noMessage;
    });
  }

  setupSinging(
    "herYes",
    "herNo",
    "herMessage",
    "herVideoArea",
    "No escape! 😂 You can still choose yes."
  );

  setupSinging(
    "myYes",
    "myNo",
    "myMessage",
    "myVideoArea",
    "Smart decision! My singing is too powerful. 🤣"
  );

  // Star rating
  const stars = document.querySelectorAll("[data-rating]");
  const ratingMessage = document.getElementById("ratingMessage");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = Number(star.dataset.rating);

      stars.forEach((item) => {
        const selected = Number(item.dataset.rating) <= rating;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      if (ratingMessage) {
        ratingMessage.textContent =
          `You gave this website ${rating}/5 stars! ⚡💛`;
      }
    });
  });

  console.log("Pikachu website JavaScript loaded successfully!");
});
