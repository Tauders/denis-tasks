import { createButton, createLink } from './createElements';
import {
  formResult,
  buttonLink,
  classInputError,
  errorTextClassName,
} from './const';

export function handleResetButton(button, buttonSend) {
  button.addEventListener('click', () => {
    for (let i = 0; i < formResult.length; i++) {
      if (formResult[i] instanceof HTMLLabelElement) continue;
      if (formResult[i] instanceof HTMLInputElement) {
        formResult[i].classList.remove(classInputError);
      }
      formResult[i].value = '';
    }
    const errors = document.querySelectorAll('.' + errorTextClassName);
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
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
