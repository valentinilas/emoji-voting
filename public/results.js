function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}



// Print out results
const results = document.getElementById('results');
const showResults = (emoji) => {
    console.log(emoji);
    var emojiElement = document.createElement('div');
    emojiElement.innerHTML = emoji;
    emojiElement.classList.add('emoji-element');
    emojiElement.style.left = randomIntFromInterval(10, 90) + '%';
    results.appendChild(emojiElement);

    setTimeout(function() {
        emojiElement.remove();
    }, 11000)
}

// Subscribe to events
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('0c9be423f896addb0c91', {
    cluster: 'eu'
});

var channel = pusher.subscribe('os-poll');
channel.bind('os-vote', function(data) {
    //   alert(JSON.stringify(data));
    showResults(data.os);
});