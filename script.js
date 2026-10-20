
document.addEventListener("DOMContentLoaded", () => {
  // Google Apps Script URL for rating notifications
  const RATING_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwuho2hSfvnBf7E7sM-8A0wFpM6N5TBdnFdIV9tc1oI2wpaZ86qOnfmMWgiaHpKO2Eq/exec";

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
          console.error("Music playback failed:", error);
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
    "Na bola jabenaa! Shunteeeeei hobeeee Huhha."
  );

  setupSinging(
    "myYes",
    "myNo",
    "myMessage",
    "myVideoArea",
    "Eibhabe na bole dila! Eto kharap gaan kori ami?"
  );

  // Star rating + email notification
  const stars = document.querySelectorAll("[data-rating]");
  const ratingMessage = document.getElementById("ratingMessage");
  let ratingSubmitting = false;

  stars.forEach((star) => {
    star.setAttribute("aria-pressed", "false");

    star.addEventListener("click", async () => {
      const rating = Number(star.dataset.rating);

      if (
        !Number.isInteger(rating) ||
        rating < 1 ||
        rating > 5 ||
        ratingSubmitting
      ) {
        return;
      }

      // Highlight the selected stars
      stars.forEach((item) => {
        const selected = Number(item.dataset.rating) <= rating;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      if (ratingMessage) {
        ratingMessage.textContent = "Sending your rating... 💌";
      }

      ratingSubmitting = true;
      stars.forEach((item) => {
        item.style.pointerEvents = "none";
      });

      try {
        // Send the rating to Google Apps Script.
        // no-cors means the browser cannot read Google's response.
        await fetch(RATING_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify({ rating })
        });

        if (ratingMessage) {
          ratingMessage.textContent =
            `You selected ${rating}/5 stars! ⚡💛 Thank you, Pikachu!`;
        }
      } catch (error) {
        console.error("Rating submission error:", error);

        if (ratingMessage) {
          ratingMessage.textContent =
            "Could not send the rating. Please try again! 💛";
        }
      } finally {
        ratingSubmitting = false;

        stars.forEach((item) => {
          item.style.pointerEvents = "";
        });
      }
    });
  });

  console.log("Pikachu website JavaScript loaded successfully!");
});
