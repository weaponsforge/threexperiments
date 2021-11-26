import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js'

const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas)
  // Note: damping will not work if we're rendering frames on demand
  controls.enableDamping = true
  controls.target.y = 1
  controls.tick = () => controls.update()
  return controls
}

export {
  createControls
}
