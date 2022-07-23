class Display {
  #aviso
  #cargo
  #descricao
  #etapa = 0
  #lateral
  #numeros
  #title

  get aviso () {
    return this.#aviso
  }

  get cargo () {
    return this.#cargo
  }

  get descricao () {
    return this.#descricao
  }

  get lateral () {
    return this.#lateral
  }

  get numeros () {
    return this.#numeros
  }

  get title () {
    return this.#title
  }

  constructor (title, cargo, descricao, aviso, lateral, numeros) {
    this.#title = title,
    this.#cargo = cargo
    this.#descricao = descricao
    this.#aviso = aviso
    this.#lateral = lateral
    this.#numeros = numeros
    this.comecarEtapa()
  }

  comecarEtapa () {
    this.escondeDescricao()
  }

  escondeDescricao () {
    this.descricao.style.display = 'none'
    return this
  }

  static create (descriptor) {
    return new Display(
      descriptor?.title,
      descriptor?.cargo,
      descriptor?.descricao,
      descriptor?.aviso,
      descriptor?.lateral,
      descriptor?.numeros
    )
  }
}

export default Display