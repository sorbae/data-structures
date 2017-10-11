var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var storageCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storageCount++;
    someInstance[storageCount] = value;
  };

  someInstance.dequeue = function() {
    var countList = Object.keys(someInstance);
    storage[countList[0]] = someInstance[countList[0]];
    delete someInstance[countList[0]];
    count--;
    return storage[countList[0]];
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };

  return someInstance;
};
