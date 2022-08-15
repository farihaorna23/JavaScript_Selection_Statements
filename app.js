console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise1
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
