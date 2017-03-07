var renderer = null;
var scene = null;
var camera = null;
var mesh = null;
var light = null;

// 初始化函数
function init() {
    initRenderer();
    initScene();
    initCamera();
    initLight();
    initObject();
    // render();
    // draw();
    setInterval(draw, 20);
}


//渲染器Renderer
function initRenderer() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x999999);
}


// 场景Scene
function initScene() {
    scene = new THREE.Scene();
}


// 照相机Camera
function initCamera() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(3, 1, 2);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
}


// 光
function initLight() {
    var ambientLight = new THREE.AmbientLight(0xffffff);
    light = new THREE.PointLight(0xffffff);
    light.position.set(2, 3, 3);
    scene.add(light);
    scene.add(light);
}


// 渲染render
function render() {
    renderer.render(scene, camera);
}


// 场景中的物体Object
function initObject() {
    var object = null;
    var material = null;

    // object = new THREE.CubeGeometry(2, 2, 2);
    object = new THREE.TorusKnotGeometry(1, 0.2, 168, 8);

    material = new THREE.ShaderMaterial({
        vertexShader: document.getElementById('vs').textContent,
        fragmentShader: document.getElementById('fs').textContent,
        uniforms: {
                color: { // 基础色
                    type: 'v3', // 指定变量类型为三维向量
                    value: new THREE.Color('#cccccc')
                },
                light: { // 光源位置
                    type: 'v3',
                    value: light.position
                }
            }
    });
    mesh = new THREE.Mesh(object, material);
    scene.add(mesh);
}


// draw函数
function draw() {
    mesh.rotation.y = (mesh.rotation.y + 0.01) % (Math.PI * 2);
    renderer.render(scene, camera);
}
