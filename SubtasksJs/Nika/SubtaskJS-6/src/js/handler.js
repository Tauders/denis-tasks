import { createButton, createDownloadLink } from './createElements';
import { removeElementById } from './remove';

export function addHandlerToResetButton(button, buttonLinkID) {
  button.addEventListener('click', () => {
    removeElementById(buttonLinkID);
  });
}

export function addSubmitHandlerToForm(formControls, formResult, buttonLinkID) {
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
      buttonLink.append(createDownloadLink(url, 'file.json', 'Скачать'));
    } else {
      const buttonDownload = createButton(
        createDownloadLink(url, 'file.json', 'Скачать'),
        'download'
      );
      formControls.append(buttonDownload);
    }
  });
}