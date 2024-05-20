import {
  blockError,
  buttonClassName,
  formResult,
  visibleErrorClassName,
  errorTextClassName,
} from './const';

export function createButton(children, id, className) {
  const button = document.createElement('button');

  if (typeof children === 'object') {
    button.append(children);
  } else {
    button.innerText = children;
  }

  button.id = id;
  button.classList.add(buttonClassName);
  if (className) {
    button.classList.add(className);
  }
  return button;
}

export function createLink(url, nameFile, text) {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', nameFile);
  link.innerText = text;
  return link;
}

export function createError(text, id, elem) {
  if (!document.getElementById(id)) {
    const error = document.createElement('span');
    error.id = id;
    error.innerText = text;
    error.classList.add(errorTextClassName);
    if (elem) {
      formResult.insertBefore(error, elem);
    } else {
      blockError.append(error);
      !blockError.classList.contains(visibleErrorClassName) &&
        blockError.classList.add(visibleErrorClassName);
    }
  }
}

export function createElement(tag, id, className) {
  const element = document.createElement(tag);
  element.id = id;
  element.classList.add(className);
  return element;
}
