import { generateForm } from './generateForm';
import { createButton, createElement } from './createElements';
import { handleResetButton, handleSendButton } from './handler';

const formControlID = 'control';
const formControlClassName = 'form__control';
const buttonSendID = 'send';
const headerTextOfResultBlock = 'Результат генерации';
const headerOfResultBlockClassName = 'form__title';
const buttonSendClassName = 'form__button_send';
const buttonResetID = 'reset';
const formResultClassNames = ['form', 'form_result'];
const mainID = 'main';
const buttonLinkID = 'download';

export function createFormToGenerateJson(resultOfParse, formResultID) {
  const formResult = createElement('form', formResultClassNames, formResultID);
  const headerElementOfResultBlock = createElement(
    'h2',
    headerOfResultBlockClassName
  );
  headerElementOfResultBlock.innerText = headerTextOfResultBlock;
  formResult.append(headerElementOfResultBlock);

  const main = document.getElementById(mainID);
  main.append(formResult);

  generateForm(resultOfParse, formResult, buttonLinkID);

  const buttonSend = createButton(
    'Отправить',
    buttonSendID,
    buttonSendClassName
  );
  const buttonReset = createButton('Сбросить', buttonResetID);
  const formControl = createElement('div', formControlClassName, formControlID);
  formControl.append(buttonSend);

  buttonReset.type = 'reset';
  formControl.append(buttonReset);
  formResult.append(formControl);

  handleSendButton(formControl, formResult, buttonLinkID);
  handleResetButton(buttonReset, buttonLinkID);
}
