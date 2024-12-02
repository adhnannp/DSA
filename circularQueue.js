class CircularQueue{
    constructor(capacity){
        this.item = new Array(capacity)
        this.length = 0
        this.rear = -1
        this.front = -1
        this.capacity = capacity
    }
    enqueue(val){
        if(this.length==this.capacity) return `queue is full`
        else{
            this.rear = (this.rear+1)%this.capacity
            this.item[this.rear] = val
            this.length++
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }
    dequeue(){
        if(this.length===0) return `empty queue`
        let output = this.item[this.front]
        this.item[this.front] = null
        let front = (this.front+1)%this.capacity
        this.front = front
        this.length--
        if(this.length==0){
            this.front = -1
            this.rear = -1
        }
        return output
    }

    print(){
        console.log(this.item)
        return this.item
    }
}

let queue = new CircularQueue(5)
queue.enqueue(12)
queue.print()
queue.enqueue(132)
queue.print()
queue.enqueue(4)
queue.print()
queue.enqueue(-1)
queue.print()
queue.enqueue(0)
queue.print()
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()