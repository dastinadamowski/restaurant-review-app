if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration has worked - no issues!');
	})
	.catch(function() {
		console.log('Registration has failed - keep calm!');
	});
}
