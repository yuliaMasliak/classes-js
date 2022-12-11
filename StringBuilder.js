//StringBuilder class (ES5) extended from Bulder base class
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Parent;
  }
  function StringBuilder(int){
  if (!int){
    int = "";
  }
  this.int = int;
      }
  extend(Builder, StringBuilder);

  console.log(Builder.isPrototypeOf(StringBuilder)); //false ??
  console.log(StringBuilder.prototype.constructor === Builder.prototype.constructor); //but true here??

  StringBuilder.prototype.multiply = function(int) {
    return this.int = this.int.repeat(int);
  };
  StringBuilder.prototype.divide = function(n){
      return this.int = this.int.slice(0, Math.floor(this.int.length/n));
  }
  StringBuilder.prototype.remove = function (str) {
     return this.int = this.int.split(str).join("");
  };

  StringBuilder.prototype.sub = function (from, n) {
    return this.int = this.int.substring(from, from+n);
  }


  let strBuilder = new StringBuilder('Hello');

  console.log(strBuilder.plus(' all', '!')); //'Hello all!'
  console.log(strBuilder.minus(4)); // 'Hello '
  console.log(strBuilder.multiply(3));  // 'Hello Hello Hello '
  console.log(strBuilder.divide(4));  // 'Hell';
  console.log(strBuilder.remove('l')); // 'He';
  console.log(strBuilder.sub(1,1))     // 'e';
  console.log(strBuilder.get());   // 'e';