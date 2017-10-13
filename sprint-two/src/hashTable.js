

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let storage = this._storage;
  let inStorage = false;
  let lePairs = [k, v];
  if (!storage.get(index)) {
    storage.set(index, []);
  }
  let bucketArr = storage.get(index);
  if (bucketArr.length > 0) {
    for (let tuple of bucketArr) {
      if (tuple[0] === k) {
        inStorage = true;
        tuple[1] = v;
      }
    }
  }
  if (!inStorage) {
    bucketArr.push(lePairs);
  }
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucketArr = this._storage.get(index);
  for (let tuple of bucketArr) {
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  // return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let bucketArr = this._storage.get(index);
  // debugger;
  if (bucketArr.length === 1) {
    bucketArr.pop();
  } else {
    for (var i = 0; i < bucketArr.length; i++) {
      if (bucketArr[i][0] === k) {
        bucketArr.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  its over 9000
 */
 
 test = new HashTable();
 test.insert('val1', 'val1');
 test.insert('val2', 'val2');
 test.insert('val3', 'val3');
// test.remove('val2');
