export default function (target) {
  const candidato = target?.candidato[0]
  const lateral = target?.lateral
  const fotosCandidato = candidato?.fotos

  console.log(fotosCandidato, candidato)

  fotosCandidato.forEach(foto =>
    lateral.innerHTML = `
    <figure class="urna__display-figure">
      <img src="${foto.url}" alt="${foto.legenda}" />
      <figcaption class="urna__display-caption">
        <span>${foto.legenda}</span>
      </figcaption>
    </figure>
    `
  )
}