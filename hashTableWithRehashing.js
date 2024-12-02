class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        if (this.count === this.size) {
            this.resize(); 
        }
        let index = this.hash(key);
        let i = 0; 
        let probesMade = 0;
        while (this.table[(index + i) % this.size]) {
            if (this.table[(index + i) % this.size][0] === key) {
                this.table[(index + i) % this.size][1] = value;
                return;
            }
            probesMade++;
            if (probesMade >= this.size) {
                throw new Error("Table is full, cannot insert new element.");
            }
            i++; 
        }
        this.table[(index + i) % this.size] = [key, value];
        this.count++;
    }
    get(key) {
        let index = this.hash(key);
        let i = 0;
        let probesMade = 0;
        while (this.table[(index + i) % this.size]) {
            if (this.table[(index + i) % this.size][0] === key) {
                return this.table[(index + i) % this.size][1];
            }
            probesMade++;
            if (probesMade >= this.size) {
                return undefined;
            }

            i++;
        }

        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let i = 0; 
        let probesMade = 0;
        while (this.table[(index + i) % this.size]) {
            if (this.table[(index + i) % this.size][0] === key) {
                this.table[(index + i) % this.size] = undefined;
                this.count--;
                this.rehashAfterDelete((index + i) % this.size);
                return;
            }
            probesMade++;
            if (probesMade >= this.size) {
                return;
            }

            i++;
        }
    }

    rehashAfterDelete(index) {
        let nextIndex = (index + 1) % this.size;

        while (this.table[nextIndex]) {
            let [key, value] = this.table[nextIndex];
            this.table[nextIndex] = undefined;
            this.count--; 
            this.set(key, value); 
            nextIndex = (nextIndex + 1) % this.size; 
        }
    }
    resize() {
        const oldTable = this.table;
        this.size *= 2; 
        this.table = new Array(this.size);
        this.count = 0; 

        for (let item of oldTable) {
            if (item) {
                this.set(item[0], item[1]); 
            }
        }
    }
    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}


let table = new HashTable(5);
table.set("name", "Adhanan P");
table.set("age", 18);
table.set("mane", "nanhda");
table.set("address", "ProCam Bootcamp");
table.display();

console.log("\nAdding more items:");
table.set("country", "India");
table.set("hobby", "Coding");
table.display();

console.log("\nGet 'name':", table.get("name"));

console.log("\nRemoving 'age':");
table.remove("age");
table.display();
