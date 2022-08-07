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




// FORMAT
// ------

// export {default as fromRoman} from './_fromRoman';
// export {default as fromScientific} from './_fromScientific';
// export {default as toRoman} from './_toRoman';
// export {default as toScientific} from './_toScientific';
