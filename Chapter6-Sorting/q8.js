function partition(arr, left, right) {
    var pivot = arr[right];
    var i = left - 1;

    for (var j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);
    return i + 1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var stack = [{ left: 0, right: arr.length - 1 }];

    while (stack.length > 0) {
        var { left, right } = stack.pop();
        var pivotIndex = partition(arr, left, right);

        if (pivotIndex - 1 > left) {
            stack.push({ left: left, right: pivotIndex - 1 });
        }

        if (pivotIndex + 1 < right) {
            stack.push({ left: pivotIndex + 1, right: right });
        }
    }

    return arr;
}


var arr = [12, 4, 5, 6, 15];
console.log(quickSort(arr));
