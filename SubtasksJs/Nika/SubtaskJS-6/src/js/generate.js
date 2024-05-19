import setAttributes from './setAttributes';
import { formResult, visibleFormClassName } from './const';
import { validateFormResult } from './validate';

export default function generate(file) {
  file.form.map(formItem => {
    const arrFormElems = Object.entries(formItem);
    arrFormElems.forEach(([formElem, attrs]) => {
      const elem = document.createElement(formElem);
      elem.classList.add(`form__${formElem}`);
      setAttributes(elem, attrs);
      formElem === 'label' && (elem.innerHTML = attrs.name);
      formResult.append(elem);
      if (attrs.required === true) {
        elem.previousSibling.innerText =
          elem.previousSibling.textContent + ' *';
      }
      formResult.classList.add(visibleFormClassName);
    });
  });
  for (const elem of formResult) {
    elem.addEventListener('input', e => validateFormResult(e.target));
  }
}
