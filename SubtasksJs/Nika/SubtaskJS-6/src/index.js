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
  linkID,
  formElementClassName,
  formRequiredClassName,
  headerTextOfResultBlock,
  headerOfResultBlockClassName,
  arrayOfValidFormElements,
  buttonLinkID,
  formResultClassNames,
  mainID,
  initialTextforInputFile,
} from './js/const';
import { readFile } from './js/readFile';
import { removeElementById } from './js/remove';
import { createErrorElement } from './js/createElements';
import { validateFileType } from './js/validate';
import { validateFileStructure } from './js/validate';
import { createForm } from './js/createForm';
import { setTextForInputFile } from './js/setTextForInputFile';
import { handleValidationResult } from './js/handler';

const buttonHandle = document.getElementById(buttonHandleID);
const blockError = document.getElementById(blockErrorID);
const inputSelectFile = document.getElementById(inputSelectFileID);

inputSelectFile.addEventListener('change', function () {
  buttonHandle.disabled = false;
  blockError.innerHTML = '';

  removeElementById(formResultID);

  const file = inputSelectFile.files[0];

  if (!setTextForInputFile(file, inputFileTextID, initialTextforInputFile)) {
    buttonHandle.disabled = true;
  }

  const validationResult = validateFileType(file);
  handleValidationResult(
    validationResult,
    errorFields,
    errorTextClassName,
    blockError,
    visibleErrorClassName,
    buttonHandle
  );
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
    linkID,
    buttonLinkID,
    formElementClassName,
    formRequiredClassName,
    buttonSendID,
    buttonClassName,
    buttonSendClassName,
    buttonResetID,
    formControlClassName,
    formControlID,
    headerTextOfResultBlock,
    headerOfResultBlockClassName,
    formResultID,
    formResultClassNames,
    mainID
  );

  buttonHandle.disabled = true;
});
