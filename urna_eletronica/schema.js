export default [
  {
    titulo: 'VEREADOR',
    numeros: 5,
    candidatos: [
      {
        numero: '38111',
        name: 'Fulano de Tal',
        partido: 'ABC',
        fotos: [
          {
            url: './assets/38111.jpg',
            legenda: 'Vereador'
          }
        ]
      },
      {
        numero: '77222',
        name: 'Beltrano da silva',
        partido: 'DEFG',
        fotos: [
          {
            url: './assets/77222.jpg',
            legenda: 'Vereador'
          }
        ]
      }
    ]
  },
  {
    titulo: 'PREFEITO',
    numeros: 2,
    candidatos: [
      {
        numero: '99',
        name: 'Ciclano',
        partido: 'ABC',
        vice: 'Cic',
        fotos: [
          {
            url: './assets/99.jpg',
            legenda: 'Prefeito'
          },
          {
            url: './assets/99_2.jpg',
            legenda: 'Vide-Prefeito',
            small: true
          }
        ]
      },
      {
        numero: '84',
        name: 'Zulano',
        partido: 'QWERTY',
        vice: 'Zul',
        fotos: [
          {
            url: './assets/84.jpg',
            legenda: 'Prefeito'
          },
          {
            url: './assets/84_2.jpg',
            legenda: 'Vice-prefeito',
            small: true
          }
        ]
      }
    ]
  }
]