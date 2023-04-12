import {
  is,
  significantDigits,
  compare,
  floor,
  ceil,
  round,
  floorDiv,
  ceilDiv,
  roundDiv,
  rem,
  mod,
  modp,
  constrain,
  normalize,
  remap,
  lerp,
  isPow,
  prevPow,
  nextPow,
  root,
  log,
  properDivisors,
  aliquotSum,
  minPrimeFactor,
  maxPrimeFactor,
  primeFactors,
  primeExponentials,
  isPrime,
  gcd,
  lcm,
  factorial,
  binomial,
  multinomial,
  degrees,
  radians,
  sum,
  product,
  median,
  modes,
  range,
  variance,
  arithmeticMean,
  geometricMean,
  harmonicMean,
  quadriaticMean,
  cubicMean,
} from "../src";




// 1. Basic tests.
test("example1", () => {
  var b = isPrime(53);
  expect(b).toBe(true);
  // → true

  var x = properDivisors(6);
  expect(x).toStrictEqual([1, 2, 3]);
  // → [1, 2, 3]

  var a = round(9.1357, 0.05);
  expect(a).toBe(9.15);
  // → 9.15

  var a = significantDigits(0.0034);
  expect(a).toBe(2);
  // → 2
});




// ABOUT
// -----

test("is", () => {
  var a = is(3.14);
  expect(a).toBe(true);
  var a = is(NaN);
  expect(a).toBe(true);  //  (an unexpressable number)
  var a = is('3.14');
  expect(a).toBe(false);
  var a = is({'value': 3.14});
  expect(a).toBe(false);
  var a = is(null);
  expect(a).toBe(false);
});


test("significantDigits", () => {
  var a = significantDigits(0.0034);
  expect(a).toBe(2);
  var a = significantDigits(120.5e50);
  expect(a).toBe(4);
  var a = significantDigits(120.5e-50);
  expect(a).toBe(4);
});




// COMPARE
// -------

test("compare", () => {
  var a = compare(10, 12);
  expect(a).toBeLessThan(0);
  var a = compare(12, 12);
  expect(a).toBe(0);
  var a = compare(17, 12);
  expect(a).toBeGreaterThan(0);
});




// ROUND
// -----

test("floor", () => {
  var a = floor(9.161, 1);
  expect(a).toBe(9);
  var a = floor(9.161, 0.01);
  expect(a).toBe(9.16);
  var a = floor(9.1617, 0.05);
  expect(a).toBe(9.15);
});


test("ceil", () => {
  var a = ceil(9.121, 1);
  expect(a).toBe(10);
  var a = ceil(9.121, 0.01);
  expect(a).toBe(9.13);
  var a = ceil(9.1217, 0.05);
  expect(a).toBe(9.15);
});


test("round", () => {
  var a = round(9.121, 1);
  expect(a).toBe(9);
  var a = round(9.135, 0.01);
  expect(a).toBe(9.14);
  var a = round(9.1357, 0.05);
  expect(a).toBe(9.15);
  var a = round(0.1 + 0.2, 1e-12);
  expect(a).toBe(0.3);
});




// ROUNDED DIVISION
// ----------------

test("floorDiv", () => {
  var a = floorDiv(15, 4);
  expect(a).toBe(3);
  var a = floorDiv(2, 2);
  expect(a).toBe(1);
  var a = floorDiv(-15, 4);
  expect(a).toBe(-4);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


test("ceilDiv", () => {
  var a = ceilDiv(15, 4);
  expect(a).toBe(4);
  var a = ceilDiv(2, 2);
  expect(a).toBe(1);
  var a = ceilDiv(-15, 4);
  expect(a).toBe(-3);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


test("roundDiv", () => {
  var a = roundDiv(15, 4);
  expect(a).toBe(4);
  var a = roundDiv(2, 2);
  expect(a).toBe(1);
  var a = roundDiv(-15, 4);
  expect(a).toBe(-4);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/




// MODULO
// ------

test("rem", () => {
  var a = rem(1, 10);
  expect(a).toBe(1);
  var a = rem(-1, 10);
  expect(a).toBe(-1);
  var a = rem(1, -10);
  expect(a).toBe(1);
});


test("mod", () => {
  var a = mod(1, 10);
  expect(a).toBe(1);
  var a = mod(-1, 10);
  expect(a).toBe(9);
  var a = mod(1, -10);
  expect(a).toBe(-9);
});


test("modp", () => {
  var a = modp(1, 10);
  expect(a).toBe(1);
  var a = modp(-1, 10);
  expect(a).toBe(9);
  var a = modp(1, -10);
  expect(a).toBe(1);
});




// RANGE CONTROL
// -------------

test("constrain", () => {
  var a = constrain(20, 0, 50);
  expect(a).toBe(20);
  var a = constrain(-10, 0, 100);
  expect(a).toBe(0);
  var a = constrain(120, 0, 100);
  expect(a).toBe(100);
});
// - https://processing.org/reference/norm_.html


test("normalize", () => {
  var a = normalize(20, 0, 50);
  expect(a).toBe(0.4);
  var a = normalize(-10, 0, 100);
  expect(a).toBe(-0.1);
});
// - https://processing.org/reference/norm_.html


test("remap", () => {
  var a = remap(25, 0, 100, 0, 1366);
  expect(a).toBe(341.5);
  var a = remap(110, 0, 100, -20, -10);
  expect(a).toBe(-9);
});
// - https://processing.org/reference/map_.html


test("lerp", () => {
  var a = lerp(80, 320, 0.8);
  expect(a).toBe(272);
  var a = lerp(80, 320, 0.20);
  expect(a).toBe(128);
  var a = lerp(80, 320, 0.32);
  expect(a).toBe(156.8);
});
// - https://processing.org/reference/lerp_.html




// ARITHMETIC
// ----------

test("isPow", () => {
  var a = isPow(32, 2);
  expect(a).toBe(true);
  var a = isPow(32, 4);
  expect(a).toBe(false);
  var a = isPow(64, 4);
  expect(a).toBe(true);
});


test("prevPow", () => {
  var a = prevPow(32, 2);
  expect(a).toBe(32);
  var a = prevPow(35, 2);
  expect(a).toBe(32);
  var a = prevPow(35, 3);
  expect(a).toBe(27);
});


test("nextPow", () => {
  var a = nextPow(32, 2);
  expect(a).toBe(32);
  var a = nextPow(29, 2);
  expect(a).toBe(32);
  var a = nextPow(29, 3);
  expect(a).toBe(81);
});


test("root", () => {
  var a = root(25, 2);
  expect(a).toBe(5);
  var a = root(-8, 3);
  expect(a).toBe(-2);
});
// - https://en.wikipedia.org/wiki/Nth_root


test("log", () => {
  var a = log(Math.E);
  expect(a).toBe(1);
  var a = log(10);
  expect(a).toBe(2.302585092994046);
  var a = log(243, 3);
  expect(a).toBe(5);
  var a = log(64, 2);
  expect(a).toBe(6);
});
// - https://en.wikipedia.org/wiki/Logarithm




// DIVISORS
// --------

test("properDivisors", () => {
  var a = properDivisors(6);
  expect(a).toStrictEqual([1, 2, 3]);
  var a = properDivisors(1);
  expect(a).toStrictEqual([]);
  var a = properDivisors(0);
  expect(a).toStrictEqual([]);
  var a = properDivisors(-24);
  expect(a).toStrictEqual([1, 2, 3, 4, 6, 8, 12]);
});


test("aliquotSum", () => {
  var a = aliquotSum(6);
  expect(a).toBe(6);  // (1+2+3)
  var a = aliquotSum(1);
  expect(a).toBe(0);
  var a = aliquotSum(0);
  expect(a).toBe(0);
  var a = aliquotSum(-24);
  expect(a).toBe(36);  // (1+2+3+4+6+8+12)
});


test("minPrimeFactor", () => {
  var a = minPrimeFactor(1);
  expect(a).toBe(0);
  var a = minPrimeFactor(3);
  expect(a).toBe(3);
  var a = minPrimeFactor(21);
  expect(a).toBe(3);
  var a = minPrimeFactor(55);
  expect(a).toBe(5);
  var a = minPrimeFactor(53);
  expect(a).toBe(53);
});


test("maxPrimeFactor", () => {
  var a = maxPrimeFactor(1);
  expect(a).toBe(0);
  var a = maxPrimeFactor(3);
  expect(a).toBe(3);
  var a = maxPrimeFactor(21);
  expect(a).toBe(7);
  var a = maxPrimeFactor(55);
  expect(a).toBe(11);
  var a = maxPrimeFactor(53);
  expect(a).toBe(53);
});


test("primeFactors", () => {
  var a = primeFactors(1);
  expect(a).toStrictEqual([]);
  var a = primeFactors(3);
  expect(a).toStrictEqual([3]);
  var a = primeFactors(21);
  expect(a).toStrictEqual([3, 7]);
  var a = primeFactors(55);
  expect(a).toStrictEqual([5, 11]);
  var a = primeFactors(53);
  expect(a).toStrictEqual([53]);
});


test("primeExponentials", () => {
  var a = primeExponentials(1);
  expect(a).toStrictEqual([]);
  var a = primeExponentials(9);
  expect(a).toStrictEqual([[3, 2]]);
  var a = primeExponentials(63);
  expect(a).toStrictEqual([[3, 2], [7, 1]]);
  var a = primeExponentials(605);
  expect(a).toStrictEqual([[5, 1], [11, 2]]);
  var a = primeExponentials(53);
  expect(a).toStrictEqual([[53, 1]]);
});


test("isPrime", () => {
  var a = isPrime(7);
  expect(a).toBe(true);
  var a = isPrime(53);
  expect(a).toBe(true);
  var a = isPrime(4);
  expect(a).toBe(false);
  var a = isPrime(1);
  expect(a).toBe(false);
  var a = isPrime(0);
  expect(a).toBe(false);
});


test("gcd", () => {
  var a = gcd(6, 15);
  expect(a).toBe(3);
  var a = gcd(6, 15, 21);
  expect(a).toBe(3);
  var a = gcd(6, 15, 20);
  expect(a).toBe(1);
  var a = gcd();  // sp
  expect(a).toBe(1);  // sp
});


test("lcm", () => {
  var a = lcm(2, 3);
  expect(a).toBe(6);
  var a = lcm(2, 3, 4);
  expect(a).toBe(12);
  var a = lcm(2, 3, 4, 5);
  expect(a).toBe(60);
  var a = lcm();  // sp
  expect(a).toBe(1);  // sp
});




// ARRANGEMENTS
// ------------

test("factorial", () => {
  var a = factorial(5);
  expect(a).toBe(120);
  var a = factorial(6);
  expect(a).toBe(720);
  var a = factorial(7);
  expect(a).toBe(5040);
  var a = factorial(-1);  // sp
  expect(a).toBe(0);  // sp
});
// - https://en.wikipedia.org/wiki/Factorial


test("binomial", () => {
  var a = binomial(4, 1);
  expect(a).toBe(4);
  var a = binomial(4, 2);
  expect(a).toBe(6);
  var a = binomial(4, 3);
  expect(a).toBe(4);
  var a = binomial(4, -1);  // sp
  expect(a).toBe(0);  // sp
  var a = binomial(-4, 1);  // sp
  expect(a).toBe(-4);  // sp
});


test("multinomial", () => {
  var a = multinomial(1, 2);
  expect(a).toBe(3);
  var a = multinomial(1, 2, 3);
  expect(a).toBe(60);
  var a = multinomial(1, 2, 3, 4);
  expect(a).toBe(12600);
});




// GEOMETRY
// --------

test("degrees", () => {
  var a = degrees(3);
  expect(a).toBe(171.88733853924697);
  var a = degrees(1);
  expect(a).toBe(57.29577951308232);
});


test("radians", () => {
  var a = radians(180);
  expect(a).toBe(3.141592653589793);
  var a = radians(60);
  expect(a).toBe(1.0471975511965976);
});




// STATISTICS
// ----------

test("sum", () => {
  var a = sum(1, 2);
  expect(a).toBe(3);
  var a = sum(1, 2, 3);
  expect(a).toBe(6);
  var a = sum(1, 2, 3, 4);
  expect(a).toBe(10);
});


test("product", () => {
  var a = product(1, 2);
  expect(a).toBe(2);
  var a = product(1, 2, 3);
  expect(a).toBe(6);
  var a = product(1, 2, 3, 4);
  expect(a).toBe(24);
});


test("median", () => {
  var a = median(1, 7);
  expect(a).toBe(4);
  var a = median(1, 7, 8);
  expect(a).toBe(7);
  var a = median(1, 7, 8, 10);
  expect(a).toBe(7.5);
  var a = median();  // sp
  expect(a).toBe(0);  // sp
});


test("modes", () => {
  var a = modes(1, 2);
  expect(a).toStrictEqual([1, 2]);
  var a = modes(1, 2, 2);
  expect(a).toStrictEqual([2]);
  var a = modes(1, 2, 2, 3, 3);
  expect(a).toStrictEqual([2, 3]);
});


test("range", () => {
  var a = range(1, 7);
  expect(a).toStrictEqual([1, 7]);
  var a = range(1, 7, 6);
  expect(a).toStrictEqual([1, 7]);
  var a = range(1, 7, 8, 6);
  expect(a).toStrictEqual([1, 8]);
});


test("variance", () => {
  var a = variance(1, 2);
  expect(a).toBe(0.25);
  var a = variance(1, 2, 3);
  expect(a).toBe(0.6666666666666666);
  var a = variance(1, 2, 3, 4);
  expect(a).toBe(1.25);
  var a = variance();  // sp
  expect(a).toBe(0);  // sp
});




// MEAN (STATISTICS)
// -----------------

test("arithmeticMean", () => {
  var a = arithmeticMean(1, 2);
  expect(a).toBe(1.5);
  var a = arithmeticMean(1, 2, 3);
  expect(a).toBe(2);
  var a = arithmeticMean(1, 2, 3, 4);
  expect(a).toBe(2.5);
  var a = arithmeticMean();  // sp
  expect(a).toBe(0);  // sp
});


test("geometricMean", () => {
  var a = geometricMean(1, 2);
  expect(a).toBe(Math.sqrt(2));
  var a = geometricMean(1, 2, 3);
  expect(a).toBe(Math.cbrt(6));
  var a = geometricMean(1, 2, 3, 4);
  expect(a).toBe(Math.pow(24, 1/4));
});


test("harmonicMean", () => {
  var a = harmonicMean(1, 2);
  expect(a).toBe(4/3);
  var a = harmonicMean(1, 2, 3);
  expect(a).toBe(18/11);
  var a = harmonicMean(1, 2, 3, 4);
  expect(a).toBe(48/25);
});


test("quadriaticMean", () => {
  var a = quadriaticMean(1, 2);
  expect(a).toBe(Math.sqrt(5/2));
  var a = quadriaticMean(1, 2, 3);
  expect(a).toBe(Math.sqrt(14/3));
  var a = quadriaticMean(1, 2, 3, 4);
  expect(a).toBe(Math.sqrt(30/4));
});


test("cubicMean", () => {
  var a = cubicMean(1, 2);
  expect(a).toBe(Math.cbrt(9/2));
  var a = cubicMean(1, 2, 3);
  expect(a).toBe(Math.cbrt(36/3));
  var a = cubicMean(1, 2, 3, 4);
  expect(a).toBe(Math.cbrt(100/4));
});
