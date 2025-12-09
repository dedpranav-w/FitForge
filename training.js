const trainingForm = document.querySelector("#training-form");

trainingForm.addEventListener("submit", e => {
  e.preventDefault();

  const checked = Array.from(
    trainingForm.querySelectorAll('input[name="training"]:checked')
  ).map(input => input.value);

  if (checked.length === 0) {
    alert("Select at least one training type.");
    return;
  }

  localStorage.setItem(
    "fitforgeTrainings",
    JSON.stringify(checked)
  );

  window.location.href = "trainer-select.html";
});