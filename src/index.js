const englishKeyboardLayout = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'ShR',
  'Ctrl', 'Win', 'Alt', 'Space', 'AltR', '◄', '▼', '►',
];

const russianKeyboardLayout = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'ShR',
    'Ctrl', 'Win', 'Alt', 'Space', 'AltR', '◄', '▼', '►',
]

const systemKeys = [
    'Backspace', 'Tab', 'CapsLock', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space','Enter','Del', 'ShR', 'AltR'
];

const body = document.querySelector('body');
let userLanguage = 'en';

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
        + 'Для переключения языка комбинация: Shift + Alt';

  keyboardWrapper.appendChild(keyboardTitle);
  keyboardWrapper.appendChild(keyboardTextArea);
  keyboardWrapper.appendChild(keyboardKeysContainer);
  keyboardWrapper.appendChild(keyboardDescription);

  body.appendChild(keyboardWrapper);
};

const generateKeyboardKeys = (language) => {
  const keyboardKeysContainer = document.querySelector('.keyboard-keys-container');

  if(language === 'en') {
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
                  newButton.classList.add('button-arrowup');
                  break;
              case '▼':
                  newButton.classList.add('button-arrowdown');
                  break;
              case '►':
                  newButton.classList.add('button-arrowright');
                  break;
              case '◄':
                  newButton.classList.add('button-arrowleft');
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
              case 'Win':
                  newButton.classList.add('button-meta');
                  break;
              case 'Ctrl':
                  newButton.classList.add('button-control');
                  break;
              case 'Alt':
                  newButton.classList.add('button-altleft');
                  break;
              case 'AltR':
                  newButton.classList.add('button-altright');
                  break;
              default:
                  newButton.classList.add(`button-${key}`);
          }
      });
  } else {
      russianKeyboardLayout.forEach((key) => {
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
                  newButton.classList.add('button-arrowup');
                  break;
              case '▼':
                  newButton.classList.add('button-arrowdown');
                  break;
              case '►':
                  newButton.classList.add('button-arrowright');
                  break;
              case '◄':
                  newButton.classList.add('button-arrowleft');
                  break;
              case 'ё':
                  newButton.classList.add('button-ё');
                  break;
              case '-':
                  newButton.classList.add('button-minus');
                  break;
              case '=':
                  newButton.classList.add('button-equal');
                  break;
              case 'х':
                  newButton.classList.add('button-х');
                  break;
              case 'ъ':
                  newButton.classList.add('button-ъ');
                  break;
              case '\\':
                  newButton.classList.add('button-backslash');
                  break;
              case 'ж':
                  newButton.classList.add('button-ж');
                  break;
              case 'б':
                  newButton.classList.add('button-б');
                  break;
              case 'ю':
                  newButton.classList.add('button-ю');
                  break;
              case '.':
                  newButton.classList.add('button-period');
                  break;
              case 'Win':
                  newButton.classList.add('button-meta');
                  break;
              case 'Ctrl':
                  newButton.classList.add('button-control');
                  break;
              case 'Alt':
                  newButton.classList.add('button-altleft');
                  break;
              case 'AltR':
                  newButton.classList.add('button-altright');
                  break;
              default:
                  newButton.classList.add(`button-${key}`);
          }
      });
  }
};

const handleCapsLockKey = () => {
  const tabKey = document.querySelector('.button-capslock');
  const toUpperCase = () => {
      keyboardGeneratedKeys.forEach((key) => {
          if (!systemKeys.includes(key.textContent)) {
              key.classList.toggle('uppercase');
          }
      });
  }
    tabKey.addEventListener('click', () => {
        tabKey.classList.toggle('capslock-pressed');
        toUpperCase();
    });

    document.addEventListener("keydown", (event) => {
        if (event.code === "CapsLock") {
            tabKey.classList.toggle('capslock-pressed');
            tabKey.classList.add('key-pressed');
            toUpperCase();
        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.code === "CapsLock") {
            tabKey.classList.remove('key-pressed');
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
            event.preventDefault();
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

const handleOtherKeys = () => {
    const nSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
        , 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g'
        , 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const nSymbolsUpperCase = nSymbols.map(symbol => symbol.toUpperCase());

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
        " ": "Space",
        "Meta": "Meta",
        "Control": "Control",
    };

    const altKeys = {
        "AltLeft": "AltLeft",
        "AltRight": "AltRight"
    };

    let isKeyPressed = false;

    let isCapsLocked = false;

    document.addEventListener('capslock', (event) => {
        isCapsLocked = event.detail.enabled;
    });

    document.addEventListener("keydown", (event) => {
        if (nSymbols.includes(event.key.toLowerCase()) || nSymbolsUpperCase.includes(event.key.toUpperCase())) {
            const key = isCapsLocked ? event.key.toUpperCase() : event.key.toLowerCase();
            document.querySelector(`.button-${key}`).classList.add('key-pressed');
            textArea.focus();
        }
    });

    document.addEventListener("keyup", (event) => {
        if (nSymbols.includes(event.key.toLowerCase()) || nSymbolsUpperCase.includes(event.key.toUpperCase())) {
            const key = isCapsLocked ? event.key.toUpperCase() : event.key.toLowerCase();
            document.querySelector(`.button-${key}`).classList.remove('key-pressed');
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

    document.addEventListener("keydown", (event) => {
        if (altKeys.hasOwnProperty(event.code)) {
            isKeyPressed = true;
            event.preventDefault();
            document.querySelector(`.button-${altKeys[event.code].toLowerCase()}`).classList.add('key-pressed');
            textArea.focus();
        }
    });

    document.addEventListener("keyup", (event) => {
        if (altKeys.hasOwnProperty(event.code)) {
            isKeyPressed = true;
            document.querySelector(`.button-${altKeys[event.code].toLowerCase()}`).classList.remove('key-pressed');
        }
    });
}

const handleRussianKeys = () => {
    const rSymbols = ['ё', 'х', 'ъ','б', 'ю', 'д', 'ж'
        , 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'ф', 'ы', 'в', 'а', 'п'
        , 'р', 'о', 'л', 'д', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь'];

    let isCapsLocked = false;
    const rSymbolsUpperCase = rSymbols.map(symbol => symbol.toUpperCase());

    document.addEventListener("keydown", (event) => {
        if (rSymbols.includes(event.key.toLowerCase()) || rSymbolsUpperCase.includes(event.key.toUpperCase())) {
            const key = isCapsLocked ? event.key.toUpperCase() : event.key.toLowerCase();
            document.querySelector(`.button-${key}`).classList.add('key-pressed');
            textArea.focus();
        }
    });

    document.addEventListener("keyup", (event) => {
        if (rSymbols.includes(event.key.toLowerCase()) || rSymbolsUpperCase.includes(event.key.toUpperCase())) {
            const key = isCapsLocked ? event.key.toUpperCase() : event.key.toLowerCase();
            document.querySelector(`.button-${key}`).classList.remove('key-pressed');
        }
    });
}

const handleArrowKeys = () => {
    const arrowKeys = {
        "▲": "ArrowUp",
        "▼": "ArrowDown",
        "►": "ArrowRight",
        "◄": "ArrowLeft",
    };

    document.addEventListener("keydown", (event) => {
        const key = arrowKeys[event.key] || event.key;
        switch (key) {
            case "ArrowUp":
                document.querySelector(`.button-${key.toLowerCase()}`).classList.add('key-pressed');
                break;
            case "ArrowDown":
                document.querySelector(`.button-${key.toLowerCase()}`).classList.add('key-pressed');
                break;
            case "ArrowRight":
                document.querySelector(`.button-${key.toLowerCase()}`).classList.add('key-pressed');
                break;
            case "ArrowLeft":
                document.querySelector(`.button-arrowleft`).classList.add('key-pressed');
                break;
        }
    });

    document.addEventListener("keyup", (event) => {
        const key = arrowKeys[event.key] || event.key;
        switch (key) {
            case "ArrowUp":
                document.querySelector(`.button-${key.toLowerCase()}`).classList.remove('key-pressed');
                break;
            case "ArrowDown":
                document.querySelector(`.button-${key.toLowerCase()}`).classList.remove('key-pressed');
                break;
            case "ArrowRight":
                document.querySelector(`.button-${key.toLowerCase()}`).classList.remove('key-pressed');
                break;
            case "ArrowLeft":
                document.querySelector(`.button-arrowleft`).classList.remove('key-pressed');
                break;
        }
    });
}

const handleClicksOnKeyboardKeys = () => {
    const isUpperCasePressed = () => {
        const capsLock = document.querySelector('.button-capslock');
        const holdOnShift = document.querySelector(".button-shift");
        return capsLock.classList.contains('capslock-pressed') || holdOnShift.classList.contains('key-pressed');
    }


    keyboardGeneratedKeys.forEach((key) => {
        if (!systemKeys.includes(key.textContent)) {
            key.addEventListener('click', () => {
                if (isUpperCasePressed()) {
                    textArea.value += key.textContent.toUpperCase();
                } else {
                    textArea.value += key.textContent;
                }
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
                handleArrowKeys();
                handleRussianKeys();
        }
    })
}

const switchLanguage = () => {
    const keyboardKeysContainer = document.querySelector('.keyboard-keys-container');
    let ctrlPressed = false;
    let altPressed = false;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Shift') {
            ctrlPressed = true;
        }
        if (event.key === 'Alt') {
            altPressed = true;
        }

        if (ctrlPressed && altPressed) {
            keyboardKeysContainer.innerHTML = '';
            const currentLanguage = userLanguage === 'en' ? 'ru' : 'en';
            userLanguage = currentLanguage;
            generateKeyboardKeys(currentLanguage);
        }
    });

    document.addEventListener('keyup', (event) => {
        if (event.key === 'Shift') {
            ctrlPressed = false;
        }
        if (event.key === 'Alt') {
            altPressed = false;
        }
    });
}

(function initPage() {
  generatePageLayout();
  generateKeyboardKeys(userLanguage);
  switchLanguage();
}());

// todo: 0 подумай насчет деструктуризации и классов
// todo: 1 переключение языка
// todo: 2 замена символов на цифрах при удержании шифта
// todo: 3 LocalStorage
// todo: ЕсЛинтом сделай фикс для этого файла

const textArea = document.querySelector('.keyboard-textarea');
const keyboardGeneratedKeys = document.querySelectorAll('.keyboard-button');

handleClicksOnKeyboardKeys();