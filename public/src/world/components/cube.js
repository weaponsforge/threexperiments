import {
  BoxBufferGeometry,
  MeshStandardMaterial,
  MathUtils,
  Mesh
} from '../../../vendor/three/build/three.module.js'

const createCube = () => {
  // Geometry
  const geometry = new BoxBufferGeometry(2, 2, 2)

  // Material
  const material = new MeshStandardMaterial({ color: 'darkgoldenrod' })

  // Mesh
  const cube = new Mesh(geometry, material)
  // cube.rotation.set(-0.5, -0.1, 0.8)
  const tilt = MathUtils.degToRad(45)
  cube.rotation.set(tilt, tilt, 0)
  return cube
}

export {
  createCube
}
