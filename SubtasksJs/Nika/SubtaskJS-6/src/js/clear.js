import {
  blockControl,
  buttonHandle,
  formResult,
  visibleFormClassName,
  initialContentOfResultBlock,
} from './const';

export function clearResults() {
  buttonHandle.disabled = false;
  formResult.innerHTML = initialContentOfResultBlock;
  blockControl.innerHTML = '';
  formResult.classList.remove(visibleFormClassName);
}

export function clearError(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).remove();
  }
}
