import $ from '../shortcuts/$.js'

class Display {
  #title

  get title () {
    return this.#title ??= 
  }
  static create () {
    return new Display()
  }
}

export default Display