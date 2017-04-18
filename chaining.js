var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//Sort the numbers in descending order (10, 9, 8, 7, etc).
// var sorted = integers.sort(function(a,b){
//     return b - a;
// });

// console.log("sorted integers", sorted);

// //Remove any integers greater than 19.

// var filtered = integers.filter(function(value){
//     return value < 19;
// });

// console.log("filtered", filtered);

// //Multiply each remaining number by 1.5 and then subtract 1.

// var multiplied = filtered.map(function(value){
//     return (value * 1.5) -1;
// });

// console.log("multiplied", multiplied);

// //Then output (either in the DOM or the console) the sum of all the resulting numbers.

// var singleNumber = multiplied.reduce(function(prev, curr){
//     return prev + curr;
// });

// console.log("singleNumber", singleNumber);


var allTogether = integers
    .sort(function(a,b){return b - a;})
    .filter(function(value){return value < 19;})
    .map(function(value){return (value * 1.5) -1;})
    .reduce(function(prev, curr){return prev + curr;});

    console.log(allTogether);
