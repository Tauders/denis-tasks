export function createButton(children, id, buttonClassName, className) {
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

export function createError(text, id, errorTextClassName) {
  if (!document.getElementById(id)) {
    const error = document.createElement('span');
    error.id = id;
    error.innerText = text;
    error.classList.add(errorTextClassName);
    return error;
  }
}

export function createElement(tag, className, id) {
  const element = document.createElement(tag);
  if (id) {
    element.id = id;
  }
  element.classList.add(className);
  return element;
}
