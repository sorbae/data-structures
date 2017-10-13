let BinarySearchTree = function(value) {
  let binaryTree = Object.create(bstMethods);
  binaryTree.value = value;
  binaryTree.left = null; 
  binaryTree.right = null;
  return binaryTree;
};

bstMethods = {};

bstMethods.insert = function(value) {
  console.log(this.binaryTree)
  let node = this.binaryTree;
  let nextLeaf;
  if (value < node.value) {
    nextLeaf = node.left;
  }
  if (value > node.value) {
    nextLeaf = node.right;
  }
  // needs to check value against node's value
  
  // if value > nodeVal && .right === null
  
  //   set .right = newLeaf
  // else 
  // set .left = newLeaf
  
  if (value > node.value && nextLeaf === null) { 
    node.right = BinarySearchTree(value);
  }
  if (value < node.value && nextLeaf === null) {
    node.left = BinarySearchTree(value);
  }
  
  nextLeaf.insert(value);
};

bstMethods.contains = function() {

};

bstMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
let treeTest = BinarySearchTree(5);
treeTest.insert(2)
console.log(treeTest)

