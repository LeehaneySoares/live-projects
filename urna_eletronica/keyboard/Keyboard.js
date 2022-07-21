import Buttons from './Buttons.js'
import schema from './schema.js'

class Keyboard {
  #confirm
  #delete
  #numbers
  #replace

  get buttons () {
    return this
      .numbers
      .map(number => Buttons.create(number))
  }

  get confirm () {
    return this.#confirm ??= schema.controle
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

  constructor () {
    this.mount()
  }

  changeText () {
    this.confirm.textContent = 'Confirmar'
    this.delete.textContent = 'Deletar'
    this.replace.textContent = 'Corrigir'
    return this
  }

  mount () {
    this.changeText()
    this.setAt()
    return this
  }

  setAt () {
    this.confirm.setAttribute('class', 'urna__button-confirm')
    this.delete.setAttribute('class', 'urna__button-delete')
    this.replace.setAttribute('class', 'urna__button-replace')
    return this
  }

  static create () {
    return new Keyboard()
  }
}

export default Keyboard