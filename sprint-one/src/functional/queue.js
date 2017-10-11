var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var currentIndex = 0;
  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var popBack = storage[currentIndex + 1];
    delete storage[currentIndex + 1];
    currentIndex++;
    return popBack;
  };

  someInstance.size = function() {
    return Math.max(0, count - currentIndex);
  };

  return someInstance;
};
