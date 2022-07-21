import Keyboard from './keyboard/Keyboard.js'

const buttonsDiv = document.querySelector('.urna__buttons')
const keyboard = Keyboard.create()
const buttons = keyboard.buttons

buttons.forEach(element =>
  buttonsDiv.appendChild(element.button)
)
