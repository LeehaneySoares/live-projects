import Keyboard from './keyboard/Keyboard.js'

const buttonsDiv = document.querySelector('.urna__buttons')
const keyboard = Keyboard.create()

keyboard.buttons.forEach(element =>
  buttonsDiv.appendChild(element.button)
)
