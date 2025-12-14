const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const formElements = event.target;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email.trim(),
    password: password.trim()
  };

  console.log(formData);
  form.reset();
});
