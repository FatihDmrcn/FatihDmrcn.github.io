import{P as m,Q as T,R as V,e as k,V as $,i as j,W as q,X as B,N as C,j as F,Y as J,m as w,Z as I,_ as D,$ as g,O as N,p as h,J as M,a0 as L,a1 as S,M as Q,a2 as X,a3 as Z,a4 as z,a5 as G,a6 as K,a7 as U,k as x,D as ee,r as re,H as te}from"./DIjogaFB.js";import{b as ae}from"./CLprxBpU.js";const ne=["touchstart","touchmove"];function ie(e){return ne.includes(e)}function se(e){var r=V,a=k;m(null),T(null);try{return e()}finally{m(r),T(a)}}const oe=new Set,H=new Set;function ue(e,r,a,i={}){function s(t){if(i.capture||E.call(r,t),!t.cancelBubble)return se(()=>a==null?void 0:a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?B(()=>{r.addEventListener(e,s,i)}):r.addEventListener(e,s,i),s}function _e(e,r,a,i,s){var t={capture:i,passive:s},f=ue(e,r,a,t);(r===document.body||r===window||r===document)&&q(()=>{r.removeEventListener(e,f,t)})}function E(e){var A;var r=this,a=r.ownerDocument,i=e.type,s=((A=e.composedPath)==null?void 0:A.call(e))||[],t=s[0]||e.target,f=0,p=e.__root;if(p){var c=s.indexOf(p);if(c!==-1&&(r===document||r===window)){e.__root=r;return}var v=s.indexOf(r);if(v===-1)return;c<=v&&(f=c)}if(t=s[f]||e.target,t!==r){$(e,"currentTarget",{configurable:!0,get(){return t||a}});var R=V,l=k;m(null),T(null);try{for(var n,o=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+i];if(_!==void 0&&(!t.disabled||e.target===t))if(j(_)){var[W,...Y]=_;W.apply(t,[e,...Y])}else _.call(t,e)}catch(b){n?o.push(b):n=b}if(e.cancelBubble||d===r||d===null)break;t=d}if(n){for(let b of o)queueMicrotask(()=>{throw b});throw n}}finally{e.__root=r,delete e.currentTarget,m(R),T(l)}}}let u;function fe(){u=void 0}function he(e){let r=null,a=w;var i;if(w){for(r=h,u===void 0&&(u=M(document.head));u!==null&&(u.nodeType!==8||u.data!==I);)u=D(u);u===null?g(!1):u=N(D(u))}w||(i=document.head.appendChild(C()));try{F(()=>e(i),J)}finally{a&&(g(!0),u=h,N(r))}}function pe(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function le(e,r){return P(e,r)}function ve(e,r){L(),r.intro=r.intro??!1;const a=r.target,i=w,s=h;try{for(var t=M(a);t&&(t.nodeType!==8||t.data!==I);)t=D(t);if(!t)throw S;g(!0),N(t),Q();const f=P(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==X)throw Z(),S;return g(!1),f}catch(f){if(f===S)return r.recover===!1&&z(),L(),G(a),g(!1),le(e,r);throw f}finally{g(i),N(s),fe()}}const y=new Map;function P(e,{target:r,anchor:a,props:i={},events:s,context:t,intro:f=!0}){L();var p=new Set,c=l=>{for(var n=0;n<l.length;n++){var o=l[n];if(!p.has(o)){p.add(o);var d=ie(o);r.addEventListener(o,E,{passive:d});var _=y.get(o);_===void 0?(document.addEventListener(o,E,{passive:d}),y.set(o,1)):y.set(o,_+1)}}};c(K(oe)),H.add(c);var v=void 0,R=U(()=>{var l=a??r.appendChild(C());return x(()=>{if(t){ee({});var n=re;n.c=t}s&&(i.$$events=s),w&&ae(l,null),v=e(l,i)||{},w&&(k.nodes_end=h),t&&te()}),()=>{var d;for(var n of p){r.removeEventListener(n,E);var o=y.get(n);--o===0?(document.removeEventListener(n,E),y.delete(n)):y.set(n,o)}H.delete(c),l!==a&&((d=l.parentNode)==null||d.removeChild(l))}});return O.set(v,R),v}let O=new WeakMap;function ye(e,r){const a=O.get(e);return a?(O.delete(e),a(r)):Promise.resolve()}export{he as a,_e as e,ve as h,le as m,pe as s,ye as u};
