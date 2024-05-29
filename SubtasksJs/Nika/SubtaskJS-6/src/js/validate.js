export function validateFileType(file) {
  if (!file) {
    return;
  }
  if (file.type !== 'application/json') {
    return false;
  } else {
    return true;
  }
}

export function validateFileStructure(resultOfParse, arrayOfValidFormElements) {
  if (
    typeof resultOfParse === 'object' &&
    Object.keys(resultOfParse).length === 1 &&
    'form' in resultOfParse &&
    Array.isArray(resultOfParse.form)
  ) {
    for (const element of resultOfParse.form) {
      if (!typeof element === 'object') {
        return false;
      }
      for (const prop of Object.keys(element)) {
        if (!arrayOfValidFormElements.includes(prop)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

export function validateFormResult(formElement, NAME_REGEXP) {
  if (
    formElement instanceof HTMLInputElement &&
    formElement.getAttribute('name') === 'firstName' &&
    !NAME_REGEXP.test(formElement.value)
  ) {
    return false;
  }
  if (
    formElement instanceof HTMLInputElement &&
    formElement.getAttribute('name') === 'lastName' &&
    !NAME_REGEXP.test(formElement.value)
  ) {
    return false;
  }
  return true;
}
