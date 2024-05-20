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
  error,
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
} from './js/const';
import { readFile } from './js/readFile';
import { clearElement } from './js/clear';
import { createButton, createElement, createError } from './js/createElements';
import { validateFile } from './js/validate';
import { clearResults } from './js/clear';
import { handleResetButton, handleSendButton } from './js/handler';
import { generate } from './js/generate';
import { validateParseResult } from './js/validate';

inputSelectFile.addEventListener('change', function () {
  clearResults(
    buttonHandle,
    formResult,
    visibleFormClassName,
    initialContentOfResultBlock
  );
  if (inputSelectFile.files[0]) {
    inputFileText.innerText = inputSelectFile.files[0].name;
  } else {
    inputFileText.innerText = 'Выбрать файл';
    buttonHandle.disabled = true;
  }
  if (validateFile(inputSelectFile.files[0])) {
    clearElement(error.file.id);
    blockError.classList.remove(visibleErrorClassName);
  } else {
    const err = createError(error.file.text, error.file.id, errorTextClassName);
    blockError.append(err);
    blockError.classList.add(visibleErrorClassName);
    buttonHandle.disabled = true;
  }
});

buttonHandle.addEventListener('click', async function (e) {
  e.preventDefault();
  clearElement(error.parseResult.id);
  blockError.classList.remove(visibleErrorClassName);

  const selectedFile = inputSelectFile.files[0];
  const readingResult = await readFile(selectedFile);
  const parseResult = JSON.parse(readingResult);

  if (!validateParseResult(parseResult)) {
    const err = createError(
      error.parseResult.text,
      error.parseResult.id,
      errorTextClassName
    );
    blockError.append(err);
    blockError.classList.add(visibleErrorClassName);
    buttonHandle.disabled = true;
    return;
  }

  generate(
    parseResult,
    formResult,
    visibleFormClassName,
    buttonSendID,
    linkID,
    error,
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
