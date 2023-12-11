function secondMax(arr){
    let maxIndex = 0;
    for(let i=0; i<2; i++){
        for(j=0; j<arr.length; j++){
            if(arr[j]>arr[maxIndex]) maxIndex = j;
        }
    }
    return arr[maxIndex];
}

let arr = [1,18,6,3,5,10,2,3,5,15,1];

console.log(secondMax(arr));

//O(n)