const phrase = "Votre imagination n'a plus de limites.";
let currentLetterIndex = 0;
const typingSpeed = 50;
const erasingSpeed = 50;
const delayBetweenActions = 2000;

const animatedTextElement = document.querySelector('.animated-text');

function typePhrase() {
    if (currentLetterIndex < phrase.length) {
        animatedTextElement.textContent += phrase.charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        setTimeout(erasePhrase, delayBetweenActions);
    }
}

function erasePhrase() {
    if (currentLetterIndex > 0) {
        animatedTextElement.textContent = phrase.substring(0, currentLetterIndex - 1);
        currentLetterIndex--;
        setTimeout(erasePhrase, erasingSpeed);
    } else {
        setTimeout(typePhrase, delayBetweenActions);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typePhrase, delayBetweenActions);
});