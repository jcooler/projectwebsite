const clock = document.getElementById('clock')

setInterval(() => {
const now = moment();

const humanReadable = now.format("[* The date is: ]dddd, MMMM Do YYYY, hh:mm:ss a");


clock.textContent = humanReadable
}, 1000);