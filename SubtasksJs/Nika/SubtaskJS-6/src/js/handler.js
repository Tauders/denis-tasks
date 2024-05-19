import { createButton, createLink } from './createElements';
import {
  formResult,
  buttonLink,
  classInputError,
  errorTextClassName,
} from './const';

export function handleResetButton(button, buttonSend) {
  button.addEventListener('click', () => {
    for (const elem of formResult) {
      if (elem instanceof HTMLLabelElement) {
        continue;
      }
      if (elem instanceof HTMLInputElement) {
        elem.classList.remove(classInputError);
      }
      elem.value = '';
    }
    const errors = document.querySelectorAll('.' + errorTextClassName);
    for (const error of errors) {
      error.remove();
    }
    document.getElementById('download') &&
      document.getElementById('download').remove();
    buttonSend.disabled = true;
  });
}

export function handleSendButton(button) {
  button.addEventListener('click', () => {
    if (!document.querySelector('.' + errorTextClassName)) {
      const formData = new FormData(formResult);
      const json = JSON.stringify(Object.fromEntries(formData));
      const url = URL.createObjectURL(
        new Blob([json], { type: 'application/json' })
      );
      if (buttonLink) {
        buttonLink.innerHTML = '';
        buttonLink.append(createLink(url, 'file.json', 'Скачать'));
      } else {
        createButton(createLink(url, 'file.json', 'Скачать'), 'download');
      }
    }
  });
}
