
const categories = [
  "Hip-Hop Person",
  "Hip-Hop Location",
  "Hip-Hop Writing",
  "Hip-Hop Lyrics",
  "Hip-Hop Beefs",
  "Hip-Hop Cars"
];

const values = [100, 200, 300, 400, 500];

const questions = {
  "Hip-Hop Person": {
    100: { q: "This rapper is known as 'Hov' and co-founded Roc-A-Fella Records.", a: "Who is Jay-Z?" },
    200: { q: "This Compton native rose to fame with his album good kid, m.A.A.d city.", a: "Who is Kendrick Lamar?" },
    300: { q: "Known for his activism and powerful lyrics, he starred in Juice and Poetic Justice.", a: "Who is Tupac Shakur?" },
    400: { q: "This rapper from Chicago is also an actor, author, and known for Be and Like Water for Chocolate.", a: "Who is Common?" },
    500: { q: "He was once called 'The Teacher' and led Boogie Down Productions.", a: "Who is KRS-One?" }
  },
  "Hip-Hop Location": {
    100: { q: "The borough considered the birthplace of hip-hop.", a: "What is the Bronx?" },
    200: { q: "The West Coast city that birthed N.W.A.", a: "What is Compton?" },
    300: { q: "Atlanta neighborhood central to trap music’s rise.", a: "What is Bankhead?" },
    400: { q: "The borough that raised Biggie Smalls.", a: "What is Brooklyn?" },
    500: { q: "The Queens housing project known for birthing Nas and many other MCs.", a: "What is Queensbridge?" }
  },
  "Hip-Hop Writing": {
    100: { q: "The rhyming pattern or structure of a verse.", a: "What is a flow?" },
    200: { q: "Short, witty line meant to deliver impact, often humorous or shocking.", a: "What is a punchline?" },
    300: { q: "When a rapper writes lyrics for another artist.", a: "What is ghostwriting?" },
    400: { q: "A complex style of rhyme that uses multi-syllabic words and inner rhymes.", a: "What is multisyllabic rhyme?" },
    500: { q: "A lyrical device where a line references a well-known phrase, name, or event to make a point.", a: "What is a metaphor or allusion?" }
  },
  "Hip-Hop Lyrics": {
    100: { q: "“It was all a _____” – Biggie, Juicy.", a: "What is dream?" },
    200: { q: "“I got 99 problems but a _____ ain’t one.”", a: "What is [chick]?" },
    300: { q: "“Started from the bottom now we _____.”", a: "What is here?" },
    400: { q: "“You can hate me now, but I won’t _____.”", a: "What is stop?" },
    500: { q: "“The Marathon continues” is a phrase made famous by this fallen West Coast rapper.", a: "Who is Nipsey Hussle?" }
  },
  "Hip-Hop Beefs": {
    100: { q: "This East Coast/West Coast beef defined the '90s.", a: "What is Biggie vs. Tupac?" },
    200: { q: "“Ether” was a diss track aimed at this rapper.", a: "Who is Jay-Z?" },
    300: { q: "Drake and this rapper clashed in 2015 with diss tracks like “Back to Back.”", a: "Who is Meek Mill?" },
    400: { q: "This female beef included “Shether” and “No Frauds.”", a: "Who are Remy Ma and Nicki Minaj?" },
    500: { q: "“The Takeover” was this rapper’s reply to “Ether.”", a: "Who is Jay-Z?" }
  },
  "Hip-Hop Cars": {
    100: { q: "A luxury SUV brand often mentioned by rappers, known for the Escalade.", a: "What is Cadillac?" },
    200: { q: "“Maybach Music” is a tag used by this rapper’s label.", a: "Who is Rick Ross?" },
    300: { q: "The iconic West Coast car with hydraulics featured in Dr. Dre's “Let Me Ride.”", a: "What is a lowrider?" },
    400: { q: "The nickname for a Rolls-Royce with a starlight ceiling.", a: "What is the Wraith?" },
    500: { q: "This Lamborghini model is referenced in songs for its scissor doors and sleek style.", a: "What is the Aventador?" }
  }
};
