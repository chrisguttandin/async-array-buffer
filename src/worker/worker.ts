// tslint:disable-next-line:max-line-length
export const worker = `!function(){"use strict";var e=function(e){return new ArrayBuffer(e)};addEventListener("message",function(r){var a=r.data;try{if("allocate"===a.method){var s=a.id,t=a.params.length,n=e(t);postMessage({error:null,id:s,result:{arrayBuffer:n}},[n])}else a.method}catch(e){postMessage({error:{message:e.message},id:a.id,result:null})}})}();`;
