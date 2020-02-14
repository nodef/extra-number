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


[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
