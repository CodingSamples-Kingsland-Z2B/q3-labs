function stopwatch() {

    let id;
    let seconds = 0;
    let minutes = 0;

    const time = document.querySelector('#time');

    // Add event Listner to the document body listen for click events 
    document.body.addEventListener('click', action);


    function action(e) {
        if (e.target.id == 'startBtn') {
            // start the timer
            id = setInterval(timer, 1000);
            // Set the start button disabled 
            e.target.setAttribute('disabled', 'true');
            // remove the stop button disabled attribute
            e.target.nextElementSibling.removeAttribute('disabled');

        }

        if (e.target.id == 'stopBtn') {
            // stop the timer
            clearInterval(id);
            seconds = 0;
            // Set the stop button disabled 
            e.target.setAttribute('disabled', 'true');
            // remove the start button disabled attribute
            e.target.previousElementSibling.removeAttribute('disabled');
        }
    }


    function timer() {

        if (seconds >= 59) {
            seconds = 0;
            minutes++;
        } else {
            seconds++;
        }

        minutes = Number(minutes);
        seconds = Number(seconds);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        // Add minutes and seconds to the dom 
        time.textContent = `${minutes}:${seconds}`;

    }

}