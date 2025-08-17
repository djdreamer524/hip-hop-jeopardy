
document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector(".jeopardy-board");
  const footer = document.createElement("footer");
  footer.innerText = "Designed by: DJ Dreamer 524";
  document.body.appendChild(footer);

  const scratchSound = new Audio("assets/scratch.mp3");
  const applauseSound = new Audio("assets/applause.mp3");
  const bgMusic = new Audio("assets/bg-music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.2;
  bgMusic.play().catch(() => {
    // Handle autoplay restrictions
    console.log("Background music autoplay was blocked.");
  });

  const scoreboard = document.createElement("div");
  scoreboard.className = "scoreboard";
  let team1Score = 0;
  let team2Score = 0;
  const team1 = document.createElement("div");
  const team2 = document.createElement("div");
  team1.className = "team";
  team2.className = "team";
  team1.innerText = `Team 1: $${team1Score}`;
  team2.innerText = `Team 2: $${team2Score}`;
  scoreboard.appendChild(team1);
  scoreboard.appendChild(team2);
  document.body.insertBefore(scoreboard, board);

  // Create categories row
  categories.forEach(category => {
    const catCell = document.createElement("div");
    catCell.className = "category";
    catCell.innerText = category;
    board.appendChild(catCell);
  });

  // Populate board with questions
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.innerText = `$${(row + 1) * 100}`;
      board.appendChild(cell);
    }
  }

  board.addEventListener("click", e => {
    if (e.target.classList.contains("cell") && !e.target.classList.contains("answered")) {
      const row = e.target.dataset.row;
      const col = e.target.dataset.col;
      const q = questions[col][row];
      scratchSound.play();
      const team = prompt(`${q.question}\n\nEnter team (1 or 2) that got it right:`);

      if (team === "1") {
        team1Score += (parseInt(row) + 1) * 100;
        team1.innerText = `Team 1: $${team1Score}`;
        applauseSound.play();
      } else if (team === "2") {
        team2Score += (parseInt(row) + 1) * 100;
        team2.innerText = `Team 2: $${team2Score}`;
        applauseSound.play();
      }

      e.target.innerText = q.answer;
      e.target.classList.add("answered");
    }
  });
});
