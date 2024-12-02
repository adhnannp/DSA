let arr = [-2,-3,3,4,-9,11,4,3]
console.log(quickSort(arr))
function quickSort(arr){
    if(arr.length<2) return arr
    let point=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>point) right.push(arr[i]);
        else left.push(arr[i]);
    }
    return [...quickSort(left),point,...quickSort(right)]
}