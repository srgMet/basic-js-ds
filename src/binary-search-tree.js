const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}      
class BinarySearchTree {

    constructor(){
        this.rootNode = null;
    }
       
  

  add( data ) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = addItem(this.rootNode, data);

            function addItem(node, data) {
                if (!node) {
                    return new Node(data);
                }

                if (node.data === data) {
                    return node;
                }

                if (data < node.data) {
                    node.left = addItem(node.left, data);
                } else {
                    node.right = addItem(node.right, data);
                }
                return node;
  }
  }
  has( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
     return searchItem(this.rootNode, data);

            function searchItem(node, data) {
                if (!node) {
                    return false;
                }
                if (node.data === data) {
                    return true;
                }

                return data < node.data ?
                    searchItem(node.left, data) :
                    searchItem(node.right, data);
            }

  }

  find( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
          return searchItem(this.rootNode, data);

            function searchItem(node, data) {
                if (!node) {
                    return null;
                }
                if (node.data === data) {
                    console.log(data);
                    return node;
                    
                }

                return data < node.data ?
                    searchItem(node.left, data) :
                    searchItem(node.right, data);
            }
  }

  remove( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = removeNode(this.rootNode, data);

            function removeNode(node, data) {
                if (!node) {
                    return null;
                }


                if (data < node.data) {
                    node.left = removeNode(node.left, data);
                    return node;
                } else if (node.data < data) {
                    node.right = removeNode(node.right, data);
                    return node;
                } else {

                    if (!node.left && !node.right) {
                        return null;
                    }

                    if (!node.left) {
                        node = node.right;
                        return node;
                    }

                    if (!node.right) {
                        node = node.left;
                        return node;
                    }

                    let minFromRight = node.right;
                    while (minFromRight.left) {
                        minFromRight = minFromRight.left;
                    }
                    node.data = minFromRight.data;

                    node.right = removeNode(node.right, minFromRight.data);

                    return node;
                }
            }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) {
                return;
            }

            let node = this.rootNode;
            while (node.left) {
                node = node.left;
            }

            return node.data;
  }

  max() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) {
                return;
            }

            let node = this.rootNode;
            while (node.right) {
                node = node.right;
            }

            return node.data;
        }
        
        root(){
           return this.rootNode;

  }
}

const tree = new BinarySearchTree()     

module.exports = {
  BinarySearchTree
};