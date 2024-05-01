import {
  blockControl,
  blockError,
  buttonClassName,
  formResult,
  visibleErrorClassName,
  errorTextClassName,
} from './const';

export function createButton(children, id) {
  const button = document.createElement('button');

  if (typeof children === 'object') {
    button.append(children);
  } else {
    button.innerText = children;
  }

  button.id = id;
  button.classList.add(buttonClassName);
  blockControl.append(button);
  return document.getElementById(id);
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
