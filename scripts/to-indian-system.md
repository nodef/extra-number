Convert [number] to [Indian system].

```javascript
const toIndianSystem = require('@extra-number/to-indian-system');
// toIndianSystem(<number>, [separator=,])

toIndianSystem(500000);
// '5,00,000'
toIndianSystem(-20000000);
// '-2,00,00,000'
toIndianSystem(-4321.1234567, ' ');
// '-4 321.123 45 67'
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
[Indian system]: https://en.wikipedia.org/wiki/Indian_numbering_system]
