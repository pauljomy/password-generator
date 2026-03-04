const generatedPassEl = document.getElementById("generated-password");
const copyEl = document.getElementById("copy");
const generateBtnEl = document.getElementById("generate-btn");
const copiedTextEl = document.getElementById("copied-text");

function copyPassword() {
  const pass = generatedPassEl?.textContent.trim();
  if (copiedTextEl) {
    copiedTextEl.textContent = "COPIED";

    setTimeout(() => {
      copiedTextEl.textContent = "";
    }, 1000);
  }
  console.log(pass);
}

copyEl?.addEventListener("click", copyPassword);

function generateUpperCaseLetters() {
  return Array.from({ length: 5 }, () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }).join("");
}

function generateLowerCaseLetters() {
  return Array.from({ length: 5 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  ).join("");
}

function generateNums() {
  return Array.from({ length: 5 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  ).join("");
}

function generateSymbols() {
  const firstSet = Array.from({ length: 2 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 15) + 33),
  ).join("");

  const secondSet = Array.from({ length: 2 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 7) + 58),
  ).join("");

  const thirdSet = Array.from({ length: 1 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 5) + 91),
  ).join("");

  return firstSet + secondSet + thirdSet;
}

function generatePassword() {
  const upperCase = generateUpperCaseLetters();
  const lowerCase = generateLowerCaseLetters();
  const nums = generateNums();
  const symbols = generateSymbols();

  const randomPassCombination = upperCase + lowerCase + nums + symbols;
  console.log(randomPassCombination);
}

generateBtnEl?.addEventListener("click", generatePassword);
