// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input value
  const confession = document.getElementById('confess-text').value.trim();

  // Validate the input value
  if (confession !== '') {
    alert('Thank you for your confession,I hope you feel better!');
    form.reset();
  } else {
    alert('Please enter your confession.');
  }
});