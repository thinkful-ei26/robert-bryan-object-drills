// Deleting keys
// Modify the keyDeleter function so that it deletes keys for foo and bar for any object passed in and then returns the modified object.

const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
  }