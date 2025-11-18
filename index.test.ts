import {assert, assertEquals} from "jsr:@std/assert";
import {
  is,
  significantDigits,
  compare,
  copySign,
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
} from "./index.ts";




// 1. Basic tests.
Deno.test("example1", () => {
  const b = isPrime(53);
  assertEquals(b, true);
  // → true

  const x = properDivisors(6);
  assertEquals(x, [1, 2, 3]);
  // → [1, 2, 3]

  const a = round(9.1357, 0.05);
  assertEquals(a, 9.15);
  // → 9.15

  const c = significantDigits(0.0034);
  assertEquals(c, 2);
  // → 2
});




//#region ABOUT
Deno.test("is", () => {
  const a = is(3.14);
  assertEquals(a, true);
  const b = is(NaN);
  assertEquals(b, true);  //  (an unexpressable number)
  const c = is('3.14');
  assertEquals(c, false);
  const d = is({'value': 3.14});
  assertEquals(d, false);
  const e = is(null);
  assertEquals(e, false);
});


Deno.test("significantDigits", () => {
  const a = significantDigits(0.0034);
  assertEquals(a, 2);
  const b = significantDigits(120.5e50);
  assertEquals(b, 4);
  const c = significantDigits(120.5e-50);
  assertEquals(c, 4);
});
//#endregion




//#region COMPARE
Deno.test("compare", () => {
  const a = compare(10, 12);
  assert(a < 0);
  const b = compare(12, 12);
  assert(b === 0);
  const c = compare(17, 12);
  assert(c > 0);
});
//#endregion




//#region SIGN
Deno.test("copySign", () => {
  const a = copySign(3.5, -1);
  assertEquals(a, -3.5);
  const b = copySign(-4.2, +1);
  assertEquals(b, 4.2);
});
//#endregion




//#region ROUND
Deno.test("floor", () => {
  const a = floor(9.161, 1);
  assertEquals(a, 9);
  const b = floor(9.161, 0.01);
  assertEquals(b, 9.16);
  const c = floor(9.1617, 0.05);
  assertEquals(c, 9.15);
});


Deno.test("ceil", () => {
  const a = ceil(9.121, 1);
  assertEquals(a, 10);
  const b = ceil(9.121, 0.01);
  assertEquals(b, 9.13);
  const c = ceil(9.1217, 0.05);
  assertEquals(c, 9.15);
});


Deno.test("round", () => {
  const a = round(9.121, 1);
  assertEquals(a, 9);
  const b = round(9.135, 0.01);
  assertEquals(b, 9.14);
  const c = round(9.1357, 0.05);
  assertEquals(c, 9.15);
  const d = round(0.1 + 0.2, 1e-12);
  assertEquals(d, 0.3);
});
//#endregion




//#region ROUND DIVISION
Deno.test("floorDiv", () => {
  const a = floorDiv(15, 4);
  assertEquals(a, 3);
  const b = floorDiv(2, 2);
  assertEquals(b, 1);
  const c = floorDiv(-15, 4);
  assertEquals(c, -4);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


Deno.test("ceilDiv", () => {
  const a = ceilDiv(15, 4);
  assertEquals(a, 4);
  const b = ceilDiv(2, 2);
  assertEquals(b, 1);
  const c = ceilDiv(-15, 4);
  assertEquals(c, -3);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/


Deno.test("roundDiv", () => {
  const a = roundDiv(15, 4);
  assertEquals(a, 4);
  const b = roundDiv(2, 2);
  assertEquals(b, 1);
  const c = roundDiv(-15, 4);
  assertEquals(c, -4);
});
// - https://www.learndatasci.com/solutions/python-double-slash-operator-floor-division/
//#endregion




//#region MODULO
Deno.test("rem", () => {
  const a = rem(1, 10);
  assertEquals(a, 1);
  const b = rem(-1, 10);
  assertEquals(b, -1);
  const c = rem(1, -10);
  assertEquals(c, 1);
});


Deno.test("mod", () => {
  const a = mod(1, 10);
  assertEquals(a, 1);
  const b = mod(-1, 10);
  assertEquals(b, 9);
  const c = mod(1, -10);
  assertEquals(c, -9);
});


Deno.test("modp", () => {
  const a = modp(1, 10);
  assertEquals(a, 1);
  const b = modp(-1, 10);
  assertEquals(b, 9);
  const c = modp(1, -10);
  assertEquals(c, 1);
});
//#endregion




//#region RANGE CONTROL
Deno.test("constrain", () => {
  const a = constrain(20, 0, 50);
  assertEquals(a, 20);
  const b = constrain(-10, 0, 100);
  assertEquals(b, 0);
  const c = constrain(120, 0, 100);
  assertEquals(c, 100);
});
// - https://processing.org/reference/norm_.html


Deno.test("normalize", () => {
  const a = normalize(20, 0, 50);
  assertEquals(a, 0.4);
  const b = normalize(-10, 0, 100);
  assertEquals(b, -0.1);
});
// - https://processing.org/reference/norm_.html


Deno.test("remap", () => {
  const a = remap(25, 0, 100, 0, 1366);
  assertEquals(a, 341.5);
  const b = remap(110, 0, 100, -20, -10);
  assertEquals(b, -9);
});
// - https://processing.org/reference/map_.html


Deno.test("lerp", () => {
  const a = lerp(80, 320, 0.8);
  assertEquals(a, 272);
  const b = lerp(80, 320, 0.20);
  assertEquals(b, 128);
  const c = lerp(80, 320, 0.32);
  assertEquals(c, 156.8);
});
// - https://processing.org/reference/lerp_.html
//#endregion




//#region ARITHMETIC
Deno.test("isPow", () => {
  const a = isPow(32, 2);
  assertEquals(a, true);
  const b = isPow(32, 4);
  assertEquals(b, false);
  const c = isPow(64, 4);
  assertEquals(c, true);
});


Deno.test("prevPow", () => {
  const a = prevPow(32, 2);
  assertEquals(a, 32);
  const b = prevPow(35, 2);
  assertEquals(b, 32);
  const c = prevPow(35, 3);
  assertEquals(c, 27);
});


Deno.test("nextPow", () => {
  const a = nextPow(32, 2);
  assertEquals(a, 32);
  const b = nextPow(29, 2);
  assertEquals(b, 32);
  const c = nextPow(29, 3);
  assertEquals(c, 81);
});


Deno.test("root", () => {
  const a = root(25, 2);
  assertEquals(a, 5);
  const b = root(-8, 3);
  assertEquals(b, -2);
});
// - https://en.wikipedia.org/wiki/Nth_root


Deno.test("log", () => {
  const a = log(Math.E);
  assertEquals(a, 1);
  const b = log(10);
  assertEquals(b, 2.302585092994046);
  const c = log(243, 3);
  assertEquals(c, 5);
  const d = log(64, 2);
  assertEquals(d, 6);
});
// - https://en.wikipedia.org/wiki/Logarithm
//#endregion




//#region DIVISORS
Deno.test("properDivisors", () => {
  const a = properDivisors(6);
  assertEquals(a, [1, 2, 3]);
  const b = properDivisors(1);
  assertEquals(b, []);
  const c = properDivisors(0);
  assertEquals(c, []);
  const d = properDivisors(-24);
  assertEquals(d, [1, 2, 3, 4, 6, 8, 12]);
});


Deno.test("aliquotSum", () => {
  const a = aliquotSum(6);
  assertEquals(a, 6);  // (1+2+3)
  const b = aliquotSum(1);
  assertEquals(b, 0);
  const c = aliquotSum(0);
  assertEquals(c, 0);
  const d = aliquotSum(-24);
  assertEquals(d, 36);  // (1+2+3+4+6+8+12)
});


Deno.test("minPrimeFactor", () => {
  const a = minPrimeFactor(1);
  assertEquals(a, 0);
  const b = minPrimeFactor(3);
  assertEquals(b, 3);
  const c = minPrimeFactor(21);
  assertEquals(c, 3);
  const d = minPrimeFactor(55);
  assertEquals(d, 5);
  const e = minPrimeFactor(53);
  assertEquals(e, 53);
});


Deno.test("maxPrimeFactor", () => {
  const a = maxPrimeFactor(1);
  assertEquals(a, 0);
  const b = maxPrimeFactor(3);
  assertEquals(b, 3);
  const c = maxPrimeFactor(21);
  assertEquals(c, 7);
  const d = maxPrimeFactor(55);
  assertEquals(d, 11);
  const e = maxPrimeFactor(53);
  assertEquals(e, 53);
});


Deno.test("primeFactors", () => {
  const a = primeFactors(1);
  assertEquals(a, []);
  const b = primeFactors(3);
  assertEquals(b, [3]);
  const c = primeFactors(21);
  assertEquals(c, [3, 7]);
  const d = primeFactors(55);
  assertEquals(d, [5, 11]);
  const e = primeFactors(53);
  assertEquals(e, [53]);
});


Deno.test("primeExponentials", () => {
  const a = primeExponentials(1);
  assertEquals(a, []);
  const b = primeExponentials(9);
  assertEquals(b, [[3, 2]]);
  const c = primeExponentials(63);
  assertEquals(c, [[3, 2], [7, 1]]);
  const d = primeExponentials(605);
  assertEquals(d, [[5, 1], [11, 2]]);
  const e = primeExponentials(53);
  assertEquals(e, [[53, 1]]);
});


Deno.test("isPrime", () => {
  const a = isPrime(7);
  assertEquals(a, true);
  const b = isPrime(53);
  assertEquals(b, true);
  const c = isPrime(4);
  assertEquals(c, false);
  const d = isPrime(1);
  assertEquals(d, false);
  const e = isPrime(0);
  assertEquals(e, false);
});


Deno.test("gcd", () => {
  const a = gcd(6, 15);
  assertEquals(a, 3);
  const b = gcd(6, 15, 21);
  assertEquals(b, 3);
  const c = gcd(6, 15, 20);
  assertEquals(c, 1);
  const d = gcd();  // sp
  assertEquals(d, 1);  // sp
});


Deno.test("lcm", () => {
  const a = lcm(2, 3);
  assertEquals(a, 6);
  const b = lcm(2, 3, 4);
  assertEquals(b, 12);
  const c = lcm(2, 3, 4, 5);
  assertEquals(c, 60);
  const d = lcm();  // sp
  assertEquals(d, 1);  // sp
});
//#endregion




//#region ARRANGEMENTS
Deno.test("factorial", () => {
  const a = factorial(5);
  assertEquals(a, 120);
  const b = factorial(6);
  assertEquals(b, 720);
  const c = factorial(7);
  assertEquals(c, 5040);
  const d = factorial(-1);  // sp
  assertEquals(d, 0);  // sp
});
// - https://en.wikipedia.org/wiki/Factorial


Deno.test("binomial", () => {
  const a = binomial(4, 1);
  assertEquals(a, 4);
  const b = binomial(4, 2);
  assertEquals(b, 6);
  const c = binomial(4, 3);
  assertEquals(c, 4);
  const d = binomial(4, -1);  // sp
  assertEquals(d, 0);  // sp
  const e = binomial(-4, 1);  // sp
  assertEquals(e, -4);  // sp
});


Deno.test("multinomial", () => {
  const a = multinomial(1, 2);
  assertEquals(a, 3);
  const b = multinomial(1, 2, 3);
  assertEquals(b, 60);
  const c = multinomial(1, 2, 3, 4);
  assertEquals(c, 12600);
});
//#endregion




//#region GEOMETRY
Deno.test("degrees", () => {
  const a = degrees(3);
  assertEquals(a, 171.88733853924697);
  const b = degrees(1);
  assertEquals(b, 57.29577951308232);
});


Deno.test("radians", () => {
  const a = radians(180);
  assertEquals(a, 3.141592653589793);
  const b = radians(60);
  assertEquals(b, 1.0471975511965976);
});
//#endregion




//#region STATISTICS
Deno.test("sum", () => {
  const a = sum(1, 2);
  assertEquals(a, 3);
  const b = sum(1, 2, 3);
  assertEquals(b, 6);
  const c = sum(1, 2, 3, 4);
  assertEquals(c, 10);
});


Deno.test("product", () => {
  const a = product(1, 2);
  assertEquals(a, 2);
  const b = product(1, 2, 3);
  assertEquals(b, 6);
  const c = product(1, 2, 3, 4);
  assertEquals(c, 24);
});


Deno.test("median", () => {
  const a = median(1, 7);
  assertEquals(a, 4);
  const b = median(1, 7, 8);
  assertEquals(b, 7);
  const c = median(1, 7, 8, 10);
  assertEquals(c, 7.5);
  const d = median();  // sp
  assertEquals(d, 0);  // sp
});


Deno.test("modes", () => {
  const a = modes(1, 2);
  assertEquals(a, [1, 2]);
  const b = modes(1, 2, 2);
  assertEquals(b, [2]);
  const c = modes(1, 2, 2, 3, 3);
  assertEquals(c, [2, 3]);
});


Deno.test("range", () => {
  const a = range(1, 7);
  assertEquals(a, [1, 7]);
  const b = range(1, 7, 6);
  assertEquals(b, [1, 7]);
  const c = range(1, 7, 8, 6);
  assertEquals(c, [1, 8]);
});


Deno.test("variance", () => {
  const a = variance(1, 2);
  assertEquals(a, 0.25);
  const b = variance(1, 2, 3);
  assertEquals(b, 0.6666666666666666);
  const c = variance(1, 2, 3, 4);
  assertEquals(c, 1.25);
  const d = variance();  // sp
  assertEquals(d, 0);  // sp
});
//#endregion




//#region MEAN (STATISTICS)
Deno.test("arithmeticMean", () => {
  const a = arithmeticMean(1, 2);
  assertEquals(a, 1.5);
  const b = arithmeticMean(1, 2, 3);
  assertEquals(b, 2);
  const c = arithmeticMean(1, 2, 3, 4);
  assertEquals(c, 2.5);
  const d = arithmeticMean();  // sp
  assertEquals(d, 0);  // sp
});


Deno.test("geometricMean", () => {
  const a = geometricMean(1, 2);
  assertEquals(a, Math.sqrt(2));
  const b = geometricMean(1, 2, 3);
  assertEquals(b, Math.cbrt(6));
  const c = geometricMean(1, 2, 3, 4);
  assertEquals(c, Math.pow(24, 1/4));
});


Deno.test("harmonicMean", () => {
  const a = harmonicMean(1, 2);
  assertEquals(a, 4/3);
  const b = harmonicMean(1, 2, 3);
  assertEquals(b, 18/11);
  const c = harmonicMean(1, 2, 3, 4);
  assertEquals(c, 48/25);
});


Deno.test("quadriaticMean", () => {
  const a = quadriaticMean(1, 2);
  assertEquals(a, Math.sqrt(5/2));
  const b = quadriaticMean(1, 2, 3);
  assertEquals(b, Math.sqrt(14/3));
  const c = quadriaticMean(1, 2, 3, 4);
  assertEquals(c, Math.sqrt(30/4));
});


Deno.test("cubicMean", () => {
  const a = cubicMean(1, 2);
  assertEquals(a, Math.cbrt(9/2));
  const b = cubicMean(1, 2, 3);
  assertEquals(b, Math.cbrt(36/3));
  const c = cubicMean(1, 2, 3, 4);
  assertEquals(c, Math.cbrt(100/4));
});
//#endregion
