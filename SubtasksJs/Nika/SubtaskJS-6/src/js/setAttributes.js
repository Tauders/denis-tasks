export default function setAttributes(elem, objAttrs) {
  const arrAttrs = Object.entries(objAttrs);
  for (const [key, value] of arrAttrs) {
    if (Array.isArray(value)) {
      value.map(item => {
        const option = document.createElement('option');
        setAttributes(option, item);
        option.innerText = item.name;
        elem.append(option);
      });
    } else if (key === 'required') {
      if (value === true) {
        elem.setAttribute(key, '');
      }
      continue;
    } else {
      elem.setAttribute(key, value);
    }
  }
}
