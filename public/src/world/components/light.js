import {
  DirectionalLight,
  HemisphereLight
} from '../../../vendor/three/build/three.module.js'

const createLight = () => {
  const ambientLight = new HemisphereLight('red', 'darkslategrey', 2)
  ambientLight.position.set(2, 0, 0)

  const mainLight = new DirectionalLight('white', 5)
  mainLight.position.set(10, 10, 10)
  return { ambientLight, mainLight }
}

export {
  createLight
}
