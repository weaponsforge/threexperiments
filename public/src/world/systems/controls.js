import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js'

const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas)
  // Note: damping will not work if we're rendering frames on demand
  controls.enableDamping = true
  controls.tick = (delta) => {
    if (controls.view) {
      // console.log(`view: ${controls.view}, curr: ${camera.position.z}, tar: ${controls._zoom}`)

      const speed = 10

      // Round off to the nearest 10th's
      const currentTargetX = Math.round(controls.target.x * 10) / 10
      const currentTargetY = Math.round(controls.target.y * 10) / 10
      const currentTargetZ = Math.round(controls.target.z * 10) / 10
      const currentCameraZ = Math.round(camera.position.z * 10) / 10

      camera.rotation.y = -45

      if (currentTargetX !== controls._target.x) {
        if (currentTargetX <= controls._target.x) {
          controls.target.x += delta * speed
          // console.log(`${controls.view}=  x: ${controls.target.x}, target: ${controls._target.x}`)
        }

        if (currentTargetX >= controls._target.x) {
          controls.target.x -= delta * speed
          // console.log(`${controls.view}=  x: ${controls.target.x}, target: ${controls._target.x}`)
        }
      }

      if (currentTargetY !== controls._target.y) {
        if (currentTargetY <= controls._target.y) {
          controls.target.y += delta * speed
          // console.log(`${controls.view}=  x: ${controls.target.y}, target: ${controls._target.y}`)
        }

        if (currentTargetY >= controls._target.y) {
          controls.target.y -= delta * speed
          // console.log(`${controls.view}=  x: ${controls.target.y}, target: ${controls._target.y}`)
        }
      }

      if (currentTargetZ !== controls._target.z) {
        if (currentTargetZ <= controls._target.z) {
          controls.target.z += delta * speed
          // console.log(`${controls.view}=  z: ${controls.target.z}, target: ${controls._target.z}`)
        }

        if (currentTargetZ >= controls._target.z) {
          controls.target.z -= delta * speed
          // console.log(`${controls.view}=  z: ${controls.target.z}, target: ${controls._target.z}`)
        }
      }

      // Zoom
      if (currentCameraZ !== controls._zoom) {
        if (currentCameraZ < controls._zoom) {
          camera.position.z += delta * speed
        }

        if (currentCameraZ > controls._zoom) {
          camera.position.z -= delta * speed
        }
      }
    }

    controls.update()
  }
  return controls
}

export {
  createControls
}
