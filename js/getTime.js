// 持续更新时间
const hTime = document.getElementById('header_time');

function updateTime() {
    let now = new Date();
    console.log(now);
    hTime.innerHTML = now;
}

updateTime();

setInterval(updateTime, 1000);