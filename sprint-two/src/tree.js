var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  // check values in parent node
  var isFound = false;
  if (this.value === target) {
    // if value exists, return true
    isFound = true; 
  } 
  for (let node of this.children) {
    if (node.contains(target)) {
      isFound = true;
    }
  }

  // if parent node has children, recurse
  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
  the overall complexity of these functions will be O(n) due to the for loop 
  inside of contains.
 */

