A **number** is a mathematical object used to count, measure, and label. This package is a collection for common number functions (queries, comparisons, rounding, divisors, etc).<br>

In JavaScript, [Number] type is double-precision 64-bit binary format IEEE 754
value. This package includes common number functions related to querying
**about** numbers, **comparing** numbers, **rounding** numbers, performing
**rounded division**, performing **modulo** operations, **controlling range** of
numbers, performing **arithmetic** operations, obtaining **divisors** of a
number (and related operations), getting the number of possible **arrangements**
of a set of objects, performing **geometry**-related calculations, performing
basic **statistical** analysis, and finding various **statistical means**.

▌
📦 [JSR](https://jsr.io/@nodef/extra-sql),
📰 [Docs](https://jsr.io/@nodef/extra-sql/doc),

<br>


```javascript
import * as xnumber from "jsr:@nodef/extra-number";

xnumber.isPrime(53);
// → true

xnumber.properDivisors(6);
// → [1, 2, 3]

xnumber.round(9.1357, 0.05);
// → 9.15

xnumber.significantDigits(0.0034);
// → 2

// TOFIX:
// xnumber.fromRoman('DCXLIX');
// → 649

// xnumber.toScientific(695700000);
// → '6.957×10⁸' (radius of Sun in m)
```

<br>
<br>


## Index

| Name | Description |
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


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-number)


[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[is]: https://jsr.io/@nodef/extra-sql/doc/~/is
[significantDigits]: https://jsr.io/@nodef/extra-sql/doc/~/significantDigits
[compare]: https://jsr.io/@nodef/extra-sql/doc/~/compare
[floor]: https://jsr.io/@nodef/extra-sql/doc/~/floor
[ceil]: https://jsr.io/@nodef/extra-sql/doc/~/ceil
[round]: https://jsr.io/@nodef/extra-sql/doc/~/round
[floorDiv]: https://jsr.io/@nodef/extra-sql/doc/~/floorDiv
[ceilDiv]: https://jsr.io/@nodef/extra-sql/doc/~/ceilDiv
[roundDiv]: https://jsr.io/@nodef/extra-sql/doc/~/roundDiv
[rem]: https://jsr.io/@nodef/extra-sql/doc/~/rem
[mod]: https://jsr.io/@nodef/extra-sql/doc/~/mod
[modp]: https://jsr.io/@nodef/extra-sql/doc/~/modp
[constrain]: https://jsr.io/@nodef/extra-sql/doc/~/constrain
[normalize]: https://jsr.io/@nodef/extra-sql/doc/~/normalize
[remap]: https://jsr.io/@nodef/extra-sql/doc/~/remap
[lerp]: https://jsr.io/@nodef/extra-sql/doc/~/lerp
[isPow]: https://jsr.io/@nodef/extra-sql/doc/~/isPow
[prevPow]: https://jsr.io/@nodef/extra-sql/doc/~/prevPow
[nextPow]: https://jsr.io/@nodef/extra-sql/doc/~/nextPow
[root]: https://jsr.io/@nodef/extra-sql/doc/~/root
[log]: https://jsr.io/@nodef/extra-sql/doc/~/log
[properDivisors]: https://jsr.io/@nodef/extra-sql/doc/~/properDivisors
[aliquotSum]: https://jsr.io/@nodef/extra-sql/doc/~/aliquotSum
[minPrimeFactor]: https://jsr.io/@nodef/extra-sql/doc/~/minPrimeFactor
[maxPrimeFactor]: https://jsr.io/@nodef/extra-sql/doc/~/maxPrimeFactor
[primeFactors]: https://jsr.io/@nodef/extra-sql/doc/~/primeFactors
[primeExponentials]: https://jsr.io/@nodef/extra-sql/doc/~/primeExponentials
[isPrime]: https://jsr.io/@nodef/extra-sql/doc/~/isPrime
[gcd]: https://jsr.io/@nodef/extra-sql/doc/~/gcd
[lcm]: https://jsr.io/@nodef/extra-sql/doc/~/lcm
[factorial]: https://jsr.io/@nodef/extra-sql/doc/~/factorial
[binomial]: https://jsr.io/@nodef/extra-sql/doc/~/binomial
[multinomial]: https://jsr.io/@nodef/extra-sql/doc/~/multinomial
[degrees]: https://jsr.io/@nodef/extra-sql/doc/~/degrees
[radians]: https://jsr.io/@nodef/extra-sql/doc/~/radians
[sum]: https://jsr.io/@nodef/extra-sql/doc/~/sum
[product]: https://jsr.io/@nodef/extra-sql/doc/~/product
[median]: https://jsr.io/@nodef/extra-sql/doc/~/median
[modes]: https://jsr.io/@nodef/extra-sql/doc/~/modes
[range]: https://jsr.io/@nodef/extra-sql/doc/~/range
[variance]: https://jsr.io/@nodef/extra-sql/doc/~/variance
[arithmeticMean]: https://jsr.io/@nodef/extra-sql/doc/~/arithmeticMean
[geometricMean]: https://jsr.io/@nodef/extra-sql/doc/~/geometricMean
[harmonicMean]: https://jsr.io/@nodef/extra-sql/doc/~/harmonicMean
[quadriaticMean]: https://jsr.io/@nodef/extra-sql/doc/~/quadriaticMean
[cubicMean]: https://jsr.io/@nodef/extra-sql/doc/~/cubicMean
