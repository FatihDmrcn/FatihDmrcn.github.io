import{t as B,e as p2,a as y}from"../chunks/PJPvCBzB.js";import"../chunks/BZQgrCi5.js";import{I as K,t as M,J as w2,C as x2,N as C2,n as k2,g as W,aj as y2,ab as b2,ac as a2,G as z,v as Z,O as B2,ad as g2,p as h2,ae as D2,T as m2,i as _2,am as E2,s as c2,au as J,e as o2,av as L2,aw as S2,ax as M2,R as F2,ay as H2,r as T2,az as R2,aA as U2,F as V2,W as P2,a1 as F,z as b,B as C,A as c,X as Z2,c as Q2,y as I2,x as P,aB as X2,aC as i2}from"../chunks/DvZodzIU.js";import{s as Q,a as G2}from"../chunks/BL_f-R8F.js";import{s as G,a as V}from"../chunks/BnOrox8u.js";import{p as K2}from"../chunks/BqsAfAFG.js";function z2(r,e){return e}function J2(r,e,t,a){for(var i=[],o=e.length,d=0;d<o;d++)M2(e[d].e,i,!0);var f=o>0&&i.length===0&&t!==null;if(f){var w=t.parentNode;F2(w),w.append(t),a.clear(),H(r,e[0].prev,e[o-1].next)}H2(i,()=>{for(var h=0;h<o;h++){var s=e[h];f||(a.delete(s.k),H(r,s.prev,s.next)),T2(s.e,!f)}})}function N2(r,e,t,a,i,o=null){var d=r,f={flags:e,items:new Map,first:null};{var w=r;d=M?K(w2(w)):w.appendChild(x2())}M&&C2();var h=null,s=!1,m=y2(()=>{var n=t();return _2(n)?n:n==null?[]:m2(n)});k2(()=>{var n=W(m),g=n.length;if(s&&g===0)return;s=g===0;let l=!1;if(M){var A=d.data===b2;A!==(g===0)&&(d=a2(),K(d),z(!1),l=!0)}if(M){for(var k=null,v,p=0;p<g;p++){if(Z.nodeType===8&&Z.data===B2){d=Z,l=!0,z(!1);break}var D=n[p],_=a(D,p);v=u2(Z,f,k,null,D,_,p,i,e,t),f.items.set(_,v),k=v}g>0&&K(a2())}M||O2(n,f,d,i,e,a,t),o!==null&&(g===0?h?g2(h):h=h2(()=>o(d)):h!==null&&D2(h,()=>{h=null})),l&&z(!0),W(m)}),M&&(d=Z)}function O2(r,e,t,a,i,o,d){var f=r.length,w=e.items,h=e.first,s=h,m,n=null,g=[],l=[],A,k,v,p;for(p=0;p<f;p+=1){if(A=r[p],k=o(A,p),v=w.get(k),v===void 0){var D=s?s.e.nodes_start:t;n=u2(D,e,n,n===null?e.first:n.next,A,k,p,a,i,d),w.set(k,n),g=[],l=[],s=n.next;continue}if(q2(v,A,p),(v.e.f&J)!==0&&g2(v.e),v!==s){if(m!==void 0&&m.has(v)){if(g.length<l.length){var _=l[0],x;n=_.prev;var L=g[0],E=g[g.length-1];for(x=0;x<g.length;x+=1)n2(g[x],_,t);for(x=0;x<l.length;x+=1)m.delete(l[x]);H(e,L.prev,E.next),H(e,n,L),H(e,E,_),s=_,n=E,p-=1,g=[],l=[]}else m.delete(v),n2(v,s,t),H(e,v.prev,v.next),H(e,v,n===null?e.first:n.next),H(e,n,v),n=v;continue}for(g=[],l=[];s!==null&&s.k!==k;)(s.e.f&J)===0&&(m??(m=new Set)).add(s),l.push(s),s=s.next;if(s===null)continue;v=s}g.push(v),n=v,s=v.next}if(s!==null||m!==void 0){for(var S=m===void 0?[]:m2(m);s!==null;)(s.e.f&J)===0&&S.push(s),s=s.next;var T=S.length;if(T>0){var R=f===0?t:null;J2(e,S,R,w)}}o2.first=e.first&&e.first.e,o2.last=n&&n.e}function q2(r,e,t,a){S2(r.v,e),r.i=t}function u2(r,e,t,a,i,o,d,f,w,h){var s=(w&R2)!==0,m=(w&U2)===0,n=s?m?E2(i):c2(i):i,g=(w&L2)===0?d:c2(d),l={i:g,v:n,k:o,a:null,e:null,prev:t,next:a};try{return l.e=h2(()=>f(r,n,g,h),M),l.e.prev=t&&t.e,l.e.next=a&&a.e,t===null?e.first=l:(t.next=l,t.e.next=l.e),a!==null&&(a.prev=l,a.e.prev=l.e),l}finally{}}function n2(r,e,t){for(var a=r.next?r.next.e.nodes_start:t,i=e?e.e.nodes_start:t,o=r.e.nodes_start;o!==a;){var d=V2(o);i.before(o),o=d}}function H(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function W2(r,e,t){var a=r==null?"":""+r;return a===""?null:a}function Y2(r,e,t,a,i,o){var d=r.__className;if(M||d!==t){var f=W2(t);(!M||f!==r.getAttribute("class"))&&(f==null?r.removeAttribute("class"):r.className=f),r.__className=t}return o}var j2=B('<a aria-label="test"></a>'),$2=B('<div class="flex-1 w-full carousel overflow-y-hidden items-center"><!></div> <div class="navbar justify-center gap-3"></div>',1);function l2(r,e){P2(e,!0);let t=I2(0);function a(w){const h=w.currentTarget;let s=h.scrollLeft,m=h.scrollWidth-h.clientWidth;Q2(t,K2(Math.round(s/m*(e.length-1))))}var i=$2(),o=F(i),d=b(o);G(d,()=>e.children),C(o);var f=c(o,2);return N2(f,21,()=>Array(e.length),z2,(w,h,s)=>{var m=j2();P(()=>{V(m,"href",`#${e.id}_${s}`),Y2(m,1,`btn btn-xs btn-circle ${(W(t)==s?"bg-base-content":"")??""}`)}),y(w,m)}),C(f),p2("scroll",o,a),y(r,i),Z2({onscroll:a})}var e0=B('<div class="carousel-item box-border w-full card card-sm sm:card-lg"><div class="card-body"><div class="card-title sm:text-xl"> </div> <div class="sm:text-lg"><!></div></div></div>');function U(r,e){var t=e0(),a=b(t),i=b(a),o=b(i,!0);C(i);var d=c(i,2),f=b(d);G(f,()=>e.children),C(d),C(a),C(t),P(()=>{V(t,"id",e.id),Q(o,e.title)}),y(r,t)}var t0=B('<div class="carousel-item box-border h-full w-full flex-col justify-center items-center pt-16"><!></div>');function N(r,e){var t=t0(),a=b(t);G(a,()=>e.children),C(t),P(()=>V(t,"id",e.id)),y(r,t)}var r0=B('<div class="badge badge-xs badge-ghost bg-base-300 sm:badge-md indent-0 rounded-sm font-semibold"><img class="h-9/10 aspect-auto"> </div>');function u(r,e){var t=r0(),a=b(t),i=c(a);C(t),P(()=>{V(a,"src",e.src),V(a,"alt",e.name),Q(i,` ${e.name??""}`)}),y(r,t)}var s0=B('<li class="list-row"><svg class="fill-base-content size-7 sm:size-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"></path></svg> <div><div class="font-semibold"> </div> <div> </div></div></li>');function O(r,e){var t=s0(),a=c(b(t),2),i=b(a),o=b(i,!0);C(i);var d=c(i,2),f=b(d,!0);C(d),C(a),C(t),P(()=>{Q(o,e.degree),Q(f,e.university)}),y(r,t)}const a0=""+new URL("../assets/profile_drawing.BuAsKL4c.jpg",import.meta.url).href,d2=""+new URL("../assets/cargo.BqR__lxa.png",import.meta.url).href,c0=""+new URL("../assets/actixweb.D9G5OG8B.png",import.meta.url).href,o0=""+new URL("../assets/daisyui.CpFMOZzG.png",import.meta.url).href,i0="data:image/png;base64,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",n0=""+new URL("../assets/abaqus.BejmQscS.png",import.meta.url).href,l0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAAAAGcAmf//mQBn8APTAAAAAXRSTlMAQObYZgAAABZJREFUCNdj+A8EDGDiAwMDP7kE3BQAa/4b5fYpi8IAAAAASUVORK5CYII=",v2="data:image/svg+xml,%3csvg%20version='1.1'%20height='106'%20width='106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20id='logo'%20transform='translate(53,%2053)'%3e%3cpath%20id='r'%20transform='translate(0.5,%200.5)'%20stroke='rgb(165,43,0)'%20fill='rgb(165,43,0)'%20stroke-width='1'%20stroke-linejoin='round'%20d='%20M%20-9,-15%20H%204%20C%2012,-15%2012,-7%204,-7%20H%20-9%20Z%20M%20-40,22%20H%200%20V%2011%20H%20-9%20V%203%20H%201%20C%2012,3%206,22%2015,22%20H%2040%20V%203%20H%2034%20V%205%20C%2034,13%2025,12%2024,7%20C%2023,2%2019,-2%2018,-2%20C%2033,-10%2024,-26%2012,-26%20H%20-35%20V%20-15%20H%20-25%20V%2011%20H%20-40%20Z'%20/%3e%3cg%20id='gear'%20mask='url(%23holes)'%3e%3ccircle%20r='43'%20fill='none'%20stroke='rgb(165,43,0)'%20stroke-width='9'%20/%3e%3cg%20id='cogs'%3e%3cpolygon%20id='cog'%20stroke='rgb(165,43,0)'%20stroke-width='3'%20stroke-linejoin='round'%20points='46,3%2051,0%2046,-3'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(11.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(22.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(33.75)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(45.00)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(56.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(67.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(78.75)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(90.00)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(101.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(112.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(123.75)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(135.00)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(146.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(157.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(168.75)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(180.00)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(191.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(202.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(213.75)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(225.00)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(236.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(247.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(258.75)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(270.00)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(281.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(292.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(303.75)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(315.00)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(326.25)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(337.50)'%20/%3e%3cuse%20xlink:href='%23cog'%20transform='rotate(348.75)'%20/%3e%3c/g%3e%3cg%20id='mounts'%3e%3cpolygon%20id='mount'%20stroke='rgb(165,43,0)'%20stroke-width='6'%20stroke-linejoin='round'%20points='-7,-42%200,-35%207,-42'%20/%3e%3cuse%20xlink:href='%23mount'%20transform='rotate(72)'%20/%3e%3cuse%20xlink:href='%23mount'%20transform='rotate(144)'%20/%3e%3cuse%20xlink:href='%23mount'%20transform='rotate(216)'%20/%3e%3cuse%20xlink:href='%23mount'%20transform='rotate(288)'%20/%3e%3c/g%3e%3c/g%3e%3cmask%20id='holes'%3e%3crect%20x='-60'%20y='-60'%20width='120'%20height='120'%20fill='white'%20/%3e%3ccircle%20id='hole'%20cy='-40'%20r='3'%20/%3e%3cuse%20xlink:href='%23hole'%20transform='rotate(72)'%20/%3e%3cuse%20xlink:href='%23hole'%20transform='rotate(144)'%20/%3e%3cuse%20xlink:href='%23hole'%20transform='rotate(216)'%20/%3e%3cuse%20xlink:href='%23hole'%20transform='rotate(288)'%20/%3e%3c/mask%3e%3c/g%3e%3c/svg%3e",d0="data:image/svg+xml,%3csvg%20width='206'%20height='231'%20viewBox='0%200%20206%20231'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M143.143%2084C143.143%2096.1503%20133.293%20106%20121.143%20106C108.992%20106%2099.1426%2096.1503%2099.1426%2084C99.1426%2071.8497%20108.992%2062%20121.143%2062C133.293%2062%20143.143%2071.8497%20143.143%2084Z'%20fill='%23FFC131'%20/%3e%3cellipse%20cx='84.1426'%20cy='147'%20rx='22'%20ry='22'%20transform='rotate(180%2084.1426%20147)'%20fill='%2324C8DB'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M166.738%20154.548C157.86%20160.286%20148.023%20164.269%20137.757%20166.341C139.858%20160.282%20141%20153.774%20141%20147C141%20144.543%20140.85%20142.121%20140.558%20139.743C144.975%20138.204%20149.215%20136.139%20153.183%20133.575C162.73%20127.404%20170.292%20118.608%20174.961%20108.244C179.63%2097.8797%20181.207%2086.3876%20179.502%2075.1487C177.798%2063.9098%20172.884%2053.4021%20165.352%2044.8883C157.82%2036.3744%20147.99%2030.2165%20137.042%2027.1546C126.095%2024.0926%20114.496%2024.2568%20103.64%2027.6274C92.7839%2030.998%2083.1319%2037.4317%2075.8437%2046.1553C74.9102%2047.2727%2074.0206%2048.4216%2073.176%2049.5993C61.9292%2050.8488%2051.0363%2054.0318%2040.9629%2058.9556C44.2417%2048.4586%2049.5653%2038.6591%2056.679%2030.1442C67.0505%2017.7298%2080.7861%208.57426%2096.2354%203.77762C111.685%20-1.01901%20128.19%20-1.25267%20143.769%203.10474C159.348%207.46215%20173.337%2016.2252%20184.056%2028.3411C194.775%2040.457%20201.767%2055.4101%20204.193%2071.404C206.619%2087.3978%20204.374%20103.752%20197.73%20118.501C191.086%20133.25%20180.324%20145.767%20166.738%20154.548ZM41.9631%2074.275L62.5557%2076.8042C63.0459%2072.813%2063.9401%2068.9018%2065.2138%2065.1274C57.0465%2067.0016%2049.2088%2070.087%2041.9631%2074.275Z'%20fill='%23FFC131'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M38.4045%2076.4519C47.3493%2070.6709%2057.2677%2066.6712%2067.6171%2064.6132C65.2774%2070.9669%2064%2077.8343%2064%2085.0001C64%2087.1434%2064.1143%2089.26%2064.3371%2091.3442C60.0093%2092.8732%2055.8533%2094.9092%2051.9599%2097.4256C42.4128%20103.596%2034.8505%20112.392%2030.1816%20122.756C25.5126%20133.12%2023.9357%20144.612%2025.6403%20155.851C27.3449%20167.09%2032.2584%20177.598%2039.7906%20186.112C47.3227%20194.626%2057.153%20200.784%2068.1003%20203.846C79.0476%20206.907%2090.6462%20206.743%20101.502%20203.373C112.359%20200.002%20122.011%20193.568%20129.299%20184.845C130.237%20183.722%20131.131%20182.567%20131.979%20181.383C143.235%20180.114%20154.132%20176.91%20164.205%20171.962C160.929%20182.49%20155.596%20192.319%20148.464%20200.856C138.092%20213.27%20124.357%20222.426%20108.907%20227.222C93.458%20232.019%2076.9524%20232.253%2061.3736%20227.895C45.7948%20223.538%2031.8055%20214.775%2021.0867%20202.659C10.3679%20190.543%203.37557%20175.59%200.949823%20159.596C-1.47592%20143.602%200.768139%20127.248%207.41237%20112.499C14.0566%2097.7497%2024.8183%2085.2327%2038.4045%2076.4519ZM163.062%20156.711L163.062%20156.711C162.954%20156.773%20162.846%20156.835%20162.738%20156.897C162.846%20156.835%20162.954%20156.773%20163.062%20156.711Z'%20fill='%2324C8DB'%20/%3e%3c/svg%3e",v0=""+new URL("../assets/diesel.BcNj_PV4.png",import.meta.url).href,f2=""+new URL("../assets/python.XBESK1FY.svg",import.meta.url).href,f0="data:image/svg+xml,%3csvg%20fill='none'%20height='128'%20viewBox='0%200%20128%20128'%20width='128'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20fill='%233178c6'%20height='128'%20rx='6'%20width='128'%20/%3e%3cpath%20clip-rule='evenodd'%20d='m74.2622%2099.468v14.026c2.2724%201.168%204.9598%202.045%208.0625%202.629%203.1027.585%206.3728.877%209.8105.877%203.3503%200%206.533-.321%209.5478-.964%203.016-.643%205.659-1.702%207.932-3.178%202.272-1.476%204.071-3.404%205.397-5.786%201.325-2.381%201.988-5.325%201.988-8.8313%200-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827%200-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391%202.0976-1.9943c.9031-.5551%202.0101-.9861%203.3211-1.2929%201.311-.3069%202.7676-.4603%204.3699-.4603%201.1658%200%202.3958.0877%203.6928.263%201.296.1753%202.6.4456%203.911.8109%201.311.3652%202.585.8254%203.824%201.3806%201.238.5552%202.381%201.198%203.43%201.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211%200-6.4674.3579-9.439%201.0738-2.9715.7159-5.5862%201.8336-7.844%203.353-2.2578%201.5195-4.0422%203.4553-5.3531%205.8075-1.311%202.3522-1.9665%205.1646-1.9665%208.4373%200%204.1785%201.2017%207.7433%203.6052%2010.6945%202.4035%202.9513%206.0523%205.4496%2010.9466%207.495%201.9228.7889%203.7145%201.5633%205.375%202.323%201.6606.7597%203.0954%201.5486%204.3044%202.3668s2.1628%201.7094%202.8618%202.6736c.7.9643%201.049%202.06%201.049%203.2873%200%20.9062-.218%201.7462-.655%202.5202s-1.1%201.446-1.9885%202.016c-.8886.57-1.9956%201.016-3.3212%201.337-1.3255.321-2.8768.482-4.6539.482-3.0299%200-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z'%20fill='%23fff'%20fill-rule='evenodd'%20/%3e%3c/svg%3e",g0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157'%20style='fill:%23ff3e00'%20/%3e%3cpath%20d='M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287'%20style='fill:%23fff'%20/%3e%3c/svg%3e",h0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2054%2033'%3e%3cg%20clip-path='url(%23prefix__clip0)'%3e%3cpath%20fill='%2338bdf8'%20fill-rule='evenodd'%20d='M27%200c-7.2%200-11.7%203.6-13.5%2010.8%202.7-3.6%205.85-4.95%209.45-4.05%202.054.513%203.522%202.004%205.147%203.653C30.744%2013.09%2033.808%2016.2%2040.5%2016.2c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C36.756%203.11%2033.692%200%2027%200zM13.5%2016.2C6.3%2016.2%201.8%2019.8%200%2027c2.7-3.6%205.85-4.95%209.45-4.05%202.054.514%203.522%202.004%205.147%203.653C17.244%2029.29%2020.308%2032.4%2027%2032.4c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C23.256%2019.31%2020.192%2016.2%2013.5%2016.2z'%20clip-rule='evenodd'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='prefix__clip0'%3e%3cpath%20fill='%23fff'%20d='M0%200h54v32.4H0z'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",m0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='400'%20height='480'%20viewBox='0%200%20400%20480'%20fill='none'%20version='1.1'%20id='svg4'%20sodipodi:docname='FreeCAD-symbol.svg'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%3e%3csodipodi:namedview%20id='namedview10'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20/%3e%3ctitle%20id='title4'%3eFreeCAD-symbol%3c/title%3e%3cdefs%20id='defs4'%20/%3e%3cmetadata%20id='metadata4'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:title%3eFreeCAD-symbol%3c/dc:title%3e%3cdc:creator%3e%3ccc:Agent%3e%3cdc:title%3eSebastian%20Tabares%20Amaya%20(sytabaresa),%20Max%20Wilfinger%20(maxwxyz)%3c/dc:title%3e%3c/cc:Agent%3e%3c/dc:creator%3e%3cdc:publisher%3e%3ccc:Agent%3e%3cdc:title%3eThe%20FreeCAD%20project%20association%20AISBL%20(FPA)%3c/dc:title%3e%3c/cc:Agent%3e%3c/dc:publisher%3e%3cdc:date%3e2024-06-01%3c/dc:date%3e%3cdc:description%3eA%20white%20letter%20F%20on%20a%20background%20that%20is%20split%20diagonally%20in%20half,%20blue%20on%20the%20bottom%20with%20a%20shape%20of%20a%20gear%20and%20red%20on%20the%20top.%3c/dc:description%3e%3cdc:rights%3e%3ccc:Agent%3e%3cdc:title%3eCopyright%20(c)%202024%20The%20FreeCAD%20Project%20Association%20AISBL.%3c/dc:title%3e%3c/cc:Agent%3e%3c/dc:rights%3e%3ccc:license%20rdf:resource='http://creativecommons.org/licenses/by/4.0/'%20/%3e%3c/cc:Work%3e%3ccc:License%20rdf:about='http://creativecommons.org/licenses/by/4.0/'%3e%3ccc:permits%20rdf:resource='http://creativecommons.org/ns%23Reproduction'%20/%3e%3ccc:permits%20rdf:resource='http://creativecommons.org/ns%23Distribution'%20/%3e%3ccc:requires%20rdf:resource='http://creativecommons.org/ns%23Notice'%20/%3e%3ccc:requires%20rdf:resource='http://creativecommons.org/ns%23Attribution'%20/%3e%3ccc:permits%20rdf:resource='http://creativecommons.org/ns%23DerivativeWorks'%20/%3e%3c/cc:License%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cpath%20d='m%20400,80%20-80,80%20H%20160%20v%2060%20h%2080%20v%2080%20h%20-80%20v%20100%20l%20-80,80%20h%2081.0076%20c%206.0652,0%2011.4378,-3.9054%2013.3118,-9.6738%20l%2014.4798,-44.5656%20c%201.384,-4.2618%204.7298,-7.5966%208.9916,-8.9814%20l%2011.1312,-3.6172%20c%204.262,-1.386%208.9314,-0.65%2012.5572,1.984%20l%2037.8994,27.5434%20c%204.9066,3.5646%2011.5574,3.5646%2016.464,0%20l%2033.972,-24.691%20c%204.9072,-3.5648%206.9592,-9.8788%205.085,-15.6474%20l%20-14.4798,-44.5658%20c%20-1.386,-4.262%20-0.64,-8.9314%201.994,-12.5572%20l%206.8834,-9.4672%20c%202.6338,-3.6254%206.8358,-5.777%2011.317,-5.7774%20l%2046.86,0.0102%20c%206.0656,2e-4%2011.4378,-3.9154%2013.3118,-9.684%20l%2012.9812,-39.9354%20c%201.874,-5.7684%20-0.18,-12.093%20-5.085,-15.658%20L%20350.7724,237.173%20c%20-3.6256,-2.6342%20-5.767,-6.8356%20-5.767,-11.3172%20V%20214.146%20c%204e-4,-4.4814%202.1412,-8.6936%205.767,-11.3274%20l%2043.4598,-31.5742%20C%20397.8584,168.6106%20400,164.3988%20400,159.9174%20Z'%20style='fill:%23418fde;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0;stroke-linecap:square;stroke-dasharray:none'%20id='path8-4'%20/%3e%3cpath%20id='path7-7'%20style='display:inline;fill:%23ff585d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0;stroke-linecap:square;stroke-dasharray:none'%20d='m%20320,0%20-80,80%20h%2080%20v%2080%20L%20400,80%20V%200%20Z%20M%2080,320%200,400%20v%2080%20h%2080%20l%2080,-80%20H%2080%20Z'%20/%3e%3cpath%20d='M%2080,0%200,80%20V%20400%20L%2080,320%20V%2080%20H%20240%20L%20320,0%20Z'%20style='fill:%23cb333b;fill-rule:evenodd;stroke-width:0;stroke-linecap:square;stroke:none;stroke-dasharray:none'%20id='path3-1'%20/%3e%3cpath%20d='m%2080,400%20h%2080%20V%20300%20h%2080%20V%20220%20H%20160%20V%20160%20H%20320%20V%2080%20H%2080%20Z'%20style='fill:%23ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0;stroke-linecap:square;stroke-dasharray:none'%20id='path9-4'%20/%3e%3c/svg%3e",u0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%3e%3cpath%20d='M0%200h64v64H0z'%20fill='%23099'%20/%3e%3cpath%20d='M19.01%2049.22v-7.04c4.013%201.262%207.563%201.892%2010.65%201.892%204.258-.005%206.388-1.134%206.388-3.39a2.76%202.76%200%200%200-.933-2.118c-.63-.603-2.256-1.448-4.874-2.535-4.698-1.922-7.76-3.564-9.185-4.926-1.847-1.797-2.77-4.065-2.77-6.804%200-3.53%201.345-6.224%204.034-8.082s6.153-2.77%2010.39-2.733c2.352%200%205.757.434%2010.213%201.3v6.78c-3.313-1.323-6.388-1.985-9.223-1.985-4.003%200-6.005%201.1-6.005%203.303.01.84.47%201.612%201.21%202.015.663.42%202.508%201.31%205.537%202.67%204.354%201.933%207.253%203.614%208.697%205.042%201.715%201.697%202.572%203.89%202.572%206.582%200%203.87-1.68%206.82-5.042%208.847-2.733%201.65-6.262%202.472-10.59%202.47-3.727-.007-7.44-.442-11.067-1.298z'%20fill='%23fff'%20/%3e%3c/svg%3e",A0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC0UExURUxpcY2Vsxsta+Di6////////z1LgP///xUoZ9ve6P///zZFexUoZzFAefp3AvrfyP////96Af6oXPn08v+QKchoH2RvmcHF1Z1VKbRmLyM0by1Lsf///ytJsBcoZx82hf94AI6d1SlGsCxLsjNOshgrbChCnvz8/kZguq+64XqMzZKh1trf8ens9puo2mV6xfX2+4WV0TxWtVNqv9HX7rvE5o9eXsXN6qiz3mJVh7ZmOR4zfn2xZ6oAAAAbdFJOUwB83EgCIbIK80YNtPKx9VQU1Iw2rv6JUPzWxfLgV70AAAN4SURBVHja3ZrtdqIwEIbbLkrrtqBi2+0ZokXignyI4Hd7//e1HNoayaQ16vBnn58oeY55wwgTrugwTLNjGsZVMxhGt+U4ttPqmo0ojI5j9/uDwaBvO90GDEbX7g96Vkmv17dbZhPj96zXCqs3sFsGsaDjfI1fKQY28SwZrWr8Pb2+Y6IFdgGdrj0Q41ezVMZgHqxYs+XcXUIZwGuNMujy8H45ma3r9sNFvFh1gfVSHmw/PX8aus8P9xdx++dV4vG+5ObJMT4iur6ZDC8CC4Yl9+0780swnLyPLmAtC95Go8nwtv3rQPDXh7Pxd5YkWPswohTwRynkHakA/4Q1AI1AsK4lwH1yAV9bYvzCB3KBD7u3SmE9rrkPagFDQB2mQCj4bl2y474PSgFkMSIP4YDQizFRsTd8AvCdIHVlpgUI2CJ1EcuMA0Y9RcwL3Drpgh0RrEIG+oIwkU/ntQSiQHt8dch85dYI8trpxcaV2IjxtQSwdWvMM1b7AXN5/sUMagpmP0TAwqVbJxF+TQGLJcHhDPCtvAIiBicKxpIgORTkc2n+PA4nC7xvBUy+SIItBwqBCAAvIEpBsZIDFvlTCPgskALOGFAKIjngHIBMoA6YUoADXhWMUlBMFQETCnh8PODCm9XJuK5AL2A+c+tMtQVskUgBzzggWJicKRiHG72Ap2cK+FbvL4DFZwq8ud4VzPLgLEGeal7BLDpLME9RwJQCzKoAWgEOmFiAA25SMI8AaAUo4GYFy4KRC3ACjWawDNk5AkNHIE5qdJnOc3IBjoFagO/mqAUNF7sgQFczIxWkGxffsVAKkmyJKzapIESPzkFMK4A4wGuVUsCKlaJkkAjwjZc4mUCAbh1RyaAT8JkiBkqBuoNAKWCLFJcMSoEqhoiRCvhWUTIoBSzc4JJBKQCmKBlEAtEKwWuVVMCnipJBIsDdEDGIhkC/X8QyXDJOFrAYtdTQoyqKQUOg27NLFDGc9ozG1V1HNAhqDKPPVlyvb+ox9LStLEpocjeFuvOb/tT5FW1VFDRaxUmoEsCR3jV4LiKNRFdbqoZYcKz7DjMXk+a8qoY4fySAzEPU9w8yT0FeABS5J7NgigzGGDhEfEH+Cj6qzICS/1IAtKCQ30fETGqCyZCcSbWfLHbEb8mpdsT3e/q/6RF7+uKtBFoOXnIxzA495sdrOv8A/7RWZnQH4gsAAAAASUVORK5CYII=",p0=""+new URL("../assets/postgresql.55z_ov62.svg",import.meta.url).href,w0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20756.26%20596.9'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%231d63ed;%20stroke-width:%200px;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='M743.96,245.25c-18.54-12.48-67.26-17.81-102.68-8.27-1.91-35.28-20.1-65.01-53.38-90.95l-12.32-8.27-8.21,12.4c-16.14,24.5-22.94,57.14-20.53,86.81,1.9,18.28,8.26,38.83,20.53,53.74-46.1,26.74-88.59,20.67-276.77,20.67H.06c-.85,42.49,5.98,124.23,57.96,190.77,5.74,7.35,12.04,14.46,18.87,21.31,42.26,42.32,106.11,73.35,201.59,73.44,145.66.13,270.46-78.6,346.37-268.97,24.98.41,90.92,4.48,123.19-57.88.79-1.05,8.21-16.54,8.21-16.54l-12.3-8.27ZM189.67,206.39h-81.7v81.7h81.7v-81.7ZM295.22,206.39h-81.7v81.7h81.7v-81.7ZM400.77,206.39h-81.7v81.7h81.7v-81.7ZM506.32,206.39h-81.7v81.7h81.7v-81.7ZM84.12,206.39H2.42v81.7h81.7v-81.7ZM189.67,103.2h-81.7v81.7h81.7v-81.7ZM295.22,103.2h-81.7v81.7h81.7v-81.7ZM400.77,103.2h-81.7v81.7h81.7v-81.7ZM400.77,0h-81.7v81.7h81.7V0Z'%20/%3e%3c/svg%3e",x0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20500%20500'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%234DABCF;%20}%20.cls-2%20{%20fill:%20%234D77CF;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1'%20data-name='Layer%201'%3e%3cpolygon%20class='cls-1'%20points='220.93%20127.14%20151.77%2092.23%2075.87%20130.11%20146.9%20165.78%20220.93%20127.14'%20/%3e%3cpolygon%20class='cls-1'%20points='252.63%20143.14%20325.14%20179.74%20249.91%20217.52%20178.77%20181.79%20252.63%20143.14'%20/%3e%3cpolygon%20class='cls-1'%20points='349.47%2092.76%20423.96%20130.11%20357.34%20163.57%20284.68%20126.92%20349.47%2092.76'%20/%3e%3cpolygon%20class='cls-1'%20points='317.41%2076.67%20250.35%2043.05%20184.01%2076.15%20253.11%20111%20317.41%2076.67'%20/%3e%3cpolygon%20class='cls-1'%20points='264.98%20365.44%20264.98%20456.95%20346.22%20416.41%20346.13%20324.86%20264.98%20365.44'%20/%3e%3cpolygon%20class='cls-1'%20points='346.1%20292.91%20346.01%20202.32%20264.98%20242.6%20264.98%20333.22%20346.1%20292.91'%20/%3e%3cpolygon%20class='cls-1'%20points='443.63%20275.93%20443.63%20367.8%20374.34%20402.38%20374.29%20310.93%20443.63%20275.93'%20/%3e%3cpolygon%20class='cls-1'%20points='443.63%20243.81%20443.63%20153.79%20374.21%20188.3%20374.27%20279.07%20443.63%20243.81'%20/%3e%3cpath%20class='cls-2'%20d='M236.3,242.6l-54.72-27.51V334s-66.92-142.39-73.12-155.18c-.8-1.65-4.09-3.46-4.93-3.9-12-6.3-47.16-24.11-47.16-24.11V360.89l48.64,26V277.08s66.21,127.23,66.88,128.62,7.32,14.8,14.42,19.51c9.46,6.26,50,30.64,50,30.64Z'%20/%3e%3c/g%3e%3c/svg%3e",C0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%20210.21%20280.43'%20version='1.1'%20sodipodi:docname='pandas_mark_white.svg'%20inkscape:version='0.92.4%20(unknown)'%3e%3cmetadata%20id='metadata27'%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:format%3eimage/svg+xml%3c/dc:format%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'%20/%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3csodipodi:namedview%20pagecolor='%23ffffff'%20bordercolor='%23666666'%20borderopacity='1'%20objecttolerance='10'%20gridtolerance='10'%20guidetolerance='10'%20inkscape:pageopacity='0'%20inkscape:pageshadow='2'%20inkscape:window-width='761'%20inkscape:window-height='480'%20id='namedview25'%20showgrid='false'%20inkscape:zoom='0.84156476'%20inkscape:cx='105.105'%20inkscape:cy='140.215'%20inkscape:window-x='0'%20inkscape:window-y='0'%20inkscape:window-maximized='0'%20inkscape:current-layer='Layer_1'%20/%3e%3cdefs%20id='defs4'%3e%3cstyle%20id='style2'%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2348e5ac;%20}%20.cls-3%20{%20fill:%20%23e70488;%20}%20%3c/style%3e%3c/defs%3e%3ctitle%20id='title6'%3eArtboard%2061%20copy%3c/title%3e%3crect%20class='cls-1'%20x='74.51'%20y='43.03'%20width='24.09'%20height='50.02'%20id='rect8'%20/%3e%3crect%20class='cls-1'%20x='74.51'%20y='145.78'%20width='24.09'%20height='50.02'%20id='rect10'%20/%3e%3crect%20class='cls-2'%20x='74.51'%20y='107.65'%20width='24.09'%20height='23.6'%20id='rect12'%20style='fill:%23ffca00;fill-opacity:1'%20/%3e%3crect%20class='cls-1'%20x='35.81'%20y='84.15'%20width='24.09'%20height='166.27'%20id='rect14'%20/%3e%3crect%20class='cls-1'%20x='112.41'%20y='187.05'%20width='24.09'%20height='50.02'%20id='rect16'%20/%3e%3crect%20class='cls-1'%20x='112.41'%20y='84.21'%20width='24.09'%20height='50.02'%20id='rect18'%20/%3e%3crect%20class='cls-3'%20x='112.41'%20y='148.84'%20width='24.09'%20height='23.6'%20id='rect20'%20/%3e%3crect%20class='cls-1'%20x='150.3'%20y='30'%20width='24.09'%20height='166.27'%20id='rect22'%20/%3e%3c/svg%3e",k0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2017.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0.6%201067.9%2090.3%20109.1'%20enable-background='new%200.6%201067.9%2090.3%20109.1'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='%23EE4C2C'%20d='M77.6,1099.6l-8.1,8.1c13.3,13.3,13.3,34.7,0,47.8c-13.3,13.3-34.7,13.3-47.8,0%20c-13.3-13.3-13.3-34.7,0-47.8l0,0l21.1-21.1l3-3l0,0v-15.9l-31.8,31.8c-17.7,17.7-17.7,46.3,0,64c17.7,17.7,46.3,17.7,63.7,0%20C95.3,1145.8,95.3,1117.4,77.6,1099.6z'%20/%3e%3ccircle%20fill='%23EE4C2C'%20cx='61.7'%20cy='1091.8'%20r='5.9'%20/%3e%3c/g%3e%3c/svg%3e",y0=""+new URL("../assets/matplotlib.Bltm2ICz.svg",import.meta.url).href;var b0=B('<div class="w-full flex flex-col gap-2"><div class="skeleton h-32 w-full"></div> <div class="skeleton h-4 w-1/2"></div> <div class="skeleton h-4 w-full"></div> <div class="skeleton h-4 w-full"></div> <div class="skeleton h-4 w-full"></div></div>');function X(r){var e=b0();y(r,e)}var B0=B('<li class="list-row font-semibold"> <div class="list-col-wrap flex flex-row flex-wrap gap-1 sm:gap-2"><!></div></li>');function q(r,e){var t=B0(),a=b(t),i=c(a),o=b(i);G(o,()=>e.children),C(i),C(t),P(()=>Q(a,`${e.title??""} `)),y(r,t)}var D0=B(`<div class="avatar float-right"><div class="mask mask-hexagon opacity-80 w-30 sm:w-48"><img alt="profile"></div></div> <div class="text-justify indent-6 sm:indent-12">I'm a mechanical engineer - who previously chose the path of
                economics - with honed skills in programming; especially in <!> & <!>. By combining these
                skills with my engineering expertise, I can move beyond siloed
                thinking and deliver high-quality results across both
                disciplines.</div> <div class="text-justify indent-6 sm:indent-12">So, if you have interesting projects or potential business
                inquiries, feel free to contact me.</div>`,1),_0=B("<!> <!> <!> <!> <!> <!>",1),E0=B("<!> <!> <!>",1),L0=B("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),S0=B('<ul class="list"><!> <!> <!></ul>'),M0=B('<ul class="list sm:text-lg"><!> <!> <!></ul>'),F0=B("<!> <!> <!>",1),H0=B("<!> <!> <!> <!>",1),T0=B("<h1>Soon to be updated!</h1>"),R0=B("<!> <!> <!>",1);function X0(r){var e=R0();G2(o=>{X2.title="Fatih Demircan"});var t=F(e);N(t,{id:"about_me",children:(o,d)=>{l2(o,{id:"about_me",length:3,children:(f,w)=>{var h=F0(),s=F(h);U(s,{id:"about_me_0",title:"Who I Am",children:(g,l)=>{var A=D0(),k=F(A),v=b(k),p=b(v);V(p,"src",a0),C(v),C(k);var D=c(k,2),_=c(b(D));u(_,{src:v2,name:"Rust"});var x=c(_,2);u(x,{src:f2,name:"Python"}),i2(),C(D),i2(2),y(g,A)}});var m=c(s,2);U(m,{id:"about_me_1",title:"What I Use",children:(g,l)=>{var A=S0(),k=b(A);q(k,{title:"Applications",children:(D,_)=>{var x=_0(),L=F(x);u(L,{src:u0,name:"SolidEdge"});var E=c(L,2);u(E,{src:m0,name:"FreeCAD"});var S=c(E,2);u(S,{src:n0,name:"Abaqus"});var T=c(S,2);u(T,{src:w0,name:"Docker"});var R=c(T,2);u(R,{src:p0,name:"PostgreSQL"});var I=c(R,2);u(I,{src:A0,name:"KiCad"}),y(D,x)}});var v=c(k,2);q(v,{title:"Languages",children:(D,_)=>{var x=E0(),L=F(x);u(L,{src:v2,name:"Rust"});var E=c(L,2);u(E,{src:f2,name:"Python"});var S=c(E,2);u(S,{src:f0,name:"TypeScript"}),y(D,x)}});var p=c(v,2);q(p,{title:"Packages / Frameworks",children:(D,_)=>{var x=L0(),L=F(x);u(L,{src:c0,name:"Actix Web"});var E=c(L,2);u(E,{src:v0,name:"Diesel"});var S=c(E,2);u(S,{src:l0,name:"Embassy"});var T=c(S,2);u(T,{src:i0,name:"FEniCS"});var R=c(T,2);u(R,{src:y0,name:"matplotlib"});var I=c(R,2);u(I,{src:d2,name:"ndarray"});var Y=c(I,2);u(Y,{src:x0,name:"NumPy"});var j=c(Y,2);u(j,{src:C0,name:"pandas"});var $=c(j,2);u($,{src:k0,name:"PyTorch"});var e2=c($,2);u(e2,{src:d2,name:"SQLx"});var t2=c(e2,2);u(t2,{src:g0,name:"Svelte"});var r2=c(t2,2);u(r2,{src:h0,name:"TailwindCSS"});var s2=c(r2,2);u(s2,{src:o0,name:"daisyUI"});var A2=c(s2,2);u(A2,{src:d0,name:"Tauri"}),y(D,x)}}),C(A),y(g,A)}});var n=c(m,2);U(n,{id:"about_me_2",title:"My Background",children:(g,l)=>{var A=M0(),k=b(A);O(k,{degree:"Mechanical Engineering, M.Sc.",university:"Technical University Braunschweig"});var v=c(k,2);O(v,{degree:"Mechanical Engineering, B.Sc.",university:"Technical University Braunschweig"});var p=c(v,2);O(p,{degree:"Economics,B.Sc.",university:"University of Cologne"}),C(A),y(g,A)}}),y(f,h)},$$slots:{default:!0}})}});var a=c(t,2);N(a,{id:"portfolio",children:(o,d)=>{l2(o,{id:"portfolio",length:4,children:(f,w)=>{var h=H0(),s=F(h);U(s,{id:"portfolio_0",title:"Soon to be updated!",children:(l,A)=>{X(l)}});var m=c(s,2);U(m,{id:"portfolio_1",title:"Soon to be updated!",children:(l,A)=>{X(l)}});var n=c(m,2);U(n,{id:"portfolio_2",title:"Soon to be updated!",children:(l,A)=>{X(l)}});var g=c(n,2);U(g,{id:"portfolio_3",title:"Soon to be updated!",children:(l,A)=>{X(l)}}),y(f,h)},$$slots:{default:!0}})}});var i=c(a,2);N(i,{id:"contact",children:(o,d)=>{var f=T0();y(o,f)}}),y(r,e)}export{X0 as component};
