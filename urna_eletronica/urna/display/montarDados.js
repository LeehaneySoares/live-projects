export default function (target) {
  const candidato = target?.candidato[0]
  const descricao = target?.descricao
  const hasVice = !candidato.vice ? false : true

  descricao.innerHTML = `
    <label>Número: ${candidato.numero}</label>
    <label>Nome: ${candidato.name}</label>
    <label>Partido: ${candidato.partido}</label>
    <label style="display: ${hasVice ? 'block' : 'none'}">
      Vice-prefeito: ${candidato.vice}
    </label>`
}