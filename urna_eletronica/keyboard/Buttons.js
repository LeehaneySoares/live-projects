class Buttons {
  #button
  #number

  get button () {
    return this.#button ??= ''
  }

  get number () {
    return this.#number ??= 0
  }

  constructor (number) {
    this.#number = number
    this.mount()
  }

  mount () {
    this.#button = document.createElement('button')
    this.#button.setAttribute('class', 'urna__button')
    this.#button.textContent = this.#number
    return this
  }

  static create (number) {
    return new Buttons(number)
  }
}

export default Buttons