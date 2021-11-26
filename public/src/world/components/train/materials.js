import {
  MeshStandardMaterial
} from '../../../../vendor/three/build/three.module.js'

const createMaterials = () => {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true
  })

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true
  })

  return {
    body,
    detail
  }
}

export {
  createMaterials
}