var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.currentIndex = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function() {
  var disQueue = this.storage[this.currentIndex + 1];
  delete this.storage[this.currentIndex + 1];
  this.currentIndex++;
  return disQueue;
};

queueMethods.size = function() {
  return Math.max(0, this.count - this.currentIndex);
};
