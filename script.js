
const categories = ["Hip-Hop Person", "Hip-Hop Location", "Hip-Hop Writing", "Hip-Hop Lyrics", "Hip-Hop Beefs", "Hip-Hop Cars"];
const questions = [
  ["Who is Nas?", "Where is Compton?", "What is a rhyme scheme?", "Finish the lyric: 'It was all a...'", "Who did Jay-Z feud with in 2001?", "What car did Tupac get shot in?"],
  ["Who is Missy Elliott?", "Where is Bed-Stuy?", "What is a double entendre?", "Finish the lyric: 'Straight outta...'", "Who did Drake battle in 2024?", "What car is featured in 'Still D.R.E.'?"],
  ["Who is KRS-One?", "Where is Queensbridge?", "Define punchline in rap.", "Lyric: 'Cash rules everything...'", "Who beefed with LL Cool J?", "What whip does Rick Ross rap about often?"],
  ["Who is MC Lyte?", "Where is The Bronx?", "Define metaphor in rap.", "Lyric: 'Jesus walks with...'", "Beef: Common vs.?", "Jay-Z mentions what car in 'Otis'?"],
  ["Who is Ice Cube?", "Where is Atlanta known for?", "What’s a 16-bar verse?", "Lyric: 'Now I’m in the limelight...'", "Who had beef with The Game?", "What’s a classic NYC street car?"],
];

const board = document.getElementById("board");
const modal = document.getElementById("questionModal");

function createBoard() {
  categories.forEach(cat => {
    const cell = document.createElement("div");
    cell.className = "category";
    cell.innerText = cat;
    board.appendChild(cell);
  });

  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.innerText = "$" + ((i + 1) * 100);
      cell.onclick = () => showQuestion(questions[i][j], cell);
      board.appendChild(cell);
    }
  }
}

function showQuestion(text, cell) {
  modal.innerText = text;
  modal.style.display = "flex";
  cell.onclick = null;
  cell.style.opacity = 0.5;
  modal.onclick = () => modal.style.display = "none";
}

window.onload = createBoard;
