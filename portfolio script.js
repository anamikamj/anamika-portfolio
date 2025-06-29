document.addEventListener("DOMContentLoaded", function () {
  // Burger menu toggle
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-nav a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });
  } else {
    console.error("Burger or mobileNav element not found!");
  }

  // ✅ Contact form submission with Firebase
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        await db.collection("messages").add({
          name,
          email,
          message,
          timestamp: new Date()
        });

        document.getElementById("formStatus").innerText = "✅ Message sent successfully!";
        contactForm.reset();
      } catch (error) {
        console.error("Error submitting form:", error);
        document.getElementById("formStatus").innerText = "❌ Failed to send message.";
      }
    });
  } else {
    console.error("Contact form element not found!");
  }
});
