const myHeading = document.getElementById("headingH1");
myHeading.textContent = "Ariel's Easter Playground (In JavaScript)";

function searchFunction() {
  const searchTerm = document.getElementById("searchInput");
  console.log("We are searching for: " + searchTerm.value);
}

const form = document.getElementById("cupcakeQuestion");

form.addEventListener("submit", function (event) {
    console.log("You submitted the form! Hooray!")
    let resultText = document.getElementById("cupcakeInput").value;
  console.log(resultText);
});

// function photoText() {
//     let resultText = document.getElementById("cupcake").value;
//     console.log(resultText);
// }