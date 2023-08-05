// Suppose you are building a payment checkout page and must display the final price after the discount.
// Create a simple discount calculator that takes two values from the variables - the total cost and the
// discount percentage - and prints the discounted value.
let totalvalue = 2000;
let discountpercentage = 20;

let discount = (totalvalue*20)/100

let finalprice = totalvalue - discount ;
console.log(finalprice);