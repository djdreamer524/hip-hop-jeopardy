
let questions = [];
let scores = { 1: 0, 2: 0 };

function buildBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  if (typeof questionSet !== "undefined") {
    questions = questionSet;
  }

  const categories = [...new Set(questions.map(q => q.category))];
  const uniqueValues = [...new Set(questions.map(q => q.value))].sort((a,b) => a - b);

  categories.forEach(category => {
    const cell = document.createElement("div");
    cell.className = "tile";
    cell.innerText = category;
    cell.style.fontWeight = "bold";
    board.appendChild(cell);
  });

  uniqueValues.forEach(value => {
    categories.forEach(category => {
      const cell = document.createElement("div");
      cell.className = "tile";
      const q = questions.find(q => q.category === category && q.value === value);
      if (q) {
        cell.innerText = `$${q.value}`;
        cell.onclick = () => showQuestion(q);
      }
      board.appendChild(cell);
    });
  });
}

function showQuestion(q) {
  const modal = document.getElementById("modal");
  const scratch = document.getElementById("scratch");
  document.getElementById("questionTitle").innerText = `${q.category} - $${q.value}`;
  document.getElementById("questionText").innerText = q.question;
  document.getElementById("answerText").innerText = "Answer: " + q.answer;
  document.getElementById("answerText").classList.add("hidden");
  scratch.play();
  modal.style.display = "flex";

  document.getElementById("showAnswerBtn").onclick = () => {
    document.getElementById("answerText").classList.remove("hidden");
    document.getElementById("applause").play();
  };
}

function addPoints(teamNum) {
  const current = parseInt(document.querySelector(`#team${teamNum} .score`).innerText);
  const amount = parseInt(document.getElementById("questionTitle").innerText.split("$")[1]);
  scores[teamNum] = current + amount;
  document.querySelector(`#team${teamNum} .score`).innerText = scores[teamNum];
  closeModal();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("answerText").classList.add("hidden");
}

window.onload = () => {
  buildBoard();
  document.getElementById("closeBtn").onclick = closeModal;
};
