import { setAttributes } from './setAttributes';
import { createElement } from './createElements';
import { removeElementById } from './remove';

export function generate(
  file,
  formResult,
  linkID,
  formElementClassName,
  formRequiredClassName
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
  for (const element of formResult) {
    element.addEventListener('input', () => {
      removeElementById(linkID);
    });
  }
}
