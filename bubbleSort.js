let arr=[12,21,323,121,4,2,78,4]

function bubbleSort(arr){
    let sorted=true
    do{
        sorted=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                sorted=true
            }
        }
    }while(sorted)
    return arr
}
console.log(arr)
console.log(bubbleSort(arr))