Get [number] from [scientific notation].

```javascript
const fromScientific = require('@extra-number/from-scientific');
// fromScientific(<string>)

fromScientific('2.99792458×10⁸');
// 299792458 (speed of light, in m/s)
fromScientific('1.498*10³');
// 1498 (speed of sound in air, in m/s)
fromScientific('3.43 X 10 ^ 2');
// 343 (speed of sound in air, in m/s)
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
[scientific notation]: https://en.wikipedia.org/wiki/Scientific_notation
