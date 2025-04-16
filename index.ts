//#region ABOUT
/**
 * Check if value is a number.
 * @param v a value
 * @returns is number?
 * @example
 * ```ts
 * xnumber.is(3.14);
 * // → true
 *
 * xnumber.is(NaN);
 * // → true (an unexpressable number)
 *
 * xnumber.is('3.14');
 * // → false
 *
 * xnumber.is({'value': 3.14});
 * // → false
 *
 * xnumber.is(null);
 * // → false
 * ```
 */
export function is(v: unknown): v is number {
  return typeof v==="number";
}


// TODO: isEven()?
// TODO: isOdd()?
// TODO: isNatural()?
// TODO: isWhole()?
// TODO: isInteger()?
// TODO: isPositive()?
// TOOD: isNegative()?


/**
 * Examine if number is perfect.
 * @param x a number
 * @returns sum of divisors(x) excluding x = x?
 */
export function isPerfect(x: number): boolean {
  return aliquotSum(x)===x;
}


// TODO: isAlmostPerfect()?
// TODO: isSemiPerfect()?
// TODO: isQuasiPerfect()?
// TODO: isWeird()?


/**
 * Examine if number is deficient.
 * @param x a number
 * @returns sum of divisors(x) excluding x < x?
 */
export function isAbundant(x: number): boolean {
  return aliquotSum(x) > x;
}
// export {isAbundant as isExcessive};


// TODO: isPrimitiveAbundant()?
// TODO: isSuperAbundant()?


/**
 * Obtain the abundance of a number.
 * @param x a number
 * @returns sum of divisors(x) excluding x - x
 */
export function abundance(x: number): number {
  return aliquotSum(x) - x;
}


/**
 * Obtain the abundancy index of a number.
 * @param x a number
 * @returns (sum of divisors(x)) / x
 */
export function abundancyIndex(x: number): number {
  return (aliquotSum(x) + x) / x;
}


// TODO: areAmicable()?
// TODO: areFriendly()?


/**
 * Count the number of significant digits in a number.
 * @param x a number
 * @returns |m - '.'| | x = m × 10ᵉ; m = mantissa, e = exponent
 * @example
 * ```ts
 * xnumber.significantDigits(0.0034);
 * // → 2
 *
 * xnumber.significantDigits(120.5e50);
 * // → 4
 *
 * xnumber.significantDigits(120.5e-50);
 * // → 4
 * ```
 */
export function significantDigits(x: number): number {
  const a = x.toExponential();
  return a.replace(/e[\+\-0-9]*$/, "").replace( /^0\.?0*|\./, "").length;
}
// - https://stackoverflow.com/questions/22884720/what-is-the-fastest-way-to-count-the-number-of-significant-digits-of-a-number
//#endregion




//#region COMPARE
/**
 * Compare two numbers.
 * @param x a number
 * @param y another number
 * @returns x<y: -ve, x=y: 0, x>y: +ve
 * @example
 * ```ts
 * xnumber.compare(10, 12);
 * // → -2  (-ve)
 *
 * xnumber.compare(12, 12);
 * // → 0
 *
 * xnumber.compare(17, 12);
 * // → 5  (+ve)
 * ```
 */
export function compare(x: number, y: number): number {
  return x-y;
}
//#endregion




//#region ROUND
/**
 * Round down a number to specific precision.
 * @param x a number
 * @param pre to precision [1]
 * @example
 * ```ts
 * xnumber.floor(9.161, 1);
 * // → 9
 *
 * xnumber.floor(9.161, 0.01);
 * // → 9.16
 *
 * xnumber.floor(9.1617, 0.05);
 * // → 9.15
 * ```
 */
export function floor(x: number, pre: number=1): number {
  return Math.floor(x/pre)*pre;
}


/**
 * Round up a number to specific precision.
 * @param x a number
 * @param pre to precision [1]
 * @example
 * ```ts
 * xnumber.ceil(9.121, 1);
 * // → 10
 *
 * xnumber.ceil(9.121, 0.01);
 * // → 9.13
 *
 * xnumber.ceil(9.1217, 0.05);
 * // → 9.15
 * ```
 */
export function ceil(x: number, pre: number=1): number {
  return Math.ceil(x/pre)*pre;
}


/**
 * Round a number to specific precision.
 * @param x a number
 * @param pre to precision [1]
 * @example
 * ```ts
 * xnumber.round(9.135, 1);
 * // → 9
 *
 * xnumber.round(9.135, 1e-2);
 * // → 9.14
 *
 * xnumber.round(9.1357, 0.05);
 * // → 9.15
 *
 * 0.1 + 0.2
 * // → 0.30000000000000004 (why?)
 *
 * xnumber.round(0.1 + 0.2, 1e-12);
 * // → 0.3 (nice!)
 * ```
 */
export function round(x: number, pre: number=1): number {
  return Math.round(x/pre)*pre;
}
//#endregion




//#region ROUNDED DIVISION
/**
 * Perform floor-divison of two numbers.
 * @param x divisor
 * @param y dividend
 * @returns ⌊x/y⌋
 * @example
 * ```ts
 * xnumber.floorDiv(15, 4);
 * // → 3
 *
 * xnumber.floorDiv(2, 2);
 * // → 1
 *
 * xnumber.floorDiv(-15, 4);
 * // → -4
 * ```
 */
export function floorDiv(x: number, y: number): number {
  return Math.floor(x/y);
}


/**
 * Perform ceiling-divison of two numbers.
 * @param x divisor
 * @param y dividend
 * @returns ⌈x/y⌉
 * @example
 * ```ts
 * xnumber.ceilDiv(15, 4);
 * // → 4
 *
 * xnumber.ceilDiv(2, 2);
 * // → 1
 *
 * xnumber.ceilDiv(-15, 4);
 * // → -3
 * ```
 */
export function ceilDiv(x: number, y: number): number {
  return Math.ceil(x/y);
}


/**
 * Perform rounded-divison of two numbers.
 * @param x divisor
 * @param y dividend
 * @returns [x/y]
 * @example
 * ```ts
 * xnumber.roundDiv(15, 4);
 * // → 4
 *
 * xnumber.roundDiv(2, 2);
 * // → 1
 *
 * xnumber.roundDiv(-15, 4);
 * // → -4
 * ```
 */
export function roundDiv(x: number, y: number): number {
  return Math.round(x/y);
}
//#endregion




//#region MODULO
/**
 * Find the remainder of x/y with sign of x (truncated division).
 * @param x dividend
 * @param y divisor
 * @returns trunc(x % y)
 * @example
 * ```ts
 * xnumber.rem(1, 10);
 * // → 1
 *
 * xnumber.rem(-1, 10);
 * // → -1
 *
 * xnumber.rem(1, -10);
 * // → 1
 * ```
 */
export function rem(x: number, y: number): number {
  return x % y;
}
// - https://en.wikipedia.org/wiki/Modulo_operation


/**
 * Find the remainder of x/y with sign of y (floored division).
 * @param x dividend
 * @param y divisor
 * @returns floor(x % y)
 * @example
 * ```ts
 * xnumber.mod(1, 10);
 * // → 1
 *
 * xnumber.mod(-1, 10);
 * // → 9
 *
 * xnumber.mod(1, -10);
 * // → -9
 * ```
 */
export function mod(x: number, y: number): number {
  return x - y*Math.floor(x/y);
}
// - https://en.wikipedia.org/wiki/Modulo_operation


/**
 * Find the remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 * @returns n>0: floor(x % y), n<0: ceil(x % y)
 * @example
 * ```ts
 * xnumber.modp(1, 10);
 * // → 1
 *
 * xnumber.modp(-1, 10);
 * // → 9
 *
 * xnumber.modp(1, -10);
 * // → 1
 * ```
 */
export function modp(x: number, y: number): number {
  return x - Math.abs(y)*Math.floor(x/Math.abs(y));
}
// - https://en.wikipedia.org/wiki/Modulo_operation
//#endregion




//#region RANGE CONTROL
/**
 * Constrain a number within a minimum and a maximum value.
 * @param x a number
 * @param min minimum value
 * @param max maximum value
 * @returns x<min: min, x>max: max, x
 * @example
 * ```ts
 * xnumber.constrain(20, 0, 50);
 * // → 20
 *
 * xnumber.constrain(-10, 0, 100);
 * // → 0
 *
 * xnumber.constrain(120, 0, 100);
 * // → 100
 * ```
 */
export function constrain(x: number, min: number, max: number): number {
  return Math.min(Math.max(x, min), max);
}
export {constrain as clamp};
// - https://processing.org/reference/constrain_.html
// - https://www.npmjs.com/package/clamp
// - https://en.cppreference.com/w/cpp/algorithm/clamp
// - https://dlang.org/library/std/algorithm/comparison/clamp.html
// - https://www.rdocumentation.org/packages/raster/versions/3.0-12/topics/clamp
// - https://docs.microsoft.com/en-us/dotnet/api/system.math.clamp?view=netcore-3.1
// - https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-clamp
// - https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/clamp.xhtml
// - https://docs.unity3d.com/ScriptReference/Mathf.Clamp.html
// - https://en.wikipedia.org/wiki/Clamping_(graphics)


/**
 * Normalize a number from its current range into a value between 0 and 1.
 * @param x a number
 * @param r lower bound of current range
 * @param R upper bound of current range
 * @returns ∈ [0, 1]
 * @example
 * ```ts
 * xnumber.normalize(20, 0, 50);
 * // → 0.4
 *
 * xnumber.normalize(-10, 0, 100);
 * // → -0.1
 * ```
 */
export function normalize(x: number, r: number, R: number): number {
  return (x - r)/(R - r);
}
export {normalize as norm};
// - https://processing.org/reference/norm_.html


/**
 * Re-map a number from one range to another.
 * @param x a number
 * @param r lower bound of current range
 * @param R upper bound of current range
 * @param t lower bound of target range
 * @param T upper bound of target range
 * @returns ∈ [ymin, ymax]
 * @example
 * ```ts
 * xnumber.remap(25, 0, 100, 0, 1366);
 * // → 341.5
 *
 * xnumber.remap(110, 0, 100, -20, -10);
 * // → -9
 * ```
 */
export function remap(x: number, r: number, R: number, t: number, T: number): number {
  return t + ((x - r)/(R - r)) * (T - t);
}
export {remap as map};
// - https://processing.org/reference/map_.html


/**
 * Linearly interpolate a number between two numbers.
 * @param x start number
 * @param y stop number
 * @param t interpolant ∈ [0, 1]
 * @returns ∈ [x, y]
 * @example
 * ```ts
 * xnumber.lerp(80, 320, 0.8);
 * // → 272
 *
 * xnumber.lerp(80, 320, 0.20);
 * // → 128
 *
 * xnumber.lerp(80, 320, 0.32);
 * // → 156.8
 * ```
 */
export function lerp(x: number, y: number, t: number): number {
  return x + t*(y - x);
}
// - https://processing.org/reference/lerp_.html
// - https://docs.unity3d.com/ScriptReference/Vector3.Lerp.html
//#endregion




//#region ARITHMETIC
/**
 * Check if a number is a power-of-n.
 * @param x a number
 * @param n base
 * @returns nⁱ = x? | i = +ve integer
 * @example
 * ```ts
 * xnumber.isPow(32, 2);
 * // → true
 *
 * xnumber.isPow(32, 4);
 * // → false
 *
 * xnumber.isPow(64, 4);
 * // → true
 * ```
 */
export function isPow(x: number, n: number): boolean {
  if (n===0) return x===0;
  const p = log(Math.abs(x), Math.abs(n));
  if (p!==Math.floor(p)) return false;
  return x<0? n<0 && (p & 1)===1 : n>0 || (p & 1)===0;
}


/**
 * Find largest power-of-n less than or equal to given number.
 * @param x a number
 * @param n base
 * @returns nⁱ | nⁱ ≤ x and nⁱ > x/n
 * @example
 * ```ts
 * xnumber.prevPow(32, 2);
 * // → 32
 *
 * xnumber.prevPow(35, 2);
 * // → 32
 *
 * xnumber.prevPow(35, 3);
 * // → 27
 * ```
 */
export function prevPow(x: number, n: number): number {
  if (x<=1) return 0;
  const p = Math.floor(Math.log(x) / Math.log(n));
  return Math.pow(n, p);
}


/**
 * Find smallest power-of-n greater than or equal to given number.
 * @param x a number
 * @param n base
 * @returns nⁱ | nⁱ ≥ x and nⁱ < n*x
 * @example
 * ```ts
 * xnumber.nextPow(32, 2);
 * // → 32
 *
 * xnumber.nextPow(29, 2);
 * // → 32
 *
 * xnumber.nextPow(29, 3);
 * // → 81
 * ```
 */
export function nextPow(x: number, n: number): number {
  if (x<=0) return 1;
  const p = Math.ceil(Math.log(x) / Math.log(n));
  return Math.pow(n, p);
}


/**
 * Find the nth root of a number (ⁿ√).
 * @param x a number
 * @param n root
 * @returns ⁿ√x
 * @example
 * ```ts
 * xnumber.root(25, 2);
 * // → 5
 *
 * xnumber.root(-8, 3);
 * // → -2
 * ```
 */
export function root(x: number, n: number): number {
  if ((n & 1)===0) return Math.pow(x, 1/n);
  return Math.sign(x) * Math.pow(Math.abs(x), 1/n);
}
// - https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/root.ts


/**
 * Find the logarithm of a number with a given base.
 * @param x a number
 * @param b logarithm base [e]
 * @returns log_b (x)
 * @example
 * ```ts
 * xnumber.log(Math.E);
 * // → 1
 *
 * xnumber.log(10);
 * // → 2.302585092994046
 *
 * xnumber.log(243, 3);
 * // → 5
 *
 * xnumber.log(64, 2);
 * // → 6
 * ```
 */
export function log(x: number, b: number=Math.E): number {
  return Math.log(x)/Math.log(b);
}
// - https://en.wikipedia.org/wiki/Logarithm
//#endregion




//#region DIVISORS
/**
 * List all divisors of a number, except itself.
 * @param x a number
 * @returns proper divisors (factors)
 * @example
 * ```ts
 * xnumber.properDivisors(6);
 * // → [1, 2, 3]
 *
 * xnumber.properDivisors(1);
 * // → []
 *
 * xnumber.properDivisors(0);
 * // → []
 *
 * xnumber.properDivisors(-24);
 * // → [1, 2, 3, 4, 6, 8, 12]
 * ```
 */
export function properDivisors(x: number): number[] {
  const a = []; x = Math.abs(x);
  for (let i=1; i<x; i++)
    if (x % i===0) a.push(i);
  return a;
}
export {properDivisors as aliquotParts};
// - https://mathworld.wolfram.com/ProperDivisor.html
// - https://en.wikipedia.org/wiki/Divisor#Further_notions_and_facts


/**
 * Sum all proper divisors of a number.
 * @param x a number
 * @returns Σdᵢ | dᵢ is a divisor of x and ≠x
 * @example
 * ```ts
 * xnumber.aliquotSum(6);
 * // → 6 (1+2+3)
 *
 * xnumber.aliquotSum(1);
 * // → 0
 *
 * xnumber.aliquotSum(0);
 * // → 0
 *
 * xnumber.aliquotSum(-24);
 * // → 36 (1+2+3+4+6+8+12)
 * ```
 */
export function aliquotSum(x: number): number {
  let a = 0; x = Math.abs(x);
  for (let i=0; i<x; i++)
    if (x % i===0) a += i;
  return a;
}


/**
 * Find the least prime number which divides a number.
 * @param x a number
 * @returns least prime factor
 * @example
 * ```ts
 * xnumber.minPrimeFactor(1);
 * // → 0
 *
 * xnumber.minPrimeFactor(3);
 * // → 3
 *
 * xnumber.minPrimeFactor(21);
 * // → 3
 *
 * xnumber.minPrimeFactor(55);
 * // → 5
 *
 * xnumber.minPrimeFactor(53);
 * // → 53
 * ```
 */
export function minPrimeFactor(x: number): number {
  x = Math.abs(x);
  // 1. LPF of 2, 3 is the number itself.
  if (x<=1) return 0;
  if (x<=3) return x;
  // 2. LPF for multiples of 2, 3.
  if (x % 2===0) return 2;
  if (x % 3===0) return 3;
  // 3. LPF can be 6k-1 or 6k+1.
  for (let i=6, I=Math.sqrt(x)+1; i<=I; i+=6) {
    if (x % (i-1)===0) return i-1;
    if (x % (i+1)===0) return i+1;
  }
  return x;
}
export {minPrimeFactor as leastPrimeFactor};
// - https://mathworld.wolfram.com/LeastPrimeFactor.html


/**
 * Find the greatest prime number which divides a number.
 * @param x a number
 * @returns greatest prime factor
 * @example
 * ```ts
 * xnumber.maxPrimeFactor(1);
 * // → 0
 *
 * xnumber.maxPrimeFactor(3);
 * // → 3
 *
 * xnumber.maxPrimeFactor(21);
 * // → 7
 *
 * xnumber.maxPrimeFactor(55);
 * // → 11
 *
 * xnumber.maxPrimeFactor(53);
 * // → 53
 * ```
 */
export function maxPrimeFactor(x: number): number {
  let a = 0; x = Math.abs(x);
  // 1. GPF of 2, 3 is the number itself.
  if (x<=1) return 0;
  if (x<=3) return x;
  // 2. Remove factors 2, 3.
  for (; x % 2===0; a=2)
    x /= 2;
  for (; x % 3===0; a=3)
    x /= 3;
  // 3. Remove factors 6k-1, 6k+1.
  for (let i=6, I=Math.sqrt(x)+1; x>1 && i<=I; i+=6) {
    for (; x % (i-1)==0; a=i-1)
      x /= i-1;
    for (; x % (i+1)==0; a=i+1)
      x /= i+1;
  }
  if (x<=1) return a;
  return x;
}
export {maxPrimeFactor as greatestPrimeFactor};
// - https://mathworld.wolfram.com/GreatestPrimeFactor.html
// - https://www.geeksforgeeks.org/find-largest-prime-factor-number/


/**
 * Find the prime factors of a number.
 * @param x a number
 * @returns [f₀, f₁, ...] | fᵢ divides x and is prime
 * @example
 * ```ts
 * xnumber.primeFactors(1);
 * // → []
 *
 * xnumber.primeFactors(3);
 * // → [3]
 *
 * xnumber.primeFactors(21);
 * // → [3, 7]
 *
 * xnumber.primeFactors(55);
 * // → [5, 11]
 *
 * xnumber.primeFactors(53);
 * // → [53]
 * ```
 */
export function primeFactors(x: number): number[] {
  const a: number[] = []; x = Math.abs(x);
  if (x<=1) return [];
  if (x<=3) return [x];
  // 2. Try factors 2, 3.
  x = pushPrimeFactorTo$(a, x, 2);
  x = pushPrimeFactorTo$(a, x, 3);
  // 3. Try factors 6k-1, 6k+1.
  for (let i=6, I=Math.sqrt(x)+1; x>1 && i<=I; i+=6) {
    x = pushPrimeFactorTo$(a, x, i-1);
    x = pushPrimeFactorTo$(a, x, i+1);
  }
  if (x>1) a.push(x);
  return a;
}

function pushPrimeFactorTo$(a: number[], x: number, f: number): number {
  if (x % f!==0) return x;
  do {
    x /= f;
  } while (x % f===0);
  a.push(f);
  return x;
}
// - https://www.geeksforgeeks.org/prime-factors-big-number/
// - https://mathworld.wolfram.com/PrimeFactor.html


/**
 * Find the prime factors and respective exponents of a number.
 * @param x a number
 * @returns [[f₀, e₀], [f₁, e₁], ...] | fᵢ is a prime factor of x and eᵢ is its exponent
 * @example
 * ```ts
 * xnumber.primeExponentials(1);
 * // → []
 *
 * xnumber.primeExponentials(9);
 * // → [[3, 2]]
 *
 * xnumber.primeExponentials(63);
 * // → [[3, 2], [7, 1]]
 *
 * xnumber.primeExponentials(605);
 * // → [[5, 1], [11, 2]]
 *
 * xnumber.primeExponentials(53);
 * // → [[53, 1]]
 * ```
 */
export function primeExponentials(x: number): [number, number][] {
  const a: [number, number][] = []; x = Math.abs(x);
  if (x<=1) return [];
  if (x<=3) return [[x, 1]];
  // 2. Try factors 2, 3.
  x = pushPrimeExponentialTo$(a, x, 2);
  x = pushPrimeExponentialTo$(a, x, 3);
  // 3. Try factors 6k-1, 6k+1.
  for (let i=6, I=Math.sqrt(x)+1; x>1 && i<=I; i+=6) {
    x = pushPrimeExponentialTo$(a, x, i-1);
    x = pushPrimeExponentialTo$(a, x, i+1);
  }
  if (x>1) a.push([x, 1]);
  return a;
}

function pushPrimeExponentialTo$(a: [number, number][], x: number, f: number): number {
  if (x % f!==0) return x;
  let e = 0;
  do {
    x /= f; ++e;
  } while (x % f===0);
  a.push([f, e]);
  return x;
}
// - https://www.geeksforgeeks.org/prime-factors-big-number/
// - https://reference.wolfram.com/language/ref/FactorInteger.html
// - https://mathworld.wolfram.com/PrimeFactorization.html
// - https://mathworld.wolfram.com/PrimeFactor.html


/**
 * Examine if number is prime.
 * @param x a number
 * @returns is divisible by 1 and itself only?
 * @example
 * ```ts
 * xnumber.isPrime(7);
 * // → true
 *
 * xnumber.isPrime(53);
 * // → true
 *
 * xnumber.isPrime(4);
 * // → false
 *
 * xnumber.isPrime(1);
 * // → false
 *
 * xnumber.isPrime(0);
 * // → false
 * ```
 */
export function isPrime(x: number): boolean {
  return x!==0 && minPrimeFactor(x) === Math.abs(x);
}


// TODO: isComposite()?


/**
 * Find the greatest common divisor of numbers.
 * @param xs a list of numbers
 * @returns gcd(x₁, x₂, ...)
 * @example
 * ```ts
 * xnumber.gcd(6, 15);
 * // → 3
 *
 * xnumber.gcd(6, 15, 21);
 * // → 3
 *
 * xnumber.gcd(6, 15, 20);
 * // → 1
 * ```
 */
export function gcd(...xs: number[]): number {
  let a = xs[0] || 1;
  for(let i=1, I=xs.length; i<I; i++)
    a = gcdPair(a, xs[i]);
  return a;
}
export {gcd as hcf};

// Find the greatest common divisor of a pair of numbers.
function gcdPair(x: number, y: number): number {
  while (y!==0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}
// - https://lemire.me/blog/2013/12/26/fastest-way-to-compute-the-greatest-common-divisor/
// - https://en.wikipedia.org/wiki/Euclidean_algorithm


/**
 * Find the least common multiple of numbers.
 * @param xs a list of numbers
 * @returns lcm(x₁, x₂, ...)
 * @example
 * ```ts
 * xnumber.lcm(2, 3);
 * // → 6
 *
 * xnumber.lcm(2, 3, 4);
 * // → 12
 *
 * xnumber.lcm(2, 3, 4, 5);
 * // → 60
 * ```
 */
export function lcm(...xs: number[]): number {
  let a = xs[0] || 1;
  for (let i=1, I=xs.length; i<I; i++)
      a = a*xs[i] / gcdPair(a, xs[i]);
  return a;
}
// - https://en.wikipedia.org/wiki/Least_common_multiple
//#endregion




//#region ARRANGEMENTS
/**
 * Find the factorial of a number.
 * @param n a number
 * @param k denominator factorial [0]
 * @returns P(n, k); k=0: n!, k>0: n!/k!
 * @example
 * ```ts
 * xnumber.factorial(5);
 * // → 120
 *
 * xnumber.factorial(6);
 * // → 720
 *
 * xnumber.factorial(7);
 * // → 5040
 * ```
 */
export function factorial(n: number, k: number=0): number {
  if (n<0) return 0;
  let a = 1;
  for (let i=k+1; i<=n; i++)
    a *= i;
  return a;
}
// - https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/factorial.ts
// - https://en.wikipedia.org/wiki/Permutation


/**
 * Find the number of ways to choose k elements from a set of n elements.
 * @param n elements in source set
 * @param k elements in choose set
 * @returns C(n, k)
 * @example
 * ```ts
 * xnumber.binomial(4, 1);
 * // → 4
 *
 * xnumber.binomial(4, 2);
 * // → 6
 *
 * xnumber.binomial(4, 3);
 * // → 4
 * ```
 */
export function binomial(n: number, k: number): number {
  // 1. Generalization to negative integers
  if (k<0 || k>Math.abs(n)) return 0;
  if (n<0) return Math.pow(-1, k)*binomial(-n, k);
  // 2. Take advantage of symmetry
  k = k>n-k? n-k:k;
  let a = 1;
  for (let i=1; i<=k; i++, n--)
    a *= n/i;
  return a;
}
// - https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/binomial.ts
// - https://en.wikipedia.org/wiki/Binomial_coefficient


/**
 * Find the number of ways to put n objects in m bins (n=sum(kᵢ)).
 * @param ks objects per bin (kᵢ)
 * @returns n!/(k₁!k₂!...) | n=sum(kᵢ)
 * @example
 * ```ts
 * xnumber.multinomial(1, 2);
 * // → 3
 *
 * xnumber.multinomial(1, 2, 3);
 * // → 60
 *
 * xnumber.multinomial(1, 2, 3, 4);
 * // → 12600
 * ```
 */
export function multinomial(...ks: number[]): number {
  let n = sum(...ks), a = 1;
  for (let i=0, j=0, I=ks.length; i<I;) {
    if (j<=0) j = ks[i++];
    else a *= n--/j--;
  }
  return a;
}
// - https://en.wikipedia.org/wiki/Multinomial_distribution
//#endregion




//#region GEOMETRY
/**
 * Convert radians to degrees.
 * @param x radians
 * @returns 2π → 360
 * @example
 * ```ts
 * xnumber.degrees(3);
 * // → 171.88733853924697
 *
 * xnumber.degrees(1);
 * // → 57.29577951308232
 * ```
 */
export function degrees(x: number): number {
  return x*(180/Math.PI);
}
// - https://processing.org/reference/degrees_.html


/**
 * Convert degrees to radians.
 * @param x degrees
 * @returns 360 → 2π
 * @example
 * ```ts
 * xnumber.radians(180);
 * // → 3.141592653589793
 *
 * xnumber.radians(60);
 * // → 1.0471975511965976
 * ```
 */
export function radians(x: number): number {
  return x*(Math.PI/180);
}
// - https://processing.org/reference/radians_.html
//#endregion




//#region STATISTICS
/**
 * Find the sum of numbers (Σ).
 * @param xs a list of numbers
 * @returns Σxᵢ
 * @example
 * ```ts
 * xnumber.sum(1, 2);
 * // → 3
 *
 * xnumber.sum(1, 2, 3);
 * // → 6
 *
 * xnumber.sum(1, 2, 3, 4);
 * // → 10
 * ```
 */
export function sum(...xs: number[]): number {
  let a = 0;
  for (const x of xs)
    a += x;
  return a;
}


/**
 * Find the product of numbers (∏).
 * @param xs a list of numbers
 * @returns ∏xᵢ
 * @example
 * ```ts
 * xnumber.product(1, 2);
 * // → 2
 *
 * xnumber.product(1, 2, 3);
 * // → 6
 *
 * xnumber.product(1, 2, 3, 4);
 * // → 24
 * ```
 */
export function product(...xs: number[]): number {
  let a = 1;
  for (const x of xs)
    a *= x;
  return a;
}


/**
 * Find the value separating the higher and lower halves of numbers.
 * @param xs a list of numbers
 * @returns xₘ | sort(xs) = [..., xₘ, ...]
 * @example
 * ```ts
 * xnumber.median(1, 7);
 * // → 4
 *
 * xnumber.median(1, 7, 8);
 * // → 7
 *
 * xnumber.median(1, 7, 8, 10);
 * // → 7.5
 * ```
 */
export function median(...xs: number[]): number {
  if (xs.length===0) return 0;
  xs.sort((a, b) => a-b);
  const i = xs.length>>1;
  if ((xs.length & 1)===1) return xs[i];
  return (xs[i-1] + xs[i])/2;
}
// - https://stackoverflow.com/questions/45309447/calculating-median-javascript
// - https://en.wikipedia.org/wiki/Median


/**
 * Find the values that appear most often.
 * @param xs a list of numbers
 * @returns [xₘ₁, xₘ₂, ...] | count(xₘᵢ) ≥ count(xᵢ) ∀ xᵢ ∈ xs
 * @example
 * ```ts
 * xnumber.modes(1, 2);
 * // → [1, 2]
 *
 * xnumber.modes(1, 2, 2);
 * // → [2]
 *
 * xnumber.modes(1, 2, 2, 3, 3);
 * // → [2, 3]
 * ```
 */
export function modes(...xs: number[]): number[] {
  xs.sort((a, b) => a-b);
  const r = maxRepeat(xs);
  return getRepeats(xs, r);
}
// - https://en.wikipedia.org/wiki/Mode_(statistics)

// Get the maximum number of times any number has repeated in a sorted array.
function maxRepeat(xs: number[]): number {
  let count = Math.min(xs.length, 1), max = count;
  for (let i=1, I=xs.length; i<I; i++) {
    if (xs[i-1]===xs[i]) count++;
    else { max = Math.max(max, count); count = 1; }
  }
  return Math.max(max, count);
}

// Get the numbers which have been repeated atleast given number of times.
function getRepeats(xs: number[], r: number): number[] {
  const a: number[] = []; r--;
  for (let i=0, I=xs.length-r; i<I; i++)
    if (xs[i]===xs[i+r]) a.push(xs[i+=r]);
  return a;
}


/**
 * Find the smallest and largest values.
 * @param xs a list of numbers
 * @returns [min(xs), max(xs)]
 * @example
 * ```ts
 * xnumber.range(1, 7);
 * // → 6
 *
 * xnumber.range(1, 7, 6);
 * // → 6
 *
 * xnumber.range(1, 7, 8, 6);
 * // → 7
 * ```
 */
export function range(...xs: number[]): [number, number] {
  return [Math.min(...xs), Math.max(...xs)];
}
// - https://en.wikipedia.org/wiki/Range_(statistics)


/**
 * Find the mean of squared deviation of numbers from its mean.
 * @param xs a list of numbers
 * @returns σ² = E[(xs - µ)²] | µ = mean(xs)
 * @example
 * ```ts
 * xnumber.variance(1, 2);
 * // → 0.25
 *
 * xnumber.variance(1, 2, 3);
 * // → 0.6666666666666666
 *
 * xnumber.variance(1, 2, 3, 4);
 * // → 1.25
 * ```
 */
export function variance(...xs: number[]): number {
  if (xs.length===0) return 0;
  const m = arithmeticMean(...xs); let a = 0;
  for (const x of xs)
    a += (x-m)**2;
  return a/xs.length;
}
// - https://en.wikipedia.org/wiki/Variance
//#endregion





//#region MEAN (STATISTICS)
/**
 * Find the average of numbers.
 * @param xs a list of numbers
 * @returns Σxᵢ/n | n = size(xs)
 * @example
 * ```ts
 * xnumber.arithmethicMean(1, 2);
 * // → 1.5
 *
 * xnumber.arithmethicMean(1, 2, 3);
 * // → 2
 *
 * xnumber.arithmethicMean(1, 2, 3, 4);
 * // → 2.5
 * ```
 */
export function arithmeticMean(...xs: number[]): number {
  if (xs.length===0) return 0;
  return sum(...xs)/xs.length;
}
export {arithmeticMean as mean};


/**
 * Find the geometric mean of numbers.
 * @param xs a list of numbers
 * @returns ⁿ√(∏xᵢ) | n = size(xs)
 * @example
 * ```ts
 * xnumber.geometricMean(1, 2);
 * // → 1.4142135623730951  (Math.sqrt(2))
 *
 * xnumber.geometricMean(1, 2, 3);
 * // → 1.8171205928321397  (Math.cbrt(6))
 *
 * xnumber.geometricMean(1, 2, 3, 4);
 * // → 2.2133638394006434  (Math.pow(24, 1/4))
 * ```
 */
export function geometricMean(...xs: number[]): number {
  const n = xs.length;
  return root(product(...xs), n);
}


/**
 * Find the harmonic mean of numbers.
 * @param xs a list of numbers
 * @returns n/Σ(1/xᵢ) | n = size(xs)
 * @example
 * ```ts
 * xnumber.harmonicMean(1, 2);
 * // → 1.3333333333333333  (4/3)
 *
 * xnumber.harmonicMean(1, 2, 3);
 * // → 1.6363636363636365  (18/11)
 *
 * xnumber.harmonicMean(1, 2, 3, 4);
 * // → 1.92  (48/25)
 * ```
 */
export function harmonicMean(...xs: number[]): number {
  const n = xs.length;
  const p = product(...xs); let q = 0;
  for (const x of xs)
    q += p/x;
  return n*p/q;
}


/**
 * Find the quadriatic mean of numbers.
 * @param xs a list of numbers
 * @returns √(Σxᵢ²)/n | n = size(xs)
 * @example
 * ```ts
 * xnumber.quadriaticMean(1, 2);
 * // → 1.5811388300841898  (Math.sqrt(5/2))
 *
 * xnumber.quadriaticMean(1, 2, 3);
 * // → 2.160246899469287  (Math.sqrt(14/3))
 *
 * xnumber.quadriaticMean(1, 2, 3, 4);
 * // → 2.7386127875258306  (Math.sqrt(30/4))
 * ```
 */
export function quadriaticMean(...xs: number[]): number {
  const n = xs.length; let a = 0;
  for (const x of xs)
    a += x*x;
  return Math.sqrt(a/n);
}
export {quadriaticMean as rootMeanSquare};


/**
 * Find the cubic mean of numbers.
 * @param xs a list of numbers
 * @returns ³√(Σxᵢ³)/n | n = size(xs)
 * @example
 * ```ts
 * xnumber.cubicMean(1, 2);
 * // → 1.6509636244473134  (Math.cbrt(9/2))
 *
 * xnumber.cubicMean(1, 2, 3);
 * // → 2.2894284851066637  (Math.cbrt(36/3))
 *
 * xnumber.cubicMean(1, 2, 3, 4);
 * // → 2.924017738212866  (Math.cbrt(100/4))
 * ```
 */
export function cubicMean(...xs: number[]): number {
  const n = xs.length; let a = 0;
  for (const x of xs)
    a += x**3;
  return Math.cbrt(a/n);
}
//#endregion




//#region ROMAN NUMERALS
/** List of symbols in the Roman numeral system. */
const ROMAN_SYMBOLS = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

/** Respective values in the Roman numeral system. */
const ROMAN_VALUES  = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];


/**
 * Convert roman numerals to number.
 * @param txt roman numerals
 * @returns eg. XCV -> 95
 */
export function fromRomanNumerals(txt: string): number {
  let   s = ROMAN_SYMBOLS.length-1;
  const n = txt.search(/^\s*-/) >= 0; let a = 0;
  txt = txt.replace(/\W/g, '').toUpperCase();
  for (let i=0, I=txt.length; i<I;  i += ROMAN_SYMBOLS[s].length) {
    while (s>=0 && txt.substring(i, i +  ROMAN_SYMBOLS[s].length) !== ROMAN_SYMBOLS[s]) --s;
    if (s<0) break;
    a += ROMAN_VALUES[s];
  }
  return n? -a : a;
}
export {fromRomanNumerals as fromRoman};


/**
 * Convert number to roman numerals.
 * @param x a number
 * @returns eg. 95 -> XCV
 */
export function toRomanNumerals(x: number): string {
  let a = x<0? '-' : '';
  x = Math.abs(x);
  for  (let s=ROMAN_SYMBOLS.length-1; s>=0; --s)
    while (x>=ROMAN_VALUES[s]) {
      x -= ROMAN_VALUES[s];
      a += ROMAN_SYMBOLS[s];
    }
  return a;
}
export {toRomanNumerals as toRoman};


// export {default as fromScientific} from './_fromScientific';
// export {default as toScientific} from './_toScientific';
//#endregion
