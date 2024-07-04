import { generateForm } from './generateForm';
import { createButton, createElement } from './createElements';
import { addHandlerToResetButton, addSubmitHandlerToForm } from './handler';
import { formResultID } from './const';

const formControlsID = 'control';
const formControlsClassName = 'form__control';
const buttonSendID = 'send';
const headerTextOfResultBlock = 'Результат генерации';
const headerOfResultBlockClassName = 'form__title';
const buttonSendClassName = 'form__button_send';
const buttonResetID = 'reset';
const formResultClassNames = ['form', 'form_result'];
const mainID = 'main';
const buttonLinkID = 'download';

export function createFormToGenerateJson(resultOfParse) {
  const formResult = createElement('form', formResultClassNames, formResultID);
  const headerElementOfResultBlock = createElement(
    'h2',
    headerOfResultBlockClassName
  );
  headerElementOfResultBlock.innerText = headerTextOfResultBlock;

  generateForm(resultOfParse, formResult, buttonLinkID);

  const buttonSend = createButton(
    'Отправить',
    buttonSendID,
    buttonSendClassName
  );
  addSubmitHandlerToForm(formControls, formResult, buttonLinkID);

  const buttonReset = createButton('Сбросить', buttonResetID);
  buttonReset.type = 'reset';
  addHandlerToResetButton(buttonReset, buttonLinkID);

  const formControls = createElement('div', formControlsClassName, formControlsID);
  formControls.append(buttonSend, buttonReset);

  formResult.append(headerElementOfResultBlock, formControls);

  const main = document.getElementById(mainID);
  main.append(formResult);
}
