class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(key) {
        let insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        }
        let node = new Node(key);
        if (this.root === null) {
            this.root = node;
        } else {
            insertNode(this.root, node)
        }

    }
    search(key) {

    }
    // 中序遍历 （树从小到大输出）
    inOrderTraverse(callback) {
        let inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
            }
        }
        inOrderTraverseNode(this.root, callback);
    }
    // 先序遍历 （输出树的结构）
    preOrderTraverse() {

    }
    // 后序遍历 
    postOrderTraverse() {

    }
    min() {

    }
    max() {

    }
    remove(key) {

    }
}

class Node{
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}