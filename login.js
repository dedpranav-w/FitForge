const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm));
  const saved = JSON.parse(localStorage.getItem("fitforgeUser") || "null");

  if (!saved) {
    alert("No user found. Please register first.");
    window.location.href = "register.html";
    return;
  }

  if (data.email === saved.email && data.password === saved.password) {
    alert("Login successful. Time to choose your training.");
    window.location.href = "training.html";
  } else {
    alert("Invalid email or password (demo only).");
  }
});