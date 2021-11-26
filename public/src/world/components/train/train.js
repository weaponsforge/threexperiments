import {
  Group, MathUtils
} from '../../../../vendor/three/build/three.module.js'

import { createMeshes } from './meshes.js'

class Train extends Group {
  constructor () {
    super()

    this.meshes = createMeshes()

    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel
    )
  }

  tick (delta) {
    const radians = MathUtils.degToRad(30)
    // this.rotation.y += delta * radians
    this.meshes.bigWheel.rotation.y += delta * radians
  }
}

export {
  Train
}
