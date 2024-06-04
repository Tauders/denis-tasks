import { generate } from './generate';
import { createButton, createElement } from './createElements';
import { handleResetButton, handleSendButton } from './handler';

export const createForm = (
  resultOfParse,
  formResult,
  visibleFormClassName,
  linkID,
  buttonLinkID,
  formElementClassName,
  formRequiredClassName,
  buttonSendID,
  buttonClassName,
  buttonSendClassName,
  buttonResetID,
  formControlClassName,
  formControlID
) => {
  generate(
    resultOfParse,
    formResult,
    visibleFormClassName,
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
