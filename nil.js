let addToDoButton = document.getElementById("addToDo");
let toDocontainer = document.getElementById("toDocontainer");
let inputfield = document.getElementById("inputfield");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputfield.value;
  toDocontainer.appendChild(paragraph);
  inputfield.value = "";

  //to make a line through in text
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  //to delete the line with double click
  paragraph.addEventListener("dblclick", function () {
    toDocontainer.removeChild(paragraph);
  });
});
