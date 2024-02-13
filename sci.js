import { caesarCipher } from "./ciphers/Caesar_cipher.js";
import { railFenceCipherEncrypt, railFenceCipherDecrypt } from "./ciphers/rail_fence.js";
import { hillCipherEncrypt, hillCipherDecrypt } from "./ciphers/hill_cipher.js";

// Selecting form elements and result placeholders
const caesarForm = document.querySelector("#caesarForm");
const caesarResult = document.querySelector("#caesarResult");

const railfenceForm = document.querySelector("#railfenceForm");
const railfenceResult = document.querySelector("#railfenceResult");

const hillcipherForm = document.querySelector("#hillcipherForm");
const hillcipherResult = document.querySelector("#hillcipherResult");

// Event handlers for form submissions
function caesarEventHandler(event) {
    event.preventDefault();
    const text = caesarTextInput.value;
    const key = Number(caesarKeyInput.value);
    const action = document.querySelector('input[name="caesarAction"]:checked').value;

    if (action === 'encrypt') {
        caesarResult.innerHTML = caesarCipher(text, key);
    } else {
        caesarResult.innerHTML = caesarCipher(text, -key); // Decrypt by using negative key
    }
}

function railfenceEventHandler(event) {
    event.preventDefault();
    const text = railfenceTextInput.value;
    const key = Number(railfenceKeyInput.value);
    const action = document.querySelector('input[name="railfenceAction"]:checked').value;

    if (action === 'encrypt') {
        railfenceResult.innerHTML = railFenceCipherEncrypt(text, key);
    } else {
        railfenceResult.innerHTML = railFenceCipherDecrypt(text, key);
    }
}

function hillcipherEventHandler(event) {
    event.preventDefault();
    const text = hillTextInput.value;
    const key = hillKeyInput.value;
    const action = document.querySelector('input[name="hillAction"]:checked').value;

    if (action === 'encrypt') {
        hillcipherResult.innerHTML = hillCipherEncrypt(text, key);
    } else {
        hillcipherResult.innerHTML = hillCipherDecrypt(text, key);
    }
}

// Adding event listeners to forms
caesarForm.addEventListener("submit", caesarEventHandler);
railfenceForm.addEventListener("submit", railfenceEventHandler);
hillcipherForm.addEventListener("submit", hillcipherEventHandler);
