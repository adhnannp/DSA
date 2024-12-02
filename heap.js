class Heap{
    constructor(compareFn){
        this.heap = []
        this.compare= compareFn
    }
    parentIndex(i){ return Math.floor((i-1)/2)}
    rightChildIndex(i){return 2*i+2}
    leftChildIndex(i){return 2*i+1}

    swap(i,j){
        [this.heap[j],this.heap[i]] = [this.heap[i],this.heap[j]]; 
    }
    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1);
    }
    bubbleUp(index){
        let parent = this.parentIndex(index);
        while(index>0 && this.compare(this.heap[index],this.heap[parent])){
            this.swap(index,parent);
            index = parent;
            parent = this.parentIndex(index);
        }
    }
    remove(){
        if(this.heap.length===0) return null;
        if(this.heap.length===1) return this.heap.pop();
        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0);
        return root;
    }
    bubbleDown(index){
        let left = this.leftChildIndex(index)
        let right = this.rightChildIndex(index)
        let toInsert = index;
        if(left<this.heap.length&&this.compare(this.heap[left],this.heap[toInsert])) toInsert = left;
        if(right<this.heap.length&&this.compare(this.heap[right],this.heap[toInsert])) toInsert = right;
        if(toInsert !== index){
            this.swap(toInsert,index);
            this.bubbleDown(toInsert);
        }
    }
    buildHeap(arr){
        this.heap = arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.bubbleDown(i)
        }
    }
    peek(){
        return this.heap.length>0 ? this.heap[0] : null;
    }
}

let heap = new Heap((a,b)=>b>a)
heap.insert(9)
heap.insert(10)
heap.insert(3)
heap.insert(4)
heap.insert(7)
console.log("full array: ",heap.heap)
heap.remove()
console.log("after removing: ",heap.heap)
console.log("peek: ",heap.peek())

function heapSort(arr){
    const heap1 = new Heap((a,b)=>a>b);
    heap1.buildHeap([...arr])
    for(let i=arr.length-1;i>=0;i--){
        arr[i] = heap1.remove();
    }   
    return arr;
}

let arr = [8,7,6,5,4,3,2,1]
console.log(arr)
heapSort(arr)
console.log(arr)
