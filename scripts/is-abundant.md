Check if [number] is [abundant].

```javascript
const isAbundant = require('@extra-number/is-abundant');
// isAbundant(<number>)

isAbundant(12);
// true (1+2+3+4+6 > 12)
isAbundant(1);
// false (0 < 1)
isAbundant(0);
// false (0 = 0)
isAbundant(-8);
// false (1+2+4 < 8)
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
[abundant]: https://en.wikipedia.org/wiki/Abundant_number
