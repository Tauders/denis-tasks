export function setTextForInputFile(
  file,
  inputFileTextID,
  initialTextforInputFile
) {
  const inputFileText = document.getElementById(inputFileTextID);
  if (file) {
    inputFileText.innerText = file.name;
    return true;
  } else {
    inputFileText.innerText = initialTextforInputFile;
    return false;
  }
}
