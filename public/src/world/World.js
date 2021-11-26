import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createSphere } from './components/sphere.js'
import { createCylinder } from './components/cylinder.js'
import { createScene } from './components/scene.js'
import { createLight } from './components/light.js'

import { createRenderer } from './systems/renderer.js'
import { createControls } from './systems/controls.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'

import {
  createAxesHelper,
  createGridHelper
} from './components/helpers.js'
import { Train } from './components/train/train.js'
import { Track } from './components/track/track.js'

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

    const train = new Train()
    const track = new Track()

    // Use ambient lights to light up the dark sides
    scene.add(ambientLight, mainLight, train, track)

    const controls = createControls(camera, renderer.domElement)

    loop = new Loop(camera, scene, renderer)
    loop.updatables.push(controls, train)
    this.start()

    const resizer = new Resizer(container, camera, renderer)
    scene.add(createAxesHelper(), createGridHelper())

    resizer.onResize = () => {
      this.render()
    }
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