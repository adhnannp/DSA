class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
        this.length=0
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        if(this.length==this.size){
            console.log("full")
            return null
        }
        const index = this.hash(key);
        let i = index;
        let step = 0
        while(step<this.size){
            if(!this.table[i] || this.table[i][0]==key){
                this.table[i] = [key,value]
                this.length++
                return [key,value];
            }
            step++
            i=(i+i**2)%this.size;
        }
        return undefined;
    }

    get(key) {
        if(this.length==0){
            console.log("empty")
            return null
        }
        const index = this.hash(key);
        let i = index;
        let step = 0
        while(step<this.size){
            if(this.table[i] || this.table[i][0]==key){
                console.log(this.table[i][1]);
                return this.table[i][1];
            }
            step++
            i=(i+i**2)%this.size;
        }
        return undefined;
    }

    remove(key) {
        if(this.length==0){
            console.log("empty")
            return null
        }
        const index = this.hash(key);
        let i = index;
        let step = 0
        while(step<this.size){
            if(this.table[i] || this.table[i][0]==key){
                let deleted = this.table[i]
                this.table[i] = null
                this.length-- 
                return deleted;
            }
            step++
            i=(i+i**2)%this.size;
        }
        return undefined;
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example Usage
let table = new HashTable(10);
table.set("name", "Adhanan P");
table.set("age", 18);
table.set("mane", "nanhda");
table.set("address", "ProCam Bootcamp");
table.display();

table.get("name");
table.remove("age");
console.log("After removal:");
table.display();