import Buttons from './Buttons.js'
import schema from './schema.js'

class Keyboard {
  #confirm
  #delete
  #numbers
  #replace
  #controls

  get buttons () {
    return this
      .numbers
      .map(number => Buttons.create(number))
  }

  get confirm () {
    return this.#confirm ??= schema.controle
  }

  get controls () {
    return this.#controls ??= []
  }

  get delete () {
    return this.#delete ??= schema.controle
  }

  get numbers () {
    return this.#numbers ??= schema.numbers
  }

  get replace () {
    return this.#replace ??= schema.controle
  }

  static create () {
    return new Keyboard()
  }
}

export default Keyboard