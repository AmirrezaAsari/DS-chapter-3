const BigNumber = require('bignumber.js');


function bigNumberFact(n){
    x = new BigNumber(1);
    for(let i=1; i<=n; i++){
        x *= i;
    }
    return x;
}


console.log(bigNumberFact(5));