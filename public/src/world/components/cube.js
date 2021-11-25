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

  let direction = 'left'

  const radiansPerSec = MathUtils.degToRad(30)  // 0.01
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSec * delta
    cube.rotation.y += radiansPerSec * delta
    cube.rotation.z += radiansPerSec * delta

    const posX = Math.floor(cube.position.x)

    if (posX >= -2 && direction === 'left') {
      cube.position.x -= delta * 1
    } else {
      direction = 'right'
    }

    if (posX < 2 && direction === 'right') {
      cube.position.x += delta * 1
    } else {
      direction = 'left'
    }
  }

  return cube
}

export {
  createCube
}
