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

export function validateFormResult(formElement) {
  if (
    formElement.hasAttribute('pattern') &&
    !new RegExp(formElement.getAttribute('pattern')).test(formElement.value)
  ) {
    return false;
  }
  return true;
}
