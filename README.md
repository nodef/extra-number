A collection of common number functions.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-number),
🌐 [Web](https://www.npmjs.com/package/extra-number.web),
📜 [Files](https://unpkg.com/extra-number/),
📰 [Docs](https://nodef.github.io/extra-number/).
📘 [Wiki](https://github.com/nodef/extra-number/wiki/).

A number is a mathematical object used to count, measure, and label. [Number]
type is double-precision 64-bit binary format IEEE 754 value. This package
includes common number functions related to querying *about* numbers,
*comparing* numbers, *rounding* numbers, performing *rounded division*,
performing *modulo* operations, *controlling range* of numbers, performing
*arithmetic* operations, obtaining *divisors* of a number (and related
operations), getting the number of possible *arrangements* of a set of objects,
performing *geometry*-related calculations, performing basic *statistical*
analysis, and finding various *statistical means*.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_number` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-number.web/index.js

<br>

```javascript
const number = require('extra-number');
// import * as bit from "extra-number";
// import * as bit from "https://unpkg.com/extra-number/index.mjs"; (deno)

number.isPrime(53);
// → true

number.properDivisors(6);
// → [1, 2, 3]

number.round(9.1357, 0.05);
// → 9.15

number.significantDigits(0.0034);
// → 2

// TOFIX:
// number.fromRoman('DCXLIX');
// → 649

// number.toScientific(695700000);
// → '6.957×10⁸' (radius of Sun in m)
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is a number. |
| [significantDigits] | Count the number of significant digits in a number. |
|  |  |
| [compare] | Compare two numbers. |
|  |  |
| [floor] | Round down a number to specific precision. |
| [ceil] | Round up a number to specific precision. |
| [round] | Round a number to specific precision. |
|  |  |
| [floorDiv] | Perform floor-divison of two numbers. |
| [ceilDiv] | Perform ceiling-divison of two numbers. |
| [roundDiv] | Perform rounded-divison of two numbers. |
|  |  |
| [rem] | Find the remainder of x/y with sign of x (truncated division). |
| [mod] | Find the remainder of x/y with sign of y (floored division). |
| [modp] | Find the remainder of x/y with +ve sign (euclidean division). |
|  |  |
| [constrain] | Constrain a number within a minimum and a maximum value. |
| [normalize] | Normalize a number from its current range into a value between 0 and 1. |
| [remap] | Re-map a number from one range to another. |
| [lerp] | Linearly interpolate a number between two numbers. |
|  |  |
| [isPow] | Check if a number is a power-of-n. |
| [prevPow] | Get previous power-of-n of a number. |
| [nextPow] | Find next power-of-n of a number. |
|  |  |
| [root] | Find the nth root of a number (ⁿ√). |
| [log] | Find the logarithm of a number with a given base. |
|  |  |
| [properDivisors] | List all divisors of a number, except itself. |
| [aliquotSum] | Sum all proper divisors of a number. |
| [isPrime] | Check if number is prime. |
| [gcd] | Find the greatest common divisor of numbers. |
| [lcm] | Find the least common multiple of numbers. |
|  |  |
| [factorial] | Find the factorial of a number. |
| [binomial] | Find the number of ways to choose k elements from a set of n elements. |
| [multinomial] | Find the number of ways to put n objects in m bins (n=sum(kᵢ)). |
|  |  |
| [degrees] | Convert radians to degrees. |
| [radians] | Convert degrees to radians. |
|  |  |
| [sum] | Find the sum of numbers (Σ). |
| [product] | Find the product of numbers (∏). |
| [median] | Find the value separating the higher and lower halves of numbers. |
| [modes] | Find the values that appear most often. |
| [range] | Find the smallest and largest values. |
| [variance] | Find the mean of squared deviation of numbers from its mean. |
|  |  |
| [arithmeticMean] | Find the average of numbers. |
| [geometricMean] | Find the geometric mean of numbers. |
| [harmonicMean] | Find the harmonic mean of numbers. |
| [quadriaticMean] | Find the quadriatic mean of numbers. |
| [cubicMean] | Find the cubic mean of numbers. |

<br>
<br>


## References

- [Javascript reference: MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)
- [Processing reference](https://processing.org/reference/constrain_.html)
- [Fastest way to compute the greatest common divisor](https://lemire.me/blog/2013/12/26/fastest-way-to-compute-the-greatest-common-divisor/)
- [Calculating median - javascript](https://stackoverflow.com/questions/45309447/calculating-median-javascript)
- [What is the fastest way to count the number of significant digits of a number?](https://stackoverflow.com/questions/22884720/what-is-the-fastest-way-to-count-the-number-of-significant-digits-of-a-number)
- [alawatthe/MathLib](https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/)
- [float package by Michael Storgaard](https://www.npmjs.com/package/float)

<br>
<br>


[![](https://img.youtube.com/vi/r0aKV3HqDzA/maxresdefault.jpg)](https://www.youtube.com/watch?v=r0aKV3HqDzA)<br>
[![DOI](https://zenodo.org/badge/133202640.svg)](https://zenodo.org/badge/latestdoi/133202640)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-number/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-number?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4acd74bb853361d9903f/test_coverage)](https://codeclimate.com/github/nodef/extra-number/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4acd74bb853361d9903f/maintainability)](https://codeclimate.com/github/nodef/extra-number/maintainability)


[is]: https://nodef.github.io/extra-number/functions/is.html
[significantDigits]: https://nodef.github.io/extra-number/functions/significantDigits.html
[compare]: https://nodef.github.io/extra-number/functions/compare.html
[floor]: https://nodef.github.io/extra-number/functions/floor.html
[ceil]: https://nodef.github.io/extra-number/functions/ceil.html
[round]: https://nodef.github.io/extra-number/functions/round.html
[floorDiv]: https://nodef.github.io/extra-number/functions/floorDiv.html
[ceilDiv]: https://nodef.github.io/extra-number/functions/ceilDiv.html
[roundDiv]: https://nodef.github.io/extra-number/functions/roundDiv.html
[rem]: https://nodef.github.io/extra-number/functions/rem.html
[mod]: https://nodef.github.io/extra-number/functions/mod.html
[modp]: https://nodef.github.io/extra-number/functions/modp.html
[constrain]: https://nodef.github.io/extra-number/functions/constrain.html
[normalize]: https://nodef.github.io/extra-number/functions/normalize.html
[remap]: https://nodef.github.io/extra-number/functions/remap.html
[lerp]: https://nodef.github.io/extra-number/functions/lerp.html
[isPow]: https://nodef.github.io/extra-number/functions/isPow.html
[prevPow]: https://nodef.github.io/extra-number/functions/prevPow.html
[nextPow]: https://nodef.github.io/extra-number/functions/nextPow.html
[root]: https://nodef.github.io/extra-number/functions/root.html
[log]: https://nodef.github.io/extra-number/functions/log.html
[properDivisors]: https://nodef.github.io/extra-number/functions/properDivisors.html
[aliquotSum]: https://nodef.github.io/extra-number/functions/aliquotSum.html
[isPrime]: https://nodef.github.io/extra-number/functions/isPrime.html
[gcd]: https://nodef.github.io/extra-number/functions/gcd.html
[lcm]: https://nodef.github.io/extra-number/functions/lcm.html
[factorial]: https://nodef.github.io/extra-number/functions/factorial.html
[binomial]: https://nodef.github.io/extra-number/functions/binomial.html
[multinomial]: https://nodef.github.io/extra-number/functions/multinomial.html
[degrees]: https://nodef.github.io/extra-number/functions/degrees.html
[radians]: https://nodef.github.io/extra-number/functions/radians.html
[sum]: https://nodef.github.io/extra-number/functions/sum.html
[product]: https://nodef.github.io/extra-number/functions/product.html
[median]: https://nodef.github.io/extra-number/functions/median.html
[modes]: https://nodef.github.io/extra-number/functions/modes.html
[range]: https://nodef.github.io/extra-number/functions/range.html
[variance]: https://nodef.github.io/extra-number/functions/variance.html
[arithmeticMean]: https://nodef.github.io/extra-number/functions/arithmeticMean.html
[geometricMean]: https://nodef.github.io/extra-number/functions/geometricMean.html
[harmonicMean]: https://nodef.github.io/extra-number/functions/harmonicMean.html
[quadriaticMean]: https://nodef.github.io/extra-number/functions/quadriaticMean.html
[cubicMean]: https://nodef.github.io/extra-number/functions/cubicMean.html
