export function removeElementById(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).remove();
  }
}
