function c(n,r){
    let numinator = []; //soorat kasr
    let denuminator = []; //makhraj kasr
    for(let i = 0; i<r; i++){
        numinator[i] = n-i
    }
    console.log(numinator);
    for(let i=0; i<r;i++){
        denuminator[i] = r-i;
    }
    console.log(denuminator);

}

c(6, 5);