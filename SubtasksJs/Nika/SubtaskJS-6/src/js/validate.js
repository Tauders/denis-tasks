import {
  classInputError,
  NAME_REGEXP,
  error,
  buttonHandle,
  visibleErrorClassName,
  blockError,
  buttonSendID,
  linkID,
} from './const';
import { createError } from './createElements';
import { clearElement } from './clear';

export function validateFile(file) {
  if (!file) {
    return;
  }
  if (file.type !== 'application/json') {
    createError(error.file.text, error.file.id);
    buttonHandle.disabled = true;
  } else {
    clearElement(error.file.id);
    if (blockError.classList.contains(visibleErrorClassName)) {
      blockError.classList.remove(visibleErrorClassName);
    }
  }
}

export function validateFormResult(formElem) {
  const buttonSend = document.getElementById(buttonSendID);
  buttonSend.disabled = true;
  clearElement(linkID);
  if (
    formElem instanceof HTMLInputElement &&
    formElem.getAttribute('name') === 'firstName'
  ) {
    if (!NAME_REGEXP.test(formElem.value)) {
      createError(error.firstname.text, error.firstname.id, formElem);
      formElem.classList.add(classInputError);
      return;
    } else {
      clearElement(error.firstname.id);
      formElem.classList.remove(classInputError);
    }
  }
  if (
    formElem instanceof HTMLInputElement &&
    formElem.getAttribute('name') === 'lastName'
  ) {
    if (!NAME_REGEXP.test(formElem.value)) {
      createError(error.lastname.text, error.lastname.id, formElem);
      formElem.classList.add(classInputError);
      return;
    } else {
      clearElement(error.lastname.id);
      formElem.classList.remove(classInputError);
    }
  }
  buttonSend.disabled = false;
}
