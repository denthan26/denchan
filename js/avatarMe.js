
var delay = 2000; // 等待时间，单位为毫秒，这里设置为2000毫秒（2秒）
var timer = null;

document.querySelector('.nav .logo .avatar').addEventListener('mouseover', function () {
    // 清除之前的定时器（如果存在）
    clearTimeout(timer);
    // 启动定时器，并在动画结束后跳转
    timer = setTimeout(function () {
        // 触发动画
        document.querySelector('.nav .logo .avatar').style.animation = 'popOut 0.5s ease forwards';
        // 动画结束后跳转
        document.querySelector('.nav .logo .avatar').addEventListener('animationend', function () {
            window.location.href = './profile.html';
        });
    }, delay);
});

document.querySelector('.nav .logo .avatar').addEventListener('mouseout', function () {
    // 清除定时器
    clearTimeout(timer);
    // 停止动画
    document.querySelector('.nav .logo .avatar').style.animation = '';
});
