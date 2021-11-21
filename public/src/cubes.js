import * as THREE from '../vendor/three/build/three.module.js'

let renderer
let camera
let scene
let geometry
let cube
let cubes = []

const main = () => {
  // Canvas element
  const canvas = document.querySelector('#c')

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas })

  // Camera
  const fov = 75
  const aspect = 2
  const near = 0.1
  const far = 5
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 2

  // Scene
  scene = new THREE.Scene()

  // Geometry
  const boxWidth = 1
  const boxHeight = 1
  const boxDepth = 1
  geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

  // Material
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })

  // Mesh
  cube = new THREE.Mesh(geometry, material)

  // Light
  const color = 0xFFFFFF
  const intensity = 1
  const light = new THREE.DirectionalLight(color, intensity)
  light.position.set(-1, 2, 4)
  
  // Initialize
  cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2)
  ]
  // scene.add(cube)
  scene.add(light)
  renderer.render(scene, camera)
}

const render = (time) => {
  time *= 0.001 // convert time to seconds

  // cube.rotation.x = time
  // cube.rotation.y = time
  cubes.forEach((item, index) => {
    const speed = 1 + index * 0.1
    const rot = time * speed
    item.rotation.x = rot
    item.rotation.y = rot
  })

  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

const makeInstance = (geometry, color, x) => {
  const material = new THREE.MeshPhongMaterial({ color })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  cube.position.x = x
  return cube
}

main()
requestAnimationFrame(render)
