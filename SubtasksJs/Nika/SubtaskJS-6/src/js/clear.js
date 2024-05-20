export function clearResults(
  buttonHandle,
  formResult,
  visibleFormClassName,
  initialContentOfResultBlock
) {
  buttonHandle.disabled = false;
  formResult.innerHTML = initialContentOfResultBlock;
  formResult.classList.remove(visibleFormClassName);
}

export function clearElement(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).remove();
  }
}
