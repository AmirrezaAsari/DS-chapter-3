function fib(n) {
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;

    for(let i=1; i<n; i++){
        arr[i+1] = arr[i] + arr[i-1];
    }
    return arr[n-1];
}

console.log(fib(6));