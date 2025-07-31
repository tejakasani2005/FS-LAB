function calculateResult() {
  // Get values from input
  let math = parseFloat(document.getElementById("math").value);
  let science = parseFloat(document.getElementById("science").value);
  let english = parseFloat(document.getElementById("english").value);
  let computer = parseFloat(document.getElementById("computer").value);

  // Validate input
  if (isNaN(math) || isNaN(science) || isNaN(english) || isNaN(computer)) {
    document.getElementById("result").innerHTML = "Please enter marks for all subjects.";
    return;
  }

  // Calculate total and percentage
  let total = math + science + english + computer;
  let percentage = (total / 400) * 100;

  // Determine grade
  let grade = '';
  if (percentage >= 90) grade = 'A+';
  else if (percentage >= 80) grade = 'A';
  else if (percentage >= 70) grade = 'B';
  else if (percentage >= 60) grade = 'C';
  else if (percentage >= 50) grade = 'D';
  else grade = 'F';

  // Show result
  document.getElementById("result").innerHTML =
    `<strong>Total Marks:</strong> ${total}/400<br>
     <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
     <strong>Grade:</strong> ${grade}`;
}
