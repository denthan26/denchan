document.addEventListener("DOMContentLoaded", function () {
    // 创建header元素
    const header = document.createElement("header");
    header.style.backgroundColor = "#f8f8f8";
    header.style.padding = "10px 20px";
    header.style.display = "flex";
    header.style.justifyContent = "space-around";
    header.style.alignItems = "center";
    header.style.position = "fixed"; // 固定位置
    header.style.width = "100%"; // 宽度为100%
    header.style.top = "0"; // 顶部对齐
    header.style.left = "0"; // 左侧对齐
    header.style.zIndex = "1000"; // 确保在最上方

    // 创建logo元素
    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    const logoImg = document.createElement("img");
    logoImg.src = "/images/logo.png";
    logoImg.alt = "Logo";
    logoImg.style.height = "40px";
    logoDiv.appendChild(logoImg);

    // 创建欢迎信息元素
    const welcomeDiv = document.createElement("div");
    welcomeDiv.textContent = "Hello, World!";

    // 创建导航元素
    const nav = document.createElement("nav");
    const navUl = document.createElement("ul");
    navUl.style.listStyle = "none";
    navUl.style.display = "flex";
    navUl.style.gap = "20px";

    const navItems = [
        { id: "home", text: "Home", href: "/index.html" },
        { id: "java", text: "Java", href: "/java/index.html" },
        { id: "python", text: "Python", href: "/python/index.html" },
        { id: "cpp", text: "C++", href: "/cpp/index.html" }
    ];

    navItems.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.className = item.id;
        li.textContent = item.text;
        li.style.cursor = "pointer";
        li.addEventListener("click", function () {
            window.location.href = item.href;
        });
        li.addEventListener("mouseover", function () {
            li.style.backgroundColor = "rgb(163, 163, 228)";
        });
        li.addEventListener("mouseout", function () {
            li.style.backgroundColor = "transparent";
        });
        navUl.appendChild(li);
    });

    nav.appendChild(navUl);

    // 将所有元素添加到header
    header.appendChild(logoDiv);
    header.appendChild(welcomeDiv);
    header.appendChild(nav);

    // 将header添加到body
    document.body.appendChild(header);

    // 为body添加padding-top，避免内容被导航栏遮挡
    document.body.style.paddingTop = "60px"; // 根据导航栏高度调整
});