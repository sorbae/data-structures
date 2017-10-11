var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
    
  };

  someInstance.pop = function() {
    var popBack = storage[count];
    delete storage[count];
    count--;
    return popBack;
  };

  someInstance.size = function() {
    return Math.max(0, count);
  };

  return someInstance;
};
