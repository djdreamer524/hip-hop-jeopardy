const categories = ["Hip-Hop Person", "Hip-Hop Location", "Hip-Hop Writing", "Hip-Hop Lyrics", "Hip-Hop Beefs", "Hip-Hop Cars"];
const values = [100, 200, 300, 400, 500];

const questions = {
  "Hip-Hop Person": {
    100: { q: "Who is considered the 'God MC'?", a: "Rakim" },
    200: { q: "Which rapper is known for 'College Dropout'?", a: "Kanye West" },
    300: { q: "Who is the first solo female rapper to go platinum?", a: "Da Brat" },
    400: { q: "Who founded Roc-A-Fella Records?", a: "Jay-Z" },
    500: { q: "Who is Marshall Mathers?", a: "Eminem" }
  },
  "Hip-Hop Location": {
    100: { q: "Which borough is known as the birthplace of hip-hop?", a: "The Bronx" },
    200: { q: "Where is Death Row Records based?", a: "Los Angeles" },
    300: { q: "What NYC club did The Tunnel famously host?", a: "Hip-Hop Sundays" },
    400: { q: "Where was the Source Awards in 1995?", a: "New York City" },
    500: { q: "Which city is associated with Screw music?", a: "Houston" }
  },
  "Hip-Hop Writing": {
    100: { q: "What does a '16' refer to in rap?", a: "16-bar verse" },
    200: { q: "What is a 'punchline'?", a: "A witty or impactful lyric" },
    300: { q: "Name a popular rhyme scheme format.", a: "AABB or ABAB" },
    400: { q: "Who is credited for writing for Dr. Dre?", a: "The D.O.C., Snoop Dogg, Eminem" },
    500: { q: "What does 'ghostwriting' mean?", a: "Writing lyrics for another artist" }
  },
  "Hip-Hop Lyrics": {
    100: { q: "'It was all a dream...' is from which song?", a: "Juicy - Notorious B.I.G." },
    200: { q: "'Y'all gon' make me lose my mind...'", a: "Party Up - DMX" },
    300: { q: "'To the window, to the wall...'", a: "Get Low - Lil Jon & The Eastside Boyz" },
    400: { q: "'Cash Rules Everything Around Me'", a: "C.R.E.A.M. - Wu-Tang Clan" },
    500: { q: "Finish the line: 'I got 99 problems...'", a: "but a b**** ain't one - Jay-Z" }
  },
  "Hip-Hop Beefs": {
    100: { q: "Nas had a legendary beef with whom?", a: "Jay-Z" },
    200: { q: "Who did Pusha T expose in 'The Story of Adidon'?", a: "Drake" },
    300: { q: "Who was 50 Cent’s early rival?", a: "Ja Rule" },
    400: { q: "Which group beefed with Bone Thugs-N-Harmony?", a: "Three 6 Mafia" },
    500: { q: "Who dissed LL Cool J in 'Jack the Ripper'?", a: "Kool Moe Dee" }
  },
  "Hip-Hop Cars": {
    100: { q: "Which car brand appears in many Tupac videos?", a: "BMW" },
    200: { q: "What kind of car is 'Ridin’ Dirty' in?", a: "Chevy Impala" },
    300: { q: "Which artist rapped about 'Maybach Music'?", a: "Rick Ross" },
    400: { q: "Which brand is '6-4' referring to?", a: "1964 Chevy Impala" },
    500: { q: "Who drove a Lambo in 'Mercy'?", a: "Kanye West, Big Sean, 2 Chainz" }
  }
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