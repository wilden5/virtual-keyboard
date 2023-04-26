const englishLayout = [
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

  englishLayout.forEach((key) => {
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

const textArea = document.querySelector('.keyboard-textarea');
const buttons = document.querySelectorAll('.keyboard-button');
const sysButtons = ['Backspace', 'Tab', 'CapsLock', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space','Enter','Del', 'ShR'];
buttons.forEach((button) => {
  if (!sysButtons.includes(button.textContent)) {
    button.addEventListener('click', () => {
      textArea.value += button.textContent;
      textArea.focus();
    })
  }

  switch (button.textContent) {
    case 'Backspace':
      button.addEventListener('click', () => {
        const selectionStart = textArea.selectionStart;
        const selectionEnd = textArea.selectionEnd;
        const textBeforeCursor = textArea.value.substring(0, selectionStart - 1);
        const textAfterCursor = textArea.value.substring(selectionEnd);
        textArea.value = textBeforeCursor + textAfterCursor;
        textArea.selectionStart = selectionStart - 1;
        textArea.selectionEnd = selectionStart - 1;
        textArea.focus();
      });
    break;
    case 'Del':
      button.addEventListener('click', () => {
        const selectionStart = textArea.selectionStart;
        const textBeforeCursor = textArea.value.substring(0, selectionStart);
        const textAfterCursor = textArea.value.substring(selectionStart + 1);
        textArea.value = textBeforeCursor + textAfterCursor;
        textArea.selectionStart = selectionStart;
        textArea.selectionEnd = selectionStart;
        textArea.focus();
      });
    break;
    case 'Space':
      button.addEventListener('click', () => {
        const selectionStart = textArea.selectionStart;
        textArea.value = textArea.value.slice(0, selectionStart) + ' ' + textArea.value.slice(selectionStart);
        textArea.selectionStart = selectionStart + 1;
        textArea.selectionEnd = selectionStart + 1;
        textArea.focus();
      });
    break;
  }
})