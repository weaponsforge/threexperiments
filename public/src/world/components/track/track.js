import {
  Group
} from '../../../../vendor/three/build/three.module.js'

import { createMeshes } from './meshes.js'

class Track extends Group {
  constructor () {
    super()

    this.meshes = createMeshes()

    this.add(
      this.meshes.sideTrack,
      this.meshes.sideTrackFront,
      this.meshes.boards
    )
  }
}

export {
  Track
}
