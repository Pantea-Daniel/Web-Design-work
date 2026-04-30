document.getElementById("contactForm").addEventListener("submit", function (e) {
    // Full Name validation
    const fullname = document.getElementById("fullname").value.trim();
    const namePattern = /^[A-Za-z\s]+$/;

    if (fullname.length < 5) {
        alert("Full name must contain at least 5 characters.");
        e.preventDefault();
        return;
    }

    if (!namePattern.test(fullname)) {
        alert("Full name must contain only letters and spaces.");
        e.preventDefault();
        return;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

    if (!emailPattern.test(email)) {
        alert("Email must be valid and end with @e-uvt.ro");
        e.preventDefault();
        return;
    }

    // Phone validation (optional, but if filled, must be 10 digits)
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\d{10}$/;

    if (phone && !phonePattern.test(phone)) {
        alert("Phone must contain exactly 10 digits.");
        e.preventDefault();
        return;
    }

    // Subject validation
    const subject = document.getElementById("subject").value;
    if (!subject) {
        alert("Subject is required.");
        e.preventDefault();
        return;
    }

    // Message validation
    const message = document.getElementById("message").value.trim();
    if (!message) {
        alert("Message cannot be empty.");
        e.preventDefault();
        return;
    }

    // Radio button validation
    const hearRadios = document.querySelectorAll('input[name="hear"]:checked');
    if (hearRadios.length === 0) {
        alert("Please select at least one option for how you heard about us.");
        e.preventDefault();
        return;
    }

    // Date of Birth validation
    const dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Date of Birth is required.");
        e.preventDefault();
        return;
    }
    const birthDate = new Date(dob);
    const today = new Date();
    let ageCalc = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        ageCalc--;
    }
    if (ageCalc < 18) {
        alert("You must be at least 18 years old.");
        e.preventDefault();
        return;
    }

    // Age validation
    const age = document.getElementById("age").value;
    if (!age || age < 18 || age > 60) {
        alert("Age must be between 18 and 60.");
        e.preventDefault();
        return;
    }

    // Website validation
    const website = document.getElementById("website").value.trim();
    const urlPattern = /^https:\/\/.+/;
    if (!website || !urlPattern.test(website)) {
        alert("Website must be a valid URL starting with https://");
        e.preventDefault();
        return;
    }

    // File Upload validation
    const fileUpload = document.getElementById("fileUpload").files[0];
    if (!fileUpload) {
        alert("File upload is required.");
        e.preventDefault();
        return;
    }
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(fileUpload.type)) {
        alert("File must be .pdf or .docx");
        e.preventDefault();
        return;
    }
    if (fileUpload.size > 2 * 1024 * 1024) {
        alert("File size must not exceed 2MB.");
        e.preventDefault();
        return;
    }

    // Favorite Color validation
    const favColor = document.getElementById("favColor").value;
    if (!favColor) {
        alert("Favorite color is required.");
        e.preventDefault();
        return;
    }

    // Confirmation dialog
    if (!confirm("Are you sure you want to submit the form?")) {
        e.preventDefault();
        return;
    }
});