/**
 * Calculates the nth Fibonacci number using memoization to improve performance.
 *
 * @param {number} n - The position of the Fibonacci sequence to calculate.
 * @param {Array} memo - An array used to store previously calculated Fibonacci numbers,
 *                       reducing redundant calculations.
 * @returns {number} - The nth Fibonacci number.
 *
 * This function checks if the nth Fibonacci number has already been computed
 * and stored in the memo array. If so, it returns the stored value. If not,
 * it calculates the value by recursively calling `fib` for (n-1) and (n-2),
 * then stores the result in `memo` for future calls, and finally returns it.
 * */
function fib(n, memo = []){
    if(memo && memo[n]){
        return memo[n];
    }
    let result;
    if(n === 1 || n===2){
       result = 1;
    }else{
        result = fib(n-1, memo) + fib(n-2, memo);
    }
    memo[n] = result;
    return result;
}