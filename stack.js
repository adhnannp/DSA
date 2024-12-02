class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class Stack{
    constructor(val){
        const newNode = new Node(val)
        this.top=newNode
        this.length=1
    }
    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.top=newNode
        }else{
            newNode.next=this.top
            this.top=newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length===0) return undefined
        let temp = this.top
        this.top=this.top.next
        temp.next=null
        this.length--
        return temp
    }
    peek(){
        console.log(this.top.val)
    }
}

let stack = new Stack(1)
console.log(stack.push(10))
console.log(stack.push(22))
console.log(stack.pop())
stack.peek()