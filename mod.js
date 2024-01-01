// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,x=isNaN,U=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,n,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function O(r){return"string"==typeof r}function N(r){var e,t,n;if(!O(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return j.apply(null,t)}var T=Object.prototype,V=T.toString,P=T.__defineGetter__,$=T.__defineSetter__,G=T.__lookupGetter__,H=T.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};function C(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=Z()?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[z]=t:delete r[z],n}:function(r){return M.call(r)},B=Number,D=B.prototype.toString;var J=Z();function K(r){return"object"==typeof r&&(r instanceof B||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return L(r)||K(r)}C(Q,"isPrimitive",L),C(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=B.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return r<rr&&r>er&&tr(e=r)===e;var e}function ir(r){return L(r)&&nr(r)}function ar(r){return K(r)&&nr(r.valueOf())}function or(r){return ir(r)||ar(r)}function cr(r){return ir(r)&&r>0}function ur(r){return ar(r)&&r.valueOf()>0}function fr(r){return cr(r)||ur(r)}function sr(r){return r!=r}function lr(r){return r===rr||r===er}C(or,"isPrimitive",ir),C(or,"isObject",ar),C(fr,"isPrimitive",cr),C(fr,"isObject",ur);function pr(r,e,t,n){return sr(r)||lr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}C((function(r){return pr(r,[0,0],1,0)}),"assign",pr);var yr="function"==typeof Uint32Array;var gr="function"==typeof Uint32Array?Uint32Array:null;var vr,dr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(yr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr=vr,wr="function"==typeof Float64Array;var br="function"==typeof Float64Array?Float64Array:null;var mr,Ar="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,NaN]),t=e,r=(wr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r=mr,Er="function"==typeof Uint8Array;var xr="function"==typeof Uint8Array?Uint8Array:null;var Ur,Sr="function"==typeof Uint8Array?Uint8Array:void 0;Ur=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,256,257]),t=e,r=(Er&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var jr=Ur,Ir="function"==typeof Uint16Array;var kr="function"==typeof Uint16Array?Uint16Array:null;var Fr,Or="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ir&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var Nr,Tr={uint16:Fr,uint8:jr};(Nr=new Tr.uint16(1))[0]=4660;var Vr=52===new Tr.uint8(Nr.buffer)[0],Pr=!0===Vr?1:0,$r=new _r(1),Gr=new hr($r.buffer);function Hr(r){return $r[0]=r,Gr[Pr]}var Wr,Cr;function Lr(r){var e=Hr(r);return(e=(2146435072&e)>>>20)-1023|0}!0===Vr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Rr,Zr,Mr={HIGH:Wr,LOW:Cr},Xr=new _r(1),Yr=new hr(Xr.buffer),zr=Mr.HIGH,qr=Mr.LOW;function Br(r,e,t,n){return Xr[0]=r,e[n]=Yr[zr],e[n+t]=Yr[qr],e}function Dr(r){return Br(r,[0,0],1,0)}C(Dr,"assign",Br),!0===Vr?(Rr=1,Zr=0):(Rr=0,Zr=1);var Jr={HIGH:Rr,LOW:Zr},Kr=new _r(1),Qr=new hr(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function te(r,e){return Qr[re]=r,Qr[ee]=e,Kr[0]}var ne=[0,0],ie=[0,0];function ae(r,e,t,n){var i,a;return 0===r||sr(r)||lr(r)?(e[n]=r,e[n+t]=0,e):(pr(r,ne,1,0),a=Lr(ne[0])+ne[1]+1,Dr.assign(ne[0],ie,1,0),i=ie[0],i&=2148532223,r=te(i|=1071644672,ie[1]),e[n]=r,e[n+t]=a,e)}C((function(r){return ae(r,[0,0],1,0)}),"assign",ae);var oe=[0,0];var ce=[0,0],ue=[0,0];function fe(r,e){var t,n,i,a,o,c;return 0===e||0===r||sr(r)||lr(r)?r:(pr(r,ce,1,0),e+=ce[1],(e+=Lr(r=ce[0]))<-1074?(i=0,a=r,Dr.assign(i,oe,1,0),o=oe[0],o&=2147483647,c=Hr(a),te(o|=c&=2147483648,oe[1])):e>1023?r<0?er:rr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Dr.assign(r,ue,1,0),t=ue[0],t&=2148532223,n*te(t|=e+1023<<20,ue[1])))}function se(r,e,t){return ae(t,r,1,0),e.frac*=r[0],e.exp+=r[1],e.frac>-.5&&e.frac<.5&&(ae(e.frac,r,1,0),e.frac=r[0],e.exp+=r[1]),fe(e.frac,e.exp)}function le(r){var e,t,n,i,a,o;if(!cr(r))throw new TypeError(N("invalid argument. Must provide a positive integer. Value: `%s`.",r));return n=new _r(r),o=-1,a=0,e=[0,0],t=1,(i={}).frac=.5,i.exp=1,function(c){var u,f;if(0===arguments.length)return 0===a?null:t;if(o=(o+1)%r,sr(c))a=r,t=NaN;else if(a<r)a+=1,t=se(e,i,c);else if(0===n[o]||sr(n[o])||lr(n[o])){for(a=1,i.frac=.5,i.exp=1,se(e,i,c),u=0;u<r;u++)if(u!==o){if(sr(f=n[u])){a=r,t=NaN;break}a+=1,t=se(e,i,f)}}else!1===sr(t)&&(f=c/n[o],t=se(e,i,f));return n[o]=c,t}}export{le as default};
//# sourceMappingURL=mod.js.map
