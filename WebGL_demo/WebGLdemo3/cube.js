var scene = null;
var camera = null;
var renderer = null;
var cube = null;
var alpha = null;
var plane = null;
function init() {
    // renderer
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById('mainCanvas') });
    renderer.setClearColor(0x666666); 
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;

    // scene
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.PerspectiveCamera(20, 400/300, 1, 50);
    camera.position.set(6, 8, 8);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    // a plane
    var texture = THREE.ImageUtils.loadTexture('1.png', {}, function() {renderer.render(scene, camera);});
    plane = new THREE.Mesh(new THREE.PlaneGeometry(8,8), new THREE.MeshLambertMaterial({map: texture}));
    plane.rotation.x = -Math.PI*0.5;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);



    //carBody 
    var materials = [];
    for (var i = 1; i < 7; ++i) {
        materials.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('face' + i + '.jpg',
                    {}, function() {
                        renderer.render(scene, camera);
                    }),
            overdraw: true
        }));
    }

    var cube = new THREE.Mesh(new THREE.CubeGeometry(2, 1, 1),
            new THREE.MeshFaceMaterial(materials));
    cube.castShadow = true;
    cube.reveiveShadow = true;
    scene.add(cube);


    // // carCircle
    var tire = THREE.ImageUtils.loadTexture('luntai.jpg', {}, function() {renderer.render(scene, camera);});
    var tireMaterial =  new THREE.MeshLambertMaterial({map: tire});
    var carCircle = new THREE.TorusGeometry(0.2, 0.06, 52, 48);

    var carCircle1 = new THREE.Mesh(carCircle, tireMaterial);
    var carCircle2 = new THREE.Mesh(carCircle, tireMaterial);
    var carCircle3 = new THREE.Mesh(carCircle, tireMaterial);
    var carCircle4 = new THREE.Mesh(carCircle, tireMaterial);
    scene.add(carCircle1);
    scene.add(carCircle2);
    scene.add(carCircle3);
    scene.add(carCircle4);
    carCircle1.position.set(-0.5, -0.5, 0.5);
    carCircle2.position.set(0.5, -0.5, 0.5);
    carCircle3.position.set(-0.5, -0.5, -0.5);
    carCircle4.position.set(0.5, -0.5, -0.5);

    // spot light
    var light = new THREE.SpotLight(0xffffff, 1.5, 200, Math.PI/6, 25);
    light.position.set(2, 3, 10);
    light.target = cube;
    light.target = carCircle1;
    light.target = carCircle2;
    light.target = carCircle3;
    light.target = carCircle4;
    light.castShadow = true;
    scene.add(light);

    
    // render
    renderer.render(scene, camera);
}