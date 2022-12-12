//StringBuilder class (ES5) extended from Bulder base class
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Parent;
  }
  extend(Builder, StringBuilder);

  function StringBuilder(arg=""){
  this.arg = arg;
  }

  StringBuilder.prototype.remove = function (str) {
    return this.arg = this.arg.split(str).join("");
  };

  StringBuilder.prototype.sub = function (from, n) {
    return this.arg = this.arg.substring(from, from+n);
  }

  let strBuilder = new StringBuilder('Hello');

  console.log(strBuilder.plus(' all', '!')); //'Hello all!'
  console.log(strBuilder.minus(4)); // 'Hello '
  console.log(strBuilder.multiply(3));  // 'Hello Hello Hello '
  console.log(strBuilder.divide(4));  // 'Hell';
  console.log(strBuilder.remove('l')); // 'He';
  console.log(strBuilder.sub(1,1))     // 'e';
  console.log(strBuilder.get());   // 'e';

  console.log(Builder.isPrototypeOf(StringBuilder)); //Why it is false ??
  console.log(StringBuilder.prototype.constructor === Builder.prototype.constructor); //but true here??