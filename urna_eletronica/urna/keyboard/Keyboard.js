import { all } from '../shortcuts.js'
import events from './events.js'

class Keyboard {
  #botoes
  #display
  #value
  #numero

  get botoes () {
    return this.#botoes ??= all('button')
  }

  get display () {
    return this.#display ??= ''
  }

  get value () {
    return this.#value ??= ''
  }

  constructor (parent) {
    this.#display = parent?.display
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