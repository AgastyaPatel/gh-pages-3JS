console.log("Testing JS")

import * as THREE from 'https://unpkg.com/three@0.153.0/build/three.module.js'
console.log(THREE)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xffff00 })
)

// Boiler plate code
const canvas = document.querySelector(".webgl")
const scene = new THREE.Scene()

scene.add(cube1)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()