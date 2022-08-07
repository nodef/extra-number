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




// COMPARE
// -------

/**
 * Compare two numbers.
 * @param x a number
 * @param y another number
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
export function compare(x: number, y: number): number {
  return x<y? -1 : (x>y? 1 : 0);
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
 * @returns trunc(x/y)
 */
export function rem(x: number, y: number): number {
  return x % y;
}
// - https://en.wikipedia.org/wiki/Modulo_operation


/**
 * Find the remainder of x/y with sign of y (floored division).
 * @param x dividend
 * @param y divisor
 * @returns floor(x/y)
 */
export function mod(x: number, y: number): number {
  return x - y*Math.floor(x/y);
}
// - https://en.wikipedia.org/wiki/Modulo_operation


/**
 * Find the remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 * @returns n>0: floor(x/y), n<0: ceil(x/y)
 */
export function modp(x: number, y: number): number {
  return x - Math.abs(y)*Math.floor(x/Math.abs(y));
}
// - https://en.wikipedia.org/wiki/Modulo_operation




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
 * Check if number is prime.
 * @param x a number
 * @returns is divisible by 1 and itself only?
 */
export function isPrime(x: number): boolean {
  var x = Math.abs(x);
  // 1. 2, 3 are prime
  if (x<=3) return x>1;
  // 2. Multiples of 2, 3 not prime
  if (x % 2===0 || x % 3===0) return false;
  // 3. Factor of 6k-1 or 6k+1 => not prime
  for (var i=6, I=Math.sqrt(x)+1; i<=I; i+=6)
    if (x % (i-1)===0 || x % (i+1)===0) return false;
  return true;
}




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





// FORMAT
// ------

// export {default as fromRoman} from './_fromRoman';
// export {default as fromScientific} from './_fromScientific';
// export {default as toRoman} from './_toRoman';
// export {default as toScientific} from './_toScientific';
