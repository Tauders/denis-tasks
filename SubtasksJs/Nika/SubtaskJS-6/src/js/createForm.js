import { generate } from './generate';
import { createButton, createElement } from './createElements';
import { handleResetButton, handleSendButton } from './handler';

export const createForm = (
  resultOfParse,
  linkID,
  buttonLinkID,
  formElementClassName,
  formRequiredClassName,
  buttonSendID,
  buttonClassName,
  buttonSendClassName,
  buttonResetID,
  formControlClassName,
  formControlID,
  headerTextOfResultBlock,
  headerOfResultBlockClassName,
  formResultID,
  formResultClassNames,
  mainID
) => {
  const formResult = createElement('form', formResultClassNames, formResultID);
  const headerElementOfResultBlock = createElement(
    'h2',
    headerOfResultBlockClassName
  );
  headerElementOfResultBlock.innerText = headerTextOfResultBlock;
  formResult.append(headerElementOfResultBlock);

  const main = document.getElementById(mainID);
  main.append(formResult);

  generate(
    resultOfParse,
    formResult,
    linkID,
    formElementClassName,
    formRequiredClassName
  );

  const buttonSend = createButton(
    'Отправить',
    buttonSendID,
    buttonClassName,
    buttonSendClassName
  );
  const buttonReset = createButton('Сбросить', buttonResetID, buttonClassName);
  const formControl = createElement('div', formControlClassName, formControlID);
  formControl.append(buttonSend);

  buttonReset.type = 'reset';
  formControl.append(buttonReset);
  formResult.append(formControl);

  handleSendButton(formControl, formResult, buttonClassName, buttonLinkID);
  handleResetButton(buttonReset, linkID);
};
