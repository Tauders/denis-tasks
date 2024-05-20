import {
  classInputError,
  NAME_REGEXP,
  error,
  buttonHandle,
  visibleErrorClassName,
  blockError,
  buttonSendID,
  linkID,
  formResult,
} from './const';
import { createError } from './createElements';
import { clearElement } from './clear';

export function validateFile(file) {
  if (!file) {
    return;
  }
  if (file.type !== 'application/json') {
    return false;
  } else {
    return true;
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
      const err = createError(error.firstname.text, error.firstname.id);
      err && formResult.insertBefore(err, formElem);
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
      const err = createError(error.lastname.text, error.lastname.id);
      err && formResult.insertBefore(err, formElem);
      formElem.classList.add(classInputError);
      return;
    } else {
      clearElement(error.lastname.id);
      formElem.classList.remove(classInputError);
    }
  }
  buttonSend.disabled = false;
}
