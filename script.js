const enrollButton = document.getElementById("enroll");
const clearButton = document.getElementById("clear");
const enrolledList = document.getElementById("enrolled-list");

enrollButton.addEventListener("click", () => {
    // Fetch input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const image = document.getElementById("image").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "N/A";
    const skills = [];
    const htmlCheckbox = document.getElementById("html");
    const cssCheckbox = document.getElementById("css");
    const jsCheckbox = document.getElementById("js");

    if (htmlCheckbox.checked) {
        skills.push("HTML");
    }
    if (cssCheckbox.checked) {
        skills.push("CSS");
    }
    if (jsCheckbox.checked) {
        skills.push("JavaScript");
    }

    // Create a new row in the table
    const newRow = enrolledList.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Populate the cells with data
    cell1.innerHTML = `
<strong>Name:</strong> ${name}<br>
<strong>Email:</strong> ${email}<br>
<strong>Website:</strong> ${website}<br>
<strong>Gender:</strong> ${gender}<br>
<strong>Skills:</strong> ${skills.join(", ")}
`;
    cell2.className = "student-image-cell";
    cell2.innerHTML = `<img src="${image}" alt="${name}'s Image" width="100">`;

    // Clear the form
    document.getElementById("registration-form").reset();
});

clearButton.addEventListener("click", () => {
    document.getElementById("registration-form").reset();
});
