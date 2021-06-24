
// Checking if a number is big

var ResultOfcheck = ""
// number to check
let ToCheck = [ 25, 145, 60, 90, 100, 125, 200, 15, 9, 33];

// check function returns true/false 
const Check100 = function(nummer) {
    if (nummer >= 100) {
        var check100_result = "True";
    } else { var check100_result = "False";
 }
    return check100_result;
};

// check the array if numbers are big
for (const check of ToCheck) {
    console.log(Check100(check));
};

// Bouncer at a club

// sim visitors len is amount of visitors value is age


const clubsize = 100;
const AgeAllow = 18;
let visitors = 0;
let Age = 0;

const bounce_check = function (Age, visitors){
    if (visitors < clubsize && Age >= AgeAllow) {
        bouncer = "come in"
    } else if (visitors < clubsize && Age < AgeAllow) {
        bouncer = "this is a club for adults";
    } else if (visitors > clubsize) {
        bouncer = "it's too busy now, come back later"
    }
    return bouncer;
}
// to many visitors
console.log(bounce_check( 21, 101));
//to young
console.log(bounce_check( 16, 78));
// let's party
console.log(bounce_check( 21, 95));


//Calculating the average

//zoals ik denk dat het moet
let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(Math.round(average([6,2,7,4,5])));

// zoals de vraag stelling is:

var array = [1, 2, 3, 4, 5];

const GetAvg = function(array) {    
    // Getting sum of numbers
    var sum = array.reduce(function(a, b){
        return a + b;
        }, 0);
    var average = sum / array.length
    return average};

console.log(Math.round(GetAvg(array)));