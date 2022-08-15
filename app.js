console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

Exercise1;
const favoriteNumber = 23;

const guess = Number(prompt("Guess my favorite number"));
console.log(typeof guess);

if (guess < favoriteNumber) {
  console.log("too low");
} else if (guess > favoriteNumber) {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}

Exercise2;
const birthMonth = prompt("What is your birth month?");

switch (birthMonth) {
  case "January":
    console.log("You were born during winter");
    break;
  case "February":
    console.log("You were born during winter");
    break;
  case "March":
    console.log("You were born during spring");
    break;
  case "April":
    console.log("You were born during spring");
    break;
  case "May":
    console.log("You were born during spring");
    break;
  case "June":
    console.log("You were born during summer");
    break;
  case "July":
    console.log("You were born during summer");
    break;
  case "August":
    console.log("You were born during summer");
    break;
  case "September":
    console.log("You were born during fall");
    break;
  case "October":
    console.log("You were born during fall");
    break;
  case "November":
    console.log("You were born during fall");
    break;
  case "December":
    console.log("You were born during winter");
    break;
  default:
    console.log("Oh no! Did you give write a valid month?");
}

//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BLK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
