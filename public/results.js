// Print out results
const results = document.getElementById('results');
const showResults = (data) => {
    results.insertAdjacentHTML('beforeend', data);
}

// Subscribe to events
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('0c9be423f896addb0c91', {
    cluster: 'eu'
});

var channel = pusher.subscribe('os-poll');
channel.bind('os-vote', function (data) {
    //   alert(JSON.stringify(data));
    showResults(data)
});