import * as actions from './actions/index.js'
import { all } from '../shortcuts.js'
import events from './events.js'

class Keyboard {
  #botoes
  #numero
  #display
  #value

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

  changeValue (value) {
    this.#value = value
    this.display.changeBloco(this.value)
    return this
  }

  actions (target) {
    target === 'Confirmar' && actions.confirma(this)
    target === 'Corrige' && actions.corrige(this)
    target === 'Branco' && actions.branco(this)
    return this
  }

  static create (parent) {
    return new Keyboard(parent)
  }
}

export default Keyboard