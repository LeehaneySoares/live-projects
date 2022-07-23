class Keyboard {

  constructor (target) {
    console.log(target)
  }

  static create (target) {
    return new Keyboard(target)
  }
}

export default Keyboard