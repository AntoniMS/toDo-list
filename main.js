const addTask = document.querySelector(".btn-add");
const inputTask = document.querySelector("input");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addTask.addEventListener("click", (newTask) => {
  const task = inputTask.value;

  if (task === "") {
    alert("Write a task please.");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const closeButton = document.createElement("button");
    p.innerHTML = task;
    closeButton.innerHTML = "X";
    closeButton.className = "btn-delete";
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(closeButton);
    empty.style.display = "none";
    inputTask.value = "";
    closeButton.addEventListener("click", () => {
      li.remove();
    });
  }
  newTask.preventDefault();
});
