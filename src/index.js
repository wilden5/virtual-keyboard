const englishButtons = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'ShR',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►',
];

// todo: подумай насчет деструктуризации и классов

const body = document.querySelector('body');

const generatePageLayout = () => {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard-wrapper');

  const keyboardTitle = document.createElement('h1');
  keyboardTitle.textContent = 'Virtual Keyboard EN/RU';
  keyboardTitle.classList.add('keyboard-title');

  const keyboardTextArea = document.createElement('textarea');
  keyboardTextArea.classList.add('keyboard-textarea');

  const keyboardKeysContainer = document.createElement('div');
  keyboardKeysContainer.classList.add('keyboard-keys-container');

  const keyboardDescription = document.createElement('p');
  keyboardDescription.classList.add('keyboard-description');
  keyboardDescription.textContent = 'Клавиатура создана в операционной системе Windows '
        + 'Для переключения языка комбинация: ctrl + alt';

  keyboardWrapper.appendChild(keyboardTitle);
  keyboardWrapper.appendChild(keyboardTextArea);
  keyboardWrapper.appendChild(keyboardKeysContainer);
  keyboardWrapper.appendChild(keyboardDescription);

  body.appendChild(keyboardWrapper);
};

const generateKeyboardKeys = () => {
  const keyboardKeysContainer = document.querySelector('.keyboard-keys-container');

  englishButtons.forEach((key) => {
    const newButton = document.createElement('button');
    newButton.classList.add('keyboard-button');
    newButton.textContent = key;
    keyboardKeysContainer.appendChild(newButton);

    switch (key) {
      case 'Backspace':
        newButton.classList.add('button-backspace');
        break;
      case 'Tab':
      case 'Del':
        newButton.classList.add('keyboard-sx-button');
        break;
      case 'Space':
        newButton.classList.add('button-space');
        break;
      case 'CapsLock':
        newButton.classList.add('button-capslock');
        break;
      case 'Enter':
        newButton.classList.add('button-enter');
        break;
      case 'Shift':
        newButton.classList.add('button-shift');
        break;
      default:
    }
  });
};

(function initPage() {
  generatePageLayout();
  generateKeyboardKeys();
}());