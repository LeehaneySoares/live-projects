import Display from './display/Display.js'
import Keyboard from './keyboard/Keyboard.js'
import descriptor from './interface/descriptor.js'
import schema from './schema.js'

class Urna {
  get descriptor () {
    return descriptor
  }

  get display () {
    return Display.create(this.descriptor, this.schema)
  }

  get keyboard () {
    return Keyboard.create()
  }

  get schema () {
    return schema
  }

  constructor () {
    this.init()
  }

  init() {
    this.display
    this.keyboard
    return this
  }

  static create () {
    return new Urna()
  }
}

export default Urna