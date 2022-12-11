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