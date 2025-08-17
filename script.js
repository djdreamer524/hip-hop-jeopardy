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

function createBoard() {
  categories.forEach((cat, catIndex) => {
    const header = document.createElement("div");
    header.className = "cell";
    header.textContent = cat;
    board.appendChild(header);
  });

  for (let row = 0; row < 5; row++) {
    categories.forEach((cat, catIndex) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = `$${(row + 1) * 100}`;
      cell.addEventListener("click", () => showQuestion(cat, row));
      board.appendChild(cell);
    });
  }
}

function showQuestion(category, index) {
  const modal = document.getElementById("question-modal");
  const text = document.getElementById("question-text");
  text.textContent = questions[category][index];
  modal.style.display = "block";
}

function closeQuestion() {
  document.getElementById("question-modal").style.display = "none";
}

createBoard();
