$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        var formData = {
            name: $("#contact-name").val(),
            email: $("#contact-email").val(),
            number: $("#contact-number").val(),
            message: $("#contact-message").val(),
            "g-recaptcha-response": $("#g-recaptcha-response").val(),
        };
    
        $.ajax({
            type: "POST",
            url: "https://submit-form.com/7i47EvNW",
            data: formData,
            dataType: "json",
            encode: true,
        })
        .done(function (data) {
            console.log(data);

            $("#contact-form").hide();
            $("#contact-success").removeClass("d-none");

        })
        .fail(function (data) {
            console.error(data);

            $("#contact-form").hide();
            $("#contact-error").removeClass("d-none");

          });
    
        event.preventDefault();

    });
});


// Enable the submit button after the reCAPTCHA is completed
function captchaCallback() {
  const submitButton = document.getElementById("contact-submit");
  submitButton.removeAttribute("disabled");
}
