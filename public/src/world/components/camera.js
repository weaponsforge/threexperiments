import { PerspectiveCamera } from '../../../vendor/three/build/three.module.js'

const createCamera = (container) => {
  const fov = 35
  const aspect = 1
  const near = 0.1
  const far = 100
  const camera = new PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(0, 0, 10)
  return camera
}

export {
  createCamera
}
