// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// Search Results Generator ??
document.getElementById('searchButton').addEventListener('click', function () {
	const category = document.querySelector('input[name="Category"]').value;
	const date = document.querySelector('input[name="Date"]').value;
	const radius = document.querySelector('input[name="Location"]').value;

	let apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=yUVLN9qdGfA0nVpOECDyuYT7ekGADMu3&size=10`;

	if (zipCode && radius !== 'Random') {
		apiUrl += `&postalCode=${zipCode}&radius=${radius}`;
	}
	if (category !== 'Random') {
		apiUrl += `&classificationName=${encodeURIComponent(category)}`;
	}
	if (date !== 'Random' && date !== '') {
		apiUrl += `&startDateTime=${date}T00:00:00Z`;
	}

	axios.get(apiUrl)
		.then(response => {
			const events = response.data._embedded.events;
			const resultsDiv = document.getElementById('results');
			resultsDiv.innerHTML = ''; // Clear previous results
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

