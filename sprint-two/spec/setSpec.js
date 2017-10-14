describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    set.add([1, 2]);
    set.remove([1, 2]);
    
    let checkInside = _.reduce(set._storage, function(contains, item) {
      if (JSON.stringify([1, 2]) === JSON.stringify(item)) {
        contains = true;
      }
      return contains;
    }, false);
    
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(checkInside).to.equal(true);
  });
  
  it('should handle non-string types', function() {
    set.add(3);
    expect(set.contains(3)).to.equal(true);
    set.add([]);
    expect(set.contains([])).to.equal(false);
    set.add({});
    expect(set.contains({})).to.equal(false);
  });
  
  it('should handle duplicate arrays and objects', function() {
    var objAdd = {1: 2};
    var dupObj = {1: 2};
    var arrAdd = [1, 2];
    var dupArr = [1, 2];
    
    set.add(objAdd);
    set.add(dupObj);
    set.add(arrAdd);
    set.add(dupArr);

    expect(set._storage).to.eql([{1: 2}, {1: 2}, [1, 2], [1, 2]]);
    
  });
  
  // write test for duplicate arrays & objects
});
