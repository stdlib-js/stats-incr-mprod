// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,a){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=a.value,t.__proto__=c):t[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,a.get),p&&i&&i.call(t,n,a.set),t};function c(t,n,r){a(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",d=p()?function(t){var n,r,e,o,i;if(null==t)return s.call(t);r=t[v],i=v,n=null!=(o=t)&&b.call(o,i);try{t[v]=void 0}catch(n){return s.call(t)}return e=s.call(t),n?t[v]=r:delete t[v],e}:function(t){return s.call(t)},m=Number,w=m.prototype.toString,A=p();function _(t){return"object"==typeof t&&(t instanceof m||(A?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function g(t){return l(t)||_(t)}c(g,"isPrimitive",l),c(g,"isObject",_);var h=Number.POSITIVE_INFINITY,j=m.NEGATIVE_INFINITY,U=Math.floor;function O(t){return t<h&&t>j&&U(n=t)===n;var n}function N(t){return l(t)&&O(t)}function I(t){return _(t)&&O(t.valueOf())}function S(t){return N(t)||I(t)}function T(t){return N(t)&&t>0}function E(t){return I(t)&&t.valueOf()>0}function F(t){return T(t)||E(t)}function P(t){return t!=t}function x(t){return t===h||t===j}function H(t,n,r,e){return P(t)||x(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}c(S,"isPrimitive",N),c(S,"isObject",I),c(F,"isPrimitive",T),c(F,"isObject",E),c((function(t){return H(t,[0,0],1,0)}),"assign",H);var G,L="function"==typeof Uint32Array,V="function"==typeof Uint32Array?Uint32Array:null,W="function"==typeof Uint32Array?Uint32Array:void 0;G=function(){var t,n,r;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(L&&r instanceof Uint32Array||"[object Uint32Array]"===d(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?W:function(){throw new Error("not implemented")};var k,C=G,M="function"==typeof Float64Array,Y="function"==typeof Float64Array?Float64Array:null,R="function"==typeof Float64Array?Float64Array:void 0;k=function(){var t,n,r;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),r=n,t=(M&&r instanceof Float64Array||"[object Float64Array]"===d(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?R:function(){throw new Error("not implemented")};var q,z=k,B="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,J="function"==typeof Uint8Array?Uint8Array:void 0;q=function(){var t,n,r;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,256,257]),r=n,t=(B&&r instanceof Uint8Array||"[object Uint8Array]"===d(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?J:function(){throw new Error("not implemented")};var K,Q=q,X="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,$="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var t,n,r;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),r=n,t=(X&&r instanceof Uint16Array||"[object Uint16Array]"===d(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?$:function(){throw new Error("not implemented")};var tt,nt={uint16:K,uint8:Q};(tt=new nt.uint16(1))[0]=4660;var rt,et,ot=52===new nt.uint8(tt.buffer)[0],it=!0===ot?1:0,ut=new z(1),ft=new C(ut.buffer);function at(t){return ut[0]=t,ft[it]}function ct(t){var n=at(t);return(n=(2146435072&n)>>>20)-1023|0}!0===ot?(rt=1,et=0):(rt=0,et=1);var lt,yt,pt={HIGH:rt,LOW:et},st=new z(1),bt=new C(st.buffer),vt=pt.HIGH,dt=pt.LOW;function mt(t,n,r,e){return st[0]=t,n[e]=bt[vt],n[e+r]=bt[dt],n}function wt(t){return mt(t,[0,0],1,0)}c(wt,"assign",mt),!0===ot?(lt=1,yt=0):(lt=0,yt=1);var At={HIGH:lt,LOW:yt},_t=new z(1),gt=new C(_t.buffer),ht=At.HIGH,jt=At.LOW;function Ut(t,n){return gt[ht]=t,gt[jt]=n,_t[0]}var Ot=[0,0],Nt=[0,0];function It(t,n,r,e){var o,i;return 0===t||P(t)||x(t)?(n[e]=t,n[e+r]=0,n):(H(t,Ot,1,0),i=ct(Ot[0])+Ot[1]+1,wt.assign(Ot[0],Nt,1,0),o=Nt[0],o&=2148532223,t=Ut(o|=1071644672,Nt[1]),n[e]=t,n[e+r]=i,n)}c((function(t){return It(t,[0,0],1,0)}),"assign",It);var St=[0,0],Tt=[0,0],Et=[0,0];function Ft(t,n){var r,e,o,i,u,f;return 0===n||0===t||P(t)||x(t)?t:(H(t,Tt,1,0),n+=Tt[1],(n+=ct(t=Tt[0]))<-1074?(o=0,i=t,wt.assign(o,St,1,0),u=St[0],u&=2147483647,f=at(i),Ut(u|=f&=2147483648,St[1])):n>1023?t<0?j:h:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,wt.assign(t,Et,1,0),r=Et[0],r&=2148532223,e*Ut(r|=n+1023<<20,Et[1])))}function Pt(t,n,r){return It(r,t,1,0),n.frac*=t[0],n.exp+=t[1],n.frac>-.5&&n.frac<.5&&(It(n.frac,t,1,0),n.frac=t[0],n.exp+=t[1]),Ft(n.frac,n.exp)}return function(t){var n,r,e,o,i,u;if(!T(t))throw new TypeError(function(){var t,n=arguments,r="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)r+="&arg[]="+encodeURIComponent(n[t]);return r}("0eN8T",t));return e=new z(t),u=-1,i=0,n=[0,0],r=1,(o={}).frac=.5,o.exp=1,function(f){var a,c;if(0===arguments.length)return 0===i?null:r;if(u=(u+1)%t,P(f))i=t,r=NaN;else if(i<t)i+=1,r=Pt(n,o,f);else if(0===e[u]||P(e[u])||x(e[u])){for(i=1,o.frac=.5,o.exp=1,Pt(n,o,f),a=0;a<t;a++)if(a!==u){if(P(c=e[a])){i=t,r=NaN;break}i+=1,r=Pt(n,o,c)}}else!1===P(r)&&(c=f/e[u],r=Pt(n,o,c));return e[u]=f,r}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmprod=n();
//# sourceMappingURL=browser.js.map
