const initialTextforInputFile = 'Выбрать файл';
const inputFileTextID = 'selectFileText';

export function setTextForInputFile(file) {
  const inputFileText = document.getElementById(inputFileTextID);
  if (file) {
    inputFileText.innerText = file.name;
    return true;
  } else {
    inputFileText.innerText = initialTextforInputFile;
    return false;
  }
}
