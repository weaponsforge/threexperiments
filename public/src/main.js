import { World } from './world/World.js'

const main = async () => {
  const container = document.querySelector('#scene-container')
  const world = new World(container)
  await world.init()
  world.start()

  const btnAll = document.querySelector('#btn_all')
  const btnParrot = document.querySelector('#btn_parrot')
  const btnFlamingo = document.querySelector('#btn_flamingo')
  const btnStork = document.querySelector('#btn_stork')

  btnParrot.addEventListener('click', () => {
    world.changeView('parrot')
  })

  btnFlamingo.addEventListener('click', () => {
    world.changeView('flamingo')
  })

  btnStork.addEventListener('click', () => {
    world.changeView('stork')
  })

  btnAll.addEventListener('click', () => {
    world.changeView('all')
  })
}

main()
