function init() {
    // renderer
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

    renderer.setClearColor(0x666666); 
    renderer.shadowMapEnabled = true; //在初始化时，告诉渲染器渲染阴影
    // scene
    var scene = new THREE.Scene();

    // light
    var light = new THREE.SpotLight(0xffffff, 1, 100, Math.PI/6, 25);
    light.position.set(5, 15, 9);
    light.castShadow = true;

    light.shadowCameraNear = 2;
    light.shadowCameraFar = 10;
    light.shadowCameraFov = 30;
    light.shadowCameraVisible = true;
    light.shadowMapWidth = 1024;
    light.shadowMapHeight = 1024;
    light.shadowDarkness = 0.3;
    
    scene.add(light);

    // camera
    var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 5, 20);
    camera.position.set(5, 5, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8, 16, 16),
            new THREE.MeshLambertMaterial({color: 0x9D74B2}));
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);
    
    // material
    var material = new THREE.MeshLambertMaterial({
                color: 0xC9C9C9
            });
    //carBody 
    var carBody = new THREE.CubeGeometry(2, 1, 1);
    var cube = new THREE.Mesh(carBody,material);
    scene.add(cube);

    // // carCircle
    var carCircle = new THREE.TorusGeometry(0.2, 0.06, 52, 48);
    var carCircle1 = new THREE.Mesh(carCircle, material);
    var carCircle2 = new THREE.Mesh(carCircle, material);
    var carCircle3 = new THREE.Mesh(carCircle, material);
    var carCircle4 = new THREE.Mesh(carCircle, material);
    scene.add(carCircle1);
    scene.add(carCircle2);
    scene.add(carCircle3);
    scene.add(carCircle4);
    carCircle1.position.set(-0.5, -0.5, 0.5);
    carCircle2.position.set(0.5, -0.5, 0.5);
    carCircle3.position.set(-0.5, -0.5, -0.5);
    carCircle4.position.set(0.5, -0.5, -0.5);

    //对于光源以及所有要产生阴影的物体调用
    cube.castShadow = true;
    carCircle1.castShadow = true;
    carCircle2.castShadow = true;
    carCircle3.castShadow = true;
    carCircle4.castShadow = true;


    // render
    renderer.render(scene, camera);
}