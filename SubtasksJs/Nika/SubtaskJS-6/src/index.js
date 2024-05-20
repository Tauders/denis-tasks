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
} from './js/const';
import readFile from './js/readFile';
import { clearElement } from './js/clear';
import { createButton, createElement, createError } from './js/createElements';
import { validateFile } from './js/validate';
import { clearResults } from './js/clear';
import { handleResetButton, handleSendButton } from './js/handler';
import generate from './js/generate';

inputSelectFile.addEventListener('change', function () {
  clearResults();
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
    const err = createError(error.file.text, error.file.id);
    blockError.append(err);
    blockError.classList.add(visibleErrorClassName);
    buttonHandle.disabled = true;
  }
});

buttonHandle.addEventListener('click', async function (e) {
  e.preventDefault();
  const selectedFile = inputSelectFile.files[0];
  const readingResult = await readFile(selectedFile);
  const parseResult = JSON.parse(readingResult);
  generate(parseResult);

  const buttonSend = createButton(
    'Отправить',
    buttonSendID,
    buttonSendClassName
  );
  const buttonReset = createButton('Сбросить', buttonResetID);
  const formControl = createElement('div', formControlClassName, formControlID);
  formControl.append(buttonSend);

  buttonReset.type = 'reset';
  formControl.append(buttonReset);
  formResult.append(formControl);

  handleSendButton(formControl);
  handleResetButton(buttonReset, buttonSend);

  buttonHandle.disabled = true;
  buttonSend.disabled = true;
});
