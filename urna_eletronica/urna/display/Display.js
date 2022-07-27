import { $ } from '../shortcuts.js'
import montarDados from './montarDados.js'
import montarFotos from './montarFotos.js'

class Display {
  #aviso
  #bloco
  #cargo
  #candidato
  #descricao
  #dadosCandidato
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

  get candidato () {
    return this.#candidato ??= ''
  }

  get cargo () {
    return this.#cargo ??= ''
  }

  get dadosCandidato () {
    return this.#dadosCandidato ??= []
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
    this.#dadosCandidato = descriptor?.dadosCandidato
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
    this.title.style.display = 'block'
    this.lateral.style.display = 'flex'
    this.descricao.style.display = 'flex'
    this.aviso.style.display = 'block'
    montarDados(this)
    montarFotos(this)
    return this
  }

  refreshInterface () {
    let etapa = this.schema[this.#etapaActual]
    this.#candidato = etapa.candidatos
      .filter(item => item.numero === this.numero)
    this.candidato.length > 0
      ? this.#mostrarDesc()
      : this.#votoNulo()
    return this
  }

  #votoNulo () {
    this.descricao.style = 'flex'
    this.descricao.innerHTML = `
      <span style="font-size: 40px;" class="booth">
        VOTO NULO
      </span>
    `
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