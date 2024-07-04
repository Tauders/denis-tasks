import { buttonDownloadClassnameHidden } from './const';
import { createDownloadLink } from './createElements';

export function addHandlerToResetButton(button, buttonLinkID) {
  button.addEventListener('click', () => {
    const buttonLink = document.getElementById(buttonLinkID);
    buttonLink.classList.add(buttonDownloadClassnameHidden)
  });
}

export function addSubmitHandlerToForm(formResult, buttonLinkID, formFields) {
  formResult.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formResult);
    const json = JSON.stringify(Object.fromEntries(formData));
    const url = URL.createObjectURL(
      new Blob([json], { type: 'application/json' })
    );

    const buttonLink = document.getElementById(buttonLinkID);
    buttonLink.innerHTML = '';
    buttonLink.append(createDownloadLink(url, 'file.json', 'Скачать'));
    buttonLink.classList.remove(buttonDownloadClassnameHidden)

    for (const element of formFields) {
      element.addEventListener('input', () => {
        buttonLink.classList.add(buttonDownloadClassnameHidden)
      });
    }
  });
}