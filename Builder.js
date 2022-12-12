class Builder{
constructor(arg){
   this.arg = arg;
}
plus(...n) {
    n.forEach(item=>this.arg+=item);
    return this.arg;}

minus(...n) {
    if (typeof this.arg === "number") {
      n.forEach((item) => (this.arg -= item));
    } else if (typeof this.arg === "string") {
      n.forEach(
        (item) => (this.arg = this.arg.substring(0, this.arg.length - item))
      );}
    return this.arg}

multiply(n) {
      if(typeof this.arg ==="number"){
        this.arg = this.arg * n;

    } else if (typeof this.arg==="string"){
       this.arg = this.arg.repeat(n);
       }
       return this.arg}

divide(n){
  if(typeof this.arg === "number"){
      this.arg = this.arg/n;}
  else if(typeof this.arg === "string"){
    this.arg = this.arg.slice(0, Math.floor(this.arg.length/n));
  }return this.arg}

get(){
    return this.arg;
}
}