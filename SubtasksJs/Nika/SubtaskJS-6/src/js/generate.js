import setAttributes from './setAttributes';
import {
  formResult,
  visibleFormClassName,
  buttonSendID,
  linkID,
  error,
  classInputError,
  formElementClassName,
  formRequiredClassName,
} from './const';
import { validateFormResult } from './validate';
import { createElement, createError } from './createElements';
import { clearElement } from './clear';
import { addFormErrors, deleteFormErrors } from './handleFormErrors';

export default function generate(file) {
  file.form.map(formItem => {
    const wrapElem = createElement('div', formElementClassName);
    const required = createElement('span', formRequiredClassName);
    const arrFormElems = Object.entries(formItem);
    for (const [formElem, attrs] of arrFormElems) {
      const elem = document.createElement(formElem);
      elem.classList.add(`form__${formElem}`);
      setAttributes(elem, attrs);
      if (formElem === 'label') {
        elem.innerHTML = attrs.name;
      }
      if (attrs.required === true) {
        required.innerText = ' *';
        wrapElem.append(required);
      }
      wrapElem.append(elem);
      formResult.append(wrapElem);
      formResult.classList.add(visibleFormClassName);
    }
  });
  for (const elem of formResult) {
    elem.addEventListener('input', e => {
      const buttonSend = document.getElementById(buttonSendID);
      buttonSend.disabled = true;
      clearElement(linkID);
      if (validateFormResult(e.target)) {
        buttonSend.disabled = false;
        deleteFormErrors(elem, error, clearElement);
        elem.classList.remove(classInputError);
      } else {
        const wrapElem = elem.parentNode;
        elem.classList.add(classInputError);
        addFormErrors(elem, wrapElem, error, createError);
      }
    });
  }
}
