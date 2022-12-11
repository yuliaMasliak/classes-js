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
