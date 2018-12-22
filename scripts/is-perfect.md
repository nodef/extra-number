Check if [number] is [perfect].

```javascript
const isPerfect = require('@extra-number/is-perfect');
// isPerfect(<number>)

isPerfect(6);
// true (1+2+3 = 6)
isPerfect(28);
// true (1+2+4+7+14 = 28)
isPerfect(1);
// false
isPerfect(0);
// true
isPerfect(-24);
// false (1+2+3+4+6+8+12 > 24)
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
[perfect]: https://en.wikipedia.org/wiki/Perfect_number
