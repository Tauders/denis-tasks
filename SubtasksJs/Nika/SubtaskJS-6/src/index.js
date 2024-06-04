import './styles/styles.scss';
import {
  buttonHandleID,
  inputSelectFileID,
  inputFileTextID,
  formResultID,
  buttonSendID,
  buttonResetID,
  formControlID,
  formControlClassName,
  buttonSendClassName,
  errorFields,
  blockErrorID,
  visibleErrorClassName,
  buttonClassName,
  errorTextClassName,
  visibleFormClassName,
  linkID,
  formElementClassName,
  formRequiredClassName,
  headerTextOfResultBlock,
  headerOfResultBlockClassName,
  arrayOfValidFormElements,
  buttonLinkID,
} from './js/const';
import { readFile } from './js/readFile';
import { removeElementById } from './js/remove';
import { createElement, createErrorElement } from './js/createElements';
import { validateFileType } from './js/validate';
import { validateFileStructure } from './js/validate';
import { createForm } from './js/createForm';

const buttonHandle = document.getElementById(buttonHandleID);
const formResult = document.getElementById(formResultID);
const blockError = document.getElementById(blockErrorID);
const inputSelectFile = document.getElementById(inputSelectFileID);

inputSelectFile.addEventListener('change', function () {
  buttonHandle.disabled = false;

  const headerElementOfResultBlock = createElement(
    'h2',
    headerOfResultBlockClassName
  );
  headerElementOfResultBlock.innerText = headerTextOfResultBlock;
  formResult.innerHTML = '';
  formResult.append(headerElementOfResultBlock);
  formResult.classList.remove(visibleFormClassName);
  removeElementById(errorFields.resultOfParse.id);
  
  const file = inputSelectFile.files[0];
  const inputFileText = document.getElementById(inputFileTextID);
  if (file) {
    inputFileText.innerText = file.name;
  } else {
    inputFileText.innerText = 'Выбрать файл';
    buttonHandle.disabled = true;
  }
  if (validateFileType(file)) {
    removeElementById(errorFields.file.id);
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

  createForm(
    resultOfParse,
    formResult,
    visibleFormClassName,
    linkID,
    buttonLinkID,
    formElementClassName,
    formRequiredClassName,
    buttonSendID,
    buttonClassName,
    buttonSendClassName,
    buttonResetID,
    formControlClassName,
    formControlID
  );

  buttonHandle.disabled = true;
});
