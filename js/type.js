const phrases = [
    "Votre imagination n'a plus de limites.",
    "Transformons vos idées en solutions concrètes.",
    "Alliez performance et innovation."
];

let currentPhraseIndex = 0;
let currentLetterIndex = 0;
const typingSpeed = 50;
const erasingSpeed = 25;
const delayBetweenPhrases = 1000;

const animatedTextElement = document.querySelector('.animated-text');

function typePhrase() {
    if (currentLetterIndex < phrases[currentPhraseIndex].length) {
        animatedTextElement.textContent += phrases[currentPhraseIndex].charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        setTimeout(erasePhrase, delayBetweenPhrases);
    }
}

function erasePhrase() {
    if (currentLetterIndex > 0) {
        animatedTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex - 1);
        currentLetterIndex--;
        setTimeout(erasePhrase, erasingSpeed);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typePhrase, delayBetweenPhrases);
});