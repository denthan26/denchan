let visitor = document.getElementById('visitor'); // 获取显示次数的元素
let count = parseInt(localStorage.getItem('count')) || 0; // 获取localStorage中的count值，如果没有则为0

// 将count的值加1
count = count + 1;

// 将新的count值存回localStorage
localStorage.setItem('count', count.toString());

// 将新的count值显示在页面元素中
visitor.textContent = '您已访问 ' + count + ' 次，爱你😘';