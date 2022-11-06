<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmprod

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving product incrementally.

<section class="intro">

For a window of size `W`, the moving product is defined as

<!-- <equation class="equation" label="eq:moving_product" align="center" raw="\prod_{i=0}^{W-1} x_i" alt="Equation for the moving product."> -->

<div class="equation" align="center" data-raw-text="\prod_{i=0}^{W-1} x_i" data-equation="eq:moving_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/mprod/docs/img/equation_moving_product.svg" alt="Equation for the moving product.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrmprod from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mprod@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-incr-mprod/tags). For example,

```javascript
import incrmprod from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mprod@v0.0.7-deno/mod.js';
```

#### incrmprod( window )

Returns an accumulator `function` which incrementally computes a moving product. The `window` parameter defines the number of values over which to compute the moving product.

```javascript
var accumulator = incrmprod( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated product. If not provided an input value `x`, the accumulator function returns the current product.

```javascript
var accumulator = incrmprod( 3 );

var p = accumulator();
// returns null

// Fill the window...
p = accumulator( 2.0 ); // [2.0]
// returns 2.0

p = accumulator( 1.0 ); // [2.0, 1.0]
// returns 2.0

p = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 6.0

// Window begins sliding...
p = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns -21.0

p = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 105.0

p = accumulator();
// returns 105.0
```

Under certain conditions, overflow may be transient.

```javascript
// Large values:
var x = 5.0e+300;
var y = 1.0e+300;

// Tiny value:
var z = 2.0e-302;

// Initialize an accumulator:
var accumulator = incrmprod( 3 );

var p = accumulator( x );
// returns 5.0e+300

// Transient overflow:
p = accumulator( y );
// returns Infinity

// Recover a finite result:
p = accumulator( z );
// returns 1.0e+299
```

Similarly, under certain conditions, underflow may be transient.

```javascript
// Tiny values:
var x = 4.0e-302;
var y = 9.0e-303;

// Large value:
var z = 2.0e+300;

// Initialize an accumulator:
var accumulator = incrmprod( 3 );

var p = accumulator( x );
// returns 4.0e-302

// Transient underflow:
p = accumulator( y );
// returns 0.0

// Recover a non-zero result:
p = accumulator( z );
// returns 7.2e-304
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
-   For large accumulation windows or accumulations of either large or small numbers, care should be taken to prevent overflow and underflow. Note, however, that overflow/underflow may be transient, as the accumulator does not use a double-precision floating-point number to store an accumulated product. Instead, the accumulator splits an accumulated product into a normalized **fraction** and **exponent** and updates each component separately. Doing so guards against a loss in precision.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import incrmprod from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mprod@deno/mod.js';

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmprod( 5 );

// For each simulated datum, update the moving product...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*10.0 ) - 5.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/msum`][@stdlib/stats/incr/msum]</span><span class="delimiter">: </span><span class="description">compute a moving sum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/prod`][@stdlib/stats/incr/prod]</span><span class="delimiter">: </span><span class="description">compute a product incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mprod.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mprod

[test-image]: https://github.com/stdlib-js/stats-incr-mprod/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-incr-mprod/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mprod/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mprod?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mprod.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mprod/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mprod/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mprod/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mprod/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mprod/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mprod/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/incr/msum]: https://github.com/stdlib-js/stats-incr-msum/tree/deno

[@stdlib/stats/incr/prod]: https://github.com/stdlib-js/stats-incr-prod/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
