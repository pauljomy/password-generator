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

sliderEl.addEventListener("input", () => {
  if (charLengthEl) charLengthEl.textContent = sliderEl.value;
  const percent = (+sliderEl.value / +sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, #a4ffaf ${percent}%, #08070b ${percent}%)`;
});

function copyPassword() {
  const pass = generatedPassEl?.textContent.trim();
  const passStrength = getPassStrength();
  console.log(passStrength);

  if (!pass) return;

  if (passStrength > 0 && +sliderEl.value > 0) {
    navigator.clipboard.writeText(pass).then(() => {
      if (copiedTextEl) {
        copiedTextEl.textContent = "COPIED";

        setTimeout(() => {
          copiedTextEl.textContent = "";
        }, 1000);
      }
    });
  }

  console.log(pass);
}

copyEl?.addEventListener("click", copyPassword);

function generateUpperCaseLetters() {
  if (upperCaseEl.checked) {
    return Array.from({ length: 4 }, () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }).join("");
  } else return "";
}

function generateLowerCaseLetters() {
  if (lowerCaseEl.checked) {
    return Array.from({ length: 4 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97),
    ).join("");
  } else return "";
}

function generateNums() {
  if (numbersEl.checked) {
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
}

function displayGeneratedPass(password: string) {
  if (generatedPassEl && +sliderEl.value > 0) {
    generatedPassEl.textContent = password;
    generatedPassEl.style.color = "#fff";
    const passStrength = getPassStrength();
    console.log(passStrength);

    // updatedBarStyle();
  }
}

generateBtnEl?.addEventListener("click", () => {
  generatedPassword();
});

function getPassStrength(): number {
  return [upperCaseEl, lowerCaseEl, numbersEl, symbolsEl].filter(
    (el) => el.checked,
  ).length;
}

function updateStrengthBars() {
  const strength = getPassStrength();
  strengthElBar.forEach((bar, i) => {
    const el = bar as HTMLElement;
    if (i < strength) {
      el.style.background = "#F8CD65";
      el.style.borderColor = "#F8CD65";
    } else {
      el.style.background = "";
      el.style.borderColor = "";
    }
  });
}

[upperCaseEl, lowerCaseEl, numbersEl, symbolsEl].forEach((el) => {
  el.addEventListener("change", updateStrengthBars);
});
