$(document).ready(function () {
    // Initially show home section and hide others
    $('.content-section').hide();
    $('#home').show();

    // Navigation link click functionality
    $('.nav-link').on('click', function (event) {
        event.preventDefault();

        // Hide all content sections
        $('.content-section').hide();

        // Get the section to show based on clicked link
        const sectionToShow = $(this).data('section');

        // Show the selected section
        $('#' + sectionToShow).show();
    });

    // Form submission handling via AJAX for signup
    $('#signupForm').on('submit', function (event) {
        event.preventDefault();
        let username = $('#signupUsername').val();
        let email = $('#signupEmail').val();
        let password = $('#signupPassword').val();

        // Simulate form submission (Replace with actual AJAX call)
        $('#signupSuccess').text('Signup successful!');
        $('#signupError').text('');
        $('#signupForm')[0].reset();
    });

    // Login form handling via AJAX
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();
        let email = $('#loginEmail').val();
        let password = $('#loginPassword').val();

        // Simulate form submission (Replace with actual AJAX call)
        if (email === 'test@example.com' && password === 'password') {
            $('#loginSuccess').text('Login successful!');
            $('#loginError').text('');
            $('#loginForm')[0].reset();
        } else {
            $('#loginError').text('Invalid credentials!');
            $('#loginSuccess').text('');
        }
    });

    // Registration form handling via AJAX
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault();
        let fullName = $('#fullName').val();
        let email = $('#email').val();
        let course = $('#course').val();

        // Simulate form submission (Replace with actual AJAX call)
        $('#registrationSuccess').text('Registration successful!');
        $('#registrationError').text('');
        $('#registrationForm')[0].reset();
    });

    // Contact form handling via AJAX
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#contactEmail').val();
        let message = $('#message').val();

        // Simulate form submission (Replace with actual AJAX call)
        $('#contactSuccess').text('Message sent successfully!');
        $('#contactError').text('');
        $('#contactForm')[0].reset();
    });
});
