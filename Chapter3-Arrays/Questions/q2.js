function c(n,r){
    let numinator = 1; //soorat kasr
    let denuminator = 1; //makhraj kasr
    for(let i = 0; i<r; i++){
        numinator *= n-i;
    }
    for(let i=0; i<r;i++){
        denuminator *= r-i;
    }
    return (numinator/denuminator);

}

console.log(c(3, 2));