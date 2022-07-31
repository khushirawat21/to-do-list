const userinput = document.querySelector(".new-task input");
const contain = document.querySelector(".list-container ul");

let ls = localStorage.getItem("tasks");
let list = ls ? JSON.parse(ls) : [];

function createlist(task) {
  const item = document.createElement("li");
  item.classList.add("list-item");
  const Button = document.createElement("button");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-trash");
  item.append(task);
  contain.appendChild(item);
  Button.appendChild(icon);
  item.appendChild(Button);
  Button.addEventListener("click", (e) => {
    let updated = list.filter((task) => {
      task != item.textContent;
    });
    localStorage.setItem("tasks", JSON.stringify(updated));
    contain.removeChild(item);
  });
}
list.map((task) => {
  createlist(task);
});
const addtask = () => {
  if (userinput.value.length === 0) {
    alert("Please enter the task");
  }
  list.push(userinput.value);
  localStorage.setItem("tasks", JSON.stringify(list));
  createlist(userinput.value);
  userinput.value = "";
};
