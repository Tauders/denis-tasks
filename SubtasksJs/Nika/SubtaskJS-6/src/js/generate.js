import setAttributes from './setAttributes';
import { formResult, visibleFormClassName } from './const';
import { validateFormResult } from './validate';
import { createElement } from './createElements';

export default function generate(file) {
  file.form.map(formItem => {
    const wrapElem = createElement('div', 'form__element');
    const required = createElement('span', 'form__required');
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
    elem.addEventListener('input', e => validateFormResult(e.target));
  }
}
