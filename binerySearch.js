let arr = [1,2,3,4,5,6,7,8]
function binarySearch(arr,a){
    let left=0
    let right=arr.length-1
    let middle;
    while(left<=right){
        middle = Math.floor((right+left) / 2)
        if(arr[middle]==a){
            return middle
        }else if(arr[middle]>a){
            right = middle-1
        }else if(arr[middle]<a){
            left = middle+1
        }
    }
}
console.log(arr)
console.log(binarySearch(arr,8))