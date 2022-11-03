// METHODS
// =======

// ABOUT
// -----

/**
 * Check if value is a number.
 * @param v a value
 * @returns is number?
 */
export function is(v: any): v is number {
  return typeof v==="number";
}


/**
 * Count the number of significant digits in a number.
 * @param x a number
 * @returns |m - '.'| | x = m × 10ᵉ; m = mantissa, e = exponent
 */
export function significantDigits(x: number): number {
  var a = x.toExponential();
  return a.replace(/e[\+\-0-9]*$/, "").replace( /^0\.?0*|\./, "").length;
}
// - https://stackoverflow.com/questions/22884720/what-is-the-fastest-way-to-count-the-number-of-significant-digits-of-a-number




// COMPARE
// -------

/**
 * Compare two numbers.
 * @param x a number
 * @param y another number
 * @returns x<y: -ve, x=y: 0, x>y: +ve
 */
export function compare(x: number, y: number): number {
  return x-y;
}




// ROUND
// -----

/**
 * Round down a number to specific precision.
 * @param x a number
 * @param pre to precision (1)
 */
export function floor(x: number, pre: number=1): number {
  return Math.floor(x/pre)*pre;
}


/**
 * Round up a number to specific precision.
 * @param x a number
 * @param pre to precision [1]
 */
export function ceil(x: number, pre: number=1): number {
  return Math.ceil(x/pre)*pre;
}


/**
 * Round a number to specific precision.
 * @param x a number
 * @param pre to precision [1]
 */
export function round(x: number, pre: number=1): number {
  return Math.round(x/pre)*pre;
}




// ROUNDED DIVISION
// ----------------

/**
 * Perform floor-divison of two numbers.
 * @param x divisor
 * @param y dividend
 * @returns ⌊x/y⌋
 */
export function floorDiv(x: number, y: number): number {
  return Math.floor(x/y);
}


/**
 * Perform ceiling-divison of two numbers.
 * @param x divisor
 * @param y dividend
 * @returns ⌈x/y⌉
 */
export function ceilDiv(x: number, y: number): number {
  return Math.ceil(x/y);
}


/**
 * Perform rounded-divison of two numbers.
 * @param x divisor
 * @param y dividend
 * @returns [x/y]
 */
export function roundDiv(x: number, y: number): number {
  return Math.round(x/y);
}




// MODULO
// ------

/**
 * Find the remainder of x/y with sign of x (truncated division).
 * @param x dividend
 * @param y divisor
 * @returns trunc(x % y)
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
 */
export function modp(x: number, y: number): number {
  return x - Math.abs(y)*Math.floor(x/Math.abs(y));
}
// - https://en.wikipedia.org/wiki/Modulo_operation




// RANGE CONTROL
// -------------

/**
 * Constrain a number within a minimum and a maximum value.
 * @param x a number
 * @param min minimum value
 * @param max maximum value
 * @returns x<min: min, x>max: max, x
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
 */
export function lerp(x: number, y: number, t: number): number {
  return x + t*(y - x);
}
// - https://processing.org/reference/lerp_.html
// - https://docs.unity3d.com/ScriptReference/Vector3.Lerp.html




// ARITHMETIC
// ----------

/**
 * Check if a number is a power-of-n.
 * @param x a number
 * @param n base
 * @returns nⁱ = x? | i = +ve integer
 */
export function isPow(x: number, n: number): boolean {
  if (n===0) return x===0;
  var p = log(Math.abs(x), Math.abs(n));
  if (p!==Math.floor(p)) return false;
  return x<0? n<0 && (p & 1)===1 : n>0 || (p & 1)===0;
}


/**
 * Get previous power-of-n of a number.
 * @param x a number
 * @param n base
 * @returns nⁱ | nⁱ < x and nⁱ ≥ x/n
 */
export function prevPow(x: number, n: number): number {
  var p = log(Math.abs(x), Math.abs(n));
  return Math.pow(n, Math.ceil(p-1));
}


/**
 * Find next power-of-n of a number.
 * @param x a number
 * @param n base
 * @returns nⁱ | nⁱ > x and nⁱ ≤ n*x
 */
export function nextPow(x: number, n: number): number {
  var p = log(Math.abs(x), Math.abs(n));
  return Math.pow(n, Math.floor(p+1));
}


/**
 * Find the nth root of a number (ⁿ√).
 * @param x a number
 * @param n root
 * @returns ⁿ√x
 */
export function root(x: number, n: number): number {
  if ((n & 1)===0) return Math.pow(x, 1/n);
  return   Math.sign(x) * Math.pow(Math.abs(x), 1/n);
}
// - https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/root.ts


/**
 * Find the logarithm of a number with a given base.
 * @param x a number
 * @param b logarithm base [e]
 * @returns log_b (x)
 */
export function log(x: number, b: number=Math.E): number {
  return Math.log(x)/Math.log(b);
}
// - https://en.wikipedia.org/wiki/Logarithm




// DIVISORS
// --------

/**
 * List all divisors of a number, except itself.
 * @param x a number
 * @returns proper divisors (factors)
 */
export function properDivisors(x: number): number[] {
  var x = Math.abs(x), a = [];
  for (var i=1; i<x; i++)
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
 */
export function aliquotSum(x: number): number {
  var x = Math.abs(x), a = 0;
  for (var i=0; i<x; i++)
    if (x % i===0) a += i;
  return a;
}


/**
 * Find the least prime number which divides a number.
 * @param x a number
 * @returns least prime factor
 */
export function minPrimeFactor(x: number): number {
  var x = Math.abs(x);
  // 1. LPF of 2, 3 is the number itself.
  if (x<=1) return 0;
  if (x<=3) return x;
  // 2. LPF for multiples of 2, 3.
  if (x % 2===0) return 2;
  if (x % 3===0) return 3;
  // 3. LPF can be 6k-1 or 6k+1.
  for (var i=6, I=Math.sqrt(x)+1; i<=I; i+=6) {
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
 */
export function maxPrimeFactor(x: number): number {
  var x = Math.abs(x), a = 0;
  // 1. GPF of 2, 3 is the number itself.
  if (x<=1) return 0;
  if (x<=3) return x;
  // 2. Remove factors 2, 3.
  for (; x % 2===0; a=2)
    x /= 2;
  for (; x % 3===0; a=3)
    x /= 3;
  // 3. Remove factors 6k-1, 6k+1.
  for (var i=6, I=Math.sqrt(x)+1; x>1 && i<=I; i+=6) {
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
 */
export function primeFactors(x: number): number[] {
  var x = Math.abs(x), a = [];
  if (x<=1) return [];
  if (x<=3) return [x];
  // 2. Try factors 2, 3.
  x = pushPrimeFactorTo$(a, x, 2);
  x = pushPrimeFactorTo$(a, x, 3);
  // 3. Try factors 6k-1, 6k+1.
  for (var i=6, I=Math.sqrt(x)+1; x>1 && i<=I; i+=6) {
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
 */
export function primeExponentials(x: number): [number, number][] {
  var x = Math.abs(x), a = [];
  if (x<=1) return [];
  if (x<=3) return [[x, 1]];
  // 2. Try factors 2, 3.
  x = pushPrimeExponentialTo$(a, x, 2);
  x = pushPrimeExponentialTo$(a, x, 3);
  // 3. Try factors 6k-1, 6k+1.
  for (var i=6, I=Math.sqrt(x)+1; x>1 && i<=I; i+=6) {
    x = pushPrimeExponentialTo$(a, x, i-1);
    x = pushPrimeExponentialTo$(a, x, i+1);
  }
  if (x>1) a.push([x, 1]);
  return a;
}

function pushPrimeExponentialTo$(a: [number, number][], x: number, f: number): number {
  if (x % f!==0) return x;
  var e = 0;
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
 * Check if number is prime.
 * @param x a number
 * @returns is divisible by 1 and itself only?
 */
export function isPrime(x: number): boolean {
  return x!==0 && minPrimeFactor(x) === Math.abs(x);
}


/**
 * Find the greatest common divisor of numbers.
 * @param xs a list of numbers
 * @returns gcd(x₁, x₂, ...)
 */
export function gcd(...xs: number[]): number {
  var a = xs[0] || 1;
  for(var i=1, I=xs.length; i<I; i++)
    a = gcdPair(a, xs[i]);
  return a;
}
export {gcd as hcf};

// Find the greatest common divisor of a pair of numbers.
function gcdPair(x: number, y: number): number {
  while (y!==0) {
    var t = y;
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
 */
export function lcm(...xs: number[]): number {
  var a = xs[0] || 1;
  for (var i=1, I=xs.length; i<I; i++)
      a = a*xs[i] / gcdPair(a, xs[i]);
  return a;
}
// - https://en.wikipedia.org/wiki/Least_common_multiple




// ARRANGEMENTS
// ------------

/**
 * Find the factorial of a number.
 * @param n a number
 * @param k denominator factorial [0]
 * @returns P(n, k); k=0: n!, k>0: n!/k!
 */
export function factorial(n: number, k: number=0): number {
  if (n<0) return 0;
  for (var i=k+1, a=1; i<=n; i++)
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
 */
export function binomial(n: number, k: number): number {
  // 1. Generalization to negative integers
  if (k<0 || k>Math.abs(n)) return 0;
  if (n<0) return Math.pow(-1, k)*binomial(-n, k);
  // 2. Take advantage of symmetry
  k = k>n-k? n-k:k;
  for (var a=1, i=1; i<=k; i++, n--)
    a *= n/i;
  return a;
}
// - https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/binomial.ts
// - https://en.wikipedia.org/wiki/Binomial_coefficient


/**
 * Find the number of ways to put n objects in m bins (n=sum(kᵢ)).
 * @param ks objects per bin (kᵢ)
 * @returns n!/(k₁!k₂!...) | n=sum(kᵢ)
 */
export function multinomial(...ks: number[]): number {
  var n = sum(...ks), a = 1;
  for (var i=0, j=0, I=ks.length; i<I;) {
    if (j<=0) j = ks[i++];
    else a *= n--/j--;
  }
  return a;
}
// - https://en.wikipedia.org/wiki/Multinomial_distribution




// GEOMETRY
// --------

/**
 * Convert radians to degrees.
 * @param x radians
 * @returns 2π → 360
 */
export function degrees(x: number): number {
  return x*(180/Math.PI);
}
// - https://processing.org/reference/degrees_.html


/**
 * Convert degrees to radians.
 * @param x degrees
 * @returns 360 → 2π
 */
export function radians(x: number): number {
  return x*(Math.PI/180);
}
// - https://processing.org/reference/radians_.html




// STATISTICS
// ----------

/**
 * Find the sum of numbers (Σ).
 * @param xs a list of numbers
 * @returns Σxᵢ
 */
export function sum(...xs: number[]): number {
  var a = 0;
  for (var x of xs)
    a += x;
  return a;
}


/**
 * Find the product of numbers (∏).
 * @param xs a list of numbers
 * @returns ∏xᵢ
 */
export function product(...xs: number[]): number {
  var a = 1;
  for (var x of xs)
    a *= x;
  return a;
}


/**
 * Find the value separating the higher and lower halves of numbers.
 * @param xs a list of numbers
 * @returns xₘ | sort(xs) = [..., xₘ, ...]
 */
export function median(...xs: number[]): number {
  if (xs.length===0) return 0;
  xs.sort((a, b) => a-b);
  var i = xs.length>>1;
  if ((xs.length & 1)===1) return xs[i];
  return (xs[i-1] + xs[i])/2;
}
// - https://stackoverflow.com/questions/45309447/calculating-median-javascript
// - https://en.wikipedia.org/wiki/Median


/**
 * Find the values that appear most often.
 * @param xs a list of numbers
 * @returns [xₘ₁, xₘ₂, ...] | count(xₘᵢ) ≥ count(xᵢ) ∀ xᵢ ∈ xs
 */
export function modes(...xs: number[]): number[] {
  xs.sort((a, b) => a-b);
  var r = maxRepeat(xs);
  return getRepeats(xs, r);
}
// - https://en.wikipedia.org/wiki/Mode_(statistics)

// Get the maximum number of times any number has repeated in a sorted array.
function maxRepeat(xs: number[]): number {
  var count = Math.min(xs.length, 1), max = count;
  for (var i=1, I=xs.length; i<I; i++) {
    if (xs[i-1]===xs[i]) count++;
    else { max = Math.max(max, count); count = 1; }
  }
  return Math.max(max, count);
}

// Get the numbers which have been repeated atleast given number of times.
function getRepeats(xs: number[], r: number): number[] {
  var a: number[] = []; r--;
  for (var i=0, I=xs.length-r; i<I; i++)
    if (xs[i]===xs[i+r]) a.push(xs[i+=r]);
  return a;
}


/**
 * Find the smallest and largest values.
 * @param xs a list of numbers
 * @returns [min(xs), max(xs)]
 */
export function range(...xs: number[]): [number, number] {
  return [Math.min(...xs), Math.max(...xs)];
}
// - https://en.wikipedia.org/wiki/Range_(statistics)


/**
 * Find the mean of squared deviation of numbers from its mean.
 * @param xs a list of numbers
 * @returns σ² = E[(xs - µ)²] | µ = mean(xs)
 */
export function variance(...xs: number[]): number {
  if (xs.length===0) return 0;
  var m = arithmeticMean(...xs), a = 0;
  for (var x of xs)
    a += (x-m)**2;
  return a/xs.length;
}
// - https://en.wikipedia.org/wiki/Variance




// MEAN (STATISTICS)
// -----------------

/**
 * Find the average of numbers.
 * @param xs a list of numbers
 * @returns Σxᵢ/n | n = size(xs)
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
 */
export function geometricMean(...xs: number[]): number {
  var n = xs.length;
  return root(product(...xs), n);
}


/**
 * Find the harmonic mean of numbers.
 * @param xs a list of numbers
 * @returns n/Σ(1/xᵢ) | n = size(xs)
 */
export function harmonicMean(...xs: number[]): number {
  var n = xs.length;
  var p = product(...xs), q = 0;
  for (var x of xs)
    q += p/x;
  return n*p/q;
}


/**
 * Find the quadriatic mean of numbers.
 * @param xs a list of numbers
 * @returns √(Σxᵢ²)/n | n = size(xs)
 */
export function quadriaticMean(...xs: number[]): number {
  var n = xs.length, a = 0;
  for (var x of xs)
    a += x*x;
  return Math.sqrt(a/n);
}
export {quadriaticMean as rootMeanSquare};


/**
 * Find the cubic mean of numbers.
 * @param xs a list of numbers
 * @returns ³√(Σxᵢ³)/n | n = size(xs)
 */
export function cubicMean(...xs: number[]): number {
  var n = xs.length, a = 0;
  for (var x of xs)
    a += x**3;
  return Math.cbrt(a/n);
}




// FORMAT
// ------

// export {default as fromRoman} from './_fromRoman';
// export {default as fromScientific} from './_fromScientific';
// export {default as toRoman} from './_toRoman';
// export {default as toScientific} from './_toScientific';
