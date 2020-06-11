import * as jsonForm from './render-core';

// 根节点 创建
function rootElement() {
  const root = document.createElement('div');
  root.setAttribute('style', 'width: 100%; display: flex;flex-flow: row wrap');
  return root;
}

function createControl(option) {
  // 根据不同的类型创建不同的控件
  const control = jsonForm[option.type](option);
  return control;
}
// 递归渲染 json
function recursionRender(dom, json, fieldChange, formData) {
  // json 按行数和列数 计算布局
  (json || []).forEach(o => {
    const control = createControl({ ...o, fieldChange });
    if (o.child && o.child.length) {
      recursionRender(control, o.child, fieldChange, formData);
    }
    if (o.name) formData[o.name] = o.type;
    dom.appendChild(control);
  });
}

function render(dom, json, fieldChange) {
  const root = rootElement();

  const formDataType = {};
  recursionRender(root, json, fieldChange, formDataType);

  dom.appendChild(root);
  return {
    getData: () => {
      const formData = {};
      const objKeys = Object.keys(formDataType);
      for (var keyIndex = 0; keyIndex < objKeys.length; keyIndex++) {
        const keyName = objKeys[keyIndex];
        switch (formDataType[keyName]) {
          case 'textbox':
          case 'select':
            formData[keyName] = document.getElementsByName(keyName)[0].value;
            break;
          case 'checkbox':
            formData[keyName] = document.getElementsByName(keyName)[0].checked;
            break;
          case 'checkboxGroup':
            var checkboxGroup = document.getElementsByName(keyName);
            var check_val = [];
            for (var i = 0; i < checkboxGroup.length; i++) {
              if (checkboxGroup[i].checked) {
                check_val.push(checkboxGroup[i].value);
              }
            }
            formData[keyName] = check_val;
            break;
          case 'color':
            formData[keyName] = document.getElementsByName(keyName)[0].style.backgroundColor;
            break;
          case 'colorGroup':
            var colorGroup = document.getElementsByName(keyName);
            var color_val = [];
            for (var i = 0; i < colorGroup.length; i++) {
              color_val.push(colorGroup[i].style.backgroundColor);
            }
            formData[keyName] = color_val;
            break;
        }
      }
      return formData;
    },
  };
}

export { render };