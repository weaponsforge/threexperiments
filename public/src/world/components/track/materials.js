import {
  MeshStandardMaterial
} from '../../../../vendor/three/build/three.module.js'

const createMaterials = () => {
  const wood = new MeshStandardMaterial({
    color: 'saddlebrown',
    flatShading: true
  })

  return {
    wood
  }
}

export {
  createMaterials
}
