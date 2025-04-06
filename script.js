let outputDiv = document.getElementById("output");
console.log("Hello, World!");  //Log message
let myname = "Alice";  //Variable name
const age = 30;  //Constant age
var city = "New York";  //Variable city
console.log(myname);
outputDiv.innerHTML = myname;
console.log(age);
outputDiv.innerHTML = outputDiv.innerHTML + age;
console.log(city);
outputDiv.innerHTML = outputDiv.innerHTML + city;
if (age > 18) {
    console.log("You are an adult");
    outputDiv.innerHTML = outputDiv.innerHTML + "You are an adult";
}
function squareNumber(number) {  //Function definition
    return number * number;
}
let result = squareNumber(4);  //Function call
console.log(result);   //Print result
outputDiv.innerHTML = outputDiv.innerHTML + result;



// const button = document.getElementById("newQuoteButton");
// const paragraph = document.getElementById("quoteDisplay");

// const quotes = [
//   "The best way to predict the future is to invent it.",
//   "Life is 10% what happens to us and 90% how we react to it.",
//   "Success is not the key to happiness. Happiness is the key to success.",
// ];

// button.addEventListener('click', quotefunction);

// quotefunction()
// {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     quoteDisplay.textContent = quotes[randomIndex];
// }