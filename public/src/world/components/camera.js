import { PerspectiveCamera } from '../../../vendor/three/build/three.module.js'

const createCamera = (container) => {
  const fov = 50 //65
  const aspect = 1
  const near = 0.1
  const far = 100 //700
  const camera = new PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(-1.5, 1.5, 30)
  return camera
}

export {
  createCamera
}
