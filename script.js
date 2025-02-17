const facts = [
  "The first computer \"bug\" was an actual moth found trapped in a relay of the Harvard Mark II computer in 1947.",
  "The first programmer was a woman named Ada Lovelace, who wrote an algorithm for a mechanical computer in the 1840s.",
  "The programming language Python is named after the British comedy group Monty Python, not the snake.",
  "There are more than 700 programming languages in existence, and new ones are being created all the time.",
  "The world's first computer game, \"Spacewar!,\" was created in 1962 and ran on a computer that took up an entire room.",
  "The QWERTY keyboard layout, still used today, was designed to slow down typists and prevent jamming on mechanical typewriters.",
  "The @ symbol, now ubiquitous in email addresses, was originally used by medieval merchants to mean \"at the rate of.\"",
  "The first website went live in 1991 and contained only text and links, as images were not yet supported.",
  "The world's most popular programming language (based on various rankings) fluctuates, but contenders often include JavaScript, Python, and Java.",
  "Some programmers use a technique called \"rubber duck debugging,\" where they explain their code line by line to an inanimate object to help identify errors."
];

const factElement = document.getElementById("fact");
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factElement.textContent = facts[randomIndex];
});
