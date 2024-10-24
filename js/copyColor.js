const blue = document.getElementById("blue");
const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const purple = document.getElementById("purple");
const orange = document.getElementById("orange");
const gray = document.getElementById("gray");

let colors = [blue, green, red, yellow, purple, orange, gray];
let values = ['#66B2FF', '#7CFC00', '#FF6B6B', '#FFEB3B', '#9B59B6', '#FFA500', '#868E96'];

// 自定义弹出框函数
function createToast(message, duration) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '10px 20px';
    toast.style.backgroundColor = '#f4f4f4';
    toast.style.border = '1px solid #ddd';
    toast.style.zIndex = '10000';
    toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    toast.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(toast);

    // 设置弹出框在指定时间后消失
    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300); // 等待透明度变化完成后再移除元素
    }, duration);
}

colors.forEach((element, index) => {
    element.addEventListener("click", () => {
        navigator.clipboard.writeText(values[index])
            .then(() => {
                console.log(values[index]);
                createToast('Color copied' + values[index], 3000); // 显示3秒
            }).catch((err) => {
                createToast('Failed to copy: ' + err, 3000);
            })
    })
});
