
// Form submit event
const form = document.getElementById('vote-form');

form.addEventListener('submit', (event) => {
    const choice = document.querySelector('input[name=os]:checked').value;
    const data = { os: choice };

    fetch('/poll', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

    event.preventDefault();
})

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