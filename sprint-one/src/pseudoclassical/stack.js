var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.size = function() {
  return Math.max(0, this.count);
};

Stack.prototype.pop = function() {
  var datPopDoe = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return datPopDoe;
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

var test = new Stack(); 