document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedback-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("response").innerHTML = 
                `<p>Thank you, ${name}! Your feedback has been received.</p>`;
        } else {
            document.getElementById("response").innerHTML = 
                `<p style="color: red;">Please fill all fields!</p>`;
        }
    });
});
