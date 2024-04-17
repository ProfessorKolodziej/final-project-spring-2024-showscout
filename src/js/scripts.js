// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

<script>
	document.addEventListener('DOMContentLoaded', function () {
		// Function to remove highlights from all buttons
		function clearHighlights() {
			document.querySelectorAll('input[type=button]').forEach(function (button) {
				button.classList.remove('highlight');
			});
		}

  // Function to handle button click and highlight the clicked button
		function handleButtonClick(event) {
		clearHighlights();
	event.target.classList.add('highlight'); // Add a class to highlight the button
  }

	// Add event listeners to all button elements
	const buttons = document.querySelectorAll('input[type=button]');
	buttons.forEach(function (button) {
		button.addEventListener('click', handleButtonClick);
  });
});

</script>
