import {
  BoxBufferGeometry
} from '../../../../vendor/three/build/three.module.js'

const createGeometries = () => {
  const height = 0.2
  const depth = 0.1

  const sideTrack = new BoxBufferGeometry(10, height, depth)
  const board = new BoxBufferGeometry(2, height, depth)

  return {
    sideTrack,
    board
  }
}

export {
  createGeometries
}
