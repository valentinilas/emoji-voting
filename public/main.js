
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

