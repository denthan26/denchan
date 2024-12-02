async function getVisitNum() {
    try {
        const response = await fetch('/common/config.json');
        const data = await response.json();
        console.log(data);
        return data["visitNum"];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// 使用 async/await 调用 getVisitNum 函数
async function main() {
    let value = await getVisitNum();
    console.log(value); // 现在这里将打印出 visitNum 的值
}

main();

// 在开启一个服务试试
