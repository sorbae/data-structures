let BinarySearchTree = function(value) {
  let binaryTree = Object.create(bstMethods);
  binaryTree.value = value;
  binaryTree.left = null; 
  binaryTree.right = null;
  return binaryTree;
};

bstMethods = {};

bstMethods.insert = function(value) {
  let nextLeaf = value < this.value ? this.left : this.right;
  
  if (value > this.value && this.right === null) { 
    this.right = BinarySearchTree(value);
  } else if (value < this.value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else {
    nextLeaf.insert(value);
  }
};

bstMethods.contains = function(target) {
  let nextLeaf = target < this.value ? this.left : this.right;
  // let wasFound = false;
  // if this.value === target --> return true
  // otherwise --> recurse(target)
  if (this.value === target) {
    return true;
  }
  if (this.left === null || this.right === null) {
    return false;
  }
  return nextLeaf.contains(target);
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
  // callback(this)
  // this.left depthSearch 
  // this.right depthSearch
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
// let treeTest = BinarySearchTree(5);
// treeTest.insert(2);
// treeTest.insert(3);
// treeTest.insert(7);
// treeTest.insert(6);
// console.log(treeTest.contains(7));

