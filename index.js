const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let randomPassword1 = "";
let randomPassword2 = "";
const generateButton = document.querySelector("button");
const inputElement1 = document.querySelector(".text1");
const inputElement2 = document.querySelector(".text2");

generateButton.addEventListener("click", feedPassword);

function feedPassword() {
  const [firstPassword, secondPassword] = generatePassword();
  inputElement1.value = firstPassword;
  inputElement2.value = secondPassword;
  randomPassword1 = "";
  randomPassword2 = "";
}

function generateRandomLetter() {
  for (let i = 0; i < characters.length; i++) {
    let randomLetter = Math.floor(Math.random() * characters.length);
    return randomLetter;
  }
}

function generatePassword() {
  for (let i = 0; i < 15; i++) {
    let randomLetter1 = generateRandomLetter();
    let randomLetter2 = generateRandomLetter();
    randomPassword1 += characters[randomLetter1];
    randomPassword2 += characters[randomLetter2];
  }
  return [randomPassword1, randomPassword2];
}
