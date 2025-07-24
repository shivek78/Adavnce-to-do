let form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nameInput = document.querySelector('.name');
  let userName = nameInput.value.trim();

  if (userName === "") {
    alert("Please enter your name to proceed.");
    return;
  }

  // Save name to localStorage
  localStorage.setItem("username", userName);

  // Redirect to task manager page
  location.href = "taskmanager.html";
});
