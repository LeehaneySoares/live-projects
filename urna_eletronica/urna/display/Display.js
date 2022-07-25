import { $ } from '../shortcuts.js'

class Display {
  #aviso
  #bloco
  #cargo
  #descricao
  #etapaActual = 0
  #etapa
  #lateral
  #numero
  #numeros
  #numeroHtml = ''
  #parent
  #schema
  #showInfo
  #title

  get aviso () {
    return this.#aviso ??= ''
  }

  get bloco () {
    return this.#bloco ??= ''
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

  get numero () {
    return this.#numero ??= ''
  }

  get numeros () {
    return this.#numeros
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

  constructor (descriptor, schema, parent) {
    this.#title = descriptor?.title,
    this.#cargo = descriptor?.cargo
    this.#descricao = descriptor?.descricao
    this.#aviso = descriptor?.aviso
    this.#lateral = descriptor?.lateral
    this.#numeros = descriptor?.numeros
    this.#schema = schema
    this.#parent = parent
    this.comecarEtapa()
  }

  changeBloco (value) {
    this.#bloco = $('.numero.booth')
    this.bloco !== null && (
      this.bloco.innerHTML = value,
      this.#numero = `${this.numero}${value}`,
      this.hasNextSibling()
    )
    return this
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

  hasNextSibling () {
    this.bloco.classList.remove('booth')
    this.bloco.nextElementSibling !== null
      ? this.bloco.nextElementSibling.classList.add('booth')
      : this.refreshInterface()
    return this
  }

  montarBlocos () {
    this.#etapa = this.schema[this.#etapaActual]
    for (let i = 0; i < this.#etapa.numeros; i++) {
      i === 0
        ? this.#numeroHtml += `<span class="numero booth"></span>`
        : this.#numeroHtml += `<span class="numero"></span>`
    }
    this.numeros.innerHTML = this.#numeroHtml
    return this
  }

  #mostrarDesc () {
    return this
  }

  refreshInterface () {
    alert('finalizado')
    return this
  }

  static create (descriptor, schema, parent) {
    return new Display(
      descriptor,
      schema,
      parent
    )
  }
}

export default Display