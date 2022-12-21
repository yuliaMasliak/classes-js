class IntegerBuilder extends Builder {
  constructor(arg = 0) {
    super(arg);
  }
  minus(...n) {
    this.arg = n.reduce((acc, item) => (acc -= item), this.arg);
    return this;
  }
  multiply(n) {
    this.arg = this.arg * n;
    return this;
  }

  divide(n) {
    this.arg = this.arg / n;
    return this;
  }
  mod(n) {
    this.arg = this.arg % n;
    return this;
  }
  random(from, to) {
    return Math.trunc(Math.random() * (to - from) + from);
  }
}

let intBuilder = new IntegerBuilder(10);
console.log(
  intBuilder
    .plus(2, 3, 2) //17
    .minus(1, 2) //14
    .multiply(2) //28
    .divide(4) //7
    .mod(3) //1
    .get() //1
    .random(10, 100) //...
);