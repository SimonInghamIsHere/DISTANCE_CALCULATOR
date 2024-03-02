function distance() {
    let speed = document.querySelector('#speed');
    let time = document.querySelector('#time');
    let message = document.querySelector('#message');

    message.innerHTML = "It would be  " + speed.value * time.value  + "  km";
}