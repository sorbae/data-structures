

// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.

// can we add shared props to node constructor?
Graph.prototype.addNode = function(node) {
  var newNode = Node(node);
  this.vertices[node] = newNode;
  newNode.next = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.vertices;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (let nodeObj in this.vertices) {
    if (node in this.vertices[nodeObj].next) {
      console.log(this.vertices);
      this.removeEdge(nodeObj, node);
    }
  }
  delete this.vertices[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // debugger
  if (toNode in this.vertices[fromNode].next) {
    return true;
  } 
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices[fromNode].next[toNode] = toNode;
  this.vertices[toNode].next[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // check fromNode in toNode key exists
  //    if exists --> delete reference
  // debugger;
  if (this.hasEdge(fromNode, toNode)) {
    delete this.vertices[fromNode].next[toNode];
    delete this.vertices[toNode].next[fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through this.vertices
  for (var nodeObj in this.vertices) {
    cb(nodeObj);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var test = new Graph();
// debugger
test.addNode(4);
test.addNode(5);
test.addEdge(5, 4);
(test.hasEdge(4, 5));
// test.removeEdge(5, 4);
// console.log(test.hasEdge(5, 4));

