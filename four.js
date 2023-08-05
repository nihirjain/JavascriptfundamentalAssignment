// You are developing a booking application for a cinema. The ticket price depends on the type of the
// viewer(*child", "adult", or "senior*). Write a program which calculates the price accordingly and prints the total
// price to be paid. Let's assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price
// for a senior is Rs. 120.
let numberofadult = 2;
let numberofchild = 1;
let numberofsenior = 1;
let priceforadult = 150;
let priceforsenior = 120;
let priceforchild = 100;
let result = (numberofadult*priceforadult) + (numberofchild*priceforchild) + (numberofsenior*priceforsenior);
console.log (result)