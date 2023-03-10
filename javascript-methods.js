/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let x = [];
  for(let i=0; i<this.length; i++) {
    x.push(callbackFn(this[i], i, this));
  }

  return x;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let x = [];
  for(let i=0; i<this.length; i++) {
    if(callbackFn(this[i], i, this))
      x.push(this[i]);
  }
  
  return x;
 };

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for(let i=0; i<this.length; i++) {
    if(callbackFn(this[i], i, this))
      return true;
  }

  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i=0; i<this.length; i++){
    if(!callbackFn(this[i], i, this))
      return false;
  }

  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let x = 0;
  for(let i=0; i<this.length; i++) {
    x+=callbackFn(this[i], i, this);
  }

  return x;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i=0; i<this.length; i++){
    if(this[i] === searchElement)
      return true;
  }

  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i=0; i<this.length; i++){
    if(this[i] === searchElement)
      return i;
  }

  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for(let i=this.length-1; i>=0; i--) {
    if(this[i] === searchElement)
      return i;
  }

  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  let x = [];
  for(let prop in object) {
    if(object.hasOwnProperty(prop))
      x.push(prop);
  }

  return x;
};

// VALUES //
Object.myValues = function(object) {
  let x = [];
  for(let prop in object) {
    if(object.hasOwnProperty(prop))
      x.push(object[prop]);
  }

  return x;
};