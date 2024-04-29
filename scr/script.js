// Define your JSON data (assuming it's stored in a file called data.json)
const accessData = {
    "teacher": ["admin"],
    "student": ["stdt2024"]
};

// Function to show input field
function showInput(userType) {
    document.getElementById('accessCodeInput').focus(); // Focus on the input field
    document.getElementById('accessType').value = userType; // Set the access type in a hidden field

    document.getElementById('accessInput').style.display = 'flex';
    document.getElementById('catTeacher').style.display = 'none';
    document.getElementById('catStudent').style.display = 'none';
}

// Function to check access
function checkAccess() {
    const userType = document.getElementById('accessType').value; // Get the access type
    const input = document.getElementById('accessCodeInput').value.trim(); // Get the input value

    // Check if the input matches any access code for the given userType
    if (accessData[userType].includes(input)) {
        window.location.href = "homepage.html";
    } else {
        // Access denied
        alert(`Access denied for ${userType}. Please check your access code.`);
    }
}
