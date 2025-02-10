document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    let form = event.target;
    let formData = new FormData(form);

    let response = await fetch("https://formspree.io/f/mvgzqyla", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        document.getElementById("success-message").style.display = "block";
        form.reset(); // Reset form fields
    } else {
        alert("There was an issue submitting your message. Please try again.");
    }
});
