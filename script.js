document.addEventListener("DOMContentLoaded", (event) => {
  // --- Question 1: Interactive Sidebar ---
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  if (sidebarButton && sidebar) {
    sidebarButton.addEventListener("click", () => {
      sidebar.classList.toggle("opened");
      if (sidebar.classList.contains("opened")) {
        sidebarButton.textContent = "‹";
      } else {
        sidebarButton.textContent = "›";
      }
    });
  }

  // --- Question 2: TODO List ---
  const addTodoButton = document.getElementById("add-todo");
  const taskNameInput = document.getElementById("task-name");
  const todoList = document.getElementById("todo-list");

  if (addTodoButton && taskNameInput && todoList) {
    addTodoButton.addEventListener("click", () => {
      const taskText = taskNameInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        todoList.append(li);
        taskNameInput.value = "";
      }
    });
  }

  // --- Question 3: Greeter ---
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const messageElement = document.getElementById("message");

  const updateGreeting = () => {
    const firstName = firstNameInput ? firstNameInput.value : "";
    const lastName = lastNameInput ? lastNameInput.value : "";
    if (messageElement) {
      messageElement.textContent = Hello ${firstName} ${lastName}!;
    }
  };

  if (firstNameInput) {
    firstNameInput.addEventListener("input", updateGreeting);
  }
  if (lastNameInput) {
    lastNameInput.addEventListener("input", updateGreeting);
  }
});
