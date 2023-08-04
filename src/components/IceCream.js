import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
//import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import "../index.css";

class IceCream extends Component {
  componentDidMount() {
    const width = 20;
    const height = 20;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const geo = new THREE.BoxGeometry(40, 40, 5);
    const mat = new THREE.MeshBasicMaterial({ color: "rgb(40,40,40)" });
    const floor = new THREE.Mesh(geo, mat);
    floor.rotation.set(90, 0, 0);
    floor.position.set(0, -5, 0);
    scene.add(floor);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = 0.6;
    controls.maxPolarAngle = 0.9;
    renderer.setSize(400, 400);
    document.getElementById("root").appendChild(renderer.domElement);
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }
  render() {
    return <div></div>;
  }
}

export default IceCream;
