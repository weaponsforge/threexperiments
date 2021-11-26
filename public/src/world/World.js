import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createSphere } from './components/sphere.js'
import { createScene } from './components/scene.js'
import { createLight } from './components/light.js'
import { createMeshGroup } from './components/meshGroup.js'

import { createRenderer } from './systems/renderer.js'
import { createControls } from './systems/controls.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'


let camera
let scene
let renderer
let light
let loop

class World {
  constructor (container) {
    this.init(container)
  }

  async init (container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    const { ambientLight, mainLight } = createLight()
    container.append(renderer.domElement)

    // Sphere group
    const meshGroup = await createMeshGroup()

    // Use ambient lights to light up the dark sides
    scene.add(ambientLight, mainLight, meshGroup)

    // Attach the mainLight to camera to light up the dark sides
    // scene.add(cube)
    // camera.add(mainLight)
    // scene.add(camera)

    const controls = createControls(camera, renderer.domElement)  

    loop = new Loop(camera, scene, renderer)
    loop.updatables.push(controls, meshGroup)

    const resizer = new Resizer(container, camera, renderer)
    this.start()

    // Render on demand (user zoom/rotate/pan)
    /*
    this.render()
    controls.addEventListener('change', () => {
      this.render()
    })
    */
  }

  render () {
    renderer.render(scene, camera)
  }

  start () {
    loop.start()
  }

  stop () {
    loop.stop()
  }
}

export {
  World
}