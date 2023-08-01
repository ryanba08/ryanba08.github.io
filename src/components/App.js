import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
//import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

class App extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight
    );
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(1000, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x8080ff,
        side: THREE.BackSide,
      })
    );
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xe06100 });
    const geo = new THREE.BoxGeometry(40, 40, 5);
    const mat = new THREE.MeshBasicMaterial({ color: 0x1f1f1f });
    const floor = new THREE.Mesh(geo, mat);
    const cube = new THREE.Mesh(geometry, material);
    floor.rotation.set(90, 0, 0);
    floor.position.set(0, -10, 0);
    const fog = new THREE.Fog(0x4800ff, 1000, 5000);
    scene.add(sky);
    scene.add(fog);
    //new THREE.TextGeometry(text, parameters);
    scene.add(cube);
    scene.add(floor);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("root").appendChild(renderer.domElement);
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    new OrbitControls(camera, renderer.domElement);
  }
  render() {
    return <div></div>;
  }
}

export default App;
