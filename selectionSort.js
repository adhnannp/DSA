function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!=i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
}
let arr = [-6,-2,5,6,4,0,1]
console.log(arr)
selectionSort(arr)
console.log(arr)