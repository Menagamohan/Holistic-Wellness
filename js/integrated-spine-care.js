
document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("appointment-date").value;
    var message = document.getElementById("msg").value;

    // ✅ Correct format: countrycode + number (NO space, NO +)
    var whatsappNumber = "919944875445";

    // ✅ Proper encoding (very important)
    var whatsappMessage = 
        "New Appointment Booking:\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Appointment Date: " + date + "\n" +
        "Message: " + message;

    var encodedMessage = encodeURIComponent(whatsappMessage);

    var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;

    window.open(whatsappURL, "_blank");
});
