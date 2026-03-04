const generatedPassEl = document.getElementById("generated-password");
const copyEl = document.getElementById("copy");
const generateBtnEl = document.getElementById("generate-btn");
const copiedTextEl = document.getElementById("copied-text");
const upperCaseEl = document.getElementById("uppercase") as HTMLInputElement;
const lowerCaseEl = document.getElementById("lowercase") as HTMLInputElement;
const numbersEl = document.getElementById("numbers") as HTMLInputElement;
const symbolsEl = document.getElementById("symbols") as HTMLInputElement;
const sliderEl = document.getElementById("slider") as HTMLInputElement;
const charLengthEl = document.getElementById("char-length");
const strengthElBar = document.querySelectorAll("[data-strength]");
let passStrength = 0;

sliderEl.addEventListener("input", () => {
  if (charLengthEl) charLengthEl.textContent = sliderEl.value;
});

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
  if (upperCaseEl.checked) {
    passStrength++;
    return Array.from({ length: 4 }, () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }).join("");
  } else return "";
}

function generateLowerCaseLetters() {
  if (lowerCaseEl.checked) {
    passStrength++;
    return Array.from({ length: 4 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97),
    ).join("");
  } else return "";
}

function generateNums() {
  if (numbersEl.checked) {
    passStrength++;
    return Array.from({ length: 4 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 10) + 48),
    ).join("");
  } else return "";
}

function generateSymbols() {
  if (symbolsEl.checked) {
    const firstSet = Array.from({ length: 1 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 15) + 33),
    ).join("");

    const secondSet = Array.from({ length: 2 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 7) + 58),
    ).join("");

    const thirdSet = Array.from({ length: 1 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 5) + 91),
    ).join("");
    passStrength++;
    return firstSet + secondSet + thirdSet;
  } else return "";
}

function generatedPassword() {
  const upperCase = generateUpperCaseLetters();
  const lowerCase = generateLowerCaseLetters();
  const nums = generateNums();
  const symbols = generateSymbols();

  const randomPassCombination = upperCase + lowerCase + nums + symbols;
  const randomPassword = Array.from(
    { length: +sliderEl.value },
    () =>
      randomPassCombination[
        Math.floor(Math.random() * randomPassCombination.length)
      ],
  ).join("");

  displayGeneratedPass(String(randomPassword));

  passStrength = 0;
}

generateBtnEl?.addEventListener("click", generatedPassword);

function displayGeneratedPass(password: string) {
  if (generatedPassEl && +sliderEl.value > 0) {
    generatedPassEl.textContent = password;
    generatedPassEl.style.color = "#fff";
    for (let i = 0; i < passStrength; i++) {
      (strengthElBar[i] as HTMLElement).style.borderColor = "#F8CD65";
      (strengthElBar[i] as HTMLElement).style.background = "#F8CD65";
    }
  }
}
