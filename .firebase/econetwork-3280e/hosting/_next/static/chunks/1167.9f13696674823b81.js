(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1167],{18552:function(t,e,n){var r=n(10852)(n(55639),"DataView");t.exports=r},1989:function(t,e,n){var r=n(51789),o=n(80401),i=n(57667),s=n(21327),a=n(81866);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=s,u.prototype.set=a,t.exports=u},38407:function(t,e,n){var r=n(27040),o=n(14125),i=n(82117),s=n(67518),a=n(54705);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=s,u.prototype.set=a,t.exports=u},57071:function(t,e,n){var r=n(10852)(n(55639),"Map");t.exports=r},83369:function(t,e,n){var r=n(24785),o=n(11285),i=n(96e3),s=n(49916),a=n(95265);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=s,u.prototype.set=a,t.exports=u},53818:function(t,e,n){var r=n(10852)(n(55639),"Promise");t.exports=r},58525:function(t,e,n){var r=n(10852)(n(55639),"Set");t.exports=r},88668:function(t,e,n){var r=n(83369),o=n(90619),i=n(72385);function s(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}s.prototype.add=s.prototype.push=o,s.prototype.has=i,t.exports=s},46384:function(t,e,n){var r=n(38407),o=n(37465),i=n(63779),s=n(67599),a=n(44758),u=n(34309);function c(t){var e=this.__data__=new r(t);this.size=e.size}c.prototype.clear=o,c.prototype.delete=i,c.prototype.get=s,c.prototype.has=a,c.prototype.set=u,t.exports=c},62705:function(t,e,n){var r=n(55639).Symbol;t.exports=r},11149:function(t,e,n){var r=n(55639).Uint8Array;t.exports=r},70577:function(t,e,n){var r=n(10852)(n(55639),"WeakMap");t.exports=r},34963:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s)}return i}},14636:function(t,e,n){var r=n(22545),o=n(35694),i=n(1469),s=n(44144),a=n(65776),u=n(36719),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),p=!n&&o(t),f=!n&&!p&&s(t),l=!n&&!p&&!f&&u(t),h=n||p||f||l,d=h?r(t.length,String):[],v=d.length;for(var y in t)(e||c.call(t,y))&&!(h&&("length"==y||f&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,v)))&&d.push(y);return d}},62488:function(t){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},82908:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},18470:function(t,e,n){var r=n(77813);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return -1}},68866:function(t,e,n){var r=n(62488),o=n(1469);t.exports=function(t,e,n){var i=e(t);return o(t)?i:r(i,n(t))}},44239:function(t,e,n){var r=n(62705),o=n(89607),i=n(2333),s=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?o(t):i(t)}},9454:function(t,e,n){var r=n(44239),o=n(37005);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},90939:function(t,e,n){var r=n(2492),o=n(37005);t.exports=function t(e,n,i,s,a){return e===n||(null!=e&&null!=n&&(o(e)||o(n))?r(e,n,i,s,t,a):e!=e&&n!=n)}},2492:function(t,e,n){var r=n(46384),o=n(67114),i=n(18351),s=n(16096),a=n(64160),u=n(1469),c=n(44144),p=n(36719),f="[object Arguments]",l="[object Array]",h="[object Object]",d=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,y,g){var _=u(t),b=u(e),x=_?l:a(t),j=b?l:a(e);x=x==f?h:x,j=j==f?h:j;var E=x==h,m=j==h,O=x==j;if(O&&c(t)){if(!c(e))return!1;_=!0,E=!1}if(O&&!E)return g||(g=new r),_||p(t)?o(t,e,n,v,y,g):i(t,e,x,n,v,y,g);if(!(1&n)){var w=E&&d.call(t,"__wrapped__"),C=m&&d.call(e,"__wrapped__");if(w||C){var S=w?t.value():t,A=C?e.value():e;return g||(g=new r),y(S,A,n,v,g)}}return!!O&&(g||(g=new r),s(t,e,n,v,y,g))}},28458:function(t,e,n){var r=n(23560),o=n(15346),i=n(13218),s=n(80346),a=/^\[object .+?Constructor\]$/,u=Object.prototype,c=Function.prototype.toString,p=u.hasOwnProperty,f=RegExp("^"+c.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?f:a).test(s(t))}},38749:function(t,e,n){var r=n(44239),o=n(41780),i=n(37005),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!s[r(t)]}},280:function(t,e,n){var r=n(25726),o=n(86916),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},22545:function(t){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},7518:function(t){t.exports=function(t){return function(e){return t(e)}}},74757:function(t){t.exports=function(t,e){return t.has(e)}},14429:function(t,e,n){var r=n(55639)["__core-js_shared__"];t.exports=r},67114:function(t,e,n){var r=n(88668),o=n(82908),i=n(74757);t.exports=function(t,e,n,s,a,u){var c=1&n,p=t.length,f=e.length;if(p!=f&&!(c&&f>p))return!1;var l=u.get(t),h=u.get(e);if(l&&h)return l==e&&h==t;var d=-1,v=!0,y=2&n?new r:void 0;for(u.set(t,e),u.set(e,t);++d<p;){var g=t[d],_=e[d];if(s)var b=c?s(_,g,d,e,t,u):s(g,_,d,t,e,u);if(void 0!==b){if(b)continue;v=!1;break}if(y){if(!o(e,function(t,e){if(!i(y,e)&&(g===t||a(g,t,n,s,u)))return y.push(e)})){v=!1;break}}else if(!(g===_||a(g,_,n,s,u))){v=!1;break}}return u.delete(t),u.delete(e),v}},18351:function(t,e,n){var r=n(62705),o=n(11149),i=n(77813),s=n(67114),a=n(68776),u=n(21814),c=r?r.prototype:void 0,p=c?c.valueOf:void 0;t.exports=function(t,e,n,r,c,f,l){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!f(new o(t),new o(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var h=a;case"[object Set]":var d=1&r;if(h||(h=u),t.size!=e.size&&!d)break;var v=l.get(t);if(v)return v==e;r|=2,l.set(t,e);var y=s(h(t),h(e),r,c,f,l);return l.delete(t),y;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},16096:function(t,e,n){var r=n(10783),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,i,s,a){var u=1&n,c=r(t),p=c.length;if(p!=r(e).length&&!u)return!1;for(var f=p;f--;){var l=c[f];if(!(u?l in e:o.call(e,l)))return!1}var h=a.get(t),d=a.get(e);if(h&&d)return h==e&&d==t;var v=!0;a.set(t,e),a.set(e,t);for(var y=u;++f<p;){var g=t[l=c[f]],_=e[l];if(i)var b=u?i(_,g,l,e,t,a):i(g,_,l,t,e,a);if(!(void 0===b?g===_||s(g,_,n,i,a):b)){v=!1;break}y||(y="constructor"==l)}if(v&&!y){var x=t.constructor,j=e.constructor;x!=j&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof j&&j instanceof j)&&(v=!1)}return a.delete(t),a.delete(e),v}},31957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},10783:function(t,e,n){var r=n(68866),o=n(99551),i=n(3674);t.exports=function(t){return r(t,i,o)}},45050:function(t,e,n){var r=n(37019);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},10852:function(t,e,n){var r=n(28458),o=n(47801);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},89607:function(t,e,n){var r=n(62705),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=s.call(t);return r&&(e?t[a]=n:delete t[a]),o}},99551:function(t,e,n){var r=n(34963),o=n(70479),i=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,a=s?function(t){return null==t?[]:r(s(t=Object(t)),function(e){return i.call(t,e)})}:o;t.exports=a},64160:function(t,e,n){var r=n(18552),o=n(57071),i=n(53818),s=n(58525),a=n(70577),u=n(44239),c=n(80346),p="[object Map]",f="[object Promise]",l="[object Set]",h="[object WeakMap]",d="[object DataView]",v=c(r),y=c(o),g=c(i),_=c(s),b=c(a),x=u;(r&&x(new r(new ArrayBuffer(1)))!=d||o&&x(new o)!=p||i&&x(i.resolve())!=f||s&&x(new s)!=l||a&&x(new a)!=h)&&(x=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?c(n):"";if(r)switch(r){case v:return d;case y:return p;case g:return f;case _:return l;case b:return h}return e}),t.exports=x},47801:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},51789:function(t,e,n){var r=n(94536);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},80401:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},57667:function(t,e,n){var r=n(94536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},21327:function(t,e,n){var r=n(94536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},81866:function(t,e,n){var r=n(94536);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},65776:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},37019:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},15346:function(t,e,n){var r,o=n(14429),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},25726:function(t){var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor,r="function"==typeof n&&n.prototype||e;return t===r}},27040:function(t){t.exports=function(){this.__data__=[],this.size=0}},14125:function(t,e,n){var r=n(18470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},82117:function(t,e,n){var r=n(18470);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},67518:function(t,e,n){var r=n(18470);t.exports=function(t){return r(this.__data__,t)>-1}},54705:function(t,e,n){var r=n(18470);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},24785:function(t,e,n){var r=n(1989),o=n(38407),i=n(57071);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},11285:function(t,e,n){var r=n(45050);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},96e3:function(t,e,n){var r=n(45050);t.exports=function(t){return r(this,t).get(t)}},49916:function(t,e,n){var r=n(45050);t.exports=function(t){return r(this,t).has(t)}},95265:function(t,e,n){var r=n(45050);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},68776:function(t){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}},94536:function(t,e,n){var r=n(10852)(Object,"create");t.exports=r},86916:function(t,e,n){var r=n(5569)(Object.keys,Object);t.exports=r},31167:function(t,e,n){t=n.nmd(t);var r=n(31957),o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,s=i&&i.exports===o&&r.process,a=function(){try{var t=i&&i.require&&i.require("util").types;if(t)return t;return s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=a},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:function(t){t.exports=function(t,e){return function(n){return t(e(n))}}},55639:function(t,e,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},90619:function(t){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},72385:function(t){t.exports=function(t){return this.__data__.has(t)}},21814:function(t){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}},37465:function(t,e,n){var r=n(38407);t.exports=function(){this.__data__=new r,this.size=0}},63779:function(t){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},67599:function(t){t.exports=function(t){return this.__data__.get(t)}},44758:function(t){t.exports=function(t){return this.__data__.has(t)}},34309:function(t,e,n){var r=n(38407),o=n(57071),i=n(83369);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var s=n.__data__;if(!o||s.length<199)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(s)}return n.set(t,e),this.size=n.size,this}},80346:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},77813:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},35694:function(t,e,n){var r=n(9454),o=n(37005),i=Object.prototype,s=i.hasOwnProperty,a=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&s.call(t,"callee")&&!a.call(t,"callee")};t.exports=u},1469:function(t){var e=Array.isArray;t.exports=e},98612:function(t,e,n){var r=n(23560),o=n(41780);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},44144:function(t,e,n){t=n.nmd(t);var r=n(55639),o=n(95062),i=e&&!e.nodeType&&e,s=i&&t&&!t.nodeType&&t,a=s&&s.exports===i?r.Buffer:void 0,u=a?a.isBuffer:void 0;t.exports=u||o},18446:function(t,e,n){var r=n(90939);t.exports=function(t,e){return r(t,e)}},23560:function(t,e,n){var r=n(44239),o=n(13218);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},41780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},13218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},36719:function(t,e,n){var r=n(38749),o=n(7518),i=n(31167),s=i&&i.isTypedArray,a=s?o(s):r;t.exports=a},3674:function(t,e,n){var r=n(14636),o=n(280),i=n(98612);t.exports=function(t){return i(t)?r(t):o(t)}},70479:function(t){t.exports=function(){return[]}},95062:function(t){t.exports=function(){return!1}},71167:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),o=0,e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},u=a(n(67294)),c=a(n(73935)),p=a(n(18446)),f=a(n(76095)),l=function(t){function e(e){var n=t.call(this,e)||this;n.dirtyProps=["modules","formats","bounds","theme","children"],n.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],n.state={generation:0},n.selection=null,n.onEditorChange=function(t,e,r,o){var i,s;"text-change"===t?null===(i=n.onEditorChangeText)||void 0===i||i.call(n,n.editor.root.innerHTML,e,o,n.unprivilegedEditor):"selection-change"===t&&(null===(s=n.onEditorChangeSelection)||void 0===s||s.call(n,e,o,n.unprivilegedEditor))};var r=n.isControlled()?e.value:e.defaultValue;return n.value=null!=r?r:"",n}return o(e,t),e.prototype.validateProps=function(t){if(u.default.Children.count(t.children)>1)throw Error("The Quill editing area can only be composed of a single React element.");if(u.default.Children.count(t.children)){var e=u.default.Children.only(t.children);if((null==e?void 0:e.type)==="textarea")throw Error("Quill does not support editing on a <textarea>. Use a <div> instead.")}if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")},e.prototype.shouldComponentUpdate=function(t,e){var n,r=this;if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){var o=this.getEditorContents(),i=null!=(n=t.value)?n:"";this.isEqualValue(i,o)||this.setEditorContents(this.editor,i)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),s(this.cleanProps,this.dirtyProps).some(function(e){return!p.default(t[e],r.props[e])})},e.prototype.shouldComponentRegenerate=function(t){var e=this;return this.dirtyProps.some(function(n){return!p.default(t[n],e.props[n])})},e.prototype.componentDidMount=function(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())},e.prototype.componentWillUnmount=function(){this.destroyEditor()},e.prototype.componentDidUpdate=function(t,e){var n=this;if(this.editor&&this.shouldComponentRegenerate(t)){var r=this.editor.getContents(),o=this.editor.getSelection();this.regenerationSnapshot={delta:r,selection:o},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){var i=this.regenerationSnapshot,r=i.delta,s=i.selection;delete this.regenerationSnapshot,this.instantiateEditor();var a=this.editor;a.setContents(r),h(function(){return n.setEditorSelection(a,s)})}},e.prototype.instantiateEditor=function(){this.editor?this.hookEditor(this.editor):this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig())},e.prototype.destroyEditor=function(){this.editor&&this.unhookEditor(this.editor)},e.prototype.isControlled=function(){return"value"in this.props},e.prototype.getEditorConfig=function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},e.prototype.getEditor=function(){if(!this.editor)throw Error("Accessing non-instantiated editor");return this.editor},e.prototype.createEditor=function(t,e){var n=new f.default(t,e);return null!=e.tabIndex&&this.setEditorTabIndex(n,e.tabIndex),this.hookEditor(n),n},e.prototype.hookEditor=function(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)},e.prototype.unhookEditor=function(t){t.off("editor-change",this.onEditorChange)},e.prototype.getEditorContents=function(){return this.value},e.prototype.getEditorSelection=function(){return this.selection},e.prototype.isDelta=function(t){return t&&t.ops},e.prototype.isEqualValue=function(t,e){return this.isDelta(t)&&this.isDelta(e)?p.default(t.ops,e.ops):p.default(t,e)},e.prototype.setEditorContents=function(t,e){var n=this;this.value=e;var r=this.getEditorSelection();"string"==typeof e?t.setContents(t.clipboard.convert(e)):t.setContents(e),h(function(){return n.setEditorSelection(t,r)})},e.prototype.setEditorSelection=function(t,e){if(this.selection=e,e){var n=t.getLength();e.index=Math.max(0,Math.min(e.index,n-1)),e.length=Math.max(0,Math.min(e.length,n-1-e.index)),t.setSelection(e)}},e.prototype.setEditorTabIndex=function(t,e){var n;(null===(n=null==t?void 0:t.scroll)||void 0===n?void 0:n.domNode)&&(t.scroll.domNode.tabIndex=e)},e.prototype.setEditorReadOnly=function(t,e){e?t.disable():t.enable()},e.prototype.makeUnprivilegedEditor=function(t){return{getHTML:function(){return t.root.innerHTML},getLength:t.getLength.bind(t),getText:t.getText.bind(t),getContents:t.getContents.bind(t),getSelection:t.getSelection.bind(t),getBounds:t.getBounds.bind(t)}},e.prototype.getEditingArea=function(){if(!this.editingArea)throw Error("Instantiating on missing editing area");var t=c.default.findDOMNode(this.editingArea);if(!t)throw Error("Cannot find element for editing area");if(3===t.nodeType)throw Error("Editing area cannot be a text node");return t},e.prototype.renderEditingArea=function(){var t=this,e=this.props,n=e.children,r=e.preserveWhitespace,o={key:this.state.generation,ref:function(e){t.editingArea=e}};return u.default.Children.count(n)?u.default.cloneElement(u.default.Children.only(n),o):r?u.default.createElement("pre",i({},o)):u.default.createElement("div",i({},o))},e.prototype.render=function(){var t;return u.default.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:"quill "+(null!=(t=this.props.className)?t:""),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},e.prototype.onEditorChangeText=function(t,e,n,r){if(this.editor){var o,i,s=this.isDelta(this.value)?r.getContents():r.getHTML();s!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=s,null===(i=(o=this.props).onChange)||void 0===i||i.call(o,t,e,n,r))}},e.prototype.onEditorChangeSelection=function(t,e,n){if(this.editor){var r,o,i,s,a,u,c=this.getEditorSelection(),f=!c&&t,l=c&&!t;!p.default(t,c)&&(this.selection=t,null===(o=(r=this.props).onChangeSelection)||void 0===o||o.call(r,t,e,n),f?null===(s=(i=this.props).onFocus)||void 0===s||s.call(i,t,e,n):l&&(null===(u=(a=this.props).onBlur)||void 0===u||u.call(a,c,e,n)))}},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.blur=function(){this.editor&&(this.selection=null,this.editor.blur())},e.displayName="React Quill",e.Quill=f.default,e.defaultProps={theme:"snow",modules:{},readOnly:!1},e}(u.default.Component);function h(t){Promise.resolve().then(t)}t.exports=l}}]);