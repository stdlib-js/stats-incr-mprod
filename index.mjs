// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-frexp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function a(e,s,t){return r(e,t),s.frac*=e[0],s.exp+=e[1],s.frac>-.5&&s.frac<.5&&(r(e,s.frac),s.frac=e[0],s.exp+=e[1]),i(s.frac,s.exp)}function d(r){var i,d,f,o,p,l;if(!e(r))throw new TypeError(m("0eN8T",r));return f=new n(r),l=-1,p=0,i=[0,0],d=1,(o={}).frac=.5,o.exp=1,function(e){var n,m;if(0===arguments.length)return 0===p?null:d;if(l=(l+1)%r,s(e))p=r,d=NaN;else if(p<r)p+=1,d=a(i,o,e);else if(0===f[l]||s(f[l])||t(f[l])){for(p=1,o.frac=.5,o.exp=1,a(i,o,e),n=0;n<r;n++)if(n!==l){if(m=f[n],s(m)){p=r,d=NaN;break}p+=1,d=a(i,o,m)}}else!1===s(d)&&(m=e/f[l],d=a(i,o,m));return f[l]=e,d}}export{d as default};
//# sourceMappingURL=index.mjs.map