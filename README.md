A number is a mathematical object used to count, measure, and label.
[Number] type is double-precision 64-bit binary format IEEE 754 value.
Includes notation conversion functions, as well as utilities.

```javascript
const number = require('extra-number');

number.isPrime(53);
// true

number.properDivisors(6);
// [1, 2, 3]

number.round(9.1357, 0.05);
// 9.15

number.significantDigits(0.0034);
// 2

number.fromRoman('DCXLIX');
// 649

number.toScientific(695700000);
// '6.957×10⁸' (radius of Sun in m)
```

### reference

| Method                 | Action
|------------------------|-------
| [is]                   | Checks if value is a number.
| [isPrime]              | Checks if a number is prime.
| [compare]              | Compares 2 numbers.
| [round]                | Rounds number to specific precision.
| [aliquotSum]           | Gives sum of all proper divisors of n.
| [properDivisors]       | Gives a list of numbers that n is divisible by, except itself.
| [significantDigits]    | Counts the number of significant digits of a number.
| [fromWords]            | Converts number in words to number.
| [fromRoman]            | Converts roman numerals to number.
| [toRoman]              | Converts number to roman numerals.
| [fromScientific]       | Converts scientific notation to number.
| [toScientific]         | Converts number to scientific notation.

### help needed

- fromWords with plural
- fromRoman with decimal
- toWords(opt=ordinal/cardinal)
- toOrdinal

<br>
<br>

[![nodef](https://merferry.glitch.me/card/extra-number.svg)](https://nodef.github.io)

[is]: https://github.com/nodef/extra-number/wiki/is
[isPrime]: https://github.com/nodef/extra-number/wiki/isPrime
[compare]: https://github.com/nodef/extra-number/wiki/compare
[round]: https://github.com/nodef/extra-number/wiki/round
[aliquotSum]: https://github.com/nodef/extra-number/wiki/aliquotSum
[properDivisors]: https://github.com/nodef/extra-number/wiki/properDivisors
[significantDigits]: https://github.com/nodef/extra-number/wiki/significantDigits
[fromWords]: https://github.com/nodef/extra-number/wiki/fromWords
[fromRoman]: https://github.com/nodef/extra-number/wiki/fromRoman
[toRoman]: https://github.com/nodef/extra-number/wiki/toRoman
[fromScientific]: https://github.com/nodef/extra-number/wiki/fromScientific
[toScientific]: https://github.com/nodef/extra-number/wiki/toScientific
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
