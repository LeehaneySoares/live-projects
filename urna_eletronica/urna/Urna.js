import { $, all } from './shortcuts.js'
import Display from './display/Display.js'
import Keyboard from './keyboard/Keyboard.js'
import schema from '../schema.js'

class Urna {
  #descriptor

  get descriptor () {
    return this.#descriptor
  }

  get display () {
    return Display.create(
      this.descriptor,
      this.schema,
      this
    )
  }

  get keyboard () {
    return Keyboard.create(this)
  }

  get schema () {
    return schema
  }

  constructor (descriptor) {
    this.#descriptor = descriptor
    this.init()
  }

  init() {
    this.display
    this.keyboard
    return this
  }

  static create () {
    return new Urna({
      title: $('.urna__display-infoCandidato h2'),
      cargo: $('.urna__display-cargo'),
      descricao: $('.urna__display-descricao'),
      aviso: $('.urna__display-infoInferior'),
      lateral: $('.urna__display-infoRight'),
      numeros: $('.urna__display-numeros'),
      dadosCandidato: all('.urna__display-descricao label')
    })
  }
}

export default Urna