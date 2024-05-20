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

export function validateFormResult(formElem, NAME_REGEXP) {
  if (
    formElem instanceof HTMLInputElement &&
    formElem.getAttribute('name') === 'firstName' &&
    !NAME_REGEXP.test(formElem.value)
  ) {
    return false;
  }
  if (
    formElem instanceof HTMLInputElement &&
    formElem.getAttribute('name') === 'lastName' &&
    !NAME_REGEXP.test(formElem.value)
  ) {
    return false;
  }
  return true;
}
