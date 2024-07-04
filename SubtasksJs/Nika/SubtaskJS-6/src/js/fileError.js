import { visibleErrorClassName, blockError } from './const';
import { createErrorElement } from './createElements';
import { removeElementById } from './remove';

const errorFields = {
  file: { id: 'error-file-type', text: 'Требуемый тип файла Json' },
  resultOfParse: { id: 'error-resultOfParse', text: 'Некорректный файл Json' },
};

export function clearFileValidationError() {
  removeElementById(errorFields.file.id);
  blockError.classList.remove(visibleErrorClassName);
}

export function addFileValidationError() {
  if (document.getElementById(errorFields.file.id)) {
    return;
  }
  const errorElement = createErrorElement(
    errorFields.file.text,
    errorFields.file.id
  );
  blockError.append(errorElement);
  blockError.classList.add(visibleErrorClassName);
}

export function addFileStructureError() {
  if (document.getElementById(errorFields.file.id)) {
    return;
  }
  const errorElement = createErrorElement(
    errorFields.resultOfParse.text,
    errorFields.resultOfParse.id
  );
  blockError.append(errorElement);
  blockError.classList.add(visibleErrorClassName);
}