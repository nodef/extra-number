// 1. Datatype methods
Number.is = require('./is');

// 2. About methods
Number.isOdd = require('./is-odd');
Number.isEven = require('./is-even');
Number.isNegative = require('./is-negative');
Number.isNatural = require('./is-natural');
Number.isWhole = require('./is-whole');
Number.isPositive = require('./is-positive');
Number.isPrime = require('./is-prime');
Number.isComposite = require('./is-composite');
Number.isAbundant = require('./is-abundant');
Number.isDeficient = require('./is-deficient');
Number.isPerfect = require('./is-perfect');
Number.isPerfectSquare = require('./is-perfect-square');
Number.isPerfectCube = require('./is-perfect-cube');
Number.significantDigits = require('./significant-digits');

// 3. Generate methods
Number.fromRoman = require('./from-roman');
Number.fromScientific = require('./from-scientific');

// 4. Transform methods
Number.toScientific = require('./to-scientific');
Number.toIndianSystem = require('./to-indian-system');
Number.toWesternSystem = require('./to-western-system');
Number.toRoman = require('./to-roman');

// 5. Evaluate methods
Number.compare = require('./compare');
Number.round = require('./round');
Number.aliquotSum = require('./aliquot-sum');
Number.divisors = require('./divisors');
Number.divisorCount = require('./divisor-count');
Number.divisorSum = require('./divisor-sum');
module.exports = Number;
