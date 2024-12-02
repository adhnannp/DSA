class Queue{
    constructor(){
        this.s1 = []
        this.s2 = []
    }
    enqueue(val){
        while(this.s1.length !== 0){
            this.s2.push(this.s1.pop())
        }
        
        this.s1.push(val)
        
        while(this.s2.length !==0){
            this.s1.push(this.s2.pop())
        }
    }
    
    dequeue(){
        let popped = this.s1[this.s1.length-1]
        this.s1.pop()
        return popped
    }
    print(){
        console.log(this.s1)
    }
}

let queue = new Queue()

queue.enqueue(1)
queue.print()
queue.enqueue(2)
queue.print()
queue.enqueue(3)
queue.print()
queue.dequeue()
queue.print()