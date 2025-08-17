document.addEventListener("DOMContentLoaded", function () {
  const board = document.querySelector(".jeopardy-board");
  if (!board) {
    console.error("Missing .jeopardy-board element in HTML.");
    return;
  }

  const teamScores = [0, 0];
  const scoreboard = document.getElementById("scoreboard");
  const backgroundMusic = document.getElementById("background-music");
  const scratchSound = document.getElementById("scratch-sound");
  const applauseSound = document.getElementById("applause-sound");

  backgroundMusic.volume = 0.2;
  backgroundMusic.loop = true;
  backgroundMusic.play();

  function updateScoreboard() {
    scoreboard.innerHTML = `
      <h3>Team 1: $${teamScores[0]}</h3>
      <h3>Team 2: $${teamScores[1]}</h3>
    `;
  }

  // Build the category row
  for (let col = 0; col < categories.length; col++) {
    const cell = document.createElement("div");
    cell.className = "cell category";
    cell.innerText = categories[col];
    board.appendChild(cell);
  }

  // Build the question cells
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < categories.length; col++) {
      const cell = document.createElement("div");
      cell.className = "cell question";
      cell.innerText = `$${(row + 1) * 100}`;

      cell.addEventListener("click", function () {
        const q = questions[col]?.[row];
        if (!q) {
          alert("No question found for this cell.");
          return;
        }

        scratchSound.play();
        const userAnswer = prompt(q.question);
        if (userAnswer && userAnswer.toLowerCase() === q.answer.toLowerCase()) {
          applauseSound.play();
          const team = parseInt(prompt("Correct! Which team gets the points? (1 or 2)"));
          if (team === 1 || team === 2) {
            teamScores[team - 1] += (row + 1) * 100;
            updateScoreboard();
          }
        } else {
          alert(`Wrong! The correct answer was: ${q.answer}`);
        }
        cell.classList.add("answered");
        cell.removeEventListener("click", arguments.callee);
      });

      board.appendChild(cell);
    }
  }

  updateScoreboard();
});
