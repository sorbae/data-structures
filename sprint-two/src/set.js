var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'object' && item) {
    this._storage.push(item);
  } else {
    if (!this.contains(item)) {
      this._storage.push(item);
    }
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 With our implementation of set, our overall average is O(n) since 
 we store our values in an array inside of each Set. This requires
 us to iterate on the array to find values when we add/remove from 
 the set. 
 */
