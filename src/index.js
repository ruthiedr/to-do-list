// function run when button is clicked:
// when text inputed, output innerHTML checkbox
// function run when checkbox is checked:
// class added where text is faded and text-decoration: line through
// add a clear list button

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

const addToList = function (userInput) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input class="checkbox" type="checkbox">${userInput}</input>`;
  listItems.append(listItem);
};

// Clears the input box once "add to list" button is clicked
const clearInput = function () {
  input.value = "";
};

// Clears the list when "clear list" button is clicked
clearListButton.addEventListener("click", function () {
  listItems.innerHTML = "";
});