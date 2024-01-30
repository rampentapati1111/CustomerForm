// Function to save data in local storage
function saveData() {
  const name = document.getElementById("name").value;
  const employeeId = document.getElementById("employeeId").value;
  const city = document.getElementById("city").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const customerData = {
    name,
    employeeId,
    city,
    gender,
  };

  // Save data in local storage
  localStorage.setItem("customerData", JSON.stringify(customerData));

  // Display saved data in read-only format
  displayData();
}

// Function to display saved data
function displayData() {
  const customerData = JSON.parse(localStorage.getItem("customerData"));

  if (customerData) {
    const displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = `
                <h2>Customer Information</h2>
                <label for="displayedName">Name:</label>
                <input type="text" id="displayedName" value="${customerData.name}" readonly onclick="enableEditing()">
                
                </br>

                <label for="displayedEmployeeId">Employee ID:</label>
                <input type="text" id="displayedEmployeeId" value="${customerData.employeeId}" readonly>
                
                </br>

                <label for="displayedCity">City:</label>
                <input type="text" id="displayedCity" value="${customerData.city}" readonly>
                
                </br>

                <label for="displayedGender">Gender:</label>
                <input type="text" id="displayedGender" value="${customerData.gender}" readonly>

                </br>

                <button onclick="enableEditing()" id="button">Save Changes</button>
            `;
  }
}

// Function to enable editing only for the namebase3 field
function enableEditing() {
  const displayedNameInput = document.getElementById("displayedName");
  const displayedEmployeeId = document.getElementById("displayedEmployeeId");
  const displayedCity = document.getElementById("displayedCity");
  const displayedGender = document.getElementById("displayedGender");
  const saveButton = document.querySelector("#button");

  displayedNameInput.removeAttribute("readonly");
  displayedEmployeeId.removeAttribute("readonly");
  displayedCity.removeAttribute("readonly");
  displayedGender.removeAttribute("readonly");
  saveButton.onclick = saveChanges;
}

// Function to save changes after editing
function saveChanges() {
  const displayedNameInput = document.getElementById("displayedName");
  const editedName = displayedNameInput.value;

  const displayedEmployeeId = document.getElementById("displayedEmployeeId");
  const editedEmployeeId = displayedEmployeeId.value;

  const displayedCity = document.getElementById("displayedCity");
  const editedCity = displayedCity.value;

  const displayedGender = document.getElementById("displayedGender");
  const editedGender = displayedGender.value;

  // Update the saved data
  const customerData = JSON.parse(localStorage.getItem("customerData"));
  customerData.name = editedName;
  customerData.employeeId = editedEmployeeId;
  customerData.city = editedCity;
  customerData.gender = editedGender;

  // Save the updated data
  localStorage.setItem("customerData", JSON.stringify(customerData));

  // Display the updated data in read-only format
  displayData();
}

// Display saved data on page load
displayData();
