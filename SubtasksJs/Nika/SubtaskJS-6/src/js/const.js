const blockControlID = 'control';
const blockControl = document.getElementById(blockControlID);
const buttonHandleID = 'handle';
const buttonHandle = document.getElementById(buttonHandleID);
const buttonSendID = 'send';
const formResultID = 'result';
const formResult = document.getElementById(formResultID);
const buttonClassName = 'form__button';
const blockErrorID = 'error';
const blockError = document.getElementById(blockErrorID);
const buttonLinkID = 'download';
const buttonLink = document.getElementById(buttonLinkID);
const classInputError = 'form__input_error';
const inputSelectFileID = 'selectFile';
const inputSelectFile = document.getElementById(inputSelectFileID);
const inputFileTextID = 'selectFileText';
const inputFileText = document.getElementById(inputFileTextID);
const EMAIL_REGEXP =
  /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NAME_REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;
const error = {
  file: { id: 'error-file-type', text: 'Требуемый тип файла "Json' },
  firstname: {
    id: 'error-incorrect-firstname',
    text: 'Введите корректное значение имени',
  },
  lastname: {
    id: 'error-incorrect-lastname',
    text: 'Введите корректное значение фамилии',
  },
  email: { id: 'error-incorrect-email', text: 'Неккоректный адрес email' },
  phone: { id: 'error-incorrect-phone', text: 'Неккоректный номер телефона' },
};
const visibleFormClassName = 'form_visible';
const visibleErrorClassName = 'form__error_visible';
const errorTextClassName = 'form__error-text';
const initialContentOfResultBlock =
  '<h2 class="form__title">Результат генерации</h2>';

export {
  blockControl,
  buttonHandle,
  formResult,
  buttonClassName,
  blockError,
  buttonLink,
  classInputError,
  EMAIL_REGEXP,
  NAME_REGEXP,
  error,
  inputSelectFile,
  inputFileText,
  visibleFormClassName,
  visibleErrorClassName,
  errorTextClassName,
  initialContentOfResultBlock,
  buttonSendID
};
