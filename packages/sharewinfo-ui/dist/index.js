!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sharewinfo=t():e.sharewinfo=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t),n.d(t,"jsonForm",(function(){return o}));var r={};n.r(r),n.d(r,"panels",(function(){return m})),n.d(r,"number",(function(){return f})),n.d(r,"checkbox",(function(){return p})),n.d(r,"file",(function(){return b})),n.d(r,"hidden",(function(){return h})),n.d(r,"image",(function(){return g})),n.d(r,"option",(function(){return v})),n.d(r,"password",(function(){return y})),n.d(r,"reset",(function(){return k})),n.d(r,"select",(function(){return C})),n.d(r,"submit",(function(){return x})),n.d(r,"textbox",(function(){return E})),n.d(r,"textarea",(function(){return w})),n.d(r,"checkboxGroup",(function(){return N})),n.d(r,"radio",(function(){return A})),n.d(r,"radioGroup",(function(){return S})),n.d(r,"col",(function(){return a})),n.d(r,"text",(function(){return B})),n.d(r,"color",(function(){return j})),n.d(r,"colorGroup",(function(){return T})),n.d(r,"radioblockGroup",(function(){return O})),n.d(r,"toggle",(function(){return L}));var o={};n.r(o),n.d(o,"render",(function(){return J}));var a=e=>{if(!e.span)throw"col 必须请提供span数量";const t=e.span/24*100+"%",n=document.createElement("div");return n.setAttribute("style","width: "+t),e.class&&n.setAttribute("class",e.class),n};const c=(e,t,n)=>{const r=document.createElement("div");if(r.setAttribute("class","text-waper"),e){const t=a({span:e.span||12,class:e.class});t.setAttribute("class","label-waper"),t.innerText=e.text||"",r.appendChild(t)}if(t){const e=a({span:t.span||12,class:t.class});e.setAttribute("class","control-waper"),e.appendChild(n),r.appendChild(e)}else r.appendChild(n);return r};function l(e,t){return e=Math.min(t,Math.max(0,e)),Math.abs(e-t)<1e-6?1:e%t/~~t}const s=(e,t,n)=>{let r="#";return[e,t,n].forEach(e=>{let t=e.toString(16);t.length<2&&(t="0"+t),r+=t}),r},i=e=>void 0!==e&&!isNaN(+e)&&0<=+e&&+e<=1?+e:1,u=e=>{const t=Object.keys(e);for(var n=0;n<t.length;n++){const i=t[n];switch(e[i].controlType){case"textbox":case"number":case"select":document.getElementsByName(i)[0].value=e[i].value;break;case"checkbox":document.getElementsByName(i)[0].checked=e[i].value;break;case"checkboxGroup":case"radioGroup":for(var r=document.getElementsByName(i),o=e[i].value,a=0;a<r.length;a++)r[a].checked=o.indexOf(r[a].value)>-1;break;case"radioblockGroup":for(r=document.getElementsByName(i),o=e[i].value,a=0;a<r.length;a++){const e=r[a].getAttribute("value");o.indexOf(e)>-1?r[a].classList.add("radio-block-checked"):r[a].classList.remove("radio-block-checked")}break;case"color":document.getElementsByName(i)[0].style.backgroundColor=e[i].value;break;case"colorGroup":var c=document.getElementsByName(i),l=e[i].value;for(a=c.length-1;a>=0;a--)a>l.length-1?c[a].parentNode.remove():c[a].style.backgroundColor=l[a];break;case"toggle":var s=document.getElementsByName(i)[0];const t=s.childNodes[1],n=s.childNodes[2];t.style.display="",n.style.display="none";let d=t.getAttribute("value");d=d?JSON.parse(d):"";let m=n.getAttribute("value");m=m?JSON.parse(m):"";const p=t.getAttribute("controlType"),f=n.getAttribute("controlType");u({[i+"0"]:{controlType:p,value:d}}),u({[i+"1"]:{controlType:f,value:m}})}}};function d(){if(navigator.userAgent.indexOf("UCBrowser")>-1)return!1;for(var e=0,t=new Array("Chrome","MQQBrowser","QQ","TBS","wxwork","MicroMessenger","T7","baiduboxapp","baidubrowser","MiuiBrowser","NetType","OPR"),n=0;n<t.length;n++)navigator.userAgent.indexOf(t[n])>-1&&(e=1);if(1!=e&&(navigator.userAgent.indexOf("HUAWEIEVA")>-1||navigator.userAgent.indexOf("HUAWEIVTR")>-1))return!1;try{return window.localStorage.setItem("test","testValue"),window.localStorage.removeItem("test"),!0}catch(e){return!1}}var m=e=>{if(!e.text)throw"panel 必须请提供text";const t=document.createElement("div");t.classList.add("panel"),e.class&&t.classList.add("class",e.class);const n=document.createElement("div");n.setAttribute("class","panel-header"),n.innerHTML=`<svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style="transform: rotate(90deg)">\n      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>\n      </svg>\n      <span>${e.text}</span>\n    `;const r=document.createElement("div");r.setAttribute("class","panel-body panel-expaned");const o=document.createElement("div");o.setAttribute("class","panel-body-content");const a=document.createElement("span");return a.setAttribute("class","back-default"),a.innerText="还原为默认值",a.onclick=function(){const{defaultValue:n}=t.body;if(u(n),e.fieldChange){const t={};Object.keys(n).forEach(e=>t[e]=n[e].value),e.fieldChange(t)}},o.appendChild(a),r.appendChild(o),t.appendChild(n),t.appendChild(r),t.body=o,n.onclick=function(){r.orgHeight||(r.orgHeight=r.offsetHeight+"px"),r.offsetHeight<1?(n.childNodes[0].style="transform: rotate(90deg);",r.style.height=r.orgHeight,r.classList.add("panel-expaned"),r.classList.remove("panel-close")):(n.childNodes[0].style="",r.style.height="0",r.classList.add("panel-close"),r.classList.remove("panel-expaned"))},t},p=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("label");t.setAttribute("class","checkbox-label-waper");const n=document.createElement("div");n.setAttribute("class","checkbox-waper");const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("name",e.name),r.setAttribute("id",e.id),r.setAttribute("value",e.value),e.checked&&r.setAttribute("checked","checked"),e.fieldChange&&(r.onchange=t=>e.fieldChange({[e.name]:t.target.checked}));const o=document.createElement("span");return o.innerText=e.text||"",n.appendChild(r),t.appendChild(n),t.appendChild(o),c(e.label,e.waper,t)},f=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");if(t.setAttribute("style","width: calc(100% - 8px)"),t.setAttribute("type","number"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),e.unit){const n=document.createElement("div");return n.classList.add("input-with-unit"),n.innerHTML=`<span class="input-unit">${e.unit}</span>`,n.appendChild(t),c(e.label,e.waper,n)}return c(e.label,e.waper,t)},b=()=>{if(!option.name)throw"json 指定name 属性："+JSON.stringify(option);const e=document.createElement("input");return e.setAttribute("type","file"),e.setAttribute("name",option.name),e},h=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");return t.setAttribute("type","hidden"),t.setAttribute("name",e.name),t.setAttribute("value",e.value),t},g=e=>{const t=document.createElement("img");return t.setAttribute("src",e.src),e.width&&t.setAttribute("width",e.width),e.height&&t.setAttribute("height",e.height),t},v=e=>{const t=document.createElement("option");return t.setAttribute("value",e.value),t.innerText=e.text,e.checked&&t.setAttribute("selected","selected"),t},y=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");return t.setAttribute("style","width: calc(100% - 8px)"),t.setAttribute("type","password"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),c(e.label,e.waper,t)},A=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("label");t.setAttribute("class","radio-label-waper");const n=document.createElement("div");n.setAttribute("class","radio-waper");const r=document.createElement("input");r.setAttribute("type","radio"),r.setAttribute("name",e.name),r.setAttribute("id",e.id),r.setAttribute("value",e.value),e.checked&&r.setAttribute("checked","checked"),e.fieldChange&&(r.onchange=t=>e.fieldChange({[e.name]:t.target.checked}));const o=document.createElement("span");return o.innerText=e.text||"",n.appendChild(r),t.appendChild(n),t.appendChild(o),c(e.label,e.waper,t)},k=e=>{const t=document.createElement("input");return t.setAttribute("type","reset"),t},C=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("select");return t.setAttribute("style","width: calc(100% - 2px)"),t.setAttribute("name",e.name),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),(e.items||[]).forEach(n=>{n.checked=n.value===e.value;const r=v(n);t.appendChild(r)}),c(e.label,e.waper,t)},x=e=>{const t=document.createElement("input");return t.setAttribute("type","submit"),t.setAttribute("value",e.value),t},E=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("input");return t.setAttribute("style","width: calc(100% - 8px)"),t.setAttribute("type","text"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),c(e.label,e.waper,t)},w=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=document.createElement("textarea");return t.setAttribute("style","width: calc(100% - 8px);height:150px"),t.setAttribute("type","text"),t.setAttribute("name",e.name),t.setAttribute("value",e.value||""),e.fieldChange&&(t.onchange=t=>e.fieldChange({[e.name]:t.target.value})),c(e.label,e.waper,t)},N=e=>{if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);const t=document.createElement("div");let n=null;return e.fieldChange&&(n=()=>{for(var t=document.getElementsByName(e.name),n=[],r=0;r<t.length;r++)t[r].checked&&n.push(t[r].value);e.fieldChange({[e.name]:n})}),t.setAttribute("class","checkbox-list"),(e.items||[]).forEach(r=>{r.name=e.name,n&&(r.fieldChange=n),e.value&&(r.checked=e.value.indexOf(r.value)>-1);const o=p(r);t.appendChild(o)}),c(e.label,e.waper,t)},S=e=>{if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);const t=document.createElement("div");let n=null;return e.fieldChange&&(n=()=>{for(var t=document.getElementsByName(e.name),n=[],r=0;r<t.length;r++)t[r].checked&&n.push(t[r].value);e.fieldChange({[e.name]:n.length?n[0]:""})}),t.setAttribute("class","radio-list"),(e.items||[]).forEach(r=>{r.name=e.name,n&&(r.fieldChange=n),r.checked=r.value===e.value[0];const o=A(r);t.appendChild(o)}),c(e.label,e.waper,t)},O=e=>{if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);const t=document.createElement("div");return t.setAttribute("class","radio-block-list"),(e.items||[]).forEach(n=>{n.name=e.name,n.checked=n.value===e.value;const r=function(t){const n=document.createElement("div");return n.setAttribute("class","radio-block"),t.checked&&n.classList.add("radio-block-checked"),n.setAttribute("name",t.name),n.setAttribute("type",t.type),n.setAttribute("value",t.value||t.text),n.innerText=t.text||t.value,n.onclick=function(n){const r=document.querySelector(`[name='${t.name}'].radio-block-checked`);let o=r?r.getAttribute("value"):"";const a=n.target.getAttribute("value");n.target.parentNode.querySelectorAll(n.target.tagName).forEach(e=>{e.removeAttribute("checked"),e.classList.remove("radio-block-checked")}),n.target.setAttribute("checked","checked"),n.target.classList.add("radio-block-checked"),e.fieldChange&&o!==a&&e.fieldChange({[e.name]:a}),o=a},n}(n);t.appendChild(r)}),c(e.label,e.waper,t)},B=e=>{const t=document.createElement("div");return e.class&&t.setAttribute("class",e.class),e.style&&t.setAttribute("style",e.style),t.innerHTML=e.value,t},j=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);const t=d(),n=t?220:180,r=[["#ffffff","#000000","#118dff","#12239e","#e66c37","#6b007b","#e044a7","#744ec2","#d9b300","#d64550"],["#e6e6e6","#999999","#a0d1ff","#a0a7d8","#f5c4af","#c499ca","#f3b4dc","#c7b8e7","#f0e199","#efb5b9"],["#CCCCCC","#666666","#70BBFF","#717BC5","#F0A787","#A666B0","#EC8FCA","#AC95DA","#E8D166","#E68F96"],["#B3B3B3","#333333","#41A4FF","#414FB1","#EB895F","#893395","#E669B9","#9071CE","#E1C233","#DE6A73"],["#808080","#1A1A1A","#0D6ABF","#0E1A77","#AD5129","#50005C","#A8337D","#573B92","#A38600","#A1343C"],["#666666","#000000","#094780","#09124F","#73361C","#36003E","#702254","#3A2761","#6D5A00","#6B2328"]],o=document.createElement("div"),a=document.createElement("div"),u=e=>{if("colorbox"!=e.target.className&&"color-bord"!=e.target.className&&"color-bar"!=e.target.className&&"color-input"!=e.target.id&&"customerColorBtn"!=e.target.id){const e=document.querySelector("#color-input");e&&e.value&&m(e.value),a.remove(),document.body.removeEventListener("click",u)}};function m(t){if(e.fieldChange&&e.fieldChange({[e.name]:t}),o.setAttribute("style","background-color: "+t),d()){let e=JSON.parse(window.localStorage.getItem("stageColor")||"[]");e.splice(e.indexOf(t),e.indexOf(t)>-1?1:0),e=e.slice(0,10),e.unshift(t),window.localStorage.setItem("stageColor",JSON.stringify(e))}}function p(e){var c=e.pageX+190>document.body.clientWidth?e.pageX-190:e.pageX,d=e.pageY+n>document.body.clientHeight?e.pageY-n:e.pageY;a.innerHTML=((e,r,o)=>{let a=`<div class="defaultcolor-list"  style="height:${n}px; top: ${e}px; left: ${r}px;">\n                      <div class="defaultcolor-list-title"><div style="margin-left: 15px">主题颜色</div></div>`;if(o.forEach(e=>{a+='<div class="colors">',e.forEach(e=>a+=`<div class="colorSpan" color="${e}" style="background-color: ${e}" ></div>`),a+="</div>"}),t){let e=JSON.parse(window.localStorage.getItem("stageColor")||"[]");e=e.slice(0,10),a+='<div class="defaultcolor-list-title"><div style="margin-left: 15px">最近颜色</div></div>',a+='<div class="colors">',e.forEach(e=>a+=`<div class="colorSpan" color="${e}" style="background-color: ${e}" ></div>`),a+="</div>"}return a+='<div class="customer-color"><button id="customerColorBtn">自定义颜色</button></div>',a+"</div>"})(d,c,r),document.body.appendChild(a),document.querySelectorAll(".colorSpan").forEach((function(e){e.addEventListener("click",(function(e){m(e.target.getAttribute("color"))}))})),document.getElementById("customerColorBtn").onclick=function(){!function(e){var t=e.pageX+122>document.body.clientWidth?e.pageX-122:e.pageX,n=e.pageY+130>document.body.clientHeight?e.pageY-130:e.pageY;a.innerHTML=(r=n,c=t,`<div class="colorpick" style=" top: ${r}px; left: ${c}px;">\n                      <div class="color-bord" style="background-color: hsl(360, 100%, 50%);">\n                        <div class="color-point"></div>\n                      </div>\n                      <div class="color-bar">\n                        <div class="color-bar-porint"></div>\n                      </div>\n                      <div class="color-input"><input type="text" id="color-input" /></div>\n                      <div class="color-ok">OK</div>\n                    </div>`);var r,c;const d=document.querySelector(".color-bord"),m=document.querySelector(".color-bar"),p=document.querySelector(".color-point"),f=document.querySelector(".color-bar-porint"),b=document.querySelector(".color-ok"),h=document.querySelector("#color-input"),g=o.style.backgroundColor;let v={h:255,s:255,v:255};if(g){const e=/rgb\((\d*), (\d*), (\d*)\)/.exec(g),t=e[1],n=e[2],r=e[3];v=((e,t,n,r)=>{e=l(e,255),t=l(t,255),n=l(n,255);const o=Math.max(e,t,n),a=Math.min(e,t,n);let c,s,u=o;const d=o-a;if(s=0===o?0:d/o,o===a)c=0;else{switch(o){case e:c=(t-n)/d+(t<n?6:0);break;case t:c=(n-e)/d+2;break;case n:c=(e-t)/d+4}c/=6}return{h:360*c,s:s,v:u,a:i(r)}})(t,n,r);const o=100-v.h/360*100;f.style.top=o+"px";const a=Math.round(100*v.s),c=Math.round(100*(1-v.v));p.style.top=c+"px",p.style.left=a+"px",h.value=s(parseInt(t),parseInt(n),parseInt(r)),d.setAttribute("style","background-color: hsl("+v.h+", 100%, 50%);")}function y(){const e=((e,t,n)=>{e=l(e,360),t=l(100*t,100);const r=~~(6*e),o=6*e-r,a=(n=l(100*n,100))*(1-t),c=n*(1-o*t),s=n*(1-(1-o)*t);let i=0,u=0,d=0;switch(r%6){case 0:i=n,u=s,d=a;break;case 1:i=c,u=n,d=a;break;case 2:i=a,u=n,d=s;break;case 3:i=a,u=c,d=n;break;case 4:i=s,u=a,d=n;break;case 5:i=n,u=a,d=c}const m=e=>Math.round(255*e);return{r:m(i),g:m(u),b:m(d)}})(v.h,v.s,v.v),t=s(e.r,e.g,e.b);h.value=t,o.setAttribute("style","background-color: "+t+";")}function A(e){let t=e.pageX-d.offsetParent.offsetLeft,n=e.pageY-d.offsetParent.offsetTop;p.setAttribute("style","top:"+n+"px;left: "+t+"px"),v.s=Math.round(t/100*100)/100,v.v=Math.round(100*(1-n/100))/100,y()}function k(e){let t=e.pageY-m.offsetParent.offsetTop;f.setAttribute("style","top:"+t+"px;"),v.h=(100-t)/100*360,d.setAttribute("style","background-color: hsl("+v.h+", 100%, 50%);"),y()}b.onclick=u,d.onclick=A,d.onmousedown=function(){d.addEventListener("mousemove",A)},d.onmouseup=function(){d.removeEventListener("mousemove",A)},m.onclick=k,m.onmousedown=function(){m.addEventListener("mousemove",k)},m.onmouseup=function(){m.removeEventListener("mousemove",k)}}(e)},document.body.addEventListener("click",u)}return o.setAttribute("name",e.name),o.setAttribute("type",e.type),o.setAttribute("class","colorbox"),o.setAttribute("style","background-color: "+e.value||!1),o.onclick=function(e){p(e)},c(e.label,e.waper,o)},T=e=>{if(!e.name)throw"json 指定name 属性："+JSON.stringify(e);let t=null;e.fieldChange&&(t=()=>{for(var t=document.getElementsByName(e.name),n=[],r=0;r<t.length;r++)t[r].style.backgroundColor&&n.push(t[r].style.backgroundColor);e.fieldChange({[e.name]:n})});const n=document.createElement("div"),r=document.createElement("div");if(r.setAttribute("class","color-list"),(e.items||[]).forEach(n=>{n.name=e.name,t&&(n.fieldChange=t);const o=j(n,n.value);r.appendChild(o)}),e.addOrReduce){const o=document.createElement("span");o.setAttribute("class","color-plus"),o.innerText="+";const a=document.createElement("span");a.setAttribute("class","color-reduce"),a.innerText="-",n.appendChild(o),n.appendChild(a),o.onclick=function(){const n={name:e.name};t&&(n.fieldChange=t),n.value="#fff";const o=j(n);r.appendChild(o),r.appendChild(o)},a.onclick=function(){r.lastChild.remove()}}return n.appendChild(r),c(e.label,e.waper,n)},L=e=>{if(!e.name)throw"json 中必须指定name 属性："+JSON.stringify(e);if(!e.controls||2!==e.controls.length)throw"json 中必须指定controls 长度为2的控件数量："+JSON.stringify(e);const t=document.createElement("div");t.setAttribute("name",e.name);const n={...e.controls[0],name:e.name+"0"},o={...e.controls[1],name:e.name+"1"};t.setAttribute("value",n.value||""),n.fieldChange=function(n){const r=n[e.name+"0"];t.setAttribute("value",r),e.fieldChange({[e.name]:r})},o.fieldChange=function(n){const r=n[e.name+"1"];t.setAttribute("value",r),e.fieldChange({[e.name]:r})};const a=r[e.controls[0].type](n),l=r[e.controls[1].type](o);l.style.display="none",a.setAttribute("controlType",n.type),l.setAttribute("controlType",o.type),a.setAttribute("value",JSON.stringify(n.value||"")),l.setAttribute("value",JSON.stringify(o.value||""));const s=document.createElement("button");s.innerText="自定义",s.onclick=function(){const e=a.style.display,t=l.style.display;a.style.display=""===e?"none":"",l.style.display=""===t?"none":""},t.setAttribute("class","toggle-list");const i=document.createElement("div");return i.setAttribute("class","toggle-btn-waper"),i.appendChild(s),t.appendChild(i),t.appendChild(a),t.appendChild(l),c(e.label,e.waper,t)};function M(e,t,n,o){(t||[]).forEach(t=>{const a=function(e){return r[e.type](e)}({...t,fieldChange:n});t.child&&t.child.length&&("panels"===t.type?(a.body.defaultValue={},M(a.body,t.child,n,o)):M(a,t.child,n,o)),t.name&&(o[t.name]=t.type,e.defaultValue&&(e.defaultValue[t.name]={controlType:t.type,value:t.value})),e.appendChild(a)})}function J(e,t,n){const r=function(){const e=document.createElement("div");return e.setAttribute("style","width: 100%; display: flex;flex-flow: row wrap"),e.setAttribute("class","json-form"),e}(),o={};return M(r,t,n,o),e.appendChild(r),{getData:()=>{const e={},t=Object.keys(o);for(var n=0;n<t.length;n++){const i=t[n];switch(o[i]){case"textbox":case"number":case"select":case"radioGroup":e[i]=document.getElementsByName(i)[0].value;break;case"radioblockGroup":const t=document.querySelector(`[name='${i}'].radio-block-checked`);e[i]=t?t.getAttribute("value"):"";break;case"checkbox":e[i]=document.getElementsByName(i)[0].checked;break;case"checkboxGroup":for(var r=document.getElementsByName(i),a=[],c=0;c<r.length;c++)r[c].checked&&a.push(r[c].value);e[i]=a;break;case"color":e[i]=document.getElementsByName(i)[0].style.backgroundColor;break;case"colorGroup":var l=document.getElementsByName(i),s=[];for(c=0;c<l.length;c++)s.push(l[c].style.backgroundColor);e[i]=s;break;case"toggle":e[i]=document.getElementsByName(i)[0].getAttribute("value")}}return e}}}}])}));