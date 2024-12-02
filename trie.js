class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }
    dfs(node, currentPrefix, result) {
        if (node.isEndOfWord) {
            result.push(currentPrefix);
        }
        for (const [char, childNode] of Object.entries(node.children)) {
            this.dfs(childNode, currentPrefix + char, result);
        }
    }
    getAllWithPrefix(prefix) {
        const result = [];
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return result;
            }
            currentNode = currentNode.children[char];
        }
        this.dfs(currentNode, prefix, result);

        return result;
    }
    remove(word, node = this.root, index = 0) {
        if (!node) return false;
        if (index === word.length) {
            if (!node.isWordEnd) return false;
            node.isWordEnd = false;
            return true;
        }
        const char = word[index];
        if (!this.remove(word, node.children[char], index + 1)) {
            return false;
        }
        delete node.children[char];
        return Object.keys(node.children).length == 0 && !node.isWordEnd;
    }
}
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("care");
trie.insert("carter");
console.log(trie.getAllWithPrefix("ca")); // ["cat", "car", "cart", "care"]
console.log(trie.getAllWithPrefix("car")); // ["car", "cart", "care"]
console.log(trie.getAllWithPrefix("z"));
