const form = document.getElementById("contact-form");

const message = document.getElementById("form-message");

form.addEventListener("submit", async function (e) {

  e.preventDefault(); // Stop default form behavior

  const formData = new FormData(form);

  const response = await fetch(form.action, {

    method: form.method,

    body: formData,

    headers: {

      'Accept': 'application/json'

    }

  });

  if (response.ok) {

    form.reset(); // Clear the form

    message.style.display = "block"; // Show success message

  } else {

    message.textContent = "❌ Error sending message. Please try again.";

    message.style.display = "block";

    message.style.color = "red";

  }

});