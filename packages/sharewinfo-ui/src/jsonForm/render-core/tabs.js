import { controlWithLabel } from '../render-utils';

export default (option, checked) => {
  if (!option.id) throw 'json 指定id 属性：' + JSON.stringify(option);
  const waper = document.createElement('div');

  labelWaper.setAttribute('class', 'tab');

  const waper = document.createElement('div');
  waper.setAttribute('class', 'checkbox-waper');
  const input = document.createElement('input');

  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', option.name);
  input.setAttribute('id', option.id);
  input.setAttribute('value', option.value);
  checked && input.setAttribute('checked', 'checked');
  if (option.fieldChange) {
    input.onchange = e => option.fieldChange({ [option.name]: e.target.checked });
  }
  const label = document.createElement('span');
  label.innerText = option.text || '';

  waper.appendChild(input);

  labelWaper.appendChild(waper);
  labelWaper.appendChild(label);
  return controlWithLabel(option.label, option.waper, labelWaper);
};
