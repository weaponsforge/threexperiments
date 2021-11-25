import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createLight } from './components/light.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'

let camera
let scene
let renderer
let light

class World {
  
  constructor (container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    light = createLight()
    container.append(renderer.domElement)

    this.cubes = []

    const cube = createCube()
    scene.add(cube, light)

    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }

  render () {
    renderer.render(scene, camera)
  }
}

export {
  World
}