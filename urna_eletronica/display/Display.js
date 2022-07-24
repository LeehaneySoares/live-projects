class Display {
  #aviso
  #cargo
  #descricao
  #etapaActual = 0
  #etapa
  #lateral
  #numeros
  #schema
  #showInfo
  #title

  get aviso () {
    return this.#aviso ??= ''
  }

  get cargo () {
    return this.#cargo ??= ''
  }

  get descricao () {
    return this.#descricao ??= ''
  }

  get lateral () {
    return this.#lateral ??= ''
  }

  get numeros () {
    return this.#numeros ??= 0
  }

  get schema () {
    return this.#schema ??= ''
  }

  get showInfo () {
    return this.#showInfo ??= false
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (descriptor, schema) {
    this.#title = descriptor?.title,
    this.#cargo = descriptor?.cargo
    this.#descricao = descriptor?.descricao
    this.#aviso = descriptor?.aviso
    this.#lateral = descriptor?.lateral
    this.#numeros = descriptor?.numeros
    this.#schema = schema
    this.comecarEtapa()
  }

  comecarEtapa () {
    this.#showInfo
      ? this.#mostrarDesc()
      : this.#esconderDesc()
    this.montarBlocos()
    return this
  }

  #esconderDesc () {
    this.lateral.style.display = 'none'
    this.title.style.display = 'none'
    this.descricao.style.display = 'none'
    this.aviso.style.display = 'none'
    return this
  }

  montarBlocos () {
    this.#etapa = this.schema[this.#etapaActual]
    for (let i = 2; i < this.#etapa?.numeros; i++) {
      this.#numeros.innerHTML += '<span class="numero"></span>'
    }
    return this
  }

  #mostrarDesc () {
    return this
  }

  static create (descriptor, schema) {
    return new Display(
      descriptor,
      schema
    )
  }
}

export default Display