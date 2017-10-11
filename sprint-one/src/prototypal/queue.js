var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.currentIndex = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.dequeue = function() {
  var disQ = this.storage[this.currentIndex + 1];
  delete this.storage[this.currentIndex + 1];
  this.currentIndex++;
  return disQ;
};

queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;

};

queueMethods.size = function() {
  return Math.max(0, this.count - this.currentIndex);
};
