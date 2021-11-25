import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createLight } from './components/light.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'

let camera
let scene
let renderer
let light
let loop

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

    loop = new Loop(camera, scene, renderer)
    loop.updatables.push(cube)
    const resizer = new Resizer(container, camera, renderer)
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