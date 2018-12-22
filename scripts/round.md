Round number to specific precision.
> Helps to deal with [number precision problems].

```javascript
const roundTo = require('@extra-number/round');
// roundTo(<value>, [precision])

// 1. round to specific precision
roundTo(9.135, 1);
// 9
roundTo(9.135, 1e-2);
// 9.14
roundTo(9.1357, 0.05);
// 9.15

// 2. round precision errors
0.1*0.2
// 0.020000000000000004
roundTo(0.1*0.2);
// 0.02
```


[![extra-number](https://i.imgur.com/MCb8pjO.jpg)](https://www.npmjs.com/package/extra-number)

[number precision problems]: https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
