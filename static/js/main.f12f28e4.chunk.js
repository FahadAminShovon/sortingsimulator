(this["webpackJsonpsort-simulator"]=this["webpackJsonpsort-simulator"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),c=(n(11),n(12),n(1)),s=n.n(c),i=n(5),u=n(2),m=(n(14),function(e){for(var t=[],n=0;n<e.length-1;n++){for(var a=n,r=n,o=n+1;o<e.length;o++){e[o]<=e[a]&&(r=a,a=o);var l={start:n,minIndex:a,oldMinIndex:r,iter:o};t.push(l)}var c={start:n,minIndex:a,startVal:e[n],minVal:e[a]};e[n]=e[a],e[a]=c.startVal,t.push(c),console.log(t.length)}return{animations:t,swap:[]}}),d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(!1),c=Object(u.a)(l,2),d=c[0],g=c[1],b=function(){for(var e,t,n=[],a=0;a<50;a++)n.push((e=5,t=800,Math.floor(Math.random()*(t-e)+e)));o(n);for(var r=document.getElementsByClassName("array-item"),l=0;l<r.length;l++)r[l].style.backgroundColor="rgb(15, 117, 117)"},f=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,r,o,l,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(!0);case 2:for(t=document.getElementsByClassName("array-item"),a=m(n),r=a.animations,o=n.length-1,l=o,c=0;c<r.length;c++)c===o?function(){var e=r[c],a=e.start,s=e.minIndex,i=e.startVal,u=e.minVal;setTimeout((function(){t[a].style.height="".concat(u,"px"),t[a].style.backgroundColor="green",t[s].style.height="".concat(i,"px"),s!==a&&(t[s].style.backgroundColor="rgb(15, 117, 117)"),a===n.length-2&&(t[n.length-1].style.backgroundColor="green",g(!1))}),10*c),o+=l,l-=1}():function(){var e=r[c],a=e.start,o=e.minIndex,l=e.iter,s=e.oldMinIndex;setTimeout((function(){a===l-1&&(t[n.length-1].style.backgroundColor="rgb(15, 117, 117)"),t[a].style.backgroundColor="black",t[l].style.backgroundColor="red",0!==l&&(t[l-1].style.backgroundColor="rgb(15, 117, 117)"),s!==a&&(t[s].style.backgroundColor="rgb(15, 117, 117)"),t[o].style.backgroundColor="blue"}),10*c)}();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){b()}),[]),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"d-flex m-5"},r.a.createElement("button",{disabled:d,className:"btn btn-primary ",onClick:b},"Reset"),r.a.createElement("div",{className:"mr-auto"}),r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{disabled:d,type:"button",onClick:f,className:"btn btn-primary"},"Selection Sort"))),r.a.createElement("div",{className:"d-flex justify-content-center align-items-end flex-wrap array-container"},n.map((function(e,t){return r.a.createElement("div",{key:t,className:"array-item",style:{height:"".concat(e,"px"),color:"rgb(15, 117, 117)"}})}))))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.f12f28e4.chunk.js.map