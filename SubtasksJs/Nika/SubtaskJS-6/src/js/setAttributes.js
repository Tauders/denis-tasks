export function setAttributes(element, objectAttributes) {
  const arrayAttributes = Object.entries(objectAttributes);
  for (const [key, value] of arrayAttributes) {
    if (key === 'options' && Array.isArray(value)) {
      value.map(item => {
        const option = document.createElement('option');
        setAttributes(option, item);
        option.innerText = item.name;
        element.append(option);
      });
    } else if (typeof value === 'boolean') {
      if (value === true) {
        element.setAttribute(key, '');
      }
      continue;
    } else {
      element.setAttribute(key, value);
    }
  }
}
