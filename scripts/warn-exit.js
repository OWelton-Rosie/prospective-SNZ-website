document.addEventListener("DOMContentLoaded", function () {
    let formModified = false;
    const form = document.getElementById("contact-form");

    if (form) {
        // Detect changes in form fields
        form.addEventListener("input", function () {
            formModified = true;
        });

        // Prevent leaving the page if the form has been modified
        window.addEventListener("beforeunload", function (event) {
            if (formModified) {
                event.preventDefault();
                event.returnValue = "Changes you made may not be saved.";
            }
        });

        // Reset warning if the form is successfully submitted
        form.addEventListener("submit", function () {
            formModified = false;
        });
    }
});
