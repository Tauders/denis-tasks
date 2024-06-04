export function createButton(children, id, buttonClassName, className) {
  const buttonElement = document.createElement('button');

  if (typeof children === 'object') {
    buttonElement.append(children);
  } else {
    buttonElement.innerText = children;
  }

  buttonElement.id = id;
  buttonElement.classList.add(buttonClassName);
  if (className) {
    buttonElement.classList.add(className);
  }
  return buttonElement;
}

export function createLink(url, nameFile, text) {
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', url);
  linkElement.setAttribute('download', nameFile);
  linkElement.innerText = text;
  return linkElement;
}

export function createErrorElement(text, id, errorTextClassName) {
  if (!document.getElementById(id)) {
    const errorElement = document.createElement('span');
    errorElement.id = id;
    errorElement.innerText = text;
    errorElement.classList.add(errorTextClassName);
    return errorElement;
  }
}

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
