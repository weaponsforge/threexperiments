import {
  SphereBufferGeometry,
  MeshStandardMaterial,
  MathUtils,
  Mesh
} from '../../../vendor/three/build/three.module.js'

const createSphere = () => {
  const radius = 0.25
  const widthSegments = 16
  const heightSegments = 16
  
  const geometry = new SphereBufferGeometry(radius, widthSegments, heightSegments)
  const material = new MeshStandardMaterial({ color: 'indigo', flatShading: true })
  const sphere = new Mesh(geometry, material)

  const radiansPerSec = MathUtils.degToRad(30)
  sphere.tick = (delta) => {
    sphere.rotation.y += delta * radiansPerSec
  }

  sphere.scale.multiplyScalar(6)
  return sphere
}

export {
  createSphere
}
