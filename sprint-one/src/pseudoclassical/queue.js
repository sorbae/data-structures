var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.currentIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
  var disQ = this.storage[this.currentIndex + 1];
  delete this.storage[this.currentIndex + 1];
  this.currentIndex++;
  return disQ;
};

Queue.prototype.size = function() {
  return Math.max(0, this.count - this.currentIndex);
};