import {
  Scene,
  Color
} from '../../../vendor/three/build/three.module.js'

const createScene = () => {
  const scene = new Scene()
  scene.background = new Color('palegreen')
  return scene
}

export {
  createScene
}
