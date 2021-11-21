import { WebGLRenderer } from '../../../vendor/three/build/three.module.js'

const createRenderer = () => {
  const renderer = new WebGLRenderer()
  return renderer
}

export {
  createRenderer
}
