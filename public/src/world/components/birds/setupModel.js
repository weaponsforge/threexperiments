import { AnimationMixer } from '../../../../vendor/three/build/three.module.js'

const setupModel = (data) => {
  const model = data.scene.children[0]

  // Animation
  const clip = data.animations[0]
  const mixer = new AnimationMixer(model)
  const action = mixer.clipAction(clip)
  action.play()

  model.tick = (delta) => mixer.update(delta)

  model.scale.set(0.1, 0.1, 0.1)
  return model
}

export {
  setupModel
}
