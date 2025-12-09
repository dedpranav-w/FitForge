const trainingSummary = document.querySelector("#training-summary");
const coachContinue = document.querySelector("#coach-continue");
const coachForm = document.querySelector("#coach-form");

const trainingValues = JSON.parse(localStorage.getItem("fitforgeTrainings") || "[]");
const mapNames = {
  powerlifting: "Powerlifting & Arm Wrestling",
  strength: "Strength Training",
  boxing: "Shadow Boxing"
};

if (trainingValues.length === 0) {
  trainingSummary.textContent =
    "No trainings selected. Please go back to the training page.";
} else {
  const names = trainingValues.map(t => mapNames[t] || t);
  trainingSummary.textContent = "Selected trainings: " + names.join(", ");
}

coachContinue.addEventListener("click", () => {
  const checked = Array.from(
    coachForm.querySelectorAll('input[name="coach"]:checked')
  ).map(i => i.value);

  if (checked.length === 0) {
    alert("Select at least one coach.");
    return;
  }

  localStorage.setItem("fitforgeCoaches", JSON.stringify(checked));
  window.location.href = "billing.html";
});