import {
  Group, MathUtils
} from '../../../../vendor/three/build/three.module.js'

import { createMeshes } from './meshes.js'

class Train extends Group {
  constructor () {
    super()

    this.meshes = createMeshes()
    this.direction = 'forward'

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
    const radians = MathUtils.degToRad(25)
    const deltaMultiplier = (this.direction === 'forward') ? 1 : -1
    
    // Spin wheels
    this.meshes.smallWheelRear.rotation.y += delta * radians * deltaMultiplier
    this.meshes.smallWheelCenter.rotation.y += delta * radians * deltaMultiplier
    this.meshes.smallWheelFront.rotation.y += delta * radians * deltaMultiplier
    this.meshes.bigWheel.rotation.y += delta * radians * deltaMultiplier

    // Move train along the track
    this.position.x -= delta * 1 * deltaMultiplier

    if (this.position.x < -3) {
      this.direction = 'back'
    }

    if (this.position.x > 3) {
      this.direction = 'forward'
    }
  }
}

export {
  Train
}
