import{d as B,p as Y,L as x,m as O,n as y,P as M,q as N,g as l,c as U,r as w,k as q,t as C,S as G,v as $,l as p,w as z,x as V,y as Z}from"./BadpaNGM.js";import{p as j}from"./BeDQaxj3.js";let c=!1;function F(r){var a=c;try{return c=!1,[r(),c]}finally{c=a}}function K(r,a,s,v){var L;var b=(s&V)!==0,d=!p||(s&z)!==0,P=(s&C)!==0,D=(s&Z)!==0,E=!1,i;P?[i,E]=F(()=>r[a]):i=r[a];var T=G in r||$ in r,_=P&&(((L=B(r,a))==null?void 0:L.set)??(T&&a in r&&(e=>r[a]=e)))||void 0,n=v,S=!0,o=!1,R=()=>(o=!0,S&&(S=!1,D?n=q(v):n=v),n);i===void 0&&v!==void 0&&(_&&d&&Y(),i=R(),_&&_(i));var u;if(d)u=()=>{var e=r[a];return e===void 0?R():(S=!0,o=!1,e)};else{var A=(b?O:y)(()=>r[a]);A.f|=x,u=()=>{var e=l(A);return e!==void 0&&(n=void 0),e===void 0?n:e}}if((s&M)===0)return u;if(_){var h=r.$$legacy;return function(e,t){return arguments.length>0?((!d||!t||h||E)&&_(t?u():e),e):u()}}var m=!1,I=w(i),f=O(()=>{var e=u(),t=l(I);return m?(m=!1,t):I.v=e});return b||(f.equals=N),function(e,t){if(arguments.length>0){const g=t?l(f):d&&P?j(e):e;return f.equals(g)||(m=!0,U(I,g),o&&n!==void 0&&(n=g),q(()=>l(f))),e}return l(f)}}export{K as p};
