import './styles/styles.scss';
import { readFile } from './js/readFile';
import { removeElementById } from './js/remove';
import { createErrorElement } from './js/createElements';
import { validateFileType } from './js/validate';
import { validateFileStructure } from './js/validate';
import { createFormToGenerateJson } from './js/createFormToGenerateJson';
import { setTextForInputFile } from './js/setTextForInputFile';
import { handleValidationResult } from './js/handler';

const buttonHandleID = 'handle';
const buttonHandle = document.getElementById(buttonHandleID);
const blockErrorID = 'error';
const blockError = document.getElementById(blockErrorID);
const inputSelectFileID = 'selectFile';
const inputSelectFile = document.getElementById(inputSelectFileID);
const formResultID = 'result';
const errorFields = {
  file: { id: 'error-file-type', text: 'Требуемый тип файла Json' },
  resultOfParse: { id: 'error-resultOfParse', text: 'Некорректный файл Json' },
};
const visibleErrorClassName = 'form__error_visible';

inputSelectFile.addEventListener('change', function () {
  buttonHandle.disabled = false;
  blockError.innerHTML = '';

  removeElementById(formResultID);

  const file = inputSelectFile.files[0];

  if (!setTextForInputFile(file)) {
    buttonHandle.disabled = true;
  }

  const validationResult = validateFileType(file);
  handleValidationResult(
    validationResult,
    errorFields,
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

  if (!validateFileStructure(resultOfParse)) {
    const errorElement = createErrorElement(
      errorFields.resultOfParse.text,
      errorFields.resultOfParse.id
    );
    blockError.append(errorElement);
    blockError.classList.add(visibleErrorClassName);
    buttonHandle.disabled = true;
    return;
  }

  createFormToGenerateJson(resultOfParse, formResultID);

  buttonHandle.disabled = true;
});
