// Get username
const username = localStorage.getItem("username") || "User";
document.getElementById("userName").textContent = username;

// Unique storage key for user
const TASK_KEY = `tasks_${username}`;

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem(TASK_KEY)) || [];

// DOM Elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const dueDateInput = document.getElementById("dueDate");
const priorityInput = document.getElementById("priority");

// Render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.className = `task-item priority-${task.priority.toLowerCase()}`;
    div.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})" />
      <span class="${task.completed ? "done" : ""}" ondblclick="editTask(${index})">${task.text}</span>
      <small>Due: ${task.dueDate || "None"} | Priority: ${task.priority}</small>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    taskList.appendChild(div);
  });
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

// Add task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTask = {
    text: taskInput.value.trim(),
    dueDate: dueDateInput.value,
    priority: priorityInput.value,
    completed: false
  };
  if (newTask.text !== "") {
    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'Medium';
  }
});

// Complete task
window.toggleComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
};

// Delete task
window.deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

// Edit task
window.editTask = (index) => {
  const newText = prompt("Edit Task:", tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText.trim();
    renderTasks();
  }
};

// Dark mode
const toggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  toggle.checked = true;
}
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// Load Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#b44545ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});

// Init
renderTasks();

