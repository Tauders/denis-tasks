import { setAttributes } from './setAttributes';
import { validateFormResult } from './validate';
import { createElement, createErrorElement } from './createElements';
import { removeElement } from './remove';
import { addFormErrors, deleteFormErrors } from './handleFormErrors';
import { NAME_REGEXP } from './const';

export function generate(
  file,
  formResult,
  visibleFormClassName,
  buttonSendID,
  linkID,
  errorFields,
  classInputError,
  formElementClassName,
  formRequiredClassName,
  errorTextClassName,
) {
  file.form.map(formItem => {
    const wrapElement = createElement('div', formElementClassName);
    const requiredElement = createElement('span', formRequiredClassName);
    for (const [formElement, attributes] of Object.entries(formItem)) {
      const element = document.createElement(formElement);
      element.classList.add(`form__${formElement}`);
      setAttributes(element, attributes);
      if (formElement === 'label') {
        element.innerHTML = attributes.name;
      }
      if (attributes.required === true) {
        requiredElement.innerText = ' *';
        wrapElement.append(requiredElement);
      }
      wrapElement.append(element);
      formResult.append(wrapElement);
    }
  });
  formResult.classList.add(visibleFormClassName);
  for (const element of formResult) {
    element.addEventListener('input', e => {
      removeElement(linkID);
      if (validateFormResult(e.target, NAME_REGEXP)) {
        deleteFormErrors(element, errorFields, removeElement);
        element.classList.remove(classInputError);
      } else {
        const wrapElement = element.parentNode;
        element.classList.add(classInputError);
        addFormErrors(
          element,
          wrapElement,
          errorFields,
          createErrorElement,
          errorTextClassName
        );
      }
    });
  }
}
