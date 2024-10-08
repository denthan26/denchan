// 更改nav的背景色

const nowPage = window.location.pathname;
console.log(nowPage);

let changePage = nowPage.split("/")[1];
changePage = changePage.split(".")[0];
console.log(changePage);
