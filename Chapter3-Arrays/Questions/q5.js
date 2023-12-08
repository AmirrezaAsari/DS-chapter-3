function changeValue(a,n){

    // a
    for (let i=0; i<n; i++){
        a[i][i]++;
    }
    // b
    for(let i=0; i<n; i++){
        a[i][n-i-1]++;
    }
    // c
    for(let i=0; i<n;i++){
     //asli
        for(let j=n-1; j>i;j--){
            a[i][j] += 2;
        }
     //farei
        for(let j=0; j<n-i-1;j++){
            a[i][j] += 2;
        }
    }

    // d
    for(let i=0; i<n; i++){
        // asli
        for(let j=n-1; j>i;j--){
            a[j][i] -= 2;
        }
        // farei
        for(let j=0; j<n-i-1;j++){
            a[j][i] -= 2;
        }
    }

    //e



    //f


}


let a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


changeValue(a,3);
console.log(a);

