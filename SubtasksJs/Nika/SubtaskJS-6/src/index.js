import './styles/styles.scss';
import {
  buttonHandle,
  inputSelectFile,
  inputFileText,
  formResult,
  buttonSendID,
  buttonResetID,
  formControlID,
  formControlClassName,
  buttonSendClassName,
  errorFields,
  blockError,
  visibleErrorClassName,
  buttonClassName,
  errorTextClassName,
  visibleFormClassName,
  linkID,
  classInputError,
  formElementClassName,
  formRequiredClassName,
  buttonLink,
  NAME_REGEXP,
  initialContentOfResultBlock,
  arrayOfValidFormElements
} from './js/const';
import { readFile } from './js/readFile';
import { removeElement } from './js/remove';
import {
  createButton,
  createElement,
  createErrorElement,
} from './js/createElements';
import { validateFileType } from './js/validate';
import { handleResetButton, handleSendButton } from './js/handler';
import { generate } from './js/generate';
import { validateFileStructure } from './js/validate';

inputSelectFile.addEventListener('change', function () {
  buttonHandle.disabled = false;
  formResult.innerHTML = initialContentOfResultBlock;
  formResult.classList.remove(visibleFormClassName);
  removeElement(errorFields.resultOfParse.id);
  const file = inputSelectFile.files[0];
  if (file) {
    inputFileText.innerText = file.name;
  } else {
    inputFileText.innerText = 'Выбрать файл';
    buttonHandle.disabled = true;
  }
  if (validateFileType(file)) {
    removeElement(errorFields.file.id);
    blockError.classList.remove(visibleErrorClassName);
  } else {
    const errorElement = createErrorElement(
      errorFields.file.text,
      errorFields.file.id,
      errorTextClassName
    );
    blockError.append(errorElement);
    blockError.classList.add(visibleErrorClassName);
    buttonHandle.disabled = true;
  }
});

buttonHandle.addEventListener('click', async function (e) {
  e.preventDefault();
  blockError.classList.remove(visibleErrorClassName);
  const file = inputSelectFile.files[0];
  const readingResult = await readFile(file);
  const resultOfParse = JSON.parse(readingResult);

  if (!validateFileStructure(resultOfParse, arrayOfValidFormElements)) {
    const errorElement = createErrorElement(
      errorFields.resultOfParse.text,
      errorFields.resultOfParse.id,
      errorTextClassName
    );
    blockError.append(errorElement);
    blockError.classList.add(visibleErrorClassName);
    buttonHandle.disabled = true;
    return;
  }

  generate(
    resultOfParse,
    formResult,
    visibleFormClassName,
    buttonSendID,
    linkID,
    errorFields,
    classInputError,
    formElementClassName,
    formRequiredClassName,
    errorTextClassName,
    NAME_REGEXP
  );

  const buttonSend = createButton(
    'Отправить',
    buttonSendID,
    buttonClassName,
    buttonSendClassName
  );
  const buttonReset = createButton('Сбросить', buttonResetID, buttonClassName);
  const formControl = createElement('div', formControlClassName, formControlID);
  formControl.append(buttonSend);

  buttonReset.type = 'reset';
  formControl.append(buttonReset);
  formResult.append(formControl);

  handleSendButton(
    formControl,
    formResult,
    buttonLink,
    errorTextClassName,
    buttonClassName
  );

  handleResetButton(
    buttonReset,
    buttonSend,
    formResult,
    classInputError,
    errorTextClassName,
    linkID
  );

  buttonHandle.disabled = true;
  buttonSend.disabled = true;
});
