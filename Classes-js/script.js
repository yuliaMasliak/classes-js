//Base class (ES6)
class Builder{
    constructor(int){
        if (!int){
            int = 0;
        }
        this.int = int;

    }
plus(...n) {
    n.forEach(item=>this.int+=item);
    return this.int;}

minus(...n) {  //What is the right way here:
  // - set a common condition in base class so that it works properly for both extended classes or ...
  // - leave here only one condition and set a separate function in one of the extended class, for examle with the string arguments? or ...
  // - do not set this function in base class, but set two separate functions to each extended class?
    if (typeof this.int === "number") {
      n.forEach((item) => (this.int -= item));
    } else if (typeof this.int === "string") {
      n.forEach(
        (item) => (this.int = this.int.substring(0, this.int.length - item))
      );}
    return this.int}

get(){
    return this.int;
}
random(from, to) {
    return  Math.trunc(Math.random() * (to - from) + from);
}
}

//IntegerBuilder class (ES6) extended from Bulder base class
class IntegerBuilder extends Builder {
constructor(int){
    super(int);
}
multiply(n) {
    this.int = this.int * n;
    return this.int;
  }
divide(n){
    return this.int = this.int/n;
}
mod(n){
    return this.int = this.int%n;
}
}

let intBuilder = new IntegerBuilder(10);
  console.log(intBuilder.plus(2, 3, 2)) //17
  console.log(intBuilder.minus(1, 2))  //14
  console.log(intBuilder.multiply(2))  //28
  console.log(intBuilder.divide(4))  //7
  console.log(intBuilder.mod(3))  //1
  console.log(intBuilder.get());  //1
  console.log(intBuilder.random(10, 100)); //...


//StringBuilder class (ES5) extended from Bulder base class
function StringBuilder(int){
if (!int){
  int = "";
}
this.int = int;
    }

StringBuilder.prototype = Object.create(Builder.prototype)

console.log(Builder.isPrototypeOf(StringBuilder)); //false ??
console.log(StringBuilder.prototype.constructor === Builder.prototype.constructor); //but true here

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