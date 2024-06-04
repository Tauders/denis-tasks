import { createButton, createLink, createErrorElement } from './createElements';
import { removeElementById } from './remove';

export function handleResetButton(button, linkID) {
  button.addEventListener('click', () => {
    removeElementById(linkID);
  });
}

export function handleSendButton(
  formControl,
  formResult,
  buttonClassName,
  buttonLinkID
) {
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
        'download',
        buttonClassName
      );
      formControl.append(buttonDownload);
    }
  });
}

export function handleValidationResult(
  validationResult,
  errorFields,
  errorTextClassName,
  blockError,
  visibleErrorClassName,
  buttonHandle
) {
  if (validationResult) {
    removeElementById(errorFields.file.id);
    blockError.classList.remove(visibleErrorClassName);
  } else {
    const errorElement = createErrorElement(
      errorFields.file.text,
      errorFields.file.id,
      errorTextClassName
    );
    blockError.append(errorElement);
    blockError.classList.add(visibleErrorClassName);
    buttonHandle.disabled = true;
  }
}
