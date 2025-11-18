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

const generateButton = document.querySelector("button");
const inputElement1 = document.querySelector(".text1");
const inputElement2 = document.querySelector(".text2");

generateButton.addEventListener("click", feedPassword);

function generateRandomIndex() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword(length = 15) {
  let password1 = "";
  let password2 = "";

  for (let i = 0; i < length; i++) {
    password1 += characters[generateRandomIndex()];
    password2 += characters[generateRandomIndex()];
  }

  return [password1, password2];
}

function feedPassword() {
  const [firstPassword, secondPassword] = generatePassword();
  inputElement1.value = firstPassword;
  inputElement2.value = secondPassword;
}
