function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numToInsert = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numToInsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numToInsert
    }
}

let arr=[-6,-2,5,6,4,0,1]
console.log(arr)
insertionSort(arr)
console.log(arr);
