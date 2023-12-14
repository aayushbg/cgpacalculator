let subjectsCounter = 1; // Counter to keep track of the number of subjects added

function addSubject() {
  const form = document.getElementById("gradeForm");

  const subjectDiv = document.createElement("div");
  subjectDiv.className = "subject";
  subjectDiv.innerHTML = `
    <label for="subjectName${subjectsCounter}">Subject Name:</label>
    <input type="text" id="subjectName${subjectsCounter}" name="subjectName${subjectsCounter}" required>
    
    <label for="credits${subjectsCounter}">Credits:</label>
    <input type="number" id="credits${subjectsCounter}" name="credits${subjectsCounter}" required>
    
    <label for="gradePoint${subjectsCounter}">Grade Point:</label>
    <input type="number" id="gradePoint${subjectsCounter}" name="gradePoint${subjectsCounter}" step="0.1" required>
  `;

  form.insertBefore(subjectDiv, form.lastChild);
  subjectsCounter++;
}

function calculateGPA() {
  const subjectInputs = document.querySelectorAll('.subject input');
  
  if (subjectInputs.length === 0) {
    alert("Please add at least one subject.");
    return;
  }

  let totalCredits = 0;
  let totalGradePoints = 0;

  subjectInputs.forEach((input, index) => {
    const value = parseFloat(input.value);
    if (index % 3 === 1) {
      totalCredits += value;
    } else if (index % 3 === 2) {
      totalGradePoints += value * parseFloat(subjectInputs[index - 1].value);
    }
  });

  const gpa = totalGradePoints / totalCredits;

  document.getElementById("result").innerHTML = `<p>Your GPA is: ${isNaN(gpa) ? 'N/A' : gpa.toFixed(2)}</p>`;
}
