// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var elements = [];

  var getAllElements = function(element) {

    if (element === undefined) { return; }

    if (classExists(element.classList, className)) {
      elements.push(element);
    }
    
    for (var i = 0; i < element.childNodes.length; i++) {
      getAllElements(element.childNodes[i]);
    }    
  };

  getAllElements(document.body);

  return elements;
};

function classExists(classList, className) {
  var key = '';
  for (key in classList) {
    if (classList[key] === className) { return true; }
  }
  return false;
}