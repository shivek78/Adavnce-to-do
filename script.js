let form = document.querySelector('.form');
let userName;

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form behavior
  let nameInput = document.querySelector('.name');
  userName = nameInput.value;

  // Store name in localStorage (optional but useful!)
  localStorage.setItem('userName', userName);

  console.log('Form submitted by:', userName);

  // Redirect to next page
  location.href = "taskmanager.html";
});

let namedisplay = document.querySelector('.username');
 userName = localStorage.getItem('userName');

if (userName && namedisplay) {
  namedisplay.textContent = `Welcome, ${userName}!`;
}
