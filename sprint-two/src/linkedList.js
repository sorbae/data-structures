var LinkedList = function() {
  var list = {};
  list.head = Node(null);
  list.tail = Node(null);

  list.addToTail = function(value) { 
    // declare variable for newNode instance
    // set list.tail to point to newNode instance
    var newNode = Node(value);
    if (list.tail.next === null) {
      list.tail.next = newNode;
    } 
    if (list.head.next === null) {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    // debugger;
    var currentHead = list.head;
    list.head.next = currentHead.next;
    list.head = currentHead.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    var isThere = false;
    // iterate through list
    // check node object for value prop
    for (var key in list) {
      if (list[key].value === target) {
        isThere = true;
      }
    }
    return isThere;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  the overall time complexity of the above functions is O(n) because there's only a single for loop
  inside of contains. The rest are time constant. :thumbsup:
 */

var test = LinkedList();
test.addToTail(4);
test.addToTail(5);
test.removeHead();
