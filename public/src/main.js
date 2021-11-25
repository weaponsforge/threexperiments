import { World } from './world/World.js'

const main = () => {
  const container = document.querySelector('#scene-container')
  const world = new World(container)
  world.start()
}

main()
