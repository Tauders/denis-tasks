export function removeElement(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).remove();
  }
}
