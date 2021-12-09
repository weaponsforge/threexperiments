import { createCamera } from './components/camera.js'
import { createScene } from './components/scene.js'
import { createLight } from './components/light.js'

import { createRenderer } from './systems/renderer.js'
import { createControls } from './systems/controls.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'

import { loadBirds } from './components/birds/birds.js'
import { MathUtils } from '../../vendor/three/build/three.module.js'

let camera
let scene
let renderer
let loop
let controls

class World {
  constructor (container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    loop = new Loop(camera, scene, renderer)
    container.append(renderer.domElement)

    this.birds = []

    controls = createControls(camera, renderer.domElement)
    controls.view = 'all'

    const { ambientLight, mainLight } = createLight()

    // Use ambient lights to light up the dark sides
    loop.updatables.push(controls)
    scene.add(ambientLight, mainLight)

    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }

    controls.addEventListener('change', () => {
      const x = MathUtils.radToDeg(camera.rotation.x)
      const y = MathUtils.radToDeg(camera.rotation.y)
      const z = MathUtils.radToDeg(camera.rotation.z)
      console.log(x, y, z)
    })
  }

  async init () {
    const { parrot, flamingo, stork } = await loadBirds()
    this.birds = [parrot, flamingo, stork]

    controls._target = this.birds[0].position
    controls._zoom = 30

    controls.target.copy(parrot.position)
    loop.updatables.push(parrot, flamingo, stork)
    scene.add(parrot, flamingo, stork)
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

  changeView (bird) {
    switch (bird) {
      case 'parrot':
        controls.view = 'parrot'
        controls._target = this.birds[0].position
        controls._zoom = 10
        /*
        controls.target.copy(this.birds[0].position)
        camera.position.x = this.birds[0].position.x
        camera.position.y = this.birds[0].position.y
        camera.position.z = 10
        */
        break
      case 'flamingo':
        controls.view = 'flamingo'
        controls._target = this.birds[1].position
        controls._rotation = this.birds[1].rotation
        controls._zoom = 10
        /*
        controls.target.copy(this.birds[1].position)
        camera.position.x = this.birds[1].position.x
        camera.position.y = this.birds[1].position.y
        camera.position.z = 10
        */
        break
      case 'stork':
        controls.view = 'stork'
        controls._target = this.birds[2].position
        controls._zoom = 30
        /*
        controls.target.copy(this.birds[2].position)
        camera.position.x = this.birds[2].position.x
        camera.position.y = this.birds[2].position.y
        camera.position.z = 30
        */
        break
      default:
        controls.view = 'all'
        controls._target = this.birds[0].position
        controls._zoom = -30
        /*
        controls.target.copy(this.birds[0].position)
        camera.position.z = -30
        */
        break
    }
  }
}

export {
  World
}