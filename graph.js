class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex+"->"+[...this.adjecencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        if (!this.adjecencyList[vertex1] || !this.adjecencyList[vertex2]) {
            return false;
        }
        return (this.adjecencyList[vertex1].has(vertex2)&&this.adjecencyList[vertex2].has(vertex1));
    }
    removeEdge(vertex1,vertex2){
        if (!this.adjecencyList[vertex1] || !this.adjecencyList[vertex2]) {
            return false;
        }
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            return false;
        }
        for(let adjecentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjecencyList[vertex]
    }
    bfs(startingVertex){
        let output=[]
        let visited = new Set()
        let queue = [startingVertex]
        while(queue.length){
            let vertex = queue.shift()
            if(!visited.has(vertex)){
                visited.add(vertex);
                output.push(vertex);

                for(let neighbour of this.adjecencyList[vertex]){
                    if(!visited.has(neighbour)){
                        queue.push(neighbour)
                    }
                }
            }
        }
        return output;
    }
    dfsRecursion(startingVertex,visited=new Set(),output=[]){
        if(!visited.has(startingVertex)){
            visited.add(startingVertex);
            output.push(startingVertex);
            for(let neighbour of this.adjecencyList[startingVertex]){
                if(!visited.has(neighbour)){
                    this.dfsRecursion(neighbour,visited,output)
                }
            }
        }
        return output
    }
    dfsIteretive(startingVertex){
        let output=[]
        let visited = new Set()
        let stack = [startingVertex]
        while(stack.length){
            let vertex = stack.pop()
            if(!visited.has(vertex)){
                visited.add(vertex);
                output.push(vertex);

                for(let neighbour of this.adjecencyList[vertex]){
                    if(!visited.has(neighbour)){
                        stack.push(neighbour)
                    }
                }
            }
        }
        return output;
    }
}

let graph = new Graph()
graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")
graph.addVertex("d")
graph.display()
graph.addEdge("a","b")
graph.addEdge("a","b")

graph.addEdge("c","b")
graph.addEdge("c","d")
graph.addEdge("a","d")
graph.display()
console.log(graph.hasEdge("a","d"))
// graph.removeEdge("a","d")
// graph.display()
// graph.removeVertex("d")
graph.display()
console.log("bfs",graph.bfs("a"))
console.log("dfsRecursion",graph.dfsRecursion("a"))
console.log("dfsIterative",graph.dfsIteretive("a"))