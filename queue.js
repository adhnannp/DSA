class Queue{
    constructor(){
        this.item = []
        this.size = 0
    }
    enqueue(val){
        this.item.push(val)
        this.size++
    }
    dequeue(){
        this.size--
        this.item.shift()
    }
    peek(){
        if(this.size===0) return undefined;
        return this.item[this.size-1]
    }
}

let q = new Queue()
q.enqueue(5)
q.enqueue(4)
console.log(q.peek())
console.log(q.peek())