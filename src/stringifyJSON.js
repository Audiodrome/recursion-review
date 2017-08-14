// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  
  if (typeof obj === 'object') { 
    if(obj === null){
      return 'null';
    } 
  }

  if (obj.constructor === 'string') { return "'" + obj + "'"; }


  return obj.toString();
};
