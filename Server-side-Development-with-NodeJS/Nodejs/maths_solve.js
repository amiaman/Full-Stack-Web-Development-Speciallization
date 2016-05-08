var math = require('./maths')

function mathsSolve(a, b){
  console.log("addition of " + a + "and" + b + "is" + math.addition(a, b));

  console.log("substraction of " + a + "and" + b + "is" + math.substraction(a, b));

  console.log("multiplication of " + a + "and" + b + "is" + math.multiplication(a, b));

  
}

mathsSolve(4, 2);
mathsSolve(30, 15);
mathsSolve(18,9);
