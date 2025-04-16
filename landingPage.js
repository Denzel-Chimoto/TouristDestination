function handleSubmit(event) {
    event.preventDefault(); // Prevent the page from reloading

    // You could capture data here if needed
    alert("Thank you for your message! We'll get back to you soon.");
}

// Handle the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        // If everything is valid, show a success message
        document.getElementById("form-response").style.display = "block";
        document.getElementById("form-response").textContent = "Thank you for reaching out, " + name + "! We’ll get back to you soon.";

        // Clear the form
        document.getElementById("contact-form").reset();
    } else {
        // If the form is incomplete
        document.getElementById("form-response").style.display = "block";
        document.getElementById("form-response").textContent = "Please fill in all fields.";
        document.getElementById("form-response").style.color = "red";
    }
});


// Function to handle the Lightbox in the gallery section

// Lightbox effect: Open image in a larger view when clicked
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        // Create a lightbox container
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${this.src}" alt="${this.alt}">
                <span class="close">&times;</span>
            </div>
        `;
        
        document.body.appendChild(lightbox);

        // Close the lightbox when clicked
        lightbox.querySelector('.close').addEventListener('click', () => {
            lightbox.remove();
        });

        // Close the lightbox when clicked outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});


// Function to handle the Blog posts section
