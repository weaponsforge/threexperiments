import {
  AxesHelper,
  GridHelper
} from '../../../vendor/three/build/three.module.js'

const createAxesHelper = () => {
  const helper = new AxesHelper(3)
  helper.position.set(-3.5, 0, -3.5)
  return helper
}

const createGridHelper = () => {
  const helper = new GridHelper()
  return helper
}

export {
  createAxesHelper,
  createGridHelper
}
