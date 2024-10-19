import * as THREE from "three";
import { OrbitControls } from "/js/threejs/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from '/js/threejs/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "/js/threejs/examples/jsm/geometries/TextGeometry.js";


console.log(THREE.Scene);
const calendar = document.getElementById("calendar");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xA9B2C3);
// add axes
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

// 进行Y轴设置
let dateArr = new Array(7).fill(20);
const today = new Date();
console.log(today.getDate(), today.getDay(), today.getMonth() + 1);
const month = today.getMonth() + 1;
const day = today.getDate();
const todayWeek = today.getDay() === 0 ? 7 : today.getDay();
dateArr[todayWeek - 1] = 40;

// 创建球体
let colorList = [0xFF4136, 0xFF851B, 0xFFDC00, 0x2ECC40, 0x1ABC9C, 0x3498DB, 0x9B59B6];
const geometry = new THREE.SphereGeometry(20, 32, 32);
const material = new THREE.MeshLambertMaterial({
    color: colorList[todayWeek - 1],
})
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(0, 40, -40);
scene.add(sphere);

const geometryOne = new THREE.BoxGeometry(10, dateArr[0], 10);
const geometryTwo = new THREE.BoxGeometry(10, dateArr[1], 10);
const geometryThree = new THREE.BoxGeometry(10, dateArr[2], 10);
const geometryFour = new THREE.BoxGeometry(10, dateArr[3], 10);
const geometryFive = new THREE.BoxGeometry(10, dateArr[4], 10);
const geometrySix = new THREE.BoxGeometry(10, dateArr[5], 10);
const geometryseven = new THREE.BoxGeometry(10, dateArr[6], 10);


const materialOne = new THREE.MeshLambertMaterial({
    color: 0xFF4136,
});
const materialTwo = new THREE.MeshLambertMaterial({
    color: 0xFF851B,
});
const materialThree = new THREE.MeshLambertMaterial({
    color: 0xFFDC00,
});
const materialFour = new THREE.MeshLambertMaterial({
    color: 0x2ECC40,
});
const materialFive = new THREE.MeshLambertMaterial({
    color: 0x1ABC9C,
});
const materialSix = new THREE.MeshLambertMaterial({
    color: 0x3498DB,
});
const materialSeven = new THREE.MeshLambertMaterial({
    color: 0x9B59B6,
});

const meshOne = new THREE.Mesh(geometryOne, materialOne);
const meshTwo = new THREE.Mesh(geometryTwo, materialTwo);
const meshThree = new THREE.Mesh(geometryThree, materialThree);
const meshFour = new THREE.Mesh(geometryFour, materialFour);
const meshFive = new THREE.Mesh(geometryFive, materialFive);
const meshSix = new THREE.Mesh(geometrySix, materialSix);
const meshSeven = new THREE.Mesh(geometryseven, materialSeven);
meshFour.position.set(0, 0, 0);
meshThree.position.set(-20, 0, 0);
meshTwo.position.set(-40, 0, 0);
meshOne.position.set(-60, 0, 0);
meshFive.position.set(20, 0, 0);
meshSix.position.set(40, 0, 0);
meshSeven.position.set(60, 0, 0);

let meshList = [meshOne, meshTwo, meshThree, meshFour, meshFive, meshSix, meshSeven];
meshList[todayWeek - 1].position.setY(10);

scene.add(meshOne, meshTwo, meshThree, meshFour, meshFive, meshSix, meshSeven);


// 创建锥体
const coneGeometry = new THREE.CylinderGeometry(0, 4.2, 14.455, 9, 1, false, 0, 6.283185307179586);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cylinder = new THREE.Mesh(coneGeometry, coneMaterial);
let coneXList = [-60, -40, -20, 0, 20, 40, 60];
let coneX = coneXList[todayWeek - 1];
cylinder.position.set(coneX, -20, 0);

scene.add(cylinder);

// 创建文字
const loader = new FontLoader();
// optimer_regular.typeface
// helvetiker_regular.typeface
loader.load('/js/threejs/examples/fonts/optimer_regular.typeface.json', function (font) {

    const textGeometryOne = new TextGeometry('1', {
        font: font,
        size: 8,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometryTwo = new TextGeometry('2', {
        font: font,
        size: 8,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometryThree = new TextGeometry('3', {
        font: font,
        size: 8,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometryFour = new TextGeometry('4', {
        font: font,
        size: 8,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometryFive = new TextGeometry('5', {
        font: font,
        size: 8,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometrySix = new TextGeometry('6', {
        font: font,
        size: 8,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometrySeven = new TextGeometry('7', {
        font: font,
        size: 8,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometryMonth = new TextGeometry(String(month), {
        font: font,
        size: 32,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometryDay = new TextGeometry(String(day), {
        font: font,
        size: 32,
        depth: 0.5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });
    const textGeometryHello = new TextGeometry('Hello World', {
        font: font,
        size: 16,
        depth: 5,
        curveSegments: 4,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 1.5,
        bevelSegments: 5
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000033 });
    const textMaterialDate = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const textMeshOne = new THREE.Mesh(textGeometryOne, textMaterial);
    const textMeshTwo = new THREE.Mesh(textGeometryTwo, textMaterial);
    const textMeshThree = new THREE.Mesh(textGeometryThree, textMaterial);
    const textMeshFour = new THREE.Mesh(textGeometryFour, textMaterial);
    const textMeshfive = new THREE.Mesh(textGeometryFive, textMaterial);
    const textMeshSix = new THREE.Mesh(textGeometrySix, textMaterial);
    const textMeshSeven = new THREE.Mesh(textGeometrySeven, textMaterial);

    const textMeshMonth = new THREE.Mesh(textGeometryMonth, textMaterialDate);
    const textMeshDay = new THREE.Mesh(textGeometryDay, textMaterialDate);
    const textMeshHello = new THREE.Mesh(textGeometryHello, textMaterialDate);

    textMeshOne.position.set(-63, -3, 10);
    textMeshTwo.position.set(-43, -3, 10);
    textMeshThree.position.set(-23, -3, 10);
    textMeshFour.position.set(-3, -3, 10);
    textMeshfive.position.set(17, -3, 10);
    textMeshSix.position.set(37, -3, 10);
    textMeshSeven.position.set(57, -3, 10);

    textMeshMonth.position.set(-130, -10, 0);
    textMeshDay.position.set(75, -10, 0);
    console.log(textMeshMonth);
    textMeshHello.position.set(-50, -60, -60)

    scene.add(textMeshOne, textMeshTwo, textMeshThree, textMeshFour, textMeshfive, textMeshSix, textMeshSeven, textMeshMonth, textMeshDay, textMeshHello);
});


//创建灯光
//主光
const pointLightLeft = new THREE.PointLight(0xffffff, 10.0);
pointLightLeft.decay = 0.0;
pointLightLeft.position.set(-100, 0, 100);
//辅助光
const pointLightRight = new THREE.PointLight(0xffffff, 1.0);
pointLightRight.decay = 0.0;
pointLightRight.position.set(100, 0, 100);
//环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(0, 100, -50);
directionalLight.target = meshFour;
scene.add(pointLightLeft, pointLightRight, ambient, directionalLight)

// 光源辅助观察
const pointLightHelperLeft = new THREE.PointLightHelper(pointLightLeft, 10);
scene.add(pointLightHelperLeft);

const pointLightHelperRight = new THREE.PointLightHelper(pointLightRight, 10);
scene.add(pointLightHelperRight);

// DirectionalLightHelper：可视化平行光
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xff0000);
scene.add(dirLightHelper);



// 实例化一个透视投影相机对象
const width = calendar.clientWidth;
const height = calendar.clientHeight;

const camera = new THREE.PerspectiveCamera(50, width / height, 1, 3000);

// camera.position.set(30, 30, 100);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);



// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
calendar.appendChild(renderer.domElement);




// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件

// 渲染循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// 启动渲染循环
animate();