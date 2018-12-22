Check if value is [number].

```javascript
const is = require('@extra-number/is');
// is(<value>)

is(3.14);
// true
is(NaN);
// true (an unexpressable number)
is('3.14');
// false
is({'value': 3.14});
// false
is(null);
// false
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
