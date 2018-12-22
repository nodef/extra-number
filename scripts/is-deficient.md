Check if [number] is [deficient].

```javascript
const isDeficient = require('@extra-number/is-deficient');
// isDeficient(<number>)

isDeficient(8);
// true (1+2+4 < 8)
isDeficient(1);
// true (0 < 5)
isDeficient(0);
// false (0 = 0)
isDeficient(-24);
// false (1+2+3+4+6+8+12 > 24)
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
[deficient]: https://en.wikipedia.org/wiki/Deficient_number
