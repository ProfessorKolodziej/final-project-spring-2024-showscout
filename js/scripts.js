// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// Search Results Generator - Help from ChatGPT

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
document.getElementById('searchButton').addEventListener('click', function () {
	const category = document.querySelector('input[name="category"]:checked').value;
	const dateInput = document.querySelector('input[name="date"]:not([type="radio"])');
	const date = dateInput && dateInput.value ? dateInput.value : document.querySelector('input[name="date"]:checked').value;
	const radius = document.querySelector('input[name="radius"]:checked').value;
	const zipCode = document.querySelector('input[name="zip"]').value;

	let apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=yUVLN9qdGfA0nVpOECDyuYT7ekGADMu3&size=10`;

	if (zipCode && Radius !== 'Random') {
		apiUrl += `&postalCode=${zipCode}&radius=${Radius}`;
	}
	if (category !== 'Random') {
		apiUrl += `&classificationName=${encodeURIComponent(Category)}`;
	}
	if (date !== 'Random' && date !== '') {
		apiUrl += `&startDateTime=${date}T00:00:00Z`;
	}

	axios.get(apiUrl)
		.then(response => {
			const events = response.data._embedded.events;
			const resultsDiv = document.getElementById('results');
			resultsDiv.innerHTML = '';
			events.forEach(event => {
				const eventDiv = document.createElement('div');
				eventDiv.innerHTML = `<h4>${event.name}</h4><p>${event.dates.start.localDate}</p>`;
				resultsDiv.appendChild(eventDiv);
			});
		})
		.catch(error => {
			console.error('Failed to fetch events:', error);
			document.getElementById('results').innerText = 'Failed to fetch events';
		});
});

console.log(apiUrl);
