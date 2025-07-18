let form = document.querySelector('.form');
let userName;

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form behavior
  let nameInput = document.querySelector('.name');
  userName = nameInput.value;


  console.log('Form submitted by:', userName);
// Redirect to next page
  location.href = "taskmanager.html";
});


