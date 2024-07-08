// script.js

document.addEventListener('DOMContentLoaded', () => {
    const rsvpButton = document.querySelector('.rsvp-button');
    const rsvpForm = document.getElementById('rsvpForm');
  
    rsvpButton.addEventListener('click', () => {
      rsvpForm.style.display = 'block'; // Show the RSVP form
      rsvpButton.style.display = 'none'; // Hide the RSVP button
    });
  
    // Optional: Add additional JavaScript for form submission handling if needed
  });
  