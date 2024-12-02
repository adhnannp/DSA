class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.length= 0
    }
    hash(key){
        let output = 0
        for(let i=0;i<key.length;i++){
            output+=key.charCodeAt(i)
        }
        return output%this.size
    }
    add(key, val) {
        const index = this.hash(key);
        let i = index;
        let steps = 0;
        while (steps < this.size) {
            if (!this.table[i] || this.table[i][0] === key) {
                this.table[i] = [key, val];
                return;
            }
            i = (i + 1) % this.size;
            steps++;
        }
    }    
    get(key){
        const index = this.hash(key);
        let i = index;
        let steps = 0;
        while (steps < this.size) {
            if (this.table[i] && this.table[i][0] === key) {
                console.log(this.table[i][1])
                return this.table[i][1]
            }
            i = (i + 1) % this.size;
            steps++;
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key);
        let i = index;
        let steps = 0;
        while (steps < this.size) {
            if (this.table[i] && this.table[i][0] === key) {
                let deleted = this.table[i]
                this.table[i] = null
                return 
            }
            i = (i + 1) % this.size;
            steps++;
        }
        return undefined
    }
    display(){
        for(let i=0;i<this.size;i++){
            console.log(i,":",this.table[i])
        }
    }
}

let table = new HashTable(5)
table.add("name","adhnan")
table.add("mane","adhil")
table.add("mena","safwan")
table.add("nema","lijo")
table.add("amen","hashim")
table.display()
table.remove("amen")
table.display()
table.get("name")