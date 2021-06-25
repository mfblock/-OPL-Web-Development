const A = 100;
const B = 200;

// function declarations
function one_a_x_b (vara, varb) {
    square_a = vara * vara;
    square_b = varb * varb;
    square_c = (square_a + square_b) * (square_a + square_b);
    return square_c;
  }

// function expresion
const two_a_x_b = function(vara, varb) {
    square_a = vara * vara;
    square_b = varb * varb;
    square_c = (square_a + square_b) * (square_a + square_b);
    return square_c;
  };

// arrow functions
let arrow = (x,y) => {return (((x * x) + (y * y)) * ((x * x)+ (y * y)))};

console.log(one_a_x_b(A,B));
console.log(two_a_x_b(A,B)); 
console.log(arrow(A,B));