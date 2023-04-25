const englishButtons = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "ShR",
    "Ctrl", "Win", "Alt", "Space", "Alt", "◄", "▼", "►"
];

const keyboardKeysContainer = document.querySelector('.keyboard-keys-container');

englishButtons.forEach((key) => {
    const newButton = document.createElement("button");
    newButton.classList.add("keyboard-button");
    newButton.textContent = key;
    keyboardKeysContainer.appendChild(newButton);

    switch (key) {
        case "Backspace":
            newButton.classList.add("keyboard-mx-button");
            break;
        case "Tab":
        case "Del":
            newButton.classList.add("keyboard-sx-button");
            break;
        case "Space":
            newButton.classList.add("keyboard-space-button");
            break;
        case "CapsLock":
            newButton.classList.add("keyboard-shift-button");
            break;
        case "Enter":
            newButton.classList.add("keyboard-enter-button");
            break;
        case "Shift":
            newButton.classList.add("keyboard-shift2-button");
            break;
    }
})