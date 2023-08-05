let addToDoButton = document.getElementById("addToDo");
let toDocontainer = document.getElementById("toDocontainer");
let inputfield = document.getElementById("inputfield");

//Calling the load function
LoadValues();

//Events

//When + button is clicked
addToDoButton.addEventListener("click", function () {
  let input = inputfield.value;
  if (input === "") {
    return;
  }
  ClickFunction(input);
});

//When Enter Button is click with "inputfield" in focus
document
  .getElementById("inputfield")
  .addEventListener("keypress", function (event) {
    // Check if the pressed key is Enter (key "Enter")
    if (event.key === "Enter") {
      let input = inputfield.value;
      if (input === "") {
        return;
      }
      ClickFunction(input);
    }
  });


  //External Functions

//When Enter or + button is clicked
function ClickFunction(value) {
  var div = document.createElement("div");
  var pTag = document.createElement("p");
  var button = document.createElement("button");
  pTag.classList.add("paragraph-styling");
  pTag.innerText = value;

  toDocontainer.appendChild(div);
  div.appendChild(pTag);
  div.appendChild(button);

  inputfield.value = "";

  // To make a line through the text
  pTag.addEventListener("click", function () {
    pTag.style.textDecoration = "line-through";
  });

  // To delete the line with double click
  button.addEventListener("click", function () {
    toDocontainer.removeChild(div);
    Save(toDocontainer);
  });

  Save(toDocontainer); // Save the initial list after adding a new item
}

// Saving the values to the localStorage
function Save(toDocontainer) {
  var values = [];
  var paragraphs = toDocontainer.querySelectorAll("p");

  paragraphs.forEach(function (paragraph) {
    values.push(paragraph.textContent);
  });

  localStorage.setItem("List", JSON.stringify(values));
}

// Loads the values from localStorage
function LoadValues() {
  var Lists = localStorage.getItem("List");
  console.log(Lists);
  // Check if there are any values stored in local storage
  if (Lists) {
    NewList = JSON.parse(Lists); // Convert the JSON string to an array
    console.log(NewList);

    NewList.forEach(function (List) {
      ClickFunction(List);
    });
  }
}
