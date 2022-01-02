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

    p.innerHTML = task;
    li.appendChild(p);
    ul.appendChild(li);
    empty.style.display = "none";
    inputTask.value = "";
  }
  newTask.preventDefault();
});
