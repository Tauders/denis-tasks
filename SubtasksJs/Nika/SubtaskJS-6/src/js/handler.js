import { createButton, createLink } from './createElements';
import { removeElement } from './remove';

export function handleResetButton(
  button,
  buttonSend,
  formResult,
  classInputError,
  errorTextClassName,
  linkID
) {
  button.addEventListener('click', () => {
    for (const elem of formResult) {
      if (elem instanceof HTMLLabelElement) {
        continue;
      }
      if (elem instanceof HTMLInputElement) {
        elem.classList.remove(classInputError);
      }
    }
    const errors = document.querySelectorAll('.' + errorTextClassName);
    for (const error of errors) {
      error.remove();
    }
    removeElement(linkID);
  });
}

export function handleSendButton(
  formControl,
  formResult,
  errorTextClassName,
  buttonClassName,
  buttonLinkID
) {
  formResult.addEventListener('submit', e => {
    e.preventDefault();
    if (!document.querySelector('.' + errorTextClassName)) {
      const formData = new FormData(formResult);
      const json = JSON.stringify(Object.fromEntries(formData));
      const url = URL.createObjectURL(
        new Blob([json], { type: 'application/json' })
      );
      const buttonLink = document.getElementById(buttonLinkID);
      if (buttonLink) {
        buttonLink.innerHTML = '';
        buttonLink.append(createLink(url, 'file.json', 'Скачать'));
      } else {
        const buttonDownload = createButton(
          createLink(url, 'file.json', 'Скачать'),
          'download',
          buttonClassName
        );
        formControl.append(buttonDownload);
      }
    }
  });
}
