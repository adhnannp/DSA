let arr = [-2,1,0,9,7]

function mergeSort(arr){
    if(arr.length<2) return arr
    let middle = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,middle)
    let rightArr= arr.slice(middle)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]) sortedArr.push(leftArr.shift());
        else sortedArr.push(rightArr.shift())
    }
    return [...sortedArr,...leftArr,...rightArr]
}

console.log(mergeSort(arr))