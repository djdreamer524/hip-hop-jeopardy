const categories = ["Hip-Hop Person", "Hip-Hop Location", "Hip-Hop Writing", "Hip-Hop Lyrics", "Hip-Hop Beefs", "Hip-Hop Cars"];
const board = document.getElementById("board");

const questions = {
  "Hip-Hop Person": ["Who is Tupac Shakur?", "Who is Notorious B.I.G.?", "Who is Nas?", "Who is Jay-Z?", "Who is Rakim?"],
  "Hip-Hop Location": ["What city is the birthplace of hip-hop?", "Where is Compton?", "Where is Atlanta known for in hip-hop?", "What is Queensbridge?", "Where is the Bronx?"],
  "Hip-Hop Writing": ["What is a bar?", "What is a punchline?", "What is a metaphor?", "What is a simile?", "What is a double entendre?"],
  "Hip-Hop Lyrics": ["Finish the line: 'It was all a...'", "Who said: 'I'm not a businessman, I'm a business, man'?", "Finish the line: 'I got 99 problems...'", "Who said: 'Dear Mama...'?", "Who rapped: 'Illmatic' album?"],
  "Hip-Hop Beefs": ["Tupac had beef with?", "Nas vs. who?", "Jay-Z and who had a famous beef?", "50 Cent vs. who?", "Drake and who had a 2015 beef?"],
  "Hip-Hop Cars": ["What car is in 'Still D.R.E.'?", "What does a lowrider do?", "What car did Biggie rap about?", "What's a Maybach?", "Which rapper is associated with a Rolls Royce?"]
};

const board = document.getElementById("jeopardy-board");
const modal = document.getElementById("question-modal");
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const revealAnswerBtn = document.getElementById("reveal-answer-btn");
const closeBtn = document.getElementById("close-btn");

let currentAnswer = "";
let currentValue = 0;
let currentTeam = 1;

function createBoard() {
  const header = document.createElement("div");
  header.classList.add("row");
  categories.forEach(cat => {
    const cell = document.createElement("div");
    cell.classList.add("cell", "category");
    cell.innerText = cat;
    header.appendChild(cell);
  });
  board.appendChild(header);

  values.forEach(value => {
    const row = document.createElement("div");
    row.classList.add("row");
    categories.forEach(cat => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerText = "$" + value;
      cell.onclick = () => showQuestion(cat, value, cell);
      row.appendChild(cell);
    });
    board.appendChild(row);
  });
}

function showQuestion(cat, value, cell) {
  questionText.innerText = questions[cat][value].q;
  answerText.innerText = questions[cat][value].a;
  answerText.style.display = "none";
  currentAnswer = questions[cat][value].a;
  currentValue = value;
  modal.style.display = "block";
  cell.onclick = null;
  cell.style.backgroundColor = "#222";
  cell.innerText = "";
}

revealAnswerBtn.onclick = () => {
  answerText.style.display = "block";
  let score = parseInt(document.getElementById("score" + currentTeam).innerText);
  score += currentValue;
  document.getElementById("score" + currentTeam).innerText = score;
  currentTeam = currentTeam === 1 ? 2 : 1;
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

createBoard();
