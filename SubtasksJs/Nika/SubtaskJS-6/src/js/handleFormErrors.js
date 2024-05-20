export function addFormErrors(elem, wrapElem, error, createError) {
  if (elem.getAttribute('name') === 'firstName') {
    const err = createError(error.firstname.text, error.firstname.id);
    err && wrapElem.append(err);
  }
  if (elem.getAttribute('name') === 'lastName') {
    const err = createError(error.lastname.text, error.lastname.id);
    err && wrapElem.append(err);
  }
}

export function deleteFormErrors(elem, error, clearElement) {
  if (elem.getAttribute('name') === 'firstName') {
    clearElement(error.firstname.id);
  }
  if (elem.getAttribute('name') === 'lastName') {
    clearElement(error.lastname.id);
  }
}
