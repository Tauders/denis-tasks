const buttonClassName = 'form__button';
const errorTextClassName = 'form__error-text';

/**
 *
 * @param {string | String[]} classNames
 * @param {string} id
 * @param {string} tag
 * @returns
 */

export function createElement(tag, classNames, id) {
  const element = document.createElement(tag);
  if (id) {
    element.id = id;
  }
  if (typeof classNames === 'string') {
    element.classList.add(classNames);
  }
  if (Array.isArray(classNames)) {
    element.classList.add(...classNames);
  }
  return element;
}

/**
 *
 * @param {string | Node} children
 * @param {string} id
 * @param {string} className
 * @returns
 */

export function createButton(children, id, className) {
  const classNames = [buttonClassName];
  if (className) {
    classNames.push(className)
  }
  const buttonElement = createElement('button', classNames, id);

  if (typeof children === 'object') {
    buttonElement.append(children);
  } else {
    buttonElement.innerText = children;
  }

  return buttonElement;
}

/**
 *
 * @param {string} url
 * @param {string} nameFile
 * @param {string} text
 * @returns
 */

export function createDownloadLink(url, nameFile, text) {
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', url);
  linkElement.setAttribute('download', nameFile);
  linkElement.innerText = text;
  return linkElement;
}

/**
 *
 * @param {string} text
 * @param {string} id
 * @returns
 */

export function createErrorElement(text, id) {
  const errorElement = createElement('span', errorTextClassName, id);
  errorElement.innerText = text;
  return errorElement;
}
