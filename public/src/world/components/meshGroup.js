import {
  Group,
  MathUtils,
} from '../../../vendor/three/build/three.module.js'

import { createSphere } from './sphere.js'
import { createCube } from './cube.js'

const createMeshGroup = async () => {
  const group = new Group()
  const protoSpehere = createSphere()
  const cube = await createCube()

  group.add(protoSpehere)

  // Create spheres
  let count = 0
  for (let i = 0; i < 1; i += 0.05) {
    let sphere
    console.log(`${count} % 2 = ${count % 2}`)
    count += 1

    if (count % 2 === 0) {
      sphere = protoSpehere.clone()
    } else {
      sphere = protoSpehere.clone() // cube.clone()
    }

    // Adjust a sphere's position
    // The following eqn will create 20 spheres in a circle around the protoSphere
    // with 0 <= i <= 1
    sphere.position.x = Math.cos(2 * Math.PI * i)
    sphere.position.y = Math.sin(2 * Math.PI * i)
    sphere.position.z = -i * 5

    // Adjust a sphere's scale
    sphere.scale.multiplyScalar(0.01 + i)

    group.add(sphere)
  }

  // Enlarge the sphere group
  group.scale.multiplyScalar(2)

  // Animate
  const radiansPerSecond = MathUtils.degToRad(30)
  group.tick = (delta) => {
    group.rotation.z += delta * radiansPerSecond
  }
  return group
}

export {
  createMeshGroup
}
