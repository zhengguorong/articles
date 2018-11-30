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
    inOrderTraverse() {
        let inOrderTraverseNode = (node) => {
            if (node !== null) {
                inOrderTraverseNode(node.left);
                console.log(node.key)
                inOrderTraverseNode(node.right);
            }
        }
        inOrderTraverseNode(this.root);
    }
    // 先序遍历 （输出树的结构）
    preOrderTraverse() {
        let preOrderTraverseNode = (node) => {
            if (node !== null) {
                console.log(node.key)
                preOrderTraverseNode(node.left)
                preOrderTraverseNode(node.right)
            }
        }
        preOrderTraverseNode(this.root);
    }
    // 后序遍历 (计算一个目录和它的子目录中所有文件所占空间大小)
    postOrderTraverse() {
        let postOrderTraverseNode = (node) => {
            if (node !== null) {
                postOrderTraverseNode(node.left)
                postOrderTraverseNode(node.right)
                console.log(node.key)
            }
        }
        postOrderTraverseNode(this.root);
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