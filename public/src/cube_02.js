import {
  Scene,
  Color,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  BoxBufferGeometry,
  MeshBasicMaterial
} from '../vendor/three/build/three.module.js'

import { OrbitControls } from '../vendor/three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from '../vendor/three/examples/jsm/loaders/GLTFLoader.js'

// DOM
const container = document.querySelector('#scene-container')

// Renderer
const renderer = new WebGLRenderer()
renderer.setSize(container.clientWidth, container.clientHeight)
renderer.setPixelRatio(window.devicePixelRatio)
container.append(renderer.domElement)

// Scene
const scene = new Scene()
scene.background = new Color('skyblue')

// Camera
const fov = 35
const aspect = container.clientWidth / container.clientHeight
const near = 0.1
const far = 100
const camera = new PerspectiveCamera(fov, aspect, near, far)
camera.position.set(0, 0, 10)

// Geometry
const length = 2
const width = 2
const depth = 2
const geometry = new BoxBufferGeometry(length, width, depth)

// Material
const material = new MeshBasicMaterial()

// Mesh
const cube = new Mesh(geometry, material)

// Initialize
scene.add(cube)
renderer.render(scene, camera)
