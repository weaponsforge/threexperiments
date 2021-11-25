import { WebGLRenderer } from '../../../vendor/three/build/three.module.js'

const createRenderer = () => {
  const renderer = new WebGLRenderer({ antialias: true })
  renderer.physicallyCorrectLights = true
  return renderer
}

export {
  createRenderer
}
