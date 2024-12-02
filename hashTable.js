class HashTable{
    constructor(size){
        this.table = new Array(size)
        this
        .size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,val){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,val]]
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1] = val
            }else{
                bucket.push([key,val])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

let table = new HashTable(15)
table.set(0,"adhnu")
table.set("name","Adhanan P")
table.set("age",18)
table.set("mane","nanhda")
table.display()
console.log(table.get("name"))
console.log(table.table)