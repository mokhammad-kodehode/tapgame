document.addEventListener("DOMContentLoaded", () => {
  let score = 0;
  let clicksRemaining = 40;

  const scoreElement = document.getElementById("score");
  const clicksRemainingElement = document.getElementById("clicksRemaining");
  const clickButton = document.getElementById("clickButton");
  const score_image = document.getElementById("score_image");

  clickButton.addEventListener("click", () => {
    if (clicksRemaining > 0) {
      score++;
      clicksRemaining--;
      scoreElement.textContent = `${score}`;
      clicksRemainingElement.textContent = `Clicks remaining: ${clicksRemaining}`;

      if (clicksRemaining === 0) {
        clickButton.disabled = true;
        clickButton.textContent = "No more clicks";
      }
    }
  });
});
