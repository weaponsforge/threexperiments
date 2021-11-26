import {
  SphereBufferGeometry,
  MeshStandardMaterial,
  Mesh
} from '../../../vendor/three/build/three.module.js'

const createSphere = () => {
  const radius = 0.25
  const widthSegments = 16
  const heightSegments = 16

  const geometry = new SphereBufferGeometry(radius, widthSegments, heightSegments)
  const material = new MeshStandardMaterial({ color: 'indigo' })
  const sphere = new Mesh(geometry, material)

  return sphere
}

export {
  createSphere
}
