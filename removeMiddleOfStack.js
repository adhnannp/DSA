class Stack {
    constructor() {
        this.item = []
    }
    push(val) {
        this.item.push(val)
    }
    pop() {
        return this.item.pop()
    }
    peek() {
        return this.item[this.item.length - 1]
    }
    reverse() {
        if (this.item.length == 0) return;
        let lastItem = this.pop()
        this.reverse()
        this.pushToFirst(lastItem)
    }
    pushToFirst(val) {
        if (this.item.length == 0) {
            this.push(val)
        } else {
            let lastItem = this.pop()
            this.pushToFirst(val)
            this.push(lastItem)
        }
    }
    print() {
        console.log(this.item)
    }
    removeMid() {
        const mid = Math.floor(this.item.length / 2);
        const removeHelper = (index) => {
            if (index === mid) {
                this.pop();
                return;
            }
            let top = this.pop();
            removeHelper(index + 1);
            this.push(top);
        };
        if (this.item.length === 0) return;
        removeHelper(0);
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.print()
stack.pop()
console.log(stack.peek())
stack.reverse()
stack.print()
stack.removeMid()
stack.print()



