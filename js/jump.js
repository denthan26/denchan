const home = document.getElementById("home");
const profile = document.getElementById("profile");
const blogs = document.getElementById("blogs");
const tools = document.getElementById("tools");
const demo = document.getElementById("demo");

// 给每一个添加页面跳转
home.addEventListener("click", function () {
    window.location.href = "home.html";
})
profile.addEventListener("click", function () {
    window.location.href = "profile.html";
})
blogs.addEventListener("click", function () {
    window.location.href = "blogs.html";
})
tools.addEventListener("click", function () {
    window.location.href = "tools.html";
})
demo.addEventListener("click", function() {
    window.location.href = "demo.html";
})