const regForm = document.querySelector("#register-form");

regForm.addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(regForm));

  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match. Please re‑enter.");
    return;
  }

  const user = {
    fullName: data.fullName,
    age: data.age,
    gender: data.gender,
    phone: data.phone,
    email: data.email,
    password: data.password
  };
  localStorage.setItem("fitforgeUser", JSON.stringify(user));

  alert("Account created! Next, choose your training.");
  window.location.href = "training.html";
});