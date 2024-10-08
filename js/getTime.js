// 持续更新时间
const hTime = document.getElementById('header_time');

function updateTime() {
    let now = new Date();
    //console.log(now);
    now = now.toString().split('GMT')[0];
    hTime.innerHTML = now;
}

updateTime();

// 每秒更新一次
setInterval(updateTime, 1000);