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

export function validateParseResult(parseResult) {
  if (
    typeof parseResult === 'object' &&
    Object.keys(parseResult).length === 1 &&
    'form' in parseResult &&
    Array.isArray(parseResult.form)
  ) {
    for (const elem of parseResult.form) {
      if (!typeof elem === 'object') {
        return false;
      }
      for (const prop of Object.keys(elem)) {
        if (prop !== 'label' && prop !== 'input' && prop !== 'select') {
          return false;
        }
      }
    }
    return true;
  }
  return false;
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
