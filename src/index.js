const englishKeyboardLayout = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'ShR',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►',
];
const systemKeys = [
    'Backspace', 'Tab', 'CapsLock', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space','Enter','Del', 'ShR'
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

const handleCapsLockKey = () => {
  const toUpperCase = () => {
      keyboardGeneratedKeys.forEach((key) => {
          if (!systemKeys.includes(key.textContent)) {
              key.classList.toggle('uppercase');
          }
      });
  }
    document.querySelector('.button-capslock').addEventListener('click', toUpperCase);

    document.addEventListener("keydown", (event) => {
        if (event.code === "CapsLock") {
            toUpperCase();
        }
    })
};

const handleHoldOnShift = () => {
    const holdToUpperCase = (type) => {
        if (type === "add") {
            keyboardGeneratedKeys.forEach((key) => {
                if (!systemKeys.includes(key.textContent)) {
                    key.classList.add('uppercase');
                }
            })
        } else {
            keyboardGeneratedKeys.forEach((key) => {
                if (!systemKeys.includes(key.textContent)) {
                    key.classList.remove('uppercase');
                }
            })
        }
    }
    document.querySelectorAll('.button-shift').forEach((shiftButton) => {
        shiftButton.addEventListener('mousedown', () => {
            holdToUpperCase("add");
        });
        shiftButton.addEventListener('mouseup', () => {
            holdToUpperCase("remove");
        });
    })
    document.addEventListener("keydown", (event) => {
        if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
            holdToUpperCase("add");
        }
    });
    document.addEventListener("keyup", (event) => {
        if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
            holdToUpperCase("remove");
        }
    });
}; // capitalizing keyboard keys while holding on shift

const handleBackspaceKey = () => {
    const deleteLastLetter = () => {
        const selectionStart = textArea.selectionStart;
        const selectionEnd = textArea.selectionEnd;
        const textBeforeCursor = textArea.value.substring(0, selectionStart - 1);
        const textAfterCursor = textArea.value.substring(selectionEnd);
        textArea.value = textBeforeCursor + textAfterCursor;
        textArea.selectionStart = selectionStart - 1;
        textArea.selectionEnd = selectionStart - 1;
        textArea.focus();
    }
    document.querySelector('.button-backspace').addEventListener('click', deleteLastLetter);

    document.addEventListener("keydown", (event) => {
        if (event.code === "Backspace") {
            event.preventDefault();
            deleteLastLetter();
        }
    })
};

const handleDelKey = () => {
    const deleteNextLetter = () => {
        const selectionStart = textArea.selectionStart;
        const textBeforeCursor = textArea.value.substring(0, selectionStart);
        const textAfterCursor = textArea.value.substring(selectionStart + 1);
        textArea.value = textBeforeCursor + textAfterCursor;
        textArea.selectionStart = selectionStart;
        textArea.selectionEnd = selectionStart;
        textArea.focus();
    }
    document.querySelector('.button-del').addEventListener('click', deleteNextLetter);

    document.addEventListener("keydown", (event) => {
        if (event.code === "Delete") {
            event.preventDefault();
            deleteNextLetter();
        }
    })
};

const handleSpaceKey = () => {
    const insertSpace = () => {
        const selectionStart = textArea.selectionStart;
        textArea.value = textArea.value.slice(0, selectionStart) + ' ' + textArea.value.slice(selectionStart);
        textArea.selectionStart = selectionStart + 1;
        textArea.selectionEnd = selectionStart + 1;
        textArea.focus();
    }
    document.querySelector('.button-space').addEventListener('click', insertSpace);

    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            event.preventDefault();
            insertSpace();
        }
    })
};

const handleEnterKey = () => {
    const insertNewLine = () => {
        const selectionStart = textArea.selectionStart;
        textArea.value = textArea.value.slice(0, selectionStart) + '\n' + textArea.value.slice(selectionStart);
        textArea.selectionStart = selectionStart + 1;
        textArea.selectionEnd = selectionStart + 1;
        textArea.focus();
    }
    document.querySelector('.button-enter').addEventListener('click', insertNewLine);

    document.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            insertNewLine();
        }
    })
};

const handleTabKey = () => {
    const insertFourSpaces = () => {
        const selectionStart = textArea.selectionStart;
        textArea.value = textArea.value.substring(0, selectionStart) + '    ' + textArea.value.substring(selectionStart);
        textArea.selectionStart = selectionStart + 4;
        textArea.selectionEnd = selectionStart + 4;
        textArea.focus();
    }
    document.querySelector('.button-tab').addEventListener('click', insertFourSpaces);

    document.addEventListener("keydown", (event) => {
        if (event.code === "Tab") {
            event.preventDefault();
            insertFourSpaces();
        }
    })
};

const handleClicksOnKeyboardKeys = () => {
    keyboardGeneratedKeys.forEach((key) => {
        if (!systemKeys.includes(key.textContent)) {
            key.addEventListener('click', () => {
                textArea.value += key.textContent;
                textArea.focus();
            })
        }

        switch (key.textContent) {
            case 'Backspace':
                handleBackspaceKey();
                break;
            case 'Del':
                handleDelKey();
                break;
            case 'Space':
                handleSpaceKey();
                break;
            case 'Enter':
                handleEnterKey();
                break;
            case 'Tab':
                handleTabKey();
                break;
            case 'CapsLock':
                handleCapsLockKey();
                break;
            case 'Shift':
            case 'ShR':
                handleHoldOnShift();
                break;
        }
    })
}

(function initPage() {
  generatePageLayout();
  generateKeyboardKeys();
}());

// todo: подумай как переместить 209 210 212
const textArea = document.querySelector('.keyboard-textarea');
const keyboardGeneratedKeys = document.querySelectorAll('.keyboard-button');

handleClicksOnKeyboardKeys();