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
  /*keyboardTextArea.setAttribute('autofocus', '');*/

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
        case '▲':
            newButton.classList.add('button-arrow-up');
            break;
        case '▼':
            newButton.classList.add('button-arrow-down');
            break;
        case '►':
            newButton.classList.add('button-arrow-right');
            break;
        case '◄':
            newButton.classList.add('button-arrow-left');
            break;
        case '`':
            newButton.classList.add('button-backquote');
            break;
        case '-':
            newButton.classList.add('button-minus');
            break;
        case '=':
            newButton.classList.add('button-equal');
            break;
        case '[':
            newButton.classList.add('button-bracketleft');
            break;
        case ']':
            newButton.classList.add('button-bracketright');
            break;
        case '\\':
            newButton.classList.add('button-backslash');
            break;
        case ';':
            newButton.classList.add('button-semicolon');
            break;
        case ',':
            newButton.classList.add('button-comma');
            break;
        case '.':
            newButton.classList.add('button-period');
            break;
        case '/':
            newButton.classList.add('button-slash');
            break;
        default:
            newButton.classList.add(`button-${key}`);
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
            document.querySelector('.button-capslock').classList.add('key-pressed');
            toUpperCase();
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "CapsLock") {
            document.querySelector('.button-capslock').classList.remove('key-pressed');
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

    document.addEventListener("keydown", (event) => {
        if (event.code === "ShiftLeft") {
            event.preventDefault();
            document.querySelector('.button-shift').classList.add('key-pressed');
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "ShiftLeft") {
            event.preventDefault();
            document.querySelector('.button-shift').classList.remove('key-pressed');
        }
    })

    document.addEventListener("keydown", (event) => {
        if (event.code === "ShiftRight") {
            event.preventDefault();
            document.querySelector('.button-shift-default-width').classList.add('key-pressed');
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "ShiftRight") {
            event.preventDefault();
            document.querySelector('.button-shift-default-width').classList.remove('key-pressed');
        }
    })

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
            document.querySelector('.button-backspace').classList.add('key-pressed');
            event.preventDefault();
            deleteLastLetter();
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "Backspace") {
            document.querySelector('.button-backspace').classList.remove('key-pressed');
            event.preventDefault();
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
            document.querySelector('.button-del').classList.add('key-pressed');
            event.preventDefault();
            deleteNextLetter();
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "Delete") {
            document.querySelector('.button-del').classList.remove('key-pressed');
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
            document.querySelector('.button-space').classList.add('key-pressed');
            event.preventDefault();
            insertSpace();
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
            document.querySelector('.button-space').classList.remove('key-pressed');
            event.preventDefault();
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
            document.querySelector('.button-enter').classList.add('key-pressed');
            insertNewLine();
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "Enter") {
            document.querySelector('.button-enter').classList.remove('key-pressed');
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
            document.querySelector('.button-tab').classList.add('key-pressed');
            insertFourSpaces();
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "Tab") {
            event.preventDefault();
            document.querySelector('.button-tab').classList.remove('key-pressed');
            insertFourSpaces();
        }
    })
};

// todo: обработай клавиши, для которых event.key не совпадает
const handleOtherKeys = () => {
    const nSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
        , 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g'
        , 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const specialSymbols = {
        "`": "Backquote",
        "-": "Minus",
        "=": "Equal",
        "[": "BracketLeft",
        "]": "BracketRight",
        "\\": "Backslash",
        ";": "Semicolon",
        ",": "Comma",
        ".": "Period",
        "/": "Slash",
        " ": "Space"
    }

    let isKeyPressed = false;

    document.addEventListener("keydown", (event) => {
        if (nSymbols.includes(event.key)) {
            isKeyPressed = true;
            document.querySelector(`.button-${event.key}`).classList.add('key-pressed');
            textArea.focus();
        }
    });

    document.addEventListener("keyup", (event) => {
        if (nSymbols.includes(event.key)) {
            isKeyPressed = false;
            document.querySelector(`.button-${event.key}`).classList.remove('key-pressed');
        }
    });

    document.addEventListener("keydown", (event) => {
        if (specialSymbols.hasOwnProperty(event.key)) {
            isKeyPressed = true;
            document.querySelector(`.button-${specialSymbols[event.key].toLowerCase()}`).classList.add('key-pressed');
            textArea.focus();
        }
    });

    document.addEventListener("keyup", (event) => {
        if (specialSymbols.hasOwnProperty(event.key)) {
            isKeyPressed = false;
            document.querySelector(`.button-${specialSymbols[event.key].toLowerCase()}`).classList.remove('key-pressed');
        }
    });
}

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
            default:
                handleOtherKeys();
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