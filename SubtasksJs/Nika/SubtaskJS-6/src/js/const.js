export const blockControlID = 'control';
export const blockControl = document.getElementById(blockControlID);
export const buttonHandleID = 'handle';
export const buttonHandle = document.getElementById(buttonHandleID);
export const buttonSendID = 'send';
export const formResultID = 'result';
export const formResult = document.getElementById(formResultID);
export const buttonClassName = 'form__button';
export const blockErrorID = 'error';
export const blockError = document.getElementById(blockErrorID);
export const buttonLinkID = 'download';
export const buttonLink = document.getElementById(buttonLinkID);
export const classInputError = 'form__input_error';
export const inputSelectFileID = 'selectFile';
export const inputSelectFile = document.getElementById(inputSelectFileID);
export const inputFileTextID = 'selectFileText';
export const inputFileText = document.getElementById(inputFileTextID);
export const EMAIL_REGEXP =
  /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NAME_REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;
export const error = {
  file: { id: 'error-file-type', text: 'Требуемый тип файла "Json' },
  firstname: {
    id: 'error-incorrect-firstname',
    text: 'Введите корректное значение имени',
  },
  lastname: {
    id: 'error-incorrect-lastname',
    text: 'Введите корректное значение фамилии',
  },
  email: { id: 'error-incorrect-email', text: 'Некорректный адрес email' },
  phone: { id: 'error-incorrect-phone', text: 'Некорректный номер телефона' },
};
export const visibleFormClassName = 'form_visible';
export const visibleErrorClassName = 'form__error_visible';
export const errorTextClassName = 'form__error-text';
export const initialContentOfResultBlock =
  '<h2 class="form__title">Результат генерации</h2>';
export const linkID = 'download';
