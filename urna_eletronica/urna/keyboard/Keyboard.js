import { all } from '../shortcuts.js'
import events from './events.js'

class Keyboard {
  #botoes
  #numero
  #parent
  #value

  get botoes () {
    return this.#botoes ??= all('button')
  }

  get display () {
    return this.parent?.display
  }

  get value () {
    return this.#value ??= ''
  }

  constructor (parent) {
    this.#parent = parent
    events(this)
  }

  changeTarget (value) {
    this.#value = value
    this.display.changeBloco(this.value)
    return this
  }

  static create (parent) {
    return new Keyboard(parent)
  }
}

export default Keyboard