const form = document.querySelector("form"); // Select the form element

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const height = Number(document.querySelector("#height").value);
  // Get the height value and convert it to a number
  const weight = Number(document.querySelector("#weight").value);
  // Get the weight value and convert it to a number
  const results = document.querySelector("#results");
  // Select the results element to display the BMI result

  results.innerHTML = ""; // Clear previous results
// Validate the height and weight inputs
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a valid height ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter a valid height ${weight}`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi}</span>`;
// Calculate BMI and display it
    if (bmi < 18.5) {
      results.innerHTML += `<p class="text-danger">You are underweight</p>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      results.innerHTML += `<p class="text-success">You are Fit🦾</p>`;
    } else {
      results.innerHTML += `<p class="text-warning">You are overweight</p>`;
    }
  }
});
