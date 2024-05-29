export function addFormErrors(
  element,
  wrapElement,
  errorFields,
  createErrorElement,
  errorTextClassName
) {
  if (element.getAttribute('name') === 'firstName') {
    const errorElement = createErrorElement(
      errorFields.firstname.text,
      errorFields.firstname.id,
      errorTextClassName
    );
    errorElement && wrapElement.append(errorElement);
  }
  if (element.getAttribute('name') === 'lastName') {
    const errorElement = createErrorElement(
      errorFields.lastname.text,
      errorFields.lastname.id,
      errorTextClassName
    );
    errorElement && wrapElement.append(errorElement);
  }
}

export function deleteFormErrors(element, errorFields, removeElement) {
  if (element.getAttribute('name') === 'firstName') {
    removeElement(errorFields.firstname.id);
  }
  if (element.getAttribute('name') === 'lastName') {
    removeElement(errorFields.lastname.id);
  }
}
