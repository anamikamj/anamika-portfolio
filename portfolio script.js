document.addEventListener("DOMContentLoaded", function () {
  // Burger menu toggle
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      console.log("Burger menu clicked!"); // Debugging
      mobileNav.classList.toggle("show");
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll(".mobile-nav a").forEach(link => {
      link.addEventListener("click", () => {
        console.log("Mobile nav link clicked!"); // Debugging
        mobileNav.classList.remove("show");
      });
    });
  } else {
    console.error("Burger or mobileNav element not found!"); // Debugging
  }

  // Contact form submission with alert
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate form submission
      alert(`Thank you, ${name}! Your message has been sent.`);

      // Reset the form
      contactForm.reset();
    });
  } else {
    console.error("Contact form element not found!"); // Debugging
  }
});