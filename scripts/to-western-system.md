Convert [number] to [Western system].

```javascript
const toWesternSystem = require('@extra-number/to-western-system');
// toWesternSystem(<number>, [separator=,])

toWesternSystem(500000);
// '500,000'
toWesternSystem(-2000000);
// '-2,000'
toWesternSystem(-1000.123456, ' ');
// '-1 000.123 456'
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
[Western system]: https://en.wikipedia.org/wiki/Indian_numbering_system
