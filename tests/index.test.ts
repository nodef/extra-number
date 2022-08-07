import * as number   from "../src";
import {is}          from "../src";
import {significantDigits} from "../src";
import {compare}     from "../src";
import {floor}       from "../src";
import {ceil}        from "../src";
import {round}       from "../src";
import {floorDiv}    from "../src";
import {ceilDiv}     from "../src";
import {roundDiv}    from "../src";
import {rem}         from "../src";
import {mod}         from "../src";
import {modp}        from "../src";
import {constrain}   from "../src";
import {normalize}   from "../src";
import {remap}       from "../src";
import {lerp}        from "../src";
import {isPow}       from "../src";
import {prevPow}     from "../src";
import {nextPow}     from "../src";
import {root}        from "../src";
import {log}         from "../src";
import {properDivisors} from "../src";
import {aliquotSum}     from "../src";
import {isPrime}        from "../src";
import {gcd}         from "../src";
import {lcm}         from "../src";
import {factorial}   from "../src";
import {binomial}    from "../src";
import {multinomial} from "../src";
import {degrees}     from "../src";
import {radians}     from "../src";
import {sum}         from "../src";
import {product}     from "../src";
import {median}      from "../src";
import {modes}       from "../src";
import {range}       from "../src";
import {variance}    from "../src";
import {arithmeticMean} from "../src";
import {geometricMean}  from "../src";
import {harmonicMean}   from "../src";
import {quadriaticMean} from "../src";
import {cubicMean}      from "../src";




// 1. Basic tests.
test("example1", () => {
  var b = number.isPrime(53);
  expect(b).toBe(true);
  // → true

  var x = number.properDivisors(6);
  expect(x).toStrictEqual([1, 2, 3]);
  // → [1, 2, 3]

  var a = number.round(9.1357, 0.05);
  expect(x).toBe(9.15);
  // → 9.15

  var a = number.significantDigits(0.0034);
  expect(a).toBe(2);
  // → 2
});




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
  expect(a).toBe(6);
  var a = range(1, 7, 6);
  expect(a).toBe(6);
  var a = range(1, 7, 8, 6);
  expect(a).toBe(7);
});


test("variance", () => {
  var a = variance(1, 2);
  expect(a).toBe(0.25);
  var a = variance(1, 2, 3);
  expect(a).toBe(0.6666666666666666);
  var a = variance(1, 2, 3, 4);
  expect(a).toBe(1.25);
});


test("arithmeticMean", () => {
  var a = arithmeticMean(1, 2);
  expect(a).toBe(1.5);
  var a = arithmeticMean(1, 2, 3);
  expect(a).toBe(2);
  var a = arithmeticMean(1, 2, 3, 4);
  expect(a).toBe(2.5);
});
