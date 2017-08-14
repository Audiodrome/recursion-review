// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') { 
    return '"' + obj + '"';
  } 

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  
  if (Array.isArray(obj)) {
    var storage = [];
    if (obj.length > 0) {
      
      for (var i = 0; i < obj.length; i++) {
        storage.push(stringifyJSON(obj[i]));
      }
      return '[' + storage + ']';
    } else {
      return '[]';
    }
  }

  if (obj.constructor === Object) {

    var storage = [];
    var keys = Object.keys(obj);
    if (keys.length > 0) {
      
      for (prop in obj) {
        if (typeof obj[prop] !== 'function' && typeof obj[prop] !== undefined) {
          for (var i = 0; i < keys.length; i++) {
            storage.push('"' + keys[i].toString() + '":' + stringifyJSON(obj[keys[i]]));          
          }         
        }
        return '{' + storage + '}';
      }  
    } else {
      return '{}';
    }
  }
};
