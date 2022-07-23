import all from '../shortcuts/all.js'
import Keyboard from '../keyboard/keyboard.js'

const botoes = all('button')

botoes.forEach(element =>
  element.addEventListener('click', function () {
    const target = element.innerHTML

    return /btn/g.test(element.classList[1])
      ? Keyboard.create(String(target))
      : Keyboard.create(Number(target))
  }) 
)