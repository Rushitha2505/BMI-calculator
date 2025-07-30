function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function calculateBMI() {
  const feet = parseFloat(document.getElementById('feet').value);
  const inches = parseFloat(document.getElementById('inches').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;

  const heightInMeters = ((feet * 12) + inches) * 0.0254;
  const bmi = weight / (heightInMeters ** 2);

  let category = "";
  let healthIssues = "";
  let diet = "";
  let exercise = "";

  if (bmi < 18.5) {
    category = "Underweight";
    healthIssues = "Fatigue, poor immunity, hair loss.";
    diet = "Eat nuts, eggs, lean meat, rice, and avocados.";
    exercise = "Light strength training, yoga, and walking.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal";
    healthIssues = "Low risk.";
    diet = "Balanced diet: fruits, vegetables, proteins, whole grains.";
    exercise = "Cardio, strength training, flexibility workouts.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    healthIssues = "Increased risk of diabetes, hypertension.";
    diet = "Low-carb diet, avoid sugary drinks and fried food.";
    exercise = "Aerobics, jogging, and strength training.";
  } else {
    category = "Obese";
    healthIssues = "High risk of heart disease, diabetes, joint pain.";
    diet = "High-fiber, low-fat diet. Avoid sugar, red meat.";
    exercise = "Daily walking, swimming, low-impact cardio.";
  }

  const result = `
    <p><strong>BMI:</strong> ${bmi.toFixed(2)} (${category})</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Health Issues:</strong> ${healthIssues}</p>
    <p><strong>Recommended Diet:</strong> ${diet}</p>
    <p><strong>Suggested Exercises:</strong> ${exercise}</p>
  `;

  document.getElementById("resultDisplay").innerHTML = result;
  showPage("outputPage");
}