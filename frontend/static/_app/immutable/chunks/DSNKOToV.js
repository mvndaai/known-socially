var Mn=Array.isArray,nn=Array.prototype.indexOf,Yn=Array.from,Hn=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,en=Object.getPrototypeOf;const Un=()=>{};function Vn(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,tt=8,ft=16,D=32,B=64,$=128,C=256,Z=512,h=1024,I=2048,F=4096,P=8192,L=16384,ln=32768,At=65536,Gn=1<<17,sn=1<<19,kt=1<<20,Et=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function Dt(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Jn(){nt=!0}const Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,ar=4,ur=8,or=16,ir=1,fr=2,pn="[",hn="[!",dn="]",Rt={},_r=Symbol();function _t(t,n){var r={f:0,v:t,reactions:null,equals:Dt,rv:0,wv:0};return r}function cr(t){return En(_t(t))}function vr(t,n=!1){var e;const r=_t(t);return n||(r.equals=It),nt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function En(t){return u!==null&&!k&&u.f&y&&(m===null?xn([t]):m.push(t)),t}function pr(t,n){return u!==null&&!k&&rt()&&u.f&(y|ft)&&(m===null||!m.includes(t))&&vn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Zt(),St(t,I),rt()&&i!==null&&i.f&h&&!(i.f&(D|B))&&(A===null?On([t]):A.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&I||!e&&a===i||(g(a,n),o&(h|C)&&(o&y?St(a,F):lt(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let x=!1;function hr(t){x=t}let w;function M(t){if(t===null)throw xt(),Rt;return w=t}function dr(){return M(N(w))}function Er(t){if(x){if(N(w)!==null)throw xt(),Rt;w=t}}function yr(t=1){if(x){for(var n=t,r=w;n--;)r=N(r);w=r}}function wr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var yt,Ot,Ct;function Tr(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Ot=dt(n,"firstChild").get,Ct=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Ot.call(t)}function N(t){return Ct.call(t)}function mr(t,n){if(!x)return at(t);var r=at(w);if(r===null)r=w.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),M(e),e}return M(r),r}function gr(t,n){if(!x){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function Ar(t,n=1,r=!1){let e=x?w:t;for(var l;n--;)l=e,e=N(e);if(!x)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function kr(t){t.textContent=""}function Nt(t){var n=y|I;i===null?n|=C:i.f|=kt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:Dt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function Dr(t){const n=Nt(t);return n.equals=It,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ct(e):O(e)}}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function qt(t){var n,r=i;J(wn(t));try{bt(t),n=Wt(t)}finally{J(r)}return n}function Pt(t){var n=qt(t),r=(S||t.f&C)&&t.deps!==null?F:h;g(t,r),t.equals(n)||(t.v=n,t.wv=Zt())}function ct(t){bt(t),j(t,0),g(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){i===null&&u===null&&fn(),u!==null&&u.f&C&&on(),vt&&un()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function U(t,n,r,e=!0){var l=(t&B)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=b;try{wt(!0),pt(a),a.f|=ln}catch(T){throw O(a),T}finally{wt(o)}}else n!==null&&lt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(kt|$))===0;if(!_&&!l&&e&&(s!==null&&Tn(a,s),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function Ir(t){Ft();var n=i!==null&&(i.f&D)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Lt(t);return e}}function Rr(t){return Ft(),mn(t)}function Sr(t){const n=U(B,t,!0);return(r={})=>new Promise(e=>{r.outro?kn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Lt(t){return U(gt,t,!1)}function mn(t){return U(tt,t,!0)}function xr(t,n=[],r=Nt){const e=n.map(r);return gn(()=>t(...e.map(Fn)))}function gn(t,n=0){return U(tt|ft|n,t,!0)}function Or(t,n=!0){return U(tt|D,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=vt,e=u;Tt(!0),X(null);try{n.call(null)}finally{Tt(r),X(e)}}}function Yt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ct(n[r])}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}Ht(t,n&&!r),Yt(t),j(t,0),g(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Mt(t);var o=t.parent;o!==null&&o.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function kn(t,n){var r=[];Bt(t,r,!0),Dn(r,()=>{O(t),n&&n()})}function Dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Bt(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&At)!==0||(e.f&D)!==0;Bt(e,n,s?r:!1),e=l}}}function Cr(t){Ut(t,!0)}function Ut(t,n){if(t.f&P){t.f^=P,t.f&h||(t.f^=h),V(t)&&(g(t,I),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&At)!==0||(r.f&D)!==0;Ut(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const In=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let z=!1,W=!1,ut=[],ot=[];function Vt(){z=!1;const t=ut.slice();ut=[],mt(t)}function Gt(){W=!1;const t=ot.slice();ot=[],mt(t)}function Nr(t){z||(z=!0,queueMicrotask(Vt)),ut.push(t)}function br(t){W||(W=!0,In(Gt)),ot.push(t)}function Rn(){z&&Vt(),W&&Gt()}const Kt=0,Sn=1;let G=!1,K=Kt,Y=!1,H=null,b=!1,vt=!1;function wt(t){b=t}function Tt(t){vt=t}let R=[],q=0;let u=null,k=!1;function X(t){u=t}let i=null;function J(t){i=t}let m=null;function xn(t){m=t}let p=null,E=0,A=null;function On(t){A=t}let $t=1,Q=0,S=!1,f=null;function Zt(){return++$t}function rt(){return!nt||f!==null&&f.l===null}function V(t){var c;var n=t.f;if(n&I)return!0;if(n&F){var r=t.deps,e=(n&C)!==0;if(r!==null){var l,s,a=(n&Z)!==0,o=e&&i!==null&&!S,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=Z)}for(l=0;l<_;l++)if(s=r[l],V(s)&&Pt(s),s.wv>t.wv)return!0}(!e||i!==null&&!S)&&g(t,h)}return!1}function Cn(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw G=!1,t}function Nn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&$)===0)}function et(t,n,r,e){if(G){if(r===null&&(G=!1),Nn(n))throw t;return}r!==null&&(G=!0);{Cn(t,n);return}}function zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?zt(s,n,r+1):n===s&&(r===0?g(s,I):s.f&h&&g(s,F),lt(s))}}function Wt(t){var ht;var n=p,r=E,e=A,l=u,s=S,a=m,o=f,_=k,c=t.f;p=null,E=0,A=null,u=c&(D|B)?null:t,S=!b&&(c&C)!==0,m=null,f=t.ctx,k=!1,Q++;try{var T=(0,t.fn)(),v=t.deps;if(p!==null){var d;if(j(t,E),v!==null&&E>0)for(v.length=E+p.length,d=0;d<p.length;d++)v[E+d]=p[d];else t.deps=v=p;if(!S)for(d=E;d<v.length;d++)((ht=v[d]).reactions??(ht.reactions=[])).push(t)}else v!==null&&E<v.length&&(j(t,E),v.length=E);if(rt()&&A!==null&&!(t.f&(y|F|I)))for(d=0;d<A.length;d++)zt(A[d],t);return l!==null&&Q++,T}finally{p=n,E=r,A=e,u=l,S=s,m=a,f=o,k=_}}function bn(t,n){let r=n.reactions;if(r!==null){var e=nn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(p===null||!p.includes(n))&&(g(n,F),n.f&(C|Z)||(n.f^=Z),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function pt(t){var n=t.f;if(!(n&L)){g(t,h);var r=i,e=f;i=t;try{n&ft?An(t):Ht(t),Yt(t),Mt(t);var l=Wt(t);t.teardown=typeof l=="function"?l:null,t.wv=$t;var s=t.deps,a}catch(o){et(o,t,r,e||t.ctx)}finally{i=r}}}function Xt(){if(q>1e3){q=0;try{_n()}catch(t){if(H!==null)et(t,H,null);else throw t}}q++}function Jt(t){var n=t.length;if(n!==0){Xt();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Qt(l,s),qn(s)}}finally{b=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|P)))try{V(e)&&(pt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function Pn(){if(Y=!1,q>1001)return;const t=R;R=[],Jt(t),Y||(q=0,H=null)}function lt(t){K===Kt&&(Y||(Y=!0,queueMicrotask(Pn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|D)){if(!(r&h))return;n.f^=h}}R.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&D)!==0,a=s&&(l&h)!==0,o=r.next;if(!a&&!(l&P))if(l&tt){if(s)r.f^=h;else try{V(r)&&pt(r)}catch(v){et(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&gt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var T=0;T<e.length;T++)_=e[T],n.push(_),Qt(_,n)}function tn(t){var n=K,r=R;try{Xt();const l=[];K=Sn,R=l,Y=!1,Jt(r);var e=t==null?void 0:t();return Rn(),(R.length>0||l.length>0)&&tn(),q=0,H=null,e}finally{K=n,R=r}}async function qr(){await Promise.resolve(),tn()}function Fn(t){var T;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=qt(t);return ct(t),e}if(u!==null&&!k){m!==null&&m.includes(t)&&cn();var l=u.deps;t.rv<Q&&(t.rv=Q,p===null&&l!==null&&l[E]===t?E++:p===null?p=[t]:p.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(T=c.deriveds)!=null&&T.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,V(s)&&Pt(s)),t.v}function Pr(t){var n=k;try{return k=!0,t()}finally{k=n}}const Ln=-7169;function g(t,n){t.f=t.f&Ln|n}function Fr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(f.l={s:null,u:null,r1:[],r2:_t(!1)})}function Lr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];J(s.effect),X(s.reaction),Lt(s.fn)}}finally{J(r),X(e)}}f=n.p,n.m=!0}return{}}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Et in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Et in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=en(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=rn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{xr as $,Hn as A,X as B,J as C,u as D,At as E,Tr as F,at as G,pn as H,N as I,Rt as J,hr as K,M as L,dr as M,dn as N,xt as O,Zn as P,kr as Q,Yn as R,Et as S,Sr as T,_r as U,st as V,Rr as W,Vn as X,mt as Y,Mr as Z,Nt as _,Bn as a,Ar as a0,mr as a1,Er as a2,ir as a3,fr as a4,hn as a5,wr as a6,P as a7,Cr as a8,kn as a9,ur as aA,Kn as aB,or as aC,tn as aD,qr as aE,an as aF,yn as aa,Bt as ab,Dn as ac,Dr as ad,Nr as ae,Qn as af,tr as ag,vr as ah,nr as ai,rr as aj,er as ak,br as al,$n as am,rn as an,rt as ao,mn as ap,cr as aq,Lt as ar,zn as as,Gn as at,ar as au,It as av,D as aw,B as ax,lr as ay,sr as az,Wn as b,pr as c,Fn as d,i as e,Xn as f,dt as g,en as h,Mn as i,Jn as j,f as k,nt as l,Pr as m,yr as n,jn as o,gn as p,Or as q,Un as r,_t as s,O as t,Ir as u,x as v,w,Fr as x,gr as y,Lr as z};
