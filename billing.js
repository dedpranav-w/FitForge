const summaryLine = document.querySelector("#summary-line");
const billingForm = document.querySelector("#billing-form");

const trainings = JSON.parse(localStorage.getItem("fitforgeTrainings") || "[]");
const coaches = JSON.parse(localStorage.getItem("fitforgeCoaches") || "[]");

const nameMap = {
  powerlifting: "Powerlifting & Arm Wrestling",
  strength: "Strength Training",
  boxing: "Shadow Boxing"
};

const tNames = trainings.map(t => nameMap[t] || t);
summaryLine.textContent =
  "Trainings: " + (tNames.join(", ") || "None") +
  " · Coaches: " + (coaches.join(", ") || "None");

billingForm.addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(billingForm));
  localStorage.setItem("fitforgeBilling", JSON.stringify(data));

  alert(
    `Package confirmed!\nPlan: ${data.plan}\nCycle: ${data.cycle}\n\nThis will now redirect to the Home page (demo).`
  );
  window.location.href = "index.html";
});