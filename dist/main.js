(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root{\n    --sidebar-bg: #19388f;\n    --sidebar-bg2: #144be1;\n    --sidebar-text: #00e7b5;\n    --content-bg: #eef6ff;\n    --content-bg2: #d9eaff;\n    --main-bg: #c0dce1;\n    --completed: #72ff9e;\n    --high-priority: #ff9e9e;\n    --low-prority: #f8fafc;\n    --med-priority: #fcff9e;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* body */\nbody {\n    font-family: 'Space Mono', monospace;\n}\n\n/* main */\n#main {\n    background-color: var(--main-bg);\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    padding: 5px;\n    height: 100svh;\n    gap: 8px;\n}\n\n/* sidebar */\n#sidebar {\n    background: linear-gradient(135deg, var(--sidebar-bg) 0%, var(--sidebar-bg2) 100%);\n    color: var(--sidebar-text);\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4rem;\n    border-radius: .75rem;\n    overflow: hidden;\n    min-width: max-content;\n    box-shadow: 0 5px 10px 0px black;\n}\n\n.sidebar-title {\n    min-width: max-content;\n    font-family: 'Pacifico', cursive;\n}\n\n.sidebar-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#sidebar .project-title {\n    list-style: circle;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n#sidebar .project-title.active {\n    /* bold */\n    font-weight: 600;\n    text-decoration: underline;\n}\n\n/* main content */\n#content {\n    padding: 2rem;\n    background: linear-gradient(135deg, var(--content-bg) 0%, var(--content-bg2) 100%);\n    border-radius: .75rem;\n    overflow: hidden;\n    box-shadow: 0 5px 10px 0px black;\n}\n\n.content-main {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenlyw;\n    gap: 3rem;\n    padding: 2rem;\n    text-align: center;\n}\n\n.content-area {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    justify-content: space-between;\n}\n\n\n.task-card {\n    background-color: var(--content-bg2);\n    border: 1px solid var(--content-bg);\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n    gap: 1rem;\n    border-radius: .75rem;\n}\n\n.task-info-display {\n    width: 100%;\n    display: flex;\n    gap: .5rem;\n    justify-content: space-between;\n}\n\n.task-info-editable {\n    width: 100%;\n}\n\n.task-info-editable form{\n    width: 100%;\n    display: flex;\n    gap: .5rem;\n    justify-content: space-between;\n}\n\n.task-info-editable .form-input {\n    display: flex;\n    gap: .5rem;\n}\n\ninput {\n    border: none;\n    border-bottom: 1px solid var(--content-bg);\n    font-size: 1rem;\n    padding: .5rem;\n    border-radius: .5rem;\n}\n\n.task-card .title {\n    font-size: 1rem;\n    font-weight: 600;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-card .other-contents{\n    font-size: .75rem;\n}\n\n.task-card.high-prio {\n    background-color: var(--high-priority);\n}\n\n.task-card.low-prio {\n    background-color: var(--low-prority);\n}\n\n.task-card.med-prio {\n    background-color: var(--med-priority);\n}\n\n.task-card.completed {\n    background-color: var(--completed);\n}\n\n/* forms */\n.hidden {\n    display: none;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,oBAAoB;IACpB,wBAAwB;IACxB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA,SAAS;AACT;IACI,oCAAoC;AACxC;;AAEA,SAAS;AACT;IACI,gCAAgC;IAChC,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,cAAc;IACd,QAAQ;AACZ;;AAEA,YAAY;AACZ;IACI,kFAAkF;IAClF,0BAA0B;IAC1B,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,qBAAqB;IACrB,gBAAgB;IAChB,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,kFAAkF;IAClF,qBAAqB;IACrB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;IACT,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,8BAA8B;AAClC;;;AAGA;IACI,oCAAoC;IACpC,mCAAmC;IACnC,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,0CAA0C;IAC1C,eAAe;IACf,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA,UAAU;AACV;IACI,aAAa;AACjB",sourcesContent:[":root{\n    --sidebar-bg: #19388f;\n    --sidebar-bg2: #144be1;\n    --sidebar-text: #00e7b5;\n    --content-bg: #eef6ff;\n    --content-bg2: #d9eaff;\n    --main-bg: #c0dce1;\n    --completed: #72ff9e;\n    --high-priority: #ff9e9e;\n    --low-prority: #f8fafc;\n    --med-priority: #fcff9e;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* body */\nbody {\n    font-family: 'Space Mono', monospace;\n}\n\n/* main */\n#main {\n    background-color: var(--main-bg);\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    padding: 5px;\n    height: 100svh;\n    gap: 8px;\n}\n\n/* sidebar */\n#sidebar {\n    background: linear-gradient(135deg, var(--sidebar-bg) 0%, var(--sidebar-bg2) 100%);\n    color: var(--sidebar-text);\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4rem;\n    border-radius: .75rem;\n    overflow: hidden;\n    min-width: max-content;\n    box-shadow: 0 5px 10px 0px black;\n}\n\n.sidebar-title {\n    min-width: max-content;\n    font-family: 'Pacifico', cursive;\n}\n\n.sidebar-projects {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n#sidebar .project-title {\n    list-style: circle;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n#sidebar .project-title.active {\n    /* bold */\n    font-weight: 600;\n    text-decoration: underline;\n}\n\n/* main content */\n#content {\n    padding: 2rem;\n    background: linear-gradient(135deg, var(--content-bg) 0%, var(--content-bg2) 100%);\n    border-radius: .75rem;\n    overflow: hidden;\n    box-shadow: 0 5px 10px 0px black;\n}\n\n.content-main {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenlyw;\n    gap: 3rem;\n    padding: 2rem;\n    text-align: center;\n}\n\n.content-area {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    justify-content: space-between;\n}\n\n\n.task-card {\n    background-color: var(--content-bg2);\n    border: 1px solid var(--content-bg);\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n    gap: 1rem;\n    border-radius: .75rem;\n}\n\n.task-info-display {\n    width: 100%;\n    display: flex;\n    gap: .5rem;\n    justify-content: space-between;\n}\n\n.task-info-editable {\n    width: 100%;\n}\n\n.task-info-editable form{\n    width: 100%;\n    display: flex;\n    gap: .5rem;\n    justify-content: space-between;\n}\n\n.task-info-editable .form-input {\n    display: flex;\n    gap: .5rem;\n}\n\ninput {\n    border: none;\n    border-bottom: 1px solid var(--content-bg);\n    font-size: 1rem;\n    padding: .5rem;\n    border-radius: .5rem;\n}\n\n.task-card .title {\n    font-size: 1rem;\n    font-weight: 600;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.task-card .other-contents{\n    font-size: .75rem;\n}\n\n.task-card.high-prio {\n    background-color: var(--high-priority);\n}\n\n.task-card.low-prio {\n    background-color: var(--low-prority);\n}\n\n.task-card.med-prio {\n    background-color: var(--med-priority);\n}\n\n.task-card.completed {\n    background-color: var(--completed);\n}\n\n/* forms */\n.hidden {\n    display: none;\n}"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var C=o(f,r);r.byIndex=A,e.splice(A,0,{identifier:l,updater:C,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var s=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{constructor(n,e,t,r,o,a,i){this.id=Math.floor(1e5*Math.random()),this.project=n,this.title=e,this.description=t,this.dueDate=r,this.priority=o,this.notes=a,this.checkList=i}}class e{constructor(){this.tasks=[]}getTaskById(n){return this.tasks.find((e=>e.id===n))}getAll(){return this.tasks}getTaskIndex(n){return this.tasks.findIndex((e=>e.id===n.id))}}var r=t(379),o=t.n(r),a=t(795),i=t.n(a),A=t(569),s=t.n(A),c=t(565),d=t.n(c),l=t(216),p=t.n(l),f=t(589),C=t.n(f),u=t(426),g={};g.styleTagTransform=C(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const b=new class{constructor(){this.projects={}}saveTask(t){if(t instanceof n){this.projects[t.project]||(this.projects[t.project]=new e);const n=this.projects[t.project];n.getTaskById(t.id)||n.tasks.push(t)}}updateTask(n){const e=this.projects[n.project],t=e.getTaskIndex(n);-1!==t&&(e.tasks[t]=n)}deleteTask(n){const e=this.projects[n.project],t=e.getTaskIndex(n);-1!==t&&e.tasks.splice(t,1)}},m=new n("project1","title1","description1","dueDate1","priority1","notes1","checkList1");b.saveTask(m),console.log(b),m.title="task2",b.updateTask(m),console.log(b);const I=new n("project2","title2","description2","dueDate2","priority2","notes2","checkList2");b.saveTask(I),console.log(b);const B=new n("project2","title3","description3","dueDate3","priority3","notes3","checkList3");b.saveTask(B),console.log(b)})()})();
//# sourceMappingURL=main.js.map