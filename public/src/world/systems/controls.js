import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js'

const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.tick = () => controls.update()
  return controls
}

export {
  createControls
}
