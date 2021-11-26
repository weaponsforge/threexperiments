import {
  Mesh,
  Group
} from '../../../../vendor/three/build/three.module.js'

import { createGeometries } from './geometries.js'
import { createMaterials } from './materials.js'

const createMeshes = () => {
  const geometries = createGeometries()
  const materials = createMaterials()

  // Side tracks
  const sideTrack = new Mesh(geometries.sideTrack, materials.wood)
  sideTrack.rotation.x += Math.PI / 2
  sideTrack.position.z += 0.8
  sideTrack.position.y += 0.05

  const sideTrackFront = sideTrack.clone()
  sideTrackFront.position.z -= 0.8 * 2

  // Tracks
  const boards = new Group()

  const board = new Mesh(geometries.board, materials.wood)
  board.rotation.x += Math.PI / 2
  board.rotation.z += Math.PI / 2
  board.position.y -= 0.01
  board.position.x += 4.5  
  boards.add(board)

  for (let i = 1; i <= 9; i += 1) {
    const b = board.clone()
    b.position.x -= 1 * i
    boards.add(b)
  }

  return {
    sideTrack,
    sideTrackFront,
    boards
  }
}

export {
  createMeshes
}
