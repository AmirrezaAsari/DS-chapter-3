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

function returner(arr,k){
    insertionSort(arr);
    for(let i=0; i<k; i++){
        console.log(arr[i]);
    }
}

let arr = [2,5,1,6,3,8,12,6,2,2];
returner(arr,5);