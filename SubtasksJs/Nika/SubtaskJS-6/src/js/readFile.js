export function readFile(file) {
  if (!file) {
    return;
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(error);
    };
    reader.readAsText(file);
  });
}
