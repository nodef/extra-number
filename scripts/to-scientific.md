Convert [number] to [scientific notation].

```javascript
const toScientific = require('@extra-number/to-scientific');
// toScientific(<number>)

toScientific(695700000);
// '6.957×10⁸' (radius of Sun in m)
toScientific(3390000);
// '3.3899999999999997×10⁶' (radius of Earth in m)
toScientific(0.000000000053);
// '5.3×10⁻¹¹' (radius of Hydrogen atom)
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
[scientific notation]: https://en.wikipedia.org/wiki/Scientific_notation
