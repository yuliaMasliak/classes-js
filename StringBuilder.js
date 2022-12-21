//StringBuilder class (ES5) extended from Bulder base class
function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Parent;
}
extend(Builder, StringBuilder);

function StringBuilder(arg = "") {
  this.arg = arg;
}
StringBuilder.prototype.minus = function (...n) {
  n.forEach(
    (item) => (this.arg = this.arg.substring(0, this.arg.length - item))
  );
  return this;
};

StringBuilder.prototype.multiply = function (n) {
  this.arg = this.arg.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  this.arg = this.arg.slice(0, Math.floor(this.arg.length / n));
  return this;
};
StringBuilder.prototype.remove = function (str) {
  this.arg = this.arg.split(str).join("");
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.arg = this.arg.substring(from, from + n);
  return this;
};

let strBuilder = new StringBuilder("Hello");

console.log(
  strBuilder
    .plus(" all", "!") //'Hello all!'
    .minus(4) // 'Hello '
    .multiply(3) // 'Hello Hello Hello '
    .divide(4) // 'Hell';
    .remove("l") // 'He';
    .sub(1, 1) // 'e';
    .get()
); // 'e';