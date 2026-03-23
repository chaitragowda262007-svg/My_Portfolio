document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    try {
      // Add a new document with a generated id.
      const docRef = await window.addDoc(window.collection(window.db, "contacts"), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Thank you for your message, " + name + "! I'll get back to you soon.");
      // Clear the form
      document.getElementById("contactForm").reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error sending your message. Please try again.");
    }
  } else {
    alert("Please fill in all fields.");
  }
});