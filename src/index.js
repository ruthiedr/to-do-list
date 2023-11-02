// function run when add to list button is clicked:
// when text inputed, output innerHTML checkbox

// function run when clear list button is clicked:
// list is cleared

// ADDITIONAL IDEAS: -different "themes", that are classes that can be applied and unapplied

// Select the add to list button
const addButton = document.querySelector(".add");

// Select the ul element
const listItems = document.querySelector(".list-items");

// Select the input box
const input = document.querySelector("input");

// Select the "clear list" box
const clearListButton = document.querySelector(".clear-list");



// Create a list item for the user's input when add button is clicked
addButton.addEventListener("click", function () {
  let userInput = input.value;
  if (userInput !== "") {
    addToList(userInput);
    clearInput();
  }
});

// Takes the user's input and creates a list item from that input and adds it to the unordered list
const addToList = function (userInput) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input class="checkbox" type="checkbox">${userInput}</input>`;
  listItems.append(listItem);
};

// Clears the input box once "add to list" button is clicked
const clearInput = function () {
  input.value = "";
};

// Clears the list when "clear list" button is clicked and user confirms
clearListButton.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear the list?")) {
    listItems.innerHTML = "";
  } 
  });



