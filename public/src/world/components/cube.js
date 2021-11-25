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
  const material = new MeshStandardMaterial({ color: 'purple' })

  // Mesh
  const cube = new Mesh(geometry, material)
  const tilt = MathUtils.degToRad(45)
  cube.rotation.set(tilt, tilt, 0)

  const radiansPerSec = MathUtils.degToRad(30)  // 0.01
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSec * delta
    cube.rotation.y += radiansPerSec * delta
    cube.rotation.z += radiansPerSec * delta
  }

  return cube
}

export {
  createCube
}
