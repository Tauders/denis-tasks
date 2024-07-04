import './styles/styles.scss';
import { readFile } from './js/readFile';
import { removeElementById } from './js/remove';
import { validateFileType } from './js/validate';
import { validateFileStructure } from './js/validate';
import { createFormToGenerateJson } from './js/createFormToGenerateJson';
import { setTextForInputFile } from './js/setTextForInputFile';
import { addFileStructureError, addFileValidationError, clearFileValidationError } from './js/fileError';
import { visibleErrorClassName, formResultID, blockError } from './js/const'

const buttonToGenerateFormID = 'buttonToGenerateForm';
const buttonToGenerateForm = document.getElementById(buttonToGenerateFormID);
const inputSelectFileID = 'selectFile';
const inputSelectFile = document.getElementById(inputSelectFileID);

inputSelectFile.addEventListener('change', function () {
  buttonToGenerateForm.disabled = false;
  blockError.innerHTML = '';

  removeElementById(formResultID);

  const file = inputSelectFile.files[0];

  if (!file) {
    buttonToGenerateForm.disabled = true;
  }

  setTextForInputFile(file?.name)

  const validationResult = validateFileType(file);
  if (validationResult) {
    clearFileValidationError();
  } else {
    addFileValidationError();
    buttonToGenerateForm.disabled = true;
  }
});

buttonToGenerateForm.addEventListener('click', async function (e) {
  e.preventDefault();
  blockError.classList.remove(visibleErrorClassName);
  const file = inputSelectFile.files[0];
  const readingResult = await readFile(file);
  const resultOfParse = JSON.parse(readingResult);

  if (!validateFileStructure(resultOfParse)) {
    addFileStructureError();
    buttonToGenerateForm.disabled = true;
    return;
  }

  createFormToGenerateJson(resultOfParse, formResultID);

  buttonToGenerateForm.disabled = true;
});
