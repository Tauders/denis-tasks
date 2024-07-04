import { createButton, createLink } from './createElements';
import { removeElementById } from './remove';

export function handleResetButton(button, buttonLinkID) {
  button.addEventListener('click', () => {
    removeElementById(buttonLinkID);
  });
}

export function handleSendButton(formControl, formResult, buttonLinkID) {
  formResult.addEventListener('submit', e => {
    e.preventDefault();
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
        'download'
      );
      formControl.append(buttonDownload);
    }
  });
}