/* 回頂面按鈕 */
let btn = document.getElementById("totop-btn");

window.onscroll = function() {scrolldetermined()};

function scrolldetermined() {
    //從頂開始算如果頁面移動超過 1500px 就顯示按鈕，否則就保持預設值 (display: none)
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500)
        btn.style.display = "block";
    else
        btn.style.display = "none";
}
function ToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*****/

/* 日期倒數 */
const spinner = document.getElementById('spinner');

const countdown = document.getElementById('daycounter');
const deadline = new Date("december 31, 2022 00:00:00"); //set deadline here
const ExpiredText = '[EXPIRED]'; //set message when time expired

let Interval = setInterval(() => {

    const currentTime = new Date();
    const difference = deadline - currentTime; // in millisecond

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    
    countdown.innerHTML = 
    `
    <div id="DayLeft">
        <h1>${days}</h1>
    </div>

    <div><h3>[days left...]</h3></div>

    <div id="TimeLeft"><h4>${hours}hr ${minutes}min ${seconds}sec</h4></div>
    `
    if(days <= 7){
        countdown.style.backgroundColor = 'var(--danger)'
        spinner.style.borderTopColor = 'var(--darkred)'
    } else if(days <= 14) {
        countdown.style.backgroundColor = 'var(--medium)'
        spinner.style.borderTopColor = 'var(--dark)'
    } else {
        countdown.style.backgroundColor = 'var(--fine)'
        spinner.style.borderTopColor = 'var(--mountaingreen)'
    }

    if (difference <= 0) {
        clearInterval(Interval);
        spinner.style.display = 'none';
        countdown.style.backgroundColor = 'rgba(235, 77, 75, 0.7)'
        countdown.innerHTML = 
        `
        <div><h2>${ExpiredText}</h2></div>
        <div id="TimeLeft"><h4>[00day 00hr 00 min 00sec]</h4></div>
        `
    }
}, 1000)
/*****/