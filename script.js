
const board = document.getElementById("board");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const questionTitle = document.getElementById("questionTitle");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const showAnswerBtn = document.getElementById("showAnswerBtn");

let currentPoints = 0;
let currentCategory = "";

function buildBoard() {
  categories.forEach((cat, col) => {
    values.forEach((val, row) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.innerText = `$${val}`;
      tile.dataset.category = cat;
      tile.dataset.value = val;
      tile.onclick = () => showQuestion(cat, val, tile);
      board.appendChild(tile);
    });
  });
}

function showQuestion(category, value, tile) {
  const data = questions[category][value];
  currentPoints = value;
  currentCategory = category;
  questionTitle.innerText = `${category} - $${value}`;
  questionText.innerText = data.q;
  answerText.innerText = data.a;
  answerText.classList.add("hidden");
  modal.style.display = "flex";
  tile.style.visibility = "hidden";
  document.getElementById("scratch").play();
}

closeBtn.onclick = () => modal.style.display = "none";
showAnswerBtn.onclick = () => {
  answerText.classList.remove("hidden");
  document.getElementById("applause").play();
};

function addPoints(teamNum) {
  const scoreEl = document.querySelector(`#team${teamNum} .score`);
  let current = parseInt(scoreEl.innerText);
  scoreEl.innerText = current + currentPoints;
  modal.style.display = "none";
}

buildBoard();
