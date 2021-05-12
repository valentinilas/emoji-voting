const emojiContainer = document.querySelector('.emoji-container');
const messageRibbon = document.querySelector('.message-ribbon');
const timerElement = document.querySelector('.timer');
const inputs = document.querySelectorAll('input');
const preview = document.querySelector('.preview');

let time;
let interval;
let storageTime = sessionStorage.getItem('time')

if (!storageTime || storageTime < 1) {
    time = 10000;
} else {
    time = storageTime;
    showTimer();
    interval = setInterval(showTimer, 1000);
}

emojiContainer.addEventListener('change', (event) => {
    if (event.target.checked) {

        const choice = event.target.value;
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

        if (choice.indexOf('assets') > -1) {
            console.log('img');
            preview.innerHTML = `<img src="${choice}" width="50" height="50"/>`
        } else {
            preview.innerHTML = choice;
        }
        showTimer();
        interval = setInterval(showTimer, 1000);
    }
});


function showTimer() {
    messageRibbon.classList.remove('is-hidden');

    if (time === 0) {
        messageRibbon.classList.add('is-hidden');
        time = 10000;

        clearInterval(interval);
        return;
    }
    timerElement.innerHTML = `${time/1000}`;
    time = time - 1000;
    sessionStorage.setItem('time', time);
}