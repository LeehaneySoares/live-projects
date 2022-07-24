import all from '../shortcuts/all.js'
import getButtons from './getButtons.js'

class Keyboard {
  #botoes
  #value

  get botoes () {
    return this.#botoes ??= all('button')
  }

  get value () {
    return this.#value ??= ''
  }

  constructor () {
    getButtons(this)
  }

  changeTarget (value) {
    this.#value = value
    console.log(this.#value)
    return this
  }

  static create () {
    return new Keyboard()
  }
}

export default Keyboard