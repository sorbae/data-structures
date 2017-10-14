let DoublyLinkedList = function() {
  let list = {};
  list.head = Node(null);
  list.tail = Node(null);

  list.addToTail = function(value) { 
    // declare letiable for newNode instance
    // set list.tail to point to newNode instance
    let newNode = Node(value);
    list.tail.next = newNode;
    newNode.previous = list.tail;
    
    if (list.tail.value === null) {
      list.tail = newNode;
    } 
    if (list.head.value === null) {
      list.head = newNode;
    }
    
    list.tail = newNode;
  };
  
  list.addToHead = function(value) {
    let newNode = Node(value);
    list.head.previous = newNode;
    newNode.next = list.head;
    
    if (list.tail.value === null) {
      list.tail = newNode;
    } 
    if (list.head.value === null) {
      list.head = newNode;
    }
    
    list.head = newNode;
  };
  
  list.removeTail = function() {
    let oldTail = list.tail;
    
    list.tail.previous.next = null;
    list.tail = list.tail.previous;
    
    return oldTail.value;
  };

  list.removeHead = function() {
    // debugger;
    let currentHead = list.head;
    
    list.head.next = currentHead.next;
    list.head = currentHead.next;
    list.head.previous = null;
    
    return currentHead.value;
  };

  list.contains = function(target) {
    let isThere = false;
    // iterate through list
    // check node object for value prop
    for (let key in list) {
      if (list[key].value === target) {
        isThere = true;
      }
    }
    return isThere;
  };

  return list;
};

let Node = function(value) {
  let node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  the overall time complexity of the above functions is O(n) because there's only a single for loop
  inside of contains. The rest are time constant. :thumbsup:
 */


