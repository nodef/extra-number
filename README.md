A number is a mathematical object used to count, measure, and label.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-number),
🌐 [Web](https://www.npmjs.com/package/extra-number.web),
📜 [Files](https://unpkg.com/extra-number/),
📰 [Docs](https://nodef.github.io/extra-number/).
📘 [Wiki](https://github.com/nodef/extra-number/wiki/).

[Number] type is double-precision 64-bit binary format IEEE 754 value.
Includes notation conversion functions, as well as utilities.

The [bit] is a basic unit of information in information theory, computing. This
package includes [bit twiddling hacks] by *Sean Eron Anderson* and many others.
JavaScript converts a `Number` (a *64-bit floating point number*) to a *32-bit*
*integer* when bitwise operators (such as `|`) are applied. All bitwise operations
are performed on **32-bit integers**.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_bit` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[bit]: https://en.wikipedia.org/wiki/Bit
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-bit.web/index.js

<br>

```javascript
const number = require('extra-number');
// import * as bit from "extra-bit";
// import * as bit from "https://unpkg.com/extra-bit/index.mjs"; (deno)

number.isPrime(53);
// true

number.properDivisors(6);
// [1, 2, 3]

number.round(9.1357, 0.05);
// 9.15

number.significantDigits(0.0034);
// 2

// TOFIX:
// number.fromRoman('DCXLIX');
// 649

// number.toScientific(695700000);
// '6.957×10⁸' (radius of Sun in m)
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is]                   | Checks if value is a number.
| [isPrime]              | Checks if a number is prime.
| [compare]              | Compares 2 numbers.
| [round]                | Rounds number to specific precision.
| [ceil]                 | Rounds up number to specific precision.
| [floor]                | Rounds down number to specific precision.
| [lerp]                 | Gives a number based on weight, within given range.
| [clamp]                | Limits a number within given range.
| [map]                  | Converts a number from one range to another.
| [aliquotSum]           | Gives sum of all proper divisors of n.
| [properDivisors]       | Gives a list of numbers that n is divisible by, except itself.
| [significantDigits]    | Counts the number of significant digits of a number.
| [fromWords]            | Converts number in words to number.
| [fromRoman]            | Converts roman numerals to number.
| [toRoman]              | Converts number to roman numerals.
| [fromScientific]       | Converts scientific notation to number.
| [toScientific]         | Converts number to scientific notation.

<br>
<br>


## References

- [Bit Twiddling Hacks by Sean Eron Anderson](https://graphics.stanford.edu/~seander/bithacks.html)
- [bit-twiddle package by @mikolalysenko](https://www.npmjs.com/package/bit-twiddle)

<br>
<br>


[![](https://img.youtube.com/vi/4Yy0pPTrHlk/maxresdefault.jpg)](https://www.youtube.com/watch?v=4Yy0pPTrHlk)<br>


[is]: https://github.com/nodef/extra-number/wiki/is
[isPrime]: https://github.com/nodef/extra-number/wiki/isPrime
[compare]: https://github.com/nodef/extra-number/wiki/compare
[round]: https://github.com/nodef/extra-number/wiki/round
[ceil]: https://github.com/nodef/extra-number/wiki/ceil
[floor]: https://github.com/nodef/extra-number/wiki/floor
[lerp]: https://github.com/nodef/extra-number/wiki/lerp
[clamp]: https://github.com/nodef/extra-number/wiki/clamp
[map]: https://github.com/nodef/extra-number/wiki/map
[aliquotSum]: https://github.com/nodef/extra-number/wiki/aliquotSum
[properDivisors]: https://github.com/nodef/extra-number/wiki/properDivisors
[significantDigits]: https://github.com/nodef/extra-number/wiki/significantDigits
[fromWords]: https://github.com/nodef/extra-number/wiki/fromWords
[fromRoman]: https://github.com/nodef/extra-number/wiki/fromRoman
[toRoman]: https://github.com/nodef/extra-number/wiki/toRoman
[fromScientific]: https://github.com/nodef/extra-number/wiki/fromScientific
[toScientific]: https://github.com/nodef/extra-number/wiki/toScientific
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[extra-number.min]: https://www.npmjs.com/package/extra-number.min
