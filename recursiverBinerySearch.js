let arr = [1,2,3,4,5,6,7,8]
function binarySearch(arr,a,left,right){
    if(left>right) return -1;
    middle = Math.floor((right+left) / 2)
    if(arr[middle]==a) return middle
    else if(arr[middle]>a) return binarySearch(arr,a,left,middle-1);
    else return binarySearch(arr,a,middle+1,right);
}
console.log(binarySearch(arr,2,0,arr.length-1))