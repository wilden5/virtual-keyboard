const englishKeyboardLayout = [
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

  englishKeyboardLayout.forEach((key) => {
    const newButton = document.createElement('button');
    newButton.classList.add('keyboard-button');
    newButton.textContent = key;
    keyboardKeysContainer.appendChild(newButton);

    switch (key) {
      case 'Backspace':
        newButton.classList.add('button-backspace');
        break;
      case 'Tab':
        newButton.classList.add('button-tab');
        break;
      case 'Del':
        newButton.classList.add('button-del');
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
      case 'ShR':
        newButton.classList.add('button-shift', 'button-shift-default-width');
        break;
      case 'Shift':
        newButton.classList.add('button-shift');
        break;
      default:
    }
  });
};

const handleCapsLockClick = () => {
  const buttonCapsLock = document.querySelector('.button-capslock');
  buttonCapsLock.addEventListener('click', () => {
    keyboardGeneratedKeys.forEach((key) => {
      if (!systemKeys.includes(key.textContent)) {
        key.classList.toggle('uppercase');
      }
    });
  });
};

const handleHoldOnShift = () => {
  document.querySelectorAll('.button-shift').forEach((shiftButton) => {
    shiftButton.addEventListener('mousedown', () => {
      keyboardGeneratedKeys.forEach((key) => {
        if (!systemKeys.includes(key.textContent)) {
          key.classList.add('uppercase');
        }
      })
    });
    shiftButton.addEventListener('mouseup', () => {
      keyboardGeneratedKeys.forEach((key) => {
        if (!systemKeys.includes(key.textContent)) {
          key.classList.remove('uppercase');
        }
      })
    });
  })
}; // capitalizing keyboard keys while holding on shift

const handleBackspaceClick = () => {
    document.querySelector('.button-backspace').addEventListener('click', () => {
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    const textBeforeCursor = textArea.value.substring(0, selectionStart - 1);
    const textAfterCursor = textArea.value.substring(selectionEnd);
    textArea.value = textBeforeCursor + textAfterCursor;
    textArea.selectionStart = selectionStart - 1;
    textArea.selectionEnd = selectionStart - 1;
    textArea.focus();
  });
};

const handleDelClick = () => {
    document.querySelector('.button-del').addEventListener('click', () => {
    const selectionStart = textArea.selectionStart;
    const textBeforeCursor = textArea.value.substring(0, selectionStart);
    const textAfterCursor = textArea.value.substring(selectionStart + 1);
    textArea.value = textBeforeCursor + textAfterCursor;
    textArea.selectionStart = selectionStart;
    textArea.selectionEnd = selectionStart;
    textArea.focus();
  });
};

const handleSpaceClick = () => {
    document.querySelector('.button-space').addEventListener('click', () => {
    const selectionStart = textArea.selectionStart;
    textArea.value = textArea.value.slice(0, selectionStart) + ' ' + textArea.value.slice(selectionStart);
    textArea.selectionStart = selectionStart + 1;
    textArea.selectionEnd = selectionStart + 1;
    textArea.focus();
  });
};

const handleEnterClick = () => {
    document.querySelector('.button-enter').addEventListener('click', () => {
    const selectionStart = textArea.selectionStart;
    textArea.value = textArea.value.slice(0, selectionStart) + '\n' + textArea.value.slice(selectionStart);
    textArea.selectionStart = selectionStart + 1;
    textArea.selectionEnd = selectionStart + 1;
    textArea.focus();
  });
};

const handleTabClick = () => {
    document.querySelector('.button-tab').addEventListener('click', () => {
    const selectionStart = textArea.selectionStart;
    textArea.value = textArea.value.substring(0, selectionStart) + '    ' + textArea.value.substring(selectionStart);
    textArea.selectionStart = selectionStart + 4;
    textArea.selectionEnd = selectionStart + 4;
    textArea.focus();
  });
};

(function initPage() {
  generatePageLayout();
  generateKeyboardKeys();
}());

const handleClicksOnKeyboardKeys = () => {

}

const textArea = document.querySelector('.keyboard-textarea');
const keyboardGeneratedKeys = document.querySelectorAll('.keyboard-button');
const systemKeys = ['Backspace', 'Tab', 'CapsLock', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space','Enter','Del', 'ShR'];
keyboardGeneratedKeys.forEach((key) => {
  if (!systemKeys.includes(key.textContent)) {
    key.addEventListener('click', () => {
      textArea.value += key.textContent;
      textArea.focus();
    })
  }

  switch (key.textContent) {
    case 'Backspace':
      handleBackspaceClick();
      break;
    case 'Del':
      handleDelClick();
      break;
    case 'Space':
      handleSpaceClick();
      break;
    case 'Enter':
      handleEnterClick();
      break;
    case 'Tab':
      handleTabClick();
      break;
    case 'CapsLock':
      handleCapsLockClick();
      break;
    case 'Shift':
    case 'ShR':
      handleHoldOnShift();
      break;
  }
})