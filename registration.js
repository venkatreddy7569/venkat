document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const courses = Array.from(document.getElementById('courses').selectedOptions).map(option => option.text).join(', ');

    // Display success message
    document.getElementById('message').innerHTML = `
        <p>Registration Successful!</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Courses:</strong> ${courses}</p>
    `;

    // Optionally, you can also send this data to a server here
});
