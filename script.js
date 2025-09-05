// Copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// EmailJS Contact Form
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  formMsg.textContent = "Sending message...";
  formMsg.style.color = "orange";

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      formMsg.textContent = "धन्यवाद! आपका संदेश और फ़ाइल सफलतापूर्वक भेजा गया।";
      formMsg.style.color = "green";
      form.reset();
    })
    .catch(() => {
      formMsg.textContent = "Error! कृपया बाद में प्रयास करें।";
      formMsg.style.color = "red";
    });
});

// Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});