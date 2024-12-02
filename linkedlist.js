class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
 class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("empty linked list")
            return false
        }else{
            let curr = this.head
            let output= "";
            while(curr){
                output+=`${curr.value} `
                curr = curr.next
            }
            console.log(output)
        }
    }

    removeFirst(){
        if(this.isEmpty()){
            return `empty linked list`
        }
        this.head = this.head.next
        this.size--
        if(this.size===1){
            this.tail=this.head
        }
    }

    removeIndex(index){
        if(index>=this.size || index<0 ) return `invalid index`
        if(this.isEmpty()){
            return `empty list`
        }
        if(index==0){
            return this.removeFirst()
        }
        let curr = this.head
        let i=0
        while(i<index-1){
            curr = curr.next
            i++
        }
        curr.next=curr.next.next;
        if(index === this.size-1){
            this.tail=curr
        }
        this.size--
    }

    removeCentre(){
        if(this.getSize()===0){
            console.log("empty array");
            return false;
        }
        let half = (this.getSize()-1)/2
        if(half<=0) half=0
        this.removeIndex(half)
    }
    reverse(){
        let curr=this.head
        let prev=null
        this.tail = this.head
        if(this.getSize()===0){
            console.log("empty list")
            return false
        }else if(this.getSize()===1){
            console.log("nothing to reverse");
            return true
        }else{
            while(curr){
                let next=curr.next
                curr.next=prev
                prev=curr
                curr = next
            }
            this.head=prev
        }
    }
    isCircular(){
        let slow = this.head
        let fast = this.head.next
        while(fast && fast.next){
            slow=slow.next
            fast = fast.next.next

            if(fast === slow){
                return true
            }
        }
        return false
    }
    reverseRecursive() {
        const reverseHelper = (node) => {
            if (node === null || node.next === null) {
                this.head = node;
                return node;
            }
            const newHead = reverseHelper(node.next);
            node.next.next = node;
            node.next = null;
            return newHead;
        };

        if (this.head === null) {
            console.log("empty list");
            return false;
        }
        reverseHelper(this.head);
    }
    removeOdds(){
        if(this.isEmpty()){
            return false
        }
        while(this.head && this.head.value%2 !==0){
            this.head = this.head.next
            this.size--
        }
        if(!this.head){
            this.tail =null
            return true
        }
        let curr = this.head
        while(curr&& curr.next){
            if(curr.next.value%2!==0){
                curr.next=curr.next.next
                if(!curr.next){
                    this.tail = curr
                }
                this.size--
            }
            if(curr.next && curr.next.value%2!==0){
                curr=curr
            }
            curr=curr.next
        }
        return true
    }

 }

 let newList = new LinkedList()
 newList.prepend(1)
 newList.prepend(2)
 newList.prepend(3)
 newList.prepend(4)
 newList.prepend(5)
 newList.prepend(6)
 newList.prepend(7)
 newList.print()
 newList.reverse()
 newList.print()
 newList.reverseRecursive()
 newList.print()
 console.log(newList.isCircular())
 newList.reverseRecursive()
 newList.removeOdds()
 newList.print()
 console.log(newList.getSize());
 newList.append(7)
 newList.append(7)
 newList.print()
 newList.removeOdds()
 newList.print()

