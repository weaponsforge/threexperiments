const setupModel = (data) => {
  const model = data.scene.children[0]
  model.scale.set(0.1, 0.1, 0.1)
  return model
}

export {
  setupModel
}
