// This is the minified and stringified code of the async-array-buffer-worker package.
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(t),a=o(r),u=o(n),s=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?a.default(e):"prependIndefiniteArticle"===t?"".concat(u.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},f=function(e,t){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var a={modifiers:[],name:o[1]};if(void 0!==o[3])for(var u=/\\.[^(]+\\(\\)/g,f=u.exec(o[2]);null!==f;)a.modifiers.push(f[0].slice(1,-2)),f=u.exec(o[2]);n.push(a),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(c(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(i.default(e),[s(t[r.name],r.modifiers),n]):[].concat(i.default(e),[function(e){return s(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(i.default(e),i.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(i.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:f(e.code,t),n=void 0===e.message?void 0:f(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=i.cause,u=i.missingParameters,s=void 0===n?new Error:new Error(n(u));return null!==a&&(s.cause=a),void 0!==r&&(s.code=r(u)),void 0!==e.status&&(s.status=e.status),s}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(3),r(8),r(9))},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t,r){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,i=2*o,a=function(e,t){return function(r){var a=t.get(r),u=void 0===a?r.size:a<i?a+1:0;if(!r.has(u))return e(r,u);if(r.size<o){for(;r.has(u);)u=Math.floor(Math.random()*i);return e(r,u)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(u);)u=Math.floor(Math.random()*n);return e(r,u)}},u=new WeakMap,s=r(u),c=a(s,u),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(4),o=r(5),i=r(6),a=r(7);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},function(e,t,r){var n=r(1);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,r){var n=r(1);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},function(e,t,r){var n=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t,r){"use strict";r.r(t);var n=r(0);const o=-32603,i=-32602,a=-32601,u=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),s=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),c=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i});var d=r(2);const l=new Map,p=(e,t,r)=>({...t,connect:({port:r})=>{r.start();const n=e(r,t),o=Object(d.generateUniqueNumber)(l);return l.set(o,(()=>{n(),r.close(),l.delete(o)})),{result:o}},disconnect:({portId:e})=>{const t=l.get(e);if(void 0===t)throw f({portId:e.toString()});return t(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),m=(e,t,r=(()=>!0))=>{const n=p(m,t,r),o=((e,t)=>async({data:{id:r,method:n,params:o}})=>{const i=t[n];try{if(void 0===i)throw u({method:n});const t=void 0===o?i():i(o);if(void 0===t)throw s({method:n});const a=t instanceof Promise?await t:t;if(null===r){if(void 0!==a.result)throw c({method:n})}else{if(void 0===a.result)throw c({method:n});const{result:t,transferables:o=[]}=a;e.postMessage({id:r,result:t},o)}}catch(t){const{message:n,status:o=-32603}=t;e.postMessage({error:{code:o,message:n},id:r})}})(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)};m(self,{allocate:({length:e})=>{const t=(e=>new ArrayBuffer(e))(e);return{result:t,transferables:[t]}},deallocate:()=>({result:void 0})})}]);`; // tslint:disable-line:max-line-length
