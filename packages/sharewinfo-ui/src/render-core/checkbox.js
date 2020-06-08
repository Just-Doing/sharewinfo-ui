export default (option, checked) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', option.name);
  input.setAttribute('id', option.id);
  input.setAttribute('value', option.value);
  checked && input.setAttribute('checked', 'checked');
  const label = document.createElement('label');

  label.appendChild(input);
  return label;
};