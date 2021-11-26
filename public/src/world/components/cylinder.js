import {
  CylinderBufferGeometry,
  MeshStandardMaterial,
  MathUtils,
  Mesh
} from '../../../vendor/three/build/three.module.js'

const createCylinder = () => {
  const radiusTop = 0.25
  const radiusBottom = 0.25
  const height = 0.5
  
  const geometry = new CylinderBufferGeometry(radiusTop, radiusBottom, height, 8, 1, false, 0.5)
  console.log(geometry)

  const material = new MeshStandardMaterial({ color: 'green', flatShading: true })
  const cylinder = new Mesh(geometry, material)

  const radiansPerSec = MathUtils.degToRad(30)
  cylinder.tick = (delta) => {
    cylinder.rotation.y += delta * radiansPerSec
  }

  cylinder.scale.multiplyScalar(5)
  return cylinder
}

export {
  createCylinder
}
