export default function (target) {
  let numeroHTML = ''
  for (let i = 0; i < target.etapa.numeros; i++) {
    i === 0
      ? numeroHTML += `<span class="numero booth"></span>`
      : numeroHTML += `<span class="numero"></span>`
  }
  target.numeros.innerHTML = numeroHTML
  return target
}