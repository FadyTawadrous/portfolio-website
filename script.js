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

// Form validation
const form = document.getElementById("form");  //Get form element
const nameInput = document.getElementById("name");  //Get name input element
const messagelInput = document.getElementById("message");  //Get text input element

form.addEventListener("submit", e => {  //Add submit event listener to form
    const nameValue = nameInput.value.trim();  //Get trimmed value of name input
    const messageValue = messagelInput.value.trim();  //Get trimmed value of message input

    if (nameValue.length >= 30) {  //Check if name is too long
        alert("Name is too long");  //Show alert if too long
        e.preventDefault();  //Prevent form submission
    }
    else if (messageValue.length >= 200) {  //Check if message is too long
        alert("Message is too long");  //Show alert if too long
        e.preventDefault();  //Prevent form submission
    }
    else {
        alert("Form submitted successfully! Thank you for your feedback.");  //Show success alert
    }
});