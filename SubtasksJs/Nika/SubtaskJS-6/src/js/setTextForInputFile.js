const initialTextforInputFile = 'Выбрать файл';
const inputFileTextID = 'selectFileText';

export function setTextForInputFile(text = initialTextforInputFile) {
  const inputFileText = document.getElementById(inputFileTextID);
  inputFileText.innerText = text;
}
