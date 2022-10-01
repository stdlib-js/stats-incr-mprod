// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,a){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=a.value,t.__proto__=c):t[r]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,a.get),p&&i&&i.call(t,r,a.set),t};function c(t,r,n){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,v=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",d=p()?function(t){var r,n,e,o,i;if(null==t)return b.call(t);n=t[s],i=s,r=null!=(o=t)&&v.call(o,i);try{t[s]=void 0}catch(r){return b.call(t)}return e=b.call(t),r?t[s]=n:delete t[s],e}:function(t){return b.call(t)},m=Number,w=m.prototype.toString,A=p();function _(t){return"object"==typeof t&&(t instanceof m||(A?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function h(t){return l(t)||_(t)}c(h,"isPrimitive",l),c(h,"isObject",_);var g=Number.POSITIVE_INFINITY,j=m.NEGATIVE_INFINITY,U=Math.floor;function O(t){return t<g&&t>j&&U(r=t)===r;var r}function N(t){return l(t)&&O(t)}function I(t){return _(t)&&O(t.valueOf())}function S(t){return N(t)||I(t)}function T(t){return N(t)&&t>0}function E(t){return I(t)&&t.valueOf()>0}function F(t){return T(t)||E(t)}function P(t){return t!=t}function x(t){return t===g||t===j}function H(t,r){return P(r)||x(r)?(t[0]=r,t[1]=0,t):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}function G(t,r){return 1===arguments.length?H([0,0],t):H(t,r)}c(S,"isPrimitive",N),c(S,"isObject",I),c(F,"isPrimitive",T),c(F,"isObject",E);var L,V="function"==typeof Uint32Array,W="function"==typeof Uint32Array?Uint32Array:null,k="function"==typeof Uint32Array?Uint32Array:void 0;L=function(){var t,r,n;if("function"!=typeof W)return!1;try{r=new W(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(V&&n instanceof Uint32Array||"[object Uint32Array]"===d(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?k:function(){throw new Error("not implemented")};var C,M=L,Y="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,q="function"==typeof Float64Array?Float64Array:void 0;C=function(){var t,r,n;if("function"!=typeof R)return!1;try{r=new R([1,3.14,-3.14,NaN]),n=r,t=(Y&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?q:function(){throw new Error("not implemented")};var z,B=C,D="function"==typeof Uint8Array,J="function"==typeof Uint8Array?Uint8Array:null,K="function"==typeof Uint8Array?Uint8Array:void 0;z=function(){var t,r,n;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,256,257]),n=r,t=(D&&n instanceof Uint8Array||"[object Uint8Array]"===d(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?K:function(){throw new Error("not implemented")};var Q,X=z,Z="function"==typeof Uint16Array,$="function"==typeof Uint16Array?Uint16Array:null,tt="function"==typeof Uint16Array?Uint16Array:void 0;Q=function(){var t,r,n;if("function"!=typeof $)return!1;try{r=new $(r=[1,3.14,-3.14,65536,65537]),n=r,t=(Z&&n instanceof Uint16Array||"[object Uint16Array]"===d(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?tt:function(){throw new Error("not implemented")};var rt,nt={uint16:Q,uint8:X};(rt=new nt.uint16(1))[0]=4660;var et,ot,it=52===new nt.uint8(rt.buffer)[0],ut=!0===it?1:0,ft=new B(1),at=new M(ft.buffer);function ct(t){return ft[0]=t,at[ut]}function lt(t){var r=ct(t);return(r=(2146435072&r)>>>20)-1023|0}!0===it?(et=1,ot=0):(et=0,ot=1);var yt,pt,bt={HIGH:et,LOW:ot},vt=new B(1),st=new M(vt.buffer),dt=bt.HIGH,mt=bt.LOW;function wt(t,r){return vt[0]=r,t[0]=st[dt],t[1]=st[mt],t}function At(t,r){return 1===arguments.length?wt([0,0],t):wt(t,r)}!0===it?(yt=1,pt=0):(yt=0,pt=1);var _t={HIGH:yt,LOW:pt},ht=new B(1),gt=new M(ht.buffer),jt=_t.HIGH,Ut=_t.LOW;function Ot(t,r){return gt[jt]=t,gt[Ut]=r,ht[0]}var Nt=[0,0],It=[0,0];function St(t,r){var n,e;return 0===r||P(r)||x(r)?(t[0]=r,t[1]=0,t):(G(Nt,r),e=lt(Nt[0])+Nt[1]+1,At(It,Nt[0]),n=It[0],n&=2148532223,r=Ot(n|=1071644672,It[1]),t[0]=r,t[1]=e,t)}function Tt(t,r){return 1===arguments.length?St([0,0],t):St(t,r)}var Et=[0,0],Ft=[0,0],Pt=[0,0];function xt(t,r){var n,e,o,i,u;return 0===r||0===t||P(t)||x(t)?t:(G(Ft,t),r+=Ft[1],(r+=lt(t=Ft[0]))<-1074?(o=t,At(Et,0),i=Et[0],i&=2147483647,u=ct(o),Ot(i|=u&=2147483648,Et[1])):r>1023?t<0?j:g:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,At(Pt,t),n=Pt[0],n&=2148532223,e*Ot(n|=r+1023<<20,Pt[1])))}function Ht(t,r,n){return Tt(t,n),r.frac*=t[0],r.exp+=t[1],r.frac>-.5&&r.frac<.5&&(Tt(t,r.frac),r.frac=t[0],r.exp+=t[1]),xt(r.frac,r.exp)}return function(t){var r,n,e,o,i,u;if(!T(t))throw new TypeError(function(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}("0eN8T",t));return e=new B(t),u=-1,i=0,r=[0,0],n=1,(o={}).frac=.5,o.exp=1,function(f){var a,c;if(0===arguments.length)return 0===i?null:n;if(u=(u+1)%t,P(f))i=t,n=NaN;else if(i<t)i+=1,n=Ht(r,o,f);else if(0===e[u]||P(e[u])||x(e[u])){for(i=1,o.frac=.5,o.exp=1,Ht(r,o,f),a=0;a<t;a++)if(a!==u){if(P(c=e[a])){i=t,n=NaN;break}i+=1,n=Ht(r,o,c)}}else!1===P(n)&&(c=f/e[u],n=Ht(r,o,c));return e[u]=f,n}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmprod=r();
//# sourceMappingURL=index.js.map
