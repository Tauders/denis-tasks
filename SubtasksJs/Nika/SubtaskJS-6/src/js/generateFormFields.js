import { setAttributes } from './setAttributes';
import { createElement } from './createElements';

const formElementClassName = 'form__element';
const formRequiredClassName = 'form__required';

export function generateFormFields(file) {
  const formFields = [];

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
      formFields.push(wrapElement);
    }
  });
  return formFields;
}
