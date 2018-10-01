// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),a=e.slice(1);return"".concat(o).concat(a)}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?"".concat(n(e)," ").concat(e):e},e)},a=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,a=[],i=n.exec(e);null!==i;){var u={modifiers:[],name:i[1]};if(void 0!==i[3])for(var c=/\\.[^(]+\\(\\)/g,s=c.exec(i[2]);null!==s;)u.modifiers.push(s[0].slice(1,-2)),s=c.exec(i[2]);a.push(u),i=n.exec(e)}var f=a.reduce(function(e,n){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\.".concat(e,"\\\\(\\\\)")}).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(n)).reduce(function(e,a,i){return 0===i?[a]:n.name in r?t(e).concat([o(r[n.name],n.modifiers),a]):t(e).concat([function(e){return o(e[n.name],n.modifiers)},a])},[]):[e]}).reduce(function(e,r){return t(e).concat(t(r))},[])},[e]);return function(e){return f.reduce(function(r,n){return"string"==typeof n?t(r).concat([n]):t(r).concat([n(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:a(e.code,t),n=void 0===e.message?void 0:a(e.message,t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},i=a.cause,u=a.missingParameters,c=void 0===n?new Error:new Error(n(u));return null!==i&&(c.cause=i),void 0!==r&&(c.code=r(u)),void 0!==e.status&&(c.status=e.status),c}},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(2),r(6),r(7))},function(e,t,r){!function(e){"use strict";var t=new WeakMap,r=Number.MAX_SAFE_INTEGER||9007199254740991,n=function(e,r){return t.set(e,r),r},o=function(e){var o=t.get(e),a=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(a))return n(e,a);if(e.size<1073741824){for(;e.has(a);)a=Math.floor(2147483648*Math.random());return n(e,a)}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(a);)a=Math.floor(Math.random()*r);return n(e,a)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(3),o=r(4),a=r(5);e.exports=function(e){return n(e)||o(e)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t){var r=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var i=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<i.length;t++)if(o.match(i[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e&&void 0!==e.exports?e.exports=r:window.indefiniteArticle=r},function(e,t,r){"use strict";r.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function u(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,u)}c((n=n.apply(e,t||[])).next())})}function a(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var i=r(0),u=-32603,c=-32602,s=-32601,f=Object(i.compile)({message:'The requested method called "\${method}" is not supported.',status:s}),l=Object(i.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:u}),d=Object(i.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:u}),p=Object(i.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:c}),h=r(1),v=new Map,m=function(e,t,r){return n({},t,{connect:function(r){var n=r.port;n.start();var o=e(n,t),a=Object(h.generateUniqueNumber)(v);return v.set(a,function(){o(),n.close(),v.delete(a)}),{result:a}},disconnect:function(e){var t=e.portId,r=v.get(t);if(void 0===r)throw p({portId:t.toString()});return r(),{result:null}},isSupported:function(e){return o(void 0,void 0,void 0,function(){var e,t;return a(this,function(n){switch(n.label){case 0:return[4,new Promise(function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])})];case 1:return n.sent()?(e=r())instanceof Promise?[4,e]:[3,3]:[3,5];case 2:return t=n.sent(),[3,4];case 3:t=e,n.label=4;case 4:return[2,{result:t}];case 5:return[2,{result:!1}]}})})}})};!function e(t,r,n){void 0===n&&(n=function(){return!0});var i=m(e,r,n),u=function(e,t){return function(r){var n=r.data,i=n.id,u=n.method,c=n.params;return o(void 0,void 0,void 0,function(){var r,n,o,s,p,h,v,m,g,b,y,w,x;return a(this,function(a){switch(a.label){case 0:r=t[u],a.label=1;case 1:if(a.trys.push([1,5,,6]),void 0===r)throw f({method:u});if(void 0===(n=r(c)))throw l({method:u});return n instanceof Promise?[4,n]:[3,3];case 2:return s=a.sent(),[3,4];case 3:s=n,a.label=4;case 4:if(o=s,null===i){if(void 0!==o.result)throw d({method:u})}else{if(void 0===o.result)throw d({method:u});h=(p=o).result,v=p.transferables,m=void 0===v?[]:v,e.postMessage({id:i,result:h},m)}return[3,6];case 5:return g=a.sent(),y=(b=g).message,w=b.status,x=void 0===w?-32603:w,e.postMessage({error:{code:x,message:y},id:i}),[3,6];case 6:return[2]}})})}}(t,i);return t.addEventListener("message",u),function(){return t.removeEventListener("message",u)}}(self,{allocate:({length:e})=>{const t=(e=>new ArrayBuffer(e))(e);return{result:t,transferables:[t]}},deallocate:()=>({result:void 0})})}]);`;
