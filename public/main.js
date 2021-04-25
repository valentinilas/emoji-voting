// Form submit event
const form = document.getElementById('vote-form');
const submitBtn = document.getElementById('form-submit-btn');
var submitBtnTimer = submitBtn.querySelector('.timer');

var time = 10000;
var interval;

form.addEventListener('submit', (event) => {
    submitBtn.disabled = true;
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
    showTimer();
    submitBtnTimer.classList.remove('is-hidden');
    interval = setInterval(showTimer, 1000);

});


function showTimer() {
    if (time === 0) {
        submitBtnTimer.classList.add('is-hidden');
        submitBtn.disabled = false;
        time = 10000;
        clearInterval(interval);
        return;
    }
    submitBtnTimer.innerHTML = `(${time/1000}s)`;
    time = time - 1000;
}