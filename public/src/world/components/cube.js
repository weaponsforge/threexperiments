import {
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh
} from '../../../vendor/three/build/three.module.js'

const createCube = (settings = {}) => {
  // Geometry
  const geometry = new BoxBufferGeometry(2, 2, 2)

  // Material
  const material = new MeshBasicMaterial()

  // Mesh
  const cube = new Mesh(geometry, material)
  return cube
}

export {
  createCube
}
