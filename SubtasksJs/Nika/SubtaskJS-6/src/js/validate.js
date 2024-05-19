import {
  classInputError,
  EMAIL_REGEXP,
  NAME_REGEXP,
  error,
  buttonHandle,
  visibleErrorClassName,
  blockError,
  buttonSendID,
} from './const';
import { createError } from './createElements';
import { clearError } from './clear';

export function validateFile(file) {
  if (!file) {
    return;
  }
  if (file.type !== 'application/json') {
    createError(error.file.text, error.file.id);
    buttonHandle.disabled = true;
  } else {
    clearError(error.file.id);
    blockError.classList.contains(visibleErrorClassName) &&
      blockError.classList.remove(visibleErrorClassName);
  }
}

export function validateFormResult(formElem) {
  const buttonSend = document.getElementById(buttonSendID);
  buttonSend.disabled = true;
  document.getElementById('download') &&
    document.getElementById('download').remove();
  if (
    formElem instanceof HTMLInputElement &&
    formElem.getAttribute('name') === 'firstName'
  ) {
    if (!NAME_REGEXP.test(formElem.value)) {
      createError(error.firstname.text, error.firstname.id, formElem);
      formElem.classList.add(classInputError);
      return;
    } else {
      clearError(error.firstname.id);
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
      clearError(error.lastname.id);
      formElem.classList.remove(classInputError);
    }
  }
  if (
    formElem instanceof HTMLInputElement &&
    formElem.getAttribute('name') === 'email'
  ) {
    if (!EMAIL_REGEXP.test(formElem.value)) {
      createError(error.email.text, error.email.id, formElem);
      formElem.classList.add(classInputError);
      return;
    } else {
      clearError(error.email.id);
      formElem.classList.remove(classInputError);
    }
  }
  if (
    formElem instanceof HTMLInputElement &&
    formElem.getAttribute('name') === 'phoneNumber'
  ) {
    if (
      formElem.value !== '' &&
      !new RegExp(`^(${formElem.getAttribute('pattern')}$)`).test(
        formElem.value
      )
    ) {
      createError(error.phone.text, error.phone.id, formElem);
      formElem.classList.add(classInputError);
      return;
    } else {
      clearError(error.phone.id);
      formElem.classList.remove(classInputError);
    }
  }
  buttonSend.disabled = false;
}
