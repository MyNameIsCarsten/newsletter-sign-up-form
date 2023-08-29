function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    // Check if the input matches with our Regex
    if (input.match(validRegex)) {
        localStorage.setItem('emailAd', input)
        return true;
  
    } else if (input === '') {
        // If the input is empty
        let showInvalid = document.querySelector('#invalid');
        let field = document.querySelector('#email');
        showInvalid.style.display = 'block';
        showInvalid.innerHTML = 'Please enter an email';
        field.style.borderColor = "red";
        field.style.backgroundColor = 'pink';
        return false;

    } else {
        // If the input does not match we show our 'error-layout'
        let showInvalid = document.querySelector('#invalid');
        let field = document.querySelector('#email');
        showInvalid.style.display = 'block';
        field.style.borderColor = "red";
        field.style.backgroundColor = 'pink';
        return false;
    }
}

// Define an event listener
document.addEventListener('DOMContentLoaded', function () {

    // The element that is listening will be our button
    var submitButton = document.getElementById('submitBtn');

    // When the button is clicked we execute a function
    submitButton.addEventListener('click', function () {
        // store the value of the field with the id='email'
        var emailInput = document.getElementById('email').value;
        // Run our function to check if this value is valid or not
        if (ValidateEmail(emailInput)) {
        // If it is valid we are forwarded to our success page
        window.location.href = 'success.html';
        }
    });
});