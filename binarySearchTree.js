class Node{
    constructor(val){
        this.val=val
        this.right=null
        this.left=null
    }
}
class Tree{
    constructor(){
        this.root=null
    }
    add(val){
        const node = new Node(val)
        if(this.root===null){
            this.root = node
        }else{
            this.insert(this.root,node)
        }
    }
    insert(root,node){
        if(node.val>root.val){
            if(root.right==null){
                root.right=node
            }else{
                this.insert(root.right,node)
            }
        }else{
            if(root.left==null){
                root.left=node
            }else{
                this.insert(root.left,node)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.val)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.val)
        }
    }
    search(root,val){
        if(root==null){
            return false
        }else if(root.val==val){
            return true
        }else if(root.val>val){
            return this.search(root.left,val)
        }else {
            return this.search(root.right,val)
        }
    }
    levelOrder(){//bfs
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.val)
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }
    minDepth(root){
        if(!root) return 0;
        if(!root.left) return this.minDepth(root.right)+1
        if(!root.right) return this.minDepth(root.left)+1
        return Math.min(this.minDepth(root.left),this.minDepth(root.right))+1
    }
    maxDepth(root){
        if(!root) return 0
        return Math.max(this.maxDepth(root.left),this.maxDepth(root.right))+1
    }
    height(root){
        return this.maxDepth(root)-1
    }
    max(root){
        if(!root.right) return root.val;
        else return this.max(root.right)
    }
    min(root){
        if(!root.left) return root.val;
        else return this.min(root.left)
    }
    delete(val){
        this.root=this.deleteNode(this.root,val)
    }
    deleteNode(root,val){
        if(!root) return root;
        if(val<root.val) root.left=this.deleteNode(root.left,val);
        else if(val>root.val) root.right=this.deleteNode(root.right,val);
        else{
            if(!root.left&&!root.right) return null;
            if(!root.left) return root.right;
            else if(!root.right) return root.left
            root.val = this.min(root.right)
            root.right = this.deleteNode(root.right,root.val)
        }
        return root;
    }
    sumOfLeaf(root){
        if(!root){
            return 0
        }
        if(!root.left&&!root.right){
            return root.val
        }
        return this.sumOfLeaf(root.right)+this.sumOfLeaf(root.left)
    }
    sumOfAll(root){
        if(!root) return 0;
        return root.val+this.sumOfAll(root.right)+this.sumOfAll(root.left)
    }
    isBst(root,min=-Infinity,max=Infinity){
        if(!root) return true;
        if(root.val>=max || root.val<=min) return false;
        return this.isBst(root.left,min,root.val)&&this.isBst(root.right,root.val,max)
    }
    closest(root,target,closest=Infinity){
        if(!root) return closest;
        if(Math.abs(target-closest)> Math.abs(target-root.val)) closest = root.val;
        if(target>root.val) return this.closest(root.right,target,closest);
        else if(target<root.val) return this.closest(root.left,target,closest);
        return closest;

    }
    secondLargest(root){
        if(!root || (!root.right&&!root.left)) return null;
        let parent =null
        while(root.right){
            parent=root
            root = root.right
        }
        if(root.left){
            return this.max(root.left)
        }
        return parent ? parent.val :null
    }
    secondSmallest(root){
        if(!root || (!root.right&&!root.left)) return null;
        let parent = null
        while(root.left){
            parent=root
            root=root.left
        }
        if(root.right){
            return this.min(root.right)
        }
        return parent ? parent.val : null
    }
    isBalanced(root){
        if(!root) return true;
        let leftHeight = this.maxDepth(root.left)
        let rightHeight = this.maxDepth(root.right)
        if(Math.abs(leftHeight-rightHeight)>1){
            return false
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
}

let bst = new Tree()
bst.add(10)
bst.add(5)
bst.add(15)
bst.add(3)
bst.add(7)
bst.add(7)
bst.add(7)
bst.add(7)
console.log('preOrder:')
bst.preOrder(bst.root)
console.log('inOrder:')
bst.inOrder(bst.root)
console.log('postOrder:')
bst.postOrder(bst.root)
console.log((bst.root))
console.log(bst.search(bst.root,7))
console.log('BridthfirstSearch:')
bst.levelOrder()
console.log("maxDepth",bst.maxDepth(bst.root))
console.log("minDepth",bst.minDepth(bst.root))
console.log("height",bst.height(bst.root))
console.log("minNode:",bst.min(bst.root))
console.log("maxNode:",bst.max(bst.root))
console.log("levelOrder:")
bst.levelOrder()
bst.delete(7)
bst.delete(7)
bst.delete(7)
console.log("levelOrder:")
bst.levelOrder()
console.log("sumOfLeaf:",bst.sumOfLeaf(bst.root))
console.log("sumOfAll:",bst.sumOfAll(bst.root))
console.log("isBst: ",bst.isBst(bst.root))
console.log("closest of 2: ",bst.closest(bst.root,2))
console.log("isBst:",bst.isBst(bst.root))
console.log("maxNode:",bst.max(bst.root))
console.log("secondMaxNode:",bst.secondLargest(bst.root))
console.log("secondMinNode:",bst.secondSmallest(bst.root))
console.log("isbalanced: ",bst.isBalanced(bst.root))