!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sharewinfo=t():e.sharewinfo=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t),n.d(t,"jsonForm",(function(){return a}));var r={};n.r(r),n.d(r,"panels",(function(){return u})),n.d(r,"number",(function(){return m})),n.d(r,"checkbox",(function(){return d})),n.d(r,"file",(function(){return p})),n.d(r,"hidden",(function(){return h})),n.d(r,"image",(function(){return f})),n.d(r,"option",(function(){return b})),n.d(r,"password",(function(){return g})),n.d(r,"reset",(function(){return y})),n.d(r,"select",(function(){return x})),n.d(r,"submit",(function(){return k})),n.d(r,"textbox",(function(){return A})),n.d(r,"textarea",(function(){return w})),n.d(r,"checkboxGroup",(function(){return C})),n.d(r,"radio",(function(){return v})),n.d(r,"radioGroup",(function(){return E})),n.d(r,"col",(function(){return o})),n.d(r,"text",(function(){return N})),n.d(r,"color",(function(){return j})),n.d(r,"colorGroup",(function(){return O}));var a={};n.r(a),n.d(a,"render",(function(){return L}));var o=e=>{if(!e.span)throw"col 必须请提供span数量";const t=e.span/24*100+"%",n=document.createElement("div");return n.setAttribute("style","width: "+t),e.class&&n.setAttribute("class",e.class),n};const c=(e,t,n)=>{const r=document.createElement("div");if(r.setAttribute("class","text-waper"),e){const t=o({span:e.span||12,class:e.class});t.setAttribute("class","label-waper"),t.innerText=e.text||"",r.appendChild(t)}if(t){const e=o({span:t.span||12,class:t.class});e.setAttribute("class","control-waper"),e.appendChild(n),r.appendChild(e)}else r.appendChild(n);return r};function s(e,t){return e=Math.min(t,Math.max(0,e)),Math.abs(e-t)<1e-6?1:e%t/~~t}const l=(e,t,n)=>{let r="#";return[e,t,n].forEach(e=>{let t=e.toString(16);t.length<2&&(t="0"+t),r+=t}),r},i=e=>void 0!==e&&!isNaN(+e)&&0<=+e&&+e<=1?+e:1;var u=e=>{if(!e.text)throw"panel 必须请提供text";const t=document.createElement("div");t.classList.add("panel"),e.class&&t.classList.add("class",e.class);const n=document.createElement("div");n.setAttribute("class","panel-header"),n.innerHTML=`<svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg)">\n      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>\n      </svg>\n      <span>${e.text}</span>\n    `;const r=document.createElement("div");r.setAttribute("class","panel-body panel-expaned");const a=document.createElement("div");a.setAttribute("class","panel-body-content");const o=document.createElement("span");return o.setAttribute("class","back-default"),o.innerText="还原为默认值",o.onclick=function(){const{defaultValue:n}=t.body;if((e=>{const t=Object.keys(e);for(var n=0;n<t.length;n++){const l=t[n];switch(e[l].controlType){case"textbox":case"number":case"select":document.getElementsByName(l)[0].value=e[l].value;break;case"checkbox":document.getElementsByName(l)[0].checked=e[l].value;break;case"checkboxGroup":case"radioGroup":for(var r=document.getElementsByName(l),a=e[l].value,o=0;o<r.length;o++)r[o].checked=a.indexOf(r[o].value)>-1;break;case"color":document.getElementsByName(l)[0].style.backgroundColor=e[l].value;break;case"colorGroup":var c=document.getElementsByName(l),s=e[l].value;for(o=c.length-1;o>=0;o--)o>s.length-1?c[o].parentNode.remove():c[o].style.backgroundColor=s[o]}}})(n),e.fieldChange){const t={};Object.keys(n).forEach(e=>t[e]=n[e].value),e.fieldChange(t)}},a.appendChild(o),r.appendChild(a),t.appendChild(n),t.appendChild(r),t.body=a,n.onclick=function(){r.orgHeight||(r.orgHeight=r.offsetHeight+"px"),r.offsetHeight<1?(n.childNodes[0].style="transform: rotate(90deg);",r.style.height=r.orgHeight,r.classList.add("panel-expaned"),r.classList.remove("panel-close")):(n.childNodes[0].style="",r.style.height="0",r.classList.add("panel-close"),r.classList.remove("panel-expaned"))},t},d=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("label");t.setAttribute("class","checkbox-label-waper");const n=document.createElement("div");n.setAttribute("class","checkbox-waper");const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("name",e.name),r.setAttribute("id",e.id),r.setAttribute("value",e.value),e.checked&&r.setAttribute("checked","checked"),e.fieldChange&&(r.onchange=t=>e.fieldChange({[e.name]:t.target.checked}));const a=document.createElement("span");return a.innerText=e.text||"",n.appendChild(r),t.appendChild(n),t.appendChild(a),c(e.label,e.waper,t)},m=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");if(t.setAttribute("style","width: calc(100% - 8px)"),t.setAttribute("type","number"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),e.unit){const n=document.createElement("div");return n.classList.add("input-with-unit"),n.innerHTML=`<span class="input-unit">${e.unit}</span>`,n.appendChild(t),c(e.label,e.waper,n)}return c(e.label,e.waper,t)},p=()=>{if(!option.name)throw"json 指定name 属性："+JSON.stringify(option);const e=document.createElement("input");return e.setAttribute("type","file"),e.setAttribute("name",option.name),e},h=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");return t.setAttribute("type","hidden"),t.setAttribute("name",e.name),t.setAttribute("value",e.value),t},f=e=>{const t=document.createElement("img");return t.setAttribute("src",e.src),e.width&&t.setAttribute("width",e.width),e.height&&t.setAttribute("height",e.height),t},b=e=>{const t=document.createElement("option");return t.setAttribute("value",e.value),t.innerText=e.text,e.checked&&t.setAttribute("selected","selected"),t},g=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");return t.setAttribute("style","width: calc(100% - 8px)"),t.setAttribute("type","password"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),c(e.label,e.waper,t)},v=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("label");t.setAttribute("class","radio-label-waper");const n=document.createElement("div");n.setAttribute("class","radio-waper");const r=document.createElement("input");r.setAttribute("type","radio"),r.setAttribute("name",e.name),r.setAttribute("id",e.id),r.setAttribute("value",e.value),e.checked&&r.setAttribute("checked","checked"),e.fieldChange&&(r.onchange=t=>e.fieldChange({[e.name]:t.target.checked}));const a=document.createElement("span");return a.innerText=e.text||"",n.appendChild(r),t.appendChild(n),t.appendChild(a),c(e.label,e.waper,t)},y=e=>{const t=document.createElement("input");return t.setAttribute("type","reset"),t},x=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("select");return t.setAttribute("style","width: calc(100% - 2px)"),t.setAttribute("name",e.name),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),(e.items||[]).forEach(n=>{n.checked=n.value===e.value;const r=b(n);t.appendChild(r)}),c(e.label,e.waper,t)},k=e=>{const t=document.createElement("input");return t.setAttribute("type","submit"),t.setAttribute("value",e.value),t},A=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");return t.setAttribute("style","width: calc(100% - 8px)"),t.setAttribute("type","text"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),c(e.label,e.waper,t)},w=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("textarea");return t.setAttribute("style","width: calc(100% - 8px);height:150px"),t.setAttribute("type","text"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),c(e.label,e.waper,t)},C=e=>{if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);const t=document.createElement("div");let n=null;return e.fieldChange&&(n=()=>{for(var t=document.getElementsByName(e.name),n=[],r=0;r<t.length;r++)t[r].checked&&n.push(t[r].value);e.fieldChange({[e.name]:n})}),t.setAttribute("class","checkbox-list"),(e.items||[]).forEach(r=>{r.name=e.name,n&&(r.fieldChange=n),e.value&&(r.checked=e.value.indexOf(r.value)>-1);const a=d(r);t.appendChild(a)}),c(e.label,e.waper,t)},E=e=>{if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);const t=document.createElement("div");let n=null;return e.fieldChange&&(n=()=>{for(var t=document.getElementsByName(e.name),n=[],r=0;r<t.length;r++)t[r].checked&&n.push(t[r].value);e.fieldChange({[e.name]:n.length?n[0]:""})}),t.setAttribute("class","radio-list"),(e.items||[]).forEach(r=>{r.name=e.name,n&&(r.fieldChange=n),r.checked=r.value===e.value[0];const a=v(r);t.appendChild(a)}),c(e.label,e.waper,t)},N=e=>{const t=document.createElement("div");return e.class&&t.setAttribute("class",e.class),e.style&&t.setAttribute("style",e.style),t.innerHTML=e.value,t},j=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=(e,t)=>`<div class="colorpick" style=" top: ${e}px; left: ${t}px;">\n                      <div class="color-bord" style="background-color: hsl(360, 100%, 50%);">\n                        <div class="color-point"></div>\n                      </div>\n                      <div class="color-bar">\n                        <div class="color-bar-porint"></div>\n                      </div>\n                      <div class="color-input"><input type="text" id="color-input" /></div>\n                      <div class="color-ok">OK</div>\n                    </div>`,n=document.createElement("div"),r=document.createElement("div"),a=t=>{if("colorbox"!=t.target.className&&"color-bord"!=t.target.className&&"color-bar"!=t.target.className&&"color-input"!=t.target.id){if(e.fieldChange){const t=document.querySelector("#color-input");t&&e.fieldChange({[e.name]:t.value})}r.remove(),document.body.removeEventListener("click",a)}};function o(e){document.body.addEventListener("click",a),r.innerHTML=t(e.pageY,e.pageX),document.body.appendChild(r);const o=document.querySelector(".color-bord"),c=document.querySelector(".color-bar"),u=document.querySelector(".color-point"),d=document.querySelector(".color-bar-porint"),m=document.querySelector(".color-ok"),p=document.querySelector("#color-input"),h=n.style.backgroundColor;let f={h:255,s:255,v:255};if(h){const e=/rgb\((\d*), (\d*), (\d*)\)/.exec(h),t=e[1],n=e[2],r=e[3];f=((e,t,n,r)=>{e=s(e,255),t=s(t,255),n=s(n,255);const a=Math.max(e,t,n),o=Math.min(e,t,n);let c,l,u=a;const d=a-o;if(l=0===a?0:d/a,a===o)c=0;else{switch(a){case e:c=(t-n)/d+(t<n?6:0);break;case t:c=(n-e)/d+2;break;case n:c=(e-t)/d+4}c/=6}return{h:360*c,s:l,v:u,a:i(r)}})(t,n,r);const a=100-f.h/360*100;d.style.top=a+"px";const c=Math.round(100*f.s),m=Math.round(100*(1-f.v));u.style.top=m+"px",u.style.left=c+"px",p.value=l(parseInt(t),parseInt(n),parseInt(r)),o.setAttribute("style","background-color: hsl("+f.h+", 100%, 50%);")}function b(){const e=((e,t,n)=>{e=s(e,360),t=s(100*t,100);const r=~~(6*e),a=6*e-r,o=(n=s(100*n,100))*(1-t),c=n*(1-a*t),l=n*(1-(1-a)*t);let i=0,u=0,d=0;switch(r%6){case 0:i=n,u=l,d=o;break;case 1:i=c,u=n,d=o;break;case 2:i=o,u=n,d=l;break;case 3:i=o,u=c,d=n;break;case 4:i=l,u=o,d=n;break;case 5:i=n,u=o,d=c}const m=e=>Math.round(255*e);return{r:m(i),g:m(u),b:m(d)}})(f.h,f.s,f.v),t=l(e.r,e.g,e.b);p.value=t,n.setAttribute("style","background-color: "+t+";")}function g(e){let t=e.pageX-o.offsetParent.offsetLeft,n=e.pageY-o.offsetParent.offsetTop;u.setAttribute("style","top:"+n+"px;left: "+t+"px"),f.s=Math.round(t/100*100)/100,f.v=Math.round(100*(1-n/100))/100,b()}function v(e){let t=e.pageY-c.offsetParent.offsetTop;d.setAttribute("style","top:"+t+"px;"),f.h=(100-t)/100*360,o.setAttribute("style","background-color: hsl("+f.h+", 100%, 50%);"),b()}m.onclick=a,o.onclick=g,o.onmousedown=function(){o.addEventListener("mousemove",g)},o.onmouseup=function(){o.removeEventListener("mousemove",g)},c.onclick=v,c.onmousedown=function(){c.addEventListener("mousemove",v)},c.onmouseup=function(){c.removeEventListener("mousemove",v)}}return e.name&&n.setAttribute("name",e.name),n.setAttribute("class","colorbox"),n.setAttribute("style","background-color: "+e.value||!1),n.onclick=function(e){o(e)},c(e.label,e.waper,n)},O=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);let t=null;e.fieldChange&&(t=()=>{for(var t=document.getElementsByName(e.name),n=[],r=0;r<t.length;r++)t[r].style.backgroundColor&&n.push(t[r].style.backgroundColor);e.fieldChange({[e.name]:n})});const n=document.createElement("div"),r=document.createElement("div");if(r.setAttribute("class","color-list"),(e.items||[]).forEach(n=>{n.name=e.name,t&&(n.fieldChange=t);const a=j(n,n.value);r.appendChild(a)}),e.addOrReduce){const a=document.createElement("span");a.setAttribute("class","color-plus"),a.innerText="+";const o=document.createElement("span");o.setAttribute("class","color-reduce"),o.innerText="-",n.appendChild(a),n.appendChild(o),a.onclick=function(){const n={name:e.name};t&&(n.fieldChange=t),n.value="#fff";const a=j(n);r.appendChild(a),r.appendChild(a)},o.onclick=function(){r.lastChild.remove()}}return n.appendChild(r),c(e.label,e.waper,n)};function S(e,t,n,a){(t||[]).forEach(t=>{const o=function(e){return r[e.type](e)}({...t,fieldChange:n});t.child&&t.child.length&&("panels"===t.type?(o.body.defaultValue={},S(o.body,t.child,n,a)):S(o,t.child,n,a)),t.name&&(a[t.name]=t.type,e.defaultValue&&(e.defaultValue[t.name]={controlType:t.type,value:t.value})),e.appendChild(o)})}function L(e,t,n){const r=function(){const e=document.createElement("div");return e.setAttribute("style","width: 100%; display: flex;flex-flow: row wrap"),e.setAttribute("class","json-form"),e}(),a={};return S(r,t,n,a),e.appendChild(r),{getData:()=>{const e={},t=Object.keys(a);for(var n=0;n<t.length;n++){const i=t[n];switch(a[i]){case"textbox":case"select":case"radioGroup":e[i]=document.getElementsByName(i)[0].value;break;case"checkbox":e[i]=document.getElementsByName(i)[0].checked;break;case"checkboxGroup":for(var r=document.getElementsByName(i),o=[],c=0;c<r.length;c++)r[c].checked&&o.push(r[c].value);e[i]=o;break;case"color":e[i]=document.getElementsByName(i)[0].style.backgroundColor;break;case"colorGroup":var s=document.getElementsByName(i),l=[];for(c=0;c<s.length;c++)l.push(s[c].style.backgroundColor);e[i]=l}}return e}}}}])}));