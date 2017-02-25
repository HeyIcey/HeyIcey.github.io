function init() {
    // renderer
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x666666); 

    // scene
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 5, 20);
    camera.position.set(5, 5, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    //carBody 
    var carBody = new THREE.CubeGeometry(2, 1, 1);

    var cube = new THREE.Mesh(carBody,
            new THREE.MeshBasicMaterial({
                color: 0xC9C9C9
            })
    );
    scene.add(cube);

    // // carCircle
    var carCircle = new THREE.TorusGeometry(0.2, 0.06, 52, 48);

    var carCircle1 = new THREE.Mesh(carCircle,
            new THREE.MeshBasicMaterial({
                color: 0xC9C9C9
            })
    );
    var carCircle2 = new THREE.Mesh(carCircle,
            new THREE.MeshBasicMaterial({
                color: 0xC9C9C9
            })
    );
    var carCircle3 = new THREE.Mesh(carCircle,
            new THREE.MeshBasicMaterial({
                color: 0xC9C9C9
            })
    );
    var carCircle4 = new THREE.Mesh(carCircle,
            new THREE.MeshBasicMaterial({
                color: 0xC9C9C9
            })
    );
    scene.add(carCircle1);
    scene.add(carCircle2);
    scene.add(carCircle3);
    scene.add(carCircle4);
    carCircle1.position.set(-0.5, -0.5, 0.5);
    carCircle2.position.set(0.5, -0.5, 0.5);
    carCircle3.position.set(-0.5, -0.5, -0.5);
    carCircle4.position.set(0.5, -0.5, -0.5);

    
    // render
    renderer.render(scene, camera);
}