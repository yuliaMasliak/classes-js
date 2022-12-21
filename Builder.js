class Builder {
  constructor(arg) {
    this.arg = arg;
  }
  plus(...n) {
    this.arg = n.reduce((sum, item) => (sum += item), this.arg);
    return this;
  }
  get() {
    return this;
  }
}