// Toggle menu when hamburger icon is clicked
let links = document.getElementById("links");  //Get menu element
links.addEventListener("click", toggleMenu);
function toggleMenu() {  //Add click event listener to menu
    let nav = document.getElementById("nav-list");  //Get nav element
    if (nav.style.display === "block") {  //Check if nav is displayed
        nav.style.display = "none";  //Hide nav
    } else {
        nav.style.display = "block";  //Show nav
    }
}
// Add event listener to close menu when clicking outside of it
let header = document.getElementById("home");  //Get header element
header.addEventListener("mouseleave",closeMenu);
function closeMenu() {  //Add mouseout event listener to menu
    let nav = document.getElementById("nav-list");  //Get nav element
    nav.style.display = "none";  //Hide nav
}

// Make a lightbox for images
const lightbox = document.createElement("div");  //Create lightbox element
lightbox.id = "lightbox";  //Set id for lightbox
document.body.appendChild(lightbox);  //Append lightbox to body

const images = document.querySelectorAll("img");  //Get all images
images.forEach(image => {  //Loop through images
    image.addEventListener("click", () => {  //Add click event listener to each image
        lightbox.classList.add("active");  //Add active class to lightbox
        const img = document.createElement("img");  //Create img element
        img.src = image.src;  //Set src for img element
        lightbox.appendChild(img);  //Append img to lightbox
    });
});
lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;  //Check if clicked element is not lightbox
    lightbox.classList.remove("active");  //Remove active class from lightbox
    lightbox.removeChild(lightbox.firstChild);  //Remove img from lightbox
});

// let outputDiv = document.getElementById("output");
// console.log("Hello, World!");  //Log message
// let myname = "Alice";  //Variable name
// const age = 30;  //Constant age
// var city = "New York";  //Variable city
// console.log(myname);
// outputDiv.innerHTML = myname;
// console.log(age);
// outputDiv.innerHTML = outputDiv.innerHTML + age;
// console.log(city);
// outputDiv.innerHTML = outputDiv.innerHTML + city;
// if (age > 18) {
//     console.log("You are an adult");
//     outputDiv.innerHTML = outputDiv.innerHTML + "You are an adult";
// }
// function squareNumber(number) {  //Function definition
//     return number * number;
// }
// let result = squareNumber(4);  //Function call
// console.log(result);   //Print result
// outputDiv.innerHTML = outputDiv.innerHTML + result;



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