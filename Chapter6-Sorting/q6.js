function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}


function rowSort(arr){
    column = arr.length;
    for(let k=0; k<=column-1; k++){
        let a = arr[k];
        insertionSort(a);
    }
    return arr;
}


let matrix = [
    [2,6,1],
    [1,12,4],
    [3,8,5],
    [5,2,1]
]

console.log(rowSort(matrix));
