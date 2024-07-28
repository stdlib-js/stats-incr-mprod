// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.2-esm/index.mjs";import{assign as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-frexp@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function a(e,s,t){return r(t,e,1,0),s.frac*=e[0],s.exp+=e[1],s.frac>-.5&&s.frac<.5&&(r(s.frac,e,1,0),s.frac=e[0],s.exp+=e[1]),i(s.frac,s.exp)}function d(r){var i,d,f,o,p,l;if(!e(r))throw new TypeError(m("1Ix8B",r));return f=new n(r),l=-1,p=0,i=[0,0],d=1,(o={}).frac=.5,o.exp=1,function(e){var n,m;if(0===arguments.length)return 0===p?null:d;if(l=(l+1)%r,s(e))p=r,d=NaN;else if(p<r)p+=1,d=a(i,o,e);else if(0===f[l]||s(f[l])||t(f[l])){for(p=1,o.frac=.5,o.exp=1,a(i,o,e),n=0;n<r;n++)if(n!==l){if(m=f[n],s(m)){p=r,d=NaN;break}p+=1,d=a(i,o,m)}}else!1===s(d)&&(m=e/f[l],d=a(i,o,m));return f[l]=e,d}}export{d as default};
//# sourceMappingURL=index.mjs.map