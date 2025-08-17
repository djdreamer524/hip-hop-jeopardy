
const categories = [
  "Hip-Hop Groups",
  "Hip-Hop Slang",
  "Hip-Hop Producers",
  "Hip-Hop Debuts",
  "Female Rappers",
  "Classic Albums"
];

const values = [100, 200, 300, 400, 500];

const questions = {
  "Hip-Hop Groups": {
    100: { q: "This Queens trio told us not to push them because they’re close to the edge.", a: "Who is Run-D.M.C.?" },
    200: { q: "This West Coast group featured Dr. Dre, Ice Cube, and Eazy-E.", a: "Who is N.W.A.?" },
    300: { q: "Outkast repped this Southern city and put it on the hip-hop map.", a: "What is Atlanta?" },
    400: { q: "This Staten Island crew consists of 9 members and embraces Kung-Fu culture.", a: "Who is Wu-Tang Clan?" },
    500: { q: "Bone Thugs-n-Harmony hail from this Midwestern city.", a: "What is Cleveland?" }
  },
  "Hip-Hop Slang": {
    100: { q: "This term means ‘money’ and also a type of bread.", a: "What is dough?" },
    200: { q: "If someone is ‘spitting bars,’ they are doing this.", a: "What is rapping?" },
    300: { q: "This term means someone who copies another’s style.", a: "What is a biter?" },
    400: { q: "‘Crib’ is slang for this.", a: "What is your home?" },
    500: { q: "This term describes an old-school DJ scratching and mixing.", a: "What is turntablism?" }
  },
  "Hip-Hop Producers": {
    100: { q: "The producer behind ‘The Chronic’ and Aftermath Entertainment.", a: "Who is Dr. Dre?" },
    200: { q: "Known for soul-sampling and shaping the sound of Jay-Z’s 'Blueprint'.", a: "Who is Kanye West?" },
    300: { q: "This Neptunes co-founder produced for Clipse, Jay-Z, and Nelly.", a: "Who is Pharrell?" },
    400: { q: "This producer/rapper duo is known as Gang Starr.", a: "Who are DJ Premier and Guru?" },
    500: { q: "Known for spooky synths and working with Dipset and Cam'ron.", a: "Who is The Heatmakerz?" }
  },
  "Hip-Hop Debuts": {
    100: { q: "Nas’s debut album often considered one of the greatest.", a: "What is Illmatic?" },
    200: { q: "50 Cent’s debut released under Shady/Aftermath.", a: "What is Get Rich or Die Tryin’?" },
    300: { q: "Kanye West debuted with this college-themed album.", a: "What is The College Dropout?" },
    400: { q: "Kendrick Lamar’s debut on a major label.", a: "What is good kid, m.A.A.d city?" },
    500: { q: "Jay-Z introduced himself with this album.", a: "What is Reasonable Doubt?" }
  },
  "Female Rappers": {
    100: { q: "She was the first female rapper to go platinum.", a: "Who is MC Lyte?" },
    200: { q: "Queen of hip-hop soul, she dropped ‘Work It’.", a: "Who is Missy Elliott?" },
    300: { q: "She created alter ego Roman Zolanski.", a: "Who is Nicki Minaj?" },
    400: { q: "First Lady of Death Row Records.", a: "Who is Lady of Rage?" },
    500: { q: "Part of Junior M.A.F.I.A., Biggie mentored her.", a: "Who is Lil’ Kim?" }
  },
  "Classic Albums": {
    100: { q: "Biggie’s debut album.", a: "What is Ready to Die?" },
    200: { q: "Dr. Dre’s first solo album after leaving N.W.A.", a: "What is The Chronic?" },
    300: { q: "Outkast’s double album with ‘Hey Ya!’", a: "What is Speakerboxxx/The Love Below?" },
    400: { q: "Lauryn Hill’s only solo studio album.", a: "What is The Miseducation of Lauryn Hill?" },
    500: { q: "Public Enemy’s politically charged 1988 classic.", a: "What is It Takes a Nation of Millions to Hold Us Back?" }
  }
};
