import{a8 as n,a9 as c,M as k,y as g,i as v,an as A,ao as m,_ as E,ap as L,aq as N,a3 as w,ar as M}from"./B1z1uOcI.js";import{a as H,t as S}from"./R1Kr85jO.js";import"./Dqf-bl0t.js";let i=!1;function h(){i||(i=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function q(e){var r=k,a=g;n(null),c(null);try{return e()}finally{n(r),c(a)}}function x(e,r,a,t=a){e.addEventListener(r,()=>q(a));const s=e.__on_r;s?e.__on_r=()=>{s(),t(!0)}:e.__on_r=()=>t(!0),h()}function b(e){if(v){var r=!1,a=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var t=e.value;d(e,"value",null),e.value=t}if(e.hasAttribute("checked")){var s=e.checked;d(e,"checked",null),e.checked=s}}};e.__on_r=a,A(a),h()}}function d(e,r,a,t){var s=e.__attributes??(e.__attributes={});v&&(s[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||s[r]!==(s[r]=a)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[m]=a),a==null?e.removeAttribute(r):typeof a!="string"&&I(e).includes(r)?e[r]=a:e.setAttribute(r,a))}var u=new Map;function I(e){var r=u.get(e.nodeName);if(r)return r;u.set(e.nodeName,r=[]);for(var a,t=e,s=Element.prototype;s!==t;){a=L(t);for(var o in a)a[o].set&&r.push(o);t=E(t)}return r}function p(e,r,a=r){var t=N();x(e,"input",s=>{var o=s?e.defaultValue:e.value;if(o=_(e)?f(o):o,a(o),t&&o!==(o=r())){var y=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=y,e.selectionEnd=Math.min(l,e.value.length))}}),(v&&e.defaultValue!==e.value||w(r)==null&&e.value)&&a(_(e)?f(e.value):e.value),M(()=>{var s=r();_(e)&&s===f(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function _(e){var r=e.type;return r==="number"||r==="range"}function f(e){return e===""?null:+e}var O=S('<header class="svelte-1k5yyk9"><div class="svelte-1k5yyk9"><h1 class="svelte-1k5yyk9">Header</h1></div></header>');function B(e){var r=O();H(e,r)}export{B as H,p as b,x as l,b as r,d as s};
