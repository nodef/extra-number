Count the number of significant digits of a number.
> Based on the solution provided by [@Jos de Jong].

```javascript
const significantDigits = require('@extra-number/significant-digits');
// significantDigits(<number>)

significantDigits(0.0034);
// 2
significantDigits(120.5e50);
// 4
significantDigits(120.5e-50);
// 4
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[@Jos de Jong]: https://stackoverflow.com/questions/22884720/what-is-the-fastest-way-to-count-the-number-of-significant-digits-of-a-number
