function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return false;
    } else {
        errorMessage.textContent = "";
        // Here you can add your login authentication logic
        return true; // For demonstration purposes, always return true
    }
}
