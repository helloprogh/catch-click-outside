!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("core-js/modules/es7.symbol.async-iterator"),require("core-js/modules/es6.symbol"),require("core-js/modules/web.dom.iterable"),require("core-js/modules/es6.array.iterator"),require("core-js/modules/es6.object.to-string"),require("core-js/modules/es6.object.keys")):"function"==typeof define&&define.amd?define(["core-js/modules/es7.symbol.async-iterator","core-js/modules/es6.symbol","core-js/modules/web.dom.iterable","core-js/modules/es6.array.iterator","core-js/modules/es6.object.to-string","core-js/modules/es6.object.keys"],r):(e=e||self)["click-outside"]=r()}(this,function(){"use strict";var s={eventInstances:[]};console.log(s);var r={bind:function(r,o){function e(e){if(r.contains(e.target))return!1;o.expression&&o.value(e)}var t={el:r,documentHandler:e};s.push(t),document.addEventListener("click",e,!0)},unbind:function(e){var r=function(e,r){if(!e)return-1;for(var o=e.length,t=Object.keys(r),s=0;s<o;s++){var n=e[s],i=!0,c=!0,u=!1,l=void 0;try{for(var d,a=t[Symbol.iterator]();!(c=(d=a.next()).done);c=!0){var m=d.value;n[m]!==r[m]&&(i=!1)}}catch(e){u=!0,l=e}finally{try{c||null==a.return||a.return()}finally{if(u)throw l}}if(i)return s}return-1}(s,{el:e}),o=s[r];document.removeEventListener("click",o.documentHandler,!0),s.splice(r,1)}};return{install:function(e){e.directive("click-outside",r)},directive:r}});
