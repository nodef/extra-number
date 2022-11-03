A collection of common number functions.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-number),
🌐 [Web](https://www.npmjs.com/package/extra-number.web),
📜 [Files](https://unpkg.com/extra-number/),
📰 [Docs](https://nodef.github.io/extra-number/).
📘 [Wiki](https://github.com/nodef/extra-number/wiki/).

A number is a mathematical object used to count, measure, and label. [Number]
type is double-precision 64-bit binary format IEEE 754 value. This package
includes common number functions related to querying **about** numbers,
**comparing** numbers, **rounding** numbers, performing **rounded division**,
performing **modulo** operations, **controlling range** of numbers, performing
**arithmetic** operations, obtaining **divisors** of a number (and related
operations), getting the number of possible **arrangements** of a set of objects,
performing **geometry**-related calculations, performing basic **statistical**
analysis, and finding various **statistical means**.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_number` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-number.web/index.js

<br>

```javascript
const number = require('extra-number');
// import * as number from "extra-number";
// import * as number from "https://unpkg.com/extra-number/index.mjs"; (deno)

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
| [prevPow] | Find largest power-of-n less than or equal to given number. |
| [nextPow] | Find smallest power-of-n greater than or equal to given number. |
|  |  |
| [root] | Find the nth root of a number (ⁿ√). |
| [log] | Find the logarithm of a number with a given base. |
|  |  |
| [properDivisors] | List all divisors of a number, except itself. |
| [aliquotSum] | Sum all proper divisors of a number. |
| [minPrimeFactor] | Find the least prime number which divides a number. |
| [maxPrimeFactor] | Find the greatest prime number which divides a number. |
| [primeFactors] | Find the prime factors of a number. |
| [primeExponentials] | Find the prime factors and respective exponents of a number. |
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
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/133202640.svg)](https://zenodo.org/badge/latestdoi/133202640)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-number/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-number?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4acd74bb853361d9903f/test_coverage)](https://codeclimate.com/github/nodef/extra-number/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4acd74bb853361d9903f/maintainability)](https://codeclimate.com/github/nodef/extra-number/maintainability)


[is]: https://github.com/nodef/extra-number/wiki/is
[significantDigits]: https://github.com/nodef/extra-number/wiki/significantDigits
[compare]: https://github.com/nodef/extra-number/wiki/compare
[floor]: https://github.com/nodef/extra-number/wiki/floor
[ceil]: https://github.com/nodef/extra-number/wiki/ceil
[round]: https://github.com/nodef/extra-number/wiki/round
[floorDiv]: https://github.com/nodef/extra-number/wiki/floorDiv
[ceilDiv]: https://github.com/nodef/extra-number/wiki/ceilDiv
[roundDiv]: https://github.com/nodef/extra-number/wiki/roundDiv
[rem]: https://github.com/nodef/extra-number/wiki/rem
[mod]: https://github.com/nodef/extra-number/wiki/mod
[modp]: https://github.com/nodef/extra-number/wiki/modp
[constrain]: https://github.com/nodef/extra-number/wiki/constrain
[normalize]: https://github.com/nodef/extra-number/wiki/normalize
[remap]: https://github.com/nodef/extra-number/wiki/remap
[lerp]: https://github.com/nodef/extra-number/wiki/lerp
[isPow]: https://github.com/nodef/extra-number/wiki/isPow
[prevPow]: https://github.com/nodef/extra-number/wiki/prevPow
[nextPow]: https://github.com/nodef/extra-number/wiki/nextPow
[root]: https://github.com/nodef/extra-number/wiki/root
[log]: https://github.com/nodef/extra-number/wiki/log
[properDivisors]: https://github.com/nodef/extra-number/wiki/properDivisors
[aliquotSum]: https://github.com/nodef/extra-number/wiki/aliquotSum
[minPrimeFactor]: https://github.com/nodef/extra-number/wiki/minPrimeFactor
[maxPrimeFactor]: https://github.com/nodef/extra-number/wiki/maxPrimeFactor
[primeFactors]: https://github.com/nodef/extra-number/wiki/primeFactors
[primeExponentials]: https://github.com/nodef/extra-number/wiki/primeExponentials
[isPrime]: https://github.com/nodef/extra-number/wiki/isPrime
[gcd]: https://github.com/nodef/extra-number/wiki/gcd
[lcm]: https://github.com/nodef/extra-number/wiki/lcm
[factorial]: https://github.com/nodef/extra-number/wiki/factorial
[binomial]: https://github.com/nodef/extra-number/wiki/binomial
[multinomial]: https://github.com/nodef/extra-number/wiki/multinomial
[degrees]: https://github.com/nodef/extra-number/wiki/degrees
[radians]: https://github.com/nodef/extra-number/wiki/radians
[sum]: https://github.com/nodef/extra-number/wiki/sum
[product]: https://github.com/nodef/extra-number/wiki/product
[median]: https://github.com/nodef/extra-number/wiki/median
[modes]: https://github.com/nodef/extra-number/wiki/modes
[range]: https://github.com/nodef/extra-number/wiki/range
[variance]: https://github.com/nodef/extra-number/wiki/variance
[arithmeticMean]: https://github.com/nodef/extra-number/wiki/arithmeticMean
[geometricMean]: https://github.com/nodef/extra-number/wiki/geometricMean
[harmonicMean]: https://github.com/nodef/extra-number/wiki/harmonicMean
[quadriaticMean]: https://github.com/nodef/extra-number/wiki/quadriaticMean
[cubicMean]: https://github.com/nodef/extra-number/wiki/cubicMean
