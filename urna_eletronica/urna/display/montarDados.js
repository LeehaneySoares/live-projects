export default function (display) {
  console.log(display.candidato)
  display.dadosCandidato[0].textContent = `Número: ${display?.candidato[0].numero}`
  display.dadosCandidato[1].textContent = `Nome: ${display?.candidato[0].name}`
  display.dadosCandidato[2].textContent = `Partido: ${display?.candidato[0].partido}`
  display.dadosCandidato[3].textContent = `Vice-Prefeito: ${display?.candidato[0].vice}`
}