import {
  DirectionalLight,
  HemisphereLight
} from '../../../vendor/three/build/three.module.js'

const createLight = () => {
  const ambientLight = new HemisphereLight('white', 'darkslategrey', 3)
  ambientLight.position.set(2, 0, 0)

  const mainLight = new DirectionalLight('white', 2)
  mainLight.position.set(10, 10, 10)
  return { ambientLight, mainLight }
}

export {
  createLight
}
